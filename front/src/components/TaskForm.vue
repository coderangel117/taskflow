<script setup lang="ts"></script>

<template>
  <div class="task-form-container">
    <h2 class="form-title">Créer une nouvelle tâche</h2>
    <form id="task-form">
      <div class="form-group">
        <label for="task-title">Titre de la tâche *</label>
        <input type="text" id="task-title" required placeholder="Entrez le titre de votre tâche" />
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
</template>

<style scoped>
.task-form-container {
  background-color: white;
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
</style>
