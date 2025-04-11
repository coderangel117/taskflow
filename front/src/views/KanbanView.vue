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
  background-color: #f7f7f7;
  justify-content: center;
  margin-top: 50px;
}

.kanban-board {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
}

.kanban-column {
  background-color: #f7f7f7;
  border-radius: 5px;
  margin: 0 10px;
  width: 300px;
}

.kanban-column-header {
  text-align: center;
  background-color: white;
  color: black;
  border-radius: 5px 5px 0 0;
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
  text-align: center;
  background-color: white;
  color: black;
  border-radius: 5px 5px 0 0;
  padding: 10px;
}

.kanban-card-content {
  padding: 10px;
}
</style>
