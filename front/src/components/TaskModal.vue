<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import type { Task } from '@/_models/Tasks.ts'
import { TaskService } from '@/_services'
import mitt from 'mitt'

const emitter = inject<Emitter>('emitter')

type Emitter = ReturnType<typeof mitt<Events>>
type Events = {
  'open-task-modal': any
  'save-task': any
  'delete-task': any
}
if (!emitter) {
  throw new Error('Emitter is not provided')
}

const isOpen = ref(false)
const originalTask = ref<Task | null>(null)

// Formulaire réactif pour la tâche
const taskForm = reactive({
  id: null as number | null,
  title: '',
  description: '',
  dueDate: '',
  section: 'UrgentImportant' as Task['section'],
})

// Sections disponibles pour la matrice d'Eisenhower
const sections = [
  { value: 'UrgentImportant', label: 'Important & Urgent' },
  { value: 'NonUrgentImportant', label: 'Important & Non Urgent' },
  { value: 'UrgentNonImportant', label: 'Non Important & Urgent' },
  { value: 'NonUrgentNonImportant', label: 'Non Important & Non Urgent' },
]

// Réinitialiser le formulaire
const resetForm = () => {
  taskForm.id = null
  taskForm.title = ''
  taskForm.description = ''
  taskForm.dueDate = ''
  taskForm.section = 'UrgentImportant'
}

// Remplir le formulaire avec les données de la tâche
const fillFormWithTask = (task: Task) => {
  // Copier l'objet original pour pouvoir annuler les modifications
  originalTask.value = { ...task }

  // Remplir le formulaire
  taskForm.id = task.id
  taskForm.title = task.title || ''
  taskForm.description = task.description || ''
  taskForm.dueDate = task.dueDate?.toString || ''
  taskForm.section = task.section || 'UrgentImportant'
}

// Fermer la modale
const closeModal = () => {
  isOpen.value = false
  resetForm()
}

// Sauvegarder la tâche
const saveTask = async () => {
  try {
    // Créer un objet de tâche mise à jour
    const updatedTask = {
      id: taskForm.id,
      title: taskForm.title,
      description: taskForm.description,
      dueDate: taskForm.dueDate,
      section: taskForm.section,
    } as Task

    // Si c'est une tâche existante
    if (taskForm.id) {
      // Appeler l'API pour mettre à jour la tâche
      await TaskService.updateTask(taskForm.id, updatedTask)
    }

    // Émettre l'événement de sauvegarde
    emitter.emit('save-task', updatedTask)

    // Fermer la modale
    closeModal()
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la tâche:', error)
    // Gérer l'erreur (afficher un message, etc.)
  }
}

// Confirmer la suppression
const confirmDelete = async () => {
  if (!taskForm.id) return

  if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
    try {
      // Appeler l'API pour supprimer la tâche
      await TaskService.deleteTask(taskForm.id)

      // Émettre l'événement de suppression
      emitter.emit('delete-task', taskForm.id)

      // Fermer la modale
      closeModal()
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche:', error)
      // Gérer l'erreur (afficher un message, etc.)
    }
  }
}

// Gestionnaire d'événement pour ouvrir la modale
const handleOpenModal = (task: Task) => {
  fillFormWithTask(task)
  isOpen.value = true
}

// Ajouter des écouteurs d'événements lors du montage du composant
onMounted(() => {
  emitter.on('open-task-modal', handleOpenModal)

  // Écouter la touche Escape pour fermer la modale
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      closeModal()
    }
  }

  window.addEventListener('keydown', handleEscape)

  // Nettoyage
  onBeforeUnmount(() => {
    emitter.off('open-task-modal', handleOpenModal)
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>

<template>
  <Teleport to="body">
    <div class="modal-backdrop" v-if="isOpen" @click.self="closeModal">
      <div class="modal" role="dialog" aria-labelledby="task-modal-title">
        <div class="modal-header">
          <h3 class="modal-title" id="task-modal-title">Modifier la tâche</h3>
          <button class="modal-close" @click="closeModal" aria-label="Fermer">&times;</button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="saveTask">
            <div class="form-group">
              <label for="taskTitle">Titre de la tâche</label>
              <input
                type="text"
                id="taskTitle"
                v-model="taskForm.title"
                placeholder="Entrez le titre de la tâche"
                required
              />
            </div>

            <div class="form-group">
              <label for="taskDescription">Description</label>
              <textarea
                id="taskDescription"
                v-model="taskForm.description"
                placeholder="Décrivez la tâche..."
              ></textarea>
            </div>

            <div class="form-group">
              <label for="taskDueDate">Date d'échéance</label>
              <input type="date" id="taskDueDate" v-model="taskForm.dueDate" />
            </div>

            <div class="form-group">
              <label for="taskSection">Section</label>
              <select id="taskSection" v-model="taskForm.section">
                <option v-for="section in sections" :key="section.value" :value="section.value">
                  {{ section.label }}
                </option>
              </select>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="confirmDelete" v-if="taskForm.id">
            Supprimer
          </button>
          <button type="button" class="btn btn-secondary" @click="closeModal">Annuler</button>
          <button type="button" class="btn btn-primary" @click="saveTask">Enregistrer</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--gray-500);
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--gray-500);
}

input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
}

.btn-secondary {
  background-color: #f3f4f6;
  color: var(--gray-700);
  border: 1px solid #d1d5db;
}

.btn-danger {
  background-color: white;
  color: var(--important-urgent);
  border: 1px solid var(--important-urgent);
}

.btn-danger:hover {
  background-color: var(--important-urgent);
  color: white;
}
</style>
