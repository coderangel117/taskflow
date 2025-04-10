<script setup lang="ts">
import { inject } from 'vue'
import type { Task } from '@/_models/Tasks.ts'
import mitt from 'mitt'

const props = defineProps({
  title: String,
  description: String,
  date: Date,
  id: [String, Number],
  taskData: Object as () => Task,
})

// Injecter l'émetteur d'événements
const emitter = inject<Emitter>('emitter')

type Emitter = ReturnType<typeof mitt<Events>>

type Events = {
  'open-task-modal': any
  // ajoute ici tous les events que tu vas utiliser
}

if (!emitter) {
  throw new Error('Emitter is not provided')
}
// Fonction pour ouvrir la modale
const openEditModal = () => {
  if (props.taskData) {
    emitter.emit('open-task-modal', props.taskData)
  }
}
</script>

<template>
  <div class="task-card">
    <div class="task-header">
      <span class="task-title">{{ title }}</span>
      <div class="task-actions">
        <button class="action-btn btn-edit" @click="openEditModal">✏️</button>
      </div>
    </div>

    <div v-if="date" class="task-meta">
      <span class="task-date">{{ date.toString().slice(0, 10) }}</span>
    </div>
  </div>
</template>
<style scoped>
.task-card {
  background-color: white;
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
  color: var(--gray-500);
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

.task-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--gray-500);
}

.task-date {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: var(--gray-500);
  color: white;
  border-radius: 4px;
}

.btn-edit:hover {
  background-color: var(--gray-500);
}
</style>
