<script setup lang="ts"></script>

<!-- src/views/KanbanFeature.vue -->
<template>
  <div class="feature-container">
    <div class="feature-header">
      <h1>Méthode Kanban</h1>
      <p class="feature-subtitle">Visualisez et optimisez votre flux de travail</p>
    </div>

    <div class="feature-content">
      <div class="feature-explanation">
        <h2>Qu'est-ce que Kanban?</h2>
        <p>
          Kanban est une méthode visuelle de gestion de flux de travail qui permet de visualiser
          votre travail, limiter le travail en cours et optimiser l'efficacité de votre équipe ou de
          vos projets personnels.
        </p>

        <div class="kanban-explanation">
          <div class="kanban-principle">
            <h3>Visualisation</h3>
            <p>
              Visualisez votre travail sous forme de cartes organisées en colonnes représentant les
              différentes étapes.
            </p>
          </div>

          <div class="kanban-principle">
            <h3>Limiter le travail en cours</h3>
            <p>
              Fixez des limites au nombre de tâches que vous traitez simultanément pour améliorer la
              concentration et l'efficacité.
            </p>
          </div>

          <div class="kanban-principle">
            <h3>Gérer le flux</h3>
            <p>
              Surveillez et optimisez le mouvement des tâches à travers votre tableau pour
              identifier et résoudre les blocages.
            </p>
          </div>
        </div>

        <div class="kanban-columns">
          <div class="kanban-column">
            <h4>À faire</h4>
            <p>Tâches en attente de traitement</p>
          </div>
          <div class="kanban-arrow">→</div>
          <div class="kanban-column">
            <h4>En cours</h4>
            <p>Tâches actuellement traitées</p>
          </div>
          <div class="kanban-arrow">→</div>
          <div class="kanban-column">
            <h4>Terminé</h4>
            <p>Tâches accomplies</p>
          </div>
        </div>
      </div>

      <div class="feature-demo">
        <h2>Comment l'utiliser dans notre application</h2>
        <div class="demo-steps">
          <div class="demo-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Créez votre tableau Kanban</h3>
              <p>
                Configurez les colonnes selon votre flux de travail (par défaut: À faire, En cours,
                Terminé)
              </p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Ajoutez des tâches</h3>
              <p>
                Créez des cartes pour chaque tâche à accomplir et placez-les dans la colonne
                appropriée
              </p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Déplacez les tâches entre les colonnes</h3>
              <p>
                Faites glisser les cartes d'une colonne à l'autre à mesure que le travail progresse
              </p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Suivez vos progrès</h3>
              <p>
                Consultez les métriques pour identifier les goulots d'étranglement et améliorer
                votre productivité
              </p>
            </div>
          </div>
        </div>

        <div class="cta-container">
          <router-link to="/dashboard/kanban" class="cta-button">
            Essayer le tableau Kanban
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-container {
  max-width: 1200px;
  margin: 100px auto;
  padding: 40px 20px;
}

.feature-header {
  text-align: center;
  margin-bottom: 50px;
}

.feature-header h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
}

.feature-subtitle {
  font-size: 18px;
  color: #666;
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.feature-explanation h2,
.feature-demo h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 24px;
}

/* Styles spécifiques à Eisenhower */
.matrix-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.matrix-quadrant {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  background-color: #f9f9f9;
}

.matrix-quadrant h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.quadrant-example {
  margin-top: 16px;
}

.tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
}

.urgent-important {
  background-color: #e74c3c;
}

.important-not-urgent {
  background-color: #3498db;
}

.urgent-not-important {
  background-color: #f39c12;
}

.not-urgent-not-important {
  background-color: #95a5a6;
}

/* Styles spécifiques à Kanban */
.kanban-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 30px;
  margin-bottom: 40px;
}

.kanban-principle {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  background-color: #f9f9f9;
}

.kanban-columns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.kanban-column {
  flex: 1;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
}

.kanban-arrow {
  font-size: 24px;
  color: #888;
  padding: 0 10px;
}

/* Styles pour la démo */
.demo-steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}

.demo-step {
  display: flex;
  gap: 20px;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #4c84ff;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

.cta-container {
  text-align: center;
  margin-top: 30px;
}

.cta-button {
  display: inline-block;
  background-color: #4c84ff;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #3a70e0;
}

/* Responsive */
@media (min-width: 768px) {
  .feature-content {
    flex-direction: row;
  }

  .feature-explanation,
  .feature-demo {
    flex: 1;
  }
}
</style>
