<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  date: String,
})


</script>

<template>
  <div class="task-card">
    <div class="task-header">
      <span class="task-title">{{ title }}</span>
      <div class="task-actions">
        <button class="action-btn btn-edit">✏️</button>
        <button class="action-btn btn-complete">✓</button>
        <button class="action-btn btn-delete">×</button>
      </div>
    </div>
    <p class="task-description">{{ description }}</p>
    <div class="task-meta">
      <span class="task-date"> {{ date }}</span>
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

.btn-delete {
  background-color: var(--important-urgent);
  color: white;
}

.btn-delete:hover {
  background-color: #dc2626;
}

.btn-complete {
  background-color: #10b981;
  color: white;
}

.btn-complete:hover {
  background-color: #059669;
}

.task-description {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-bottom: 0.5rem;
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

.completed .task-title {
  text-decoration: line-through;
}
</style>
