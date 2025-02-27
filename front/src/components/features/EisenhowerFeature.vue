<template>
  <div class="feature-container">
    <div class="feature-header">
      <h1>Méthode Eisenhower</h1>
      <p class="feature-subtitle">Priorisez vos tâches efficacement</p>
    </div>

    <div class="feature-content">
      <div class="feature-explanation">
        <h2>Qu'est-ce que la matrice d'Eisenhower?</h2>
        <p>
          La matrice d'Eisenhower est un outil simple mais puissant pour organiser vos tâches selon
          deux critères :
          <strong>l'importance</strong> et <strong>l'urgence</strong>.
        </p>

        <div class="matrix-explanation">
          <div class="matrix-quadrant">
            <h3>1. Urgent et Important</h3>
            <p>Tâches à faire immédiatement</p>
            <div class="quadrant-example">
              <span class="tag urgent-important">Faire</span>
              <ul>
                <li>Répondre à une crise</li>
                <li>Dossier avec deadline proche</li>
              </ul>
            </div>
          </div>

          <div class="matrix-quadrant">
            <h3>2. Important mais Non Urgent</h3>
            <p>Tâches à planifier</p>
            <div class="quadrant-example">
              <span class="tag important-not-urgent">Planifier</span>
              <ul>
                <li>Développement personnel</li>
                <li>Projets à long terme</li>
              </ul>
            </div>
          </div>

          <div class="matrix-quadrant">
            <h3>3. Urgent mais Non Important</h3>
            <p>Tâches à déléguer</p>
            <div class="quadrant-example">
              <span class="tag urgent-not-important">Déléguer</span>
              <ul>
                <li>Certaines réunions</li>
                <li>Demandes mineures d'autres personnes</li>
              </ul>
            </div>
          </div>

          <div class="matrix-quadrant">
            <h3>4. Ni Urgent Ni Important</h3>
            <p>Tâches à éliminer</p>
            <div class="quadrant-example">
              <span class="tag not-urgent-not-important">Éliminer</span>
              <ul>
                <li>Distractions</li>
                <li>Activités sans valeur ajoutée</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-demo">
        <h2>Comment l'utiliser dans notre application</h2>
        <div class="demo-steps">
          <div class="demo-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Créez une tâche</h3>
              <p>Ajoutez une nouvelle tâche en cliquant sur "+" dans votre tableau de bord</p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Évaluez son importance et son urgence</h3>
              <p>
                Utilisez les sélecteurs pour déterminer si la tâche est importante et/ou urgente
              </p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>La tâche est automatiquement placée</h3>
              <p>Notre système place votre tâche dans le bon quadrant de la matrice</p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Agissez en fonction du quadrant</h3>
              <p>Suivez la stratégie recommandée pour chaque type de tâche</p>
            </div>
          </div>
        </div>

        <div class="cta-container">
          <router-link to="/dashboard/eisenhower" class="cta-button">
            Essayer la matrice d'Eisenhower
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Styles communs pour les pages de fonctionnalités */
.feature-container {
  max-width: 1200px;
  margin: 0 auto;
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

/* Responsivité */
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
