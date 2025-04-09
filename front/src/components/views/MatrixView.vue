<script setup lang="ts">
import { onMounted } from 'vue'
import TaskCard from '@/components/TaskCard.vue'

// Fonction pour configurer les actions sur une carte de tâche
function setupTaskActions(taskCard: HTMLElement) {
  // Bouton de suppression
  const deleteBtn = taskCard.querySelector('.btn-delete') as HTMLElement | null
  deleteBtn?.addEventListener('click', () => {
    taskCard.remove()
  })

  // Bouton de complétion
  const completeBtn = taskCard.querySelector('.btn-complete') as HTMLElement | null
  completeBtn?.addEventListener('click', () => {
    taskCard.classList.toggle('completed')
  })

  // Bouton d'édition
  const editBtn = taskCard.querySelector('.btn-edit') as HTMLElement | null
  editBtn?.addEventListener('click', () => {
    alert("Fonctionnalité d'édition à implémenter")
  })
}

onMounted(() => {
  // Sélectionner le formulaire de tâche
  const taskForm = document.getElementById('task-form') as HTMLFormElement | null
  if (taskForm) {
    taskForm.addEventListener('submit', (e: Event) => {
      e.preventDefault()

      // Récupérer les valeurs du formulaire en précisant leur type
      const titleInput = document.getElementById('task-title') as HTMLInputElement | null
      const descriptionInput = document.getElementById(
        'task-description',
      ) as HTMLInputElement | null
      const importanceInput = document.getElementById('importance') as HTMLSelectElement | null
      const urgencyInput = document.getElementById('urgency') as HTMLSelectElement | null
      const dueDateInput = document.getElementById('due-date') as HTMLInputElement | null

      if (!titleInput || !descriptionInput || !importanceInput || !urgencyInput || !dueDateInput)
        return

      const title = titleInput.value
      const description = descriptionInput.value
      const importance = importanceInput.value
      const urgency = urgencyInput.value
      const dueDate = dueDateInput.value

      // Déterminer le quadrant approprié
      let quadrantId: string | undefined
      if (importance === 'important' && urgency === 'urgent') {
        quadrantId = 'q1'
        console.log('q1')
      } else if (importance === 'important' && urgency === 'not-urgent') {
        quadrantId = 'q2'
      } else if (importance === 'not-important' && urgency === 'urgent') {
        quadrantId = 'q3'
      } else if (importance === 'not-important' && urgency === 'not-urgent') {
        quadrantId = 'q4'
      }

      // Créer une nouvelle tâche si le quadrant et le titre sont valides
      if (quadrantId && title) {
        const quadrant = document.getElementById(quadrantId)
        if (quadrant) {
          const taskCard = document.createElement('div')
          taskCard.className = 'task-card'

          // Formater la date d'affichage
          let displayDate = 'Non définie'
          if (dueDate) {
            const dateObj = new Date(dueDate)
            displayDate = dateObj.toLocaleDateString('fr-FR')
          }

          // Construire le HTML de la tâche
          taskCard.innerHTML = `<TaskCard title=${title} description="${description}" date="${displayDate}"></TaskCard>`

          // Ajouter la tâche après l'en-tête du quadrant
          const quadrantHeader = quadrant.querySelector('.quadrant-header')
          if (quadrantHeader && quadrantHeader.parentNode) {
            quadrant.insertBefore(taskCard, quadrantHeader.nextSibling)
          } else {
            quadrant.appendChild(taskCard)
          }

          // Réinitialiser le formulaire
          taskForm.reset()

          // Configurer les actions pour la nouvelle tâche
          setupTaskActions(taskCard)
        }
      }
    })
  }

  // Configurer les actions pour les tâches existantes
  const existingTaskCards = document.querySelectorAll('.task-card')
  existingTaskCards.forEach((card) => setupTaskActions(card as HTMLElement))
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
        <!--        <h2 class="matrix-title">Matrice d'Eisenhower</h2>-->
        <div class="matrix">
          <div class="quadrant q1" id="q1">
            <div class="quadrant-header">Important & Urgent</div>
          </div>

          <div class="quadrant q2" id="q2">
            <div class="quadrant-header">Important & Non Urgent</div>
            <TaskCard />
          </div>

          <div class="quadrant q3" id="q3">
            <div class="quadrant-header">Non Important & Urgent</div>
          </div>
          <div class="quadrant q4" id="q4">
            <div class="quadrant-header">Non Important & Non Urgent</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
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

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--gray-700);
}

input[type='text'],
textarea,
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  font-size: 1rem;
}

input[type='text']:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px var(--primary-light);
}

.importance-urgency {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.btn-submit {
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
}

.btn-submit:hover {
  background-color: var(--secondary);
}

/* Matrix Styles */
.matrix-container {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.matrix-title {
  margin-bottom: 1.5rem;
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
  padding-bottom: 0.5rem;
}

.matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 600px;
}

.quadrant {
  border-radius: 6px;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
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
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--important-urgent);
}

.q1 .quadrant-header {
  background-color: var(--important-urgent);
}

.q2 {
  background-color: rgba(245, 158, 11, 0.1);
  border: 1px solid var(--important-not-urgent);
}

.q2 .quadrant-header {
  background-color: var(--important-not-urgent);
}

.q3 {
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid var(--not-important-urgent);
}

.q3 .quadrant-header {
  background-color: var(--not-important-urgent);
}

.q4 {
  background-color: rgba(107, 114, 128, 0.1);
  border: 1px solid var(--not-important-not-urgent);
}

.q4 .quadrant-header {
  background-color: var(--not-important-not-urgent);
}
</style>
