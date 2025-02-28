<script setup lang="ts"></script>

<template>
  <div class="kanban-container">
    <div class="kanban-board">
      <div class="kanban-column">
        <div class="kanban-column-header">
          <h2>À faire</h2>
        </div>
        <div class="kanban-column-content">
          <div class="kanban-card">
            <div class="kanban-card-header">
              <h3>Créer une application</h3>
            </div>
            <div class="kanban-card-content">
              <p>Créer une application avec Vue.js et Node.js</p>
            </div>
          </div>
          <div class="kanban-card">
            <div class="kanban-card-header">
              <h3>Créer une application</h3>
            </div>
            <div class="kanban-card-content">
              <p>Créer une application avec Vue.js et Node.js</p>
            </div>
          </div>
        </div>
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header">
          <h2>En cours</h2>
        </div>
        <div class="kanban-column-content">
          <div class="kanban-card">
            <div class="kanban-card-header">
              <h3>Créer une application</h3>
            </div>
            <div class="kanban-card-content">
              <p>Créer une application avec Vue.js et Node.js</p>
            </div>
          </div>
        </div>
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header">
          <h2>Terminé</h2>
        </div>
        <div class="kanban-column-content">
          <div class="kanban-card">
            <div class="kanban-card-header">
              <h3>Créer une application</h3>
            </div>
            <div class="kanban-card-content">
              <p>Créer une application avec Vue.js et Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kanban-container {
  display: flex;
  width: 1500px;
  background-color: red;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

kanban-board {
  width: 80%;
  background-color: green;
  display: flex;
  flex-direction: column;
}

.kanban-column {
  background-color: #f7f7f7;
  border-radius: 5px;
  margin: 0 10px;
  width: 300px;
}

.kanban-column-header {
  background-color: #333;
  border-radius: 5px 5px 0 0;
  color: white;
  padding: 10px;
}

.kanban-column-content {
  padding: 10px;
}

.kanban-card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
}

.kanban-card-header {
  background-color: #333;
  border-radius: 5px 5px 0 0;
  color: white;
  padding: 10px;
}

.kanban-card-content {
  padding: 10px;
}
</style>
