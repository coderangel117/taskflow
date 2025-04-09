<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue'
import TaskForm from '@/components/TaskForm.vue'
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
            <TaskCard title="Task 1" description="description 1" date="16/03/2025" />
          </div>

          <div class="quadrant q2" id="q2">
            <div class="quadrant-header">Important & Non Urgent</div>
            <TaskCard title="Task 2" description="description" date="15/03/2025" />
          </div>

          <div class="quadrant q3" id="q3">
            <div class="quadrant-header">Non Important & Urgent</div>
            <TaskCard title="Task 3" description="description 2" date="17/03/2025" />
          </div>
          <div class="quadrant q4" id="q4">
            <div class="quadrant-header">Non Important & Non Urgent</div>
            <TaskCard title="Task 4" description="description 3" date="18/03/2025" />
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
