<template>
  <button class="edit-task-btn" @click="openModal">
    <span class="icon">✏️</span> Modifier la tâche
  </button>
</template>

<script setup>
import { inject } from 'vue'

// Props pour recevoir les données de la tâche
const props = defineProps({
  taskId: {
    type: [String, Number],
    required: true,
  },
  taskData: {
    type: Object,
    required: true,
  },
})

// Injecter l'événement global pour ouvrir la modale
const emitter = inject('emitter')

// Fonction pour ouvrir la modale avec les données de la tâche
const openModal = () => {
  emitter.emit('open-task-modal', props.taskData)
}
</script>

<style scoped>
.edit-task-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-task-btn:hover {
  background-color: #e5e7eb;
}

.icon {
  font-size: 16px;
}
</style>
