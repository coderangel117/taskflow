<template>
  <nav class="sidebar">
    <ul class="sidebar-menu">
      <li :class="{ active: currentView === 'matrix' }" @click="changeView('matrix')">
        <span class="icon">
          <!-- Exemple d'icône pour la vue Matrice (vous pouvez remplacer par un SVG ou une icône FontAwesome) -->
          🗂
        </span>
        <span class="label">Matrice</span>
      </li>
      <li :class="{ active: currentView === 'calendar' }" @click="changeView('calendar')">
        <span class="icon">
          <!-- Exemple d'icône pour la vue Calendrier -->
          📅
        </span>
        <span class="label">Calendrier</span>
      </li>
      <li :class="{ active: currentView === 'kanban' }" @click="changeView('kanban')">
        <span class="icon">
          <!-- Exemple d'icône pour la vue Kanban -->
          📋
        </span>
        <span class="label">Kanban</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router' // Assurez-vous que le chemin est correct

defineOptions({
  name: 'AppNavbar',
})

const currentView = ref('matrix')

function changeView(view) {
  currentView.value = view
  // Ici, vous pouvez ajouter la navigation via Vue Router ou mettre à jour votre store global (par exemple, Pinia)
  // Par exemple, avec le router :
  router.push({
    name: view === 'dashboard' ? 'MatrixView' : view === 'calendar' ? 'CalendarView' : 'KanbanView',
  })
}
</script>

<style scoped>
.sidebar {
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  width: 250px;
  height: 100vh;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.sidebar-menu li.active,
.sidebar-menu li:hover {
  background-color: #f5f5f5;
}

.icon {
  font-size: 24px;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  font-size: 16px;
  color: #333;
}
</style>
