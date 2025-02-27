<script setup lang="ts">
document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('task-form')

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // Récupérer les valeurs du formulaire
    const title = document.getElementById('task-title').value
    const description = document.getElementById('task-description').value
    const importance = document.getElementById('importance').value
    const urgency = document.getElementById('urgency').value
    const dueDate = document.getElementById('due-date').value

    // Déterminer le quadrant approprié
    let quadrantId

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

    // Créer une nouvelle tâche
    if (quadrantId && title) {
      const quadrant = document.getElementById(quadrantId)

      // Créer l'élément de tâche
      const taskCard = document.createElement('div')
      taskCard.className = 'task-card'

      // Formater la date d'affichage
      let displayDate = 'Non définie'
      if (dueDate) {
        const dateObj = new Date(dueDate)
        displayDate = dateObj.toLocaleDateString('fr-FR')
      }

      // Construire le HTML de la tâche
      taskCard.innerHTML = `
            <div class="task-header">
              <span class="task-title">${title}</span>
              <div class="task-actions">
                <button class="action-btn btn-edit">✏️</button>
                <button class="action-btn btn-complete">✓</button>
                <button class="action-btn btn-delete">×</button>
              </div>
            </div>
            <p class="task-description">${description || 'Aucune description'}</p>
            <div class="task-meta">
              <span class="task-date">${displayDate}</span>
            </div>
          `

      // Ajouter la tâche après l'en-tête du quadrant
      const quadrantHeader = quadrant.querySelector('.quadrant-header')
      quadrant.insertBefore(taskCard, quadrantHeader.nextSibling)

      // Réinitialiser le formulaire
      taskForm.reset()

      // Ajouter les écouteurs d'événements pour les boutons
      setupTaskActions(taskCard)
    }
  })

  // Configurer les actions pour les tâches existantes
  document.querySelectorAll('.task-card').forEach(setupTaskActions)

  // Configuration des actions de tâche
  function setupTaskActions(taskCard) {
    // Bouton de suppression
    const deleteBtn = taskCard.querySelector('.btn-delete')
    deleteBtn.addEventListener('click', function () {
      taskCard.remove()
    })

    // Bouton de complétion
    const completeBtn = taskCard.querySelector('.btn-complete')
    completeBtn.addEventListener('click', function () {
      taskCard.classList.toggle('completed')
    })

    // Bouton d'édition - simplement pour la démo
    const editBtn = taskCard.querySelector('.btn-edit')
    editBtn.addEventListener('click', function () {
      alert("Fonctionnalité d'édition à implémenter")
    })
  }
})
</script>

<template>
  <div class="container">
    <h1 class="page-title">Matrice d'Eisenhower</h1>

    <div class="page-layout">
      <!-- Formulaire de création de tâche -->
      <div class="task-form-container">
        <h2 class="form-title">Créer une nouvelle tâche</h2>
        <form id="task-form">
          <div class="form-group">
            <label for="task-title">Titre de la tâche *</label>
            <input
              type="text"
              id="task-title"
              required
              placeholder="Entrez le titre de votre tâche"
            />
          </div>

          <div class="form-group">
            <label for="task-description">Description</label>
            <textarea
              id="task-description"
              rows="3"
              placeholder="Décrivez votre tâche (optionnel)"
            ></textarea>
          </div>

          <div class="importance-urgency">
            <div class="form-group">
              <label for="importance">Importance *</label>
              <select id="importance" required>
                <option value="" disabled selected>Choisir...</option>
                <option value="important">Important</option>
                <option value="not-important">Non important</option>
              </select>
            </div>

            <div class="form-group">
              <label for="urgency">Urgence *</label>
              <select id="urgency" required>
                <option value="" disabled selected>Choisir...</option>
                <option value="urgent">Urgent</option>
                <option value="not-urgent">Non urgent</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="due-date">Date d'échéance</label>
            <input type="date" id="due-date" />
          </div>

          <button type="submit" class="btn-submit">Ajouter à la matrice</button>
        </form>
      </div>

      <!-- Matrice d'Eisenhower -->
      <div class="matrix-container">
        <!--        <h2 class="matrix-title">Matrice d'Eisenhower</h2>-->
        <div class="matrix">
          <div class="quadrant q1" id="q1">
            <div class="quadrant-header">Important & Urgent</div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-title">Répondre au client</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Envoyer la proposition de devis avant 18h</p>
              <div class="task-meta">
                <span class="task-date">Aujourd'hui</span>
              </div>
            </div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-title">Préparer la présentation</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Finaliser les slides pour la réunion de demain</p>
              <div class="task-meta">
                <span class="task-date">Demain</span>
              </div>
            </div>
          </div>

          <div class="quadrant q2" id="q2">
            <div class="quadrant-header">Important & Non Urgent</div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-title">Apprendre React</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Suivre le cours en ligne React pour débutants</p>
              <div class="task-meta">
                <span class="task-date">15/03/2025</span>
              </div>
            </div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-title">Planifier la stratégie Q2</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Préparer les objectifs pour le trimestre prochain</p>
              <div class="task-meta">
                <span class="task-date">20/03/2025</span>
              </div>
            </div>
          </div>

          <div class="quadrant q3" id="q3">
            <div class="quadrant-header">Non Important & Urgent</div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-title">Répondre aux emails</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Trier et répondre aux emails en attente</p>
              <div class="task-meta">
                <span class="task-date">Aujourd'hui</span>
              </div>
            </div>
            <div class="task-card completed">
              <div class="task-header">
                <span class="task-title">Réunion hebdomadaire</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Participer à la réunion d'équipe de 14h</p>
              <div class="task-meta">
                <span class="task-date">Aujourd'hui</span>
              </div>
            </div>
          </div>

          <div class="quadrant q4" id="q4">
            <div class="quadrant-header">Non Important & Non Urgent</div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-title">Classer les documents</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Organiser et archiver les anciens documents</p>
              <div class="task-meta">
                <span class="task-date">10/04/2025</span>
              </div>
            </div>
            <div class="task-card">
              <div class="task-header">
                <span class="task-title">Explorer de nouveaux outils</span>
                <div class="task-actions">
                  <button class="action-btn btn-edit">✏️</button>
                  <button class="action-btn btn-complete">✓</button>
                  <button class="action-btn btn-delete">×</button>
                </div>
              </div>
              <p class="task-description">Tester de nouveaux logiciels de productivité</p>
              <div class="task-meta">
                <span class="task-date">À faire quand possible</span>
              </div>
            </div>
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

.task-form-container {
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.form-title {
  margin-bottom: 1.5rem;
  color: var(--primary);
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1rem;
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
  color: var(--white);
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
}

.btn-submit:hover {
  background-color: var(--primary-dark);
}

/* Matrix Styles */
.matrix-container {
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.matrix-title {
  margin-bottom: 1.5rem;
  color: var(--primary);
  border-bottom: 2px solid var(--primary-light);
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
  color: var(--white);
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

.task-card {
  background-color: var(--white);
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.task-title {
  font-weight: 600;
  color: var(--gray-800);
}

.task-actions {
  display: flex;
  gap: 0.25rem;
}

.action-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  border-radius: 4px;
}

.btn-edit {
  background-color: var(--gray-200);
  color: var(--gray-800);
}

.btn-edit:hover {
  background-color: var(--gray-300);
}

.btn-delete {
  background-color: var(--important-urgent);
  color: var(--white);
}

.btn-delete:hover {
  background-color: #dc2626;
}

.btn-complete {
  background-color: #10b981;
  color: var(--white);
}

.btn-complete:hover {
  background-color: #059669;
}

.task-description {
  font-size: 0.875rem;
  color: var(--gray-700);
  margin-bottom: 0.5rem;
}

.task-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--gray-700);
}

.task-date {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: var(--gray-200);
  border-radius: 4px;
}

.completed {
  opacity: 0.6;
}

.completed .task-title {
  text-decoration: line-through;
}

.empty-message {
  color: var(--gray-700);
  text-align: center;
  padding: 1rem;
  font-style: italic;
}
</style>
