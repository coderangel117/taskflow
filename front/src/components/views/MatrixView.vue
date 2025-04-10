<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TaskCard from '@/components/TaskCard.vue'
import TaskModal from '@/components/TaskModal.vue'
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { TaskService } from '@/_services'
import type { Task } from '@/_models/Tasks.ts'
import mitt from 'mitt'

const tasks = ref<Task[]>([])

type Events = {
  'save-task': any
  'delete-task': any
  // ajoute ici tous les events que tu vas utiliser
}

type Emitter = ReturnType<typeof mitt<Events>>

const emitter = inject<Emitter>('emitter')
if (!emitter) {
  throw new Error('Emitter is not provided')
}
onMounted(async () => {
  try {
    const response = await TaskService.getTasks()
    tasks.value = response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches :', error)
  }
})

function getTasksForSection(section: Task['section']) {
  return tasks.value.filter((t) => t.section === section)
}

// Gérer la sauvegarde d'une tâche
const handleSaveTask = (updatedTask: Task) => {
  const index = tasks.value.findIndex((task) => task.id === updatedTask.id)
  if (index !== -1) {
    tasks.value[index] = updatedTask
    TaskService.updateTask(updatedTask.id, updatedTask)
      .then(() => {
        console.log('Tâche mise à jour avec succès')
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour de la tâche :', error)
      })
  }
}

// Gérer la suppression d'une tâche
const handleDeleteTask = (taskId: number) => {
  const index = tasks.value.findIndex((task) => task.id === taskId)
  if (index !== -1) {
    tasks.value.splice(index, 1)
  }
}

// Configurer les écouteurs d'événements
onMounted(() => {
  emitter.on('save-task', handleSaveTask)
  emitter.on('delete-task', handleDeleteTask)
})

onBeforeUnmount(() => {
  emitter.off('save-task', handleSaveTask)
  emitter.off('delete-task', handleDeleteTask)
})
</script>
<template>
  <div class="container">
    <h1 class="page-title">Matrice d'Eisenhower</h1>
    <div class="page-layout">
      <!-- Formulaire de création de tâche -->
      <TaskForm />
      <!-- Matrice d'Eisenhower -->
      <div class="matrix-container">
        <div class="matrix">
          <div class="quadrant q1" id="q1">
            <div class="quadrant-header q1">Important & Urgent</div>
            <TaskCard
              v-for="task in getTasksForSection('UrgentImportant')"
              :key="task.id"
              :title="task.title"
              :description="task.description"
              :date="task.dueDate"
              :id="task.id"
              :task-data="task"
            />
          </div>

          <div class="quadrant q2" id="q2">
            <div class="quadrant-header q2">Important & Non Urgent</div>
            <TaskCard
              v-for="task in getTasksForSection('NonUrgentImportant')"
              :key="task.id"
              :title="task.title"
              :description="task.description"
              :date="task.dueDate"
              :id="task.id"
              :task-data="task"
            />
          </div>

          <div class="quadrant q3" id="q3">
            <div class="quadrant-header q3">Non Important & Urgent</div>
            <TaskCard
              v-for="task in getTasksForSection('UrgentNonImportant')"
              :key="task.id"
              :title="task.title"
              :description="task.description"
              :date="task.dueDate"
              :id="task.id"
              :task-data="task"
            />
          </div>
          <div class="quadrant q4" id="q4">
            <div class="quadrant-header q4">Non Important & Non Urgent</div>
            <TaskCard
              v-for="task in getTasksForSection('NonUrgentNonImportant')"
              :key="task.id"
              :title="task.title"
              :description="task.description"
              :date="task.dueDate"
              :id="task.id"
              :task-data="task"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Ajouter la modale une seule fois dans le composant parent -->
    <TaskModal />
  </div>
</template>

<style scoped>
.container {
  max-width: 1500px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-dark);
}

.page-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .page-layout {
    grid-template-columns: 1fr;
  }
}

button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: all 0.2s ease;
}

/* Matrix Styles */
.matrix-container {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 800px;
}

.quadrant {
  border-radius: 6px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.task-card {
  margin: 0.2rem 0.6rem;
}

.quadrant-header {
  position: sticky;
  top: 0;
  background: inherit;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  color: black;
}

.q1 {
  background-color: rgba(239, 68, 68, 0.5);
  border: 1px solid var(--important-urgent);
}

.q1 .quadrant-header {
  background-color: var(--important-urgent);
}

.q2 {
  background-color: rgba(245, 158, 11, 0.5);
  border: 1px solid var(--important-not-urgent);
}

.q2 .quadrant-header {
  background-color: var(--important-not-urgent);
}

.q3 {
  background-color: rgba(59, 130, 246, 0.5);
  border: 1px solid var(--not-important-urgent);
}

.q3 .quadrant-header {
  background-color: var(--not-important-urgent);
}

.q4 {
  background-color: rgba(107, 114, 128, 0.5);
  border: 1px solid var(--not-important-not-urgent);
}

.q4 .quadrant-header {
  background-color: var(--not-important-not-urgent);
}
</style>
