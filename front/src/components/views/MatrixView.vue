<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import { onMounted } from 'vue'
import { TaskService } from '@/_services'
import type { TaskModel } from '@/_models/Tasks.ts'

let tasks: TaskModel[] = []
onMounted(() => {
  TaskService.getTasks().then((data) => {
    tasks = data.data
    console.log(tasks)
    return tasks
  })

  setTimeout(function () {
    sortTasks(tasks)
  }, 200)
})

function sortTasks(tasks: TaskModel[]) {
  const q1 = document.getElementsByClassName('q1')
  const q2 = document.getElementsByClassName('q2')
  // const q3 = document.getElementById('q3')
  // const q4 = document.getElementById('q4')

  // const header = document.getElementsByClassName('header')
  // const foo = header.item(1)

  for (const task of tasks) {
    switch (task.section) {
      case 'UrgentImportant':
        console.log(q1)
        // console.log('q1')
        break
      case 'NonUrgentImportant':
        console.log(q2)
        // console.log('q2')
        break
      case 'UrgentNonImportant':
        // console.log('q3')
        break
      case 'NonUrgentNonImportant':
        // console.log('q4')
        break
    }
  }
}
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
          <div class="quadrant" id="q1">
            <div class="quadrant-header q1">Important & Urgent</div>
            <!--            <TaskCard title="Task 1" description="description 1" date="16/03/2025" />-->
          </div>

          <div class="quadrant" id="q2">
            <div class="quadrant-header q2">Important & Non Urgent</div>
            <!--            <TaskCard title="Task 2" description="description" date="15/03/2025" />-->
          </div>

          <div class="quadrant" id="q3">
            <div class="quadrant-header q3">Non Important & Urgent</div>
            <!--            <TaskCard title="Task 3" description="description 2" date="17/03/2025" />-->
          </div>
          <div class="quadrant" id="q4">
            <div class="quadrant-header q4">Non Important & Non Urgent</div>
            <!--            <TaskCard title="Task 4" description="description 3" date="18/03/2025" />-->
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

#q1,
.q1 {
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid var(--important-urgent);
}

.q1 .quadrant-header {
  background-color: var(--important-urgent);
}

#q2,
.q2 {
  background-color: rgba(245, 158, 11, 0.1);
  border: 1px solid var(--important-not-urgent);
}

.q2 .quadrant-header {
  background-color: var(--important-not-urgent);
}

#q3,
.q3 {
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid var(--not-important-urgent);
}

.q3 .quadrant-header {
  background-color: var(--not-important-urgent);
}

#q4,
.q4 {
  background-color: rgba(107, 114, 128, 0.1);
  border: 1px solid var(--not-important-not-urgent);
}

.q4 .quadrant-header {
  background-color: var(--not-important-not-urgent);
}
</style>
