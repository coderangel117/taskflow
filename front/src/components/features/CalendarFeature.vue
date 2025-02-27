<template>
  <div class="feature-container">
    <div class="feature-header">
      <h1>Vue Calendrier</h1>
      <p class="feature-subtitle">Planifiez et visualisez vos tâches dans le temps</p>
    </div>

    <div class="feature-content">
      <div class="feature-explanation">
        <h2>Pourquoi utiliser une vue calendrier ?</h2>
        <p>
          La vue calendrier vous permet d'organiser visuellement vos tâches dans le temps, offrant
          une perspective claire de vos échéances et de votre charge de travail quotidienne.
        </p>

        <div class="calendar-benefits">
          <div class="benefit-card">
            <div class="benefit-icon">📅</div>
            <h3>Vision temporelle</h3>
            <p>
              Visualisez vos tâches à travers le temps pour mieux appréhender votre emploi du temps
            </p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">⏱️</div>
            <h3>Gestion des échéances</h3>
            <p>Identifiez rapidement les dates limites et organisez vos journées en conséquence</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🔄</div>
            <h3>Tâches récurrentes</h3>
            <p>
              Configurez facilement des tâches répétitives (quotidiennes, hebdomadaires, mensuelles)
            </p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🔍</div>
            <h3>Vue d'ensemble</h3>
            <p>Alternez entre vues journalière, hebdomadaire et mensuelle selon vos besoins</p>
          </div>
        </div>

        <div class="calendar-integration">
          <h3>Intégration avec les méthodes Eisenhower et Kanban</h3>
          <p>
            Notre calendrier n'est pas isolé des autres vues! Les tâches importantes et urgentes de
            votre matrice d'Eisenhower apparaissent mises en évidence dans votre calendrier. De
            même, les cartes de votre tableau Kanban peuvent être associées à des dates pour mieux
            suivre votre progression.
          </p>
        </div>
      </div>

      <div class="feature-demo">
        <h2>Comment utiliser le calendrier</h2>
        <div class="demo-steps">
          <div class="demo-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Choisissez votre vue</h3>
              <p>
                Basculez entre les vues journalière, hebdomadaire ou mensuelle selon vos besoins
              </p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Créez des événements</h3>
              <p>Cliquez sur une plage horaire pour ajouter une nouvelle tâche ou rendez-vous</p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Organisez par glisser-déposer</h3>
              <p>
                Réorganisez votre emploi du temps en faisant glisser les événements d'un créneau à
                un autre
              </p>
            </div>
          </div>

          <div class="demo-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Synchronisez avec vos autres outils</h3>
              <p>
                Importez et exportez des événements depuis Google Calendar, Outlook ou Apple
                Calendar
              </p>
            </div>
          </div>
        </div>

        <div class="calendar-mock">
          <div class="calendar-controls">
            <button class="calendar-nav">&lt;</button>
            <h3 class="calendar-title">Mars 2025</h3>
            <button class="calendar-nav">&gt;</button>
          </div>

          <div class="calendar-header">
            <div class="calendar-day-header">Lun</div>
            <div class="calendar-day-header">Mar</div>
            <div class="calendar-day-header">Mer</div>
            <div class="calendar-day-header">Jeu</div>
            <div class="calendar-day-header">Ven</div>
            <div class="calendar-day-header">Sam</div>
            <div class="calendar-day-header">Dim</div>
          </div>

          <div class="calendar-grid">
            <div class="calendar-day prev-month">24</div>
            <div class="calendar-day prev-month">25</div>
            <div class="calendar-day prev-month">26</div>
            <div class="calendar-day prev-month">27</div>
            <div class="calendar-day prev-month">28</div>
            <div class="calendar-day">1</div>
            <div class="calendar-day">2</div>

            <div class="calendar-day">3</div>
            <div class="calendar-day">4</div>
            <div class="calendar-day active">
              5
              <div class="calendar-event urgent">Réunion équipe 10h</div>
              <div class="calendar-event important">Préparer présentation</div>
            </div>
            <div class="calendar-day">6</div>
            <div class="calendar-day">7</div>
            <div class="calendar-day">8</div>
            <div class="calendar-day">9</div>

            <div class="calendar-day">10</div>
            <div class="calendar-day">11</div>
            <div class="calendar-day">12</div>
            <div class="calendar-day">
              13
              <div class="calendar-event">Cours en ligne 14h</div>
            </div>
            <div class="calendar-day">14</div>
            <div class="calendar-day">15</div>
            <div class="calendar-day">16</div>

            <div class="calendar-day">17</div>
            <div class="calendar-day">18</div>
            <div class="calendar-day">19</div>
            <div class="calendar-day">20</div>
            <div class="calendar-day">
              21
              <div class="calendar-event deadline">Deadline projet</div>
            </div>
            <div class="calendar-day">22</div>
            <div class="calendar-day">23</div>

            <div class="calendar-day">24</div>
            <div class="calendar-day">25</div>
            <div class="calendar-day">26</div>
            <div class="calendar-day">27</div>
            <div class="calendar-day">28</div>
            <div class="calendar-day">29</div>
            <div class="calendar-day">30</div>

            <div class="calendar-day">31</div>
            <div class="calendar-day next-month">1</div>
            <div class="calendar-day next-month">2</div>
            <div class="calendar-day next-month">3</div>
            <div class="calendar-day next-month">4</div>
            <div class="calendar-day next-month">5</div>
            <div class="calendar-day next-month">6</div>
          </div>
        </div>

        <div class="cta-container">
          <router-link to="/dashboard/calendar" class="cta-button">
            Essayer la vue calendrier
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles de base */
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

/* Styles pour les avantages */
.calendar-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 30px 0;
}

.benefit-card {
  padding: 24px;
  border-radius: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
}

.benefit-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.benefit-card h3 {
  margin-bottom: 12px;
  font-size: 18px;
  color: #333;
}

.calendar-integration {
  background-color: #f0f7ff;
  border-left: 4px solid #4c84ff;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  margin: 30px 0;
}

.calendar-integration h3 {
  color: #2c5282;
  margin-bottom: 12px;
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

/* Maquette calendrier */
.calendar-mock {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 30px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.calendar-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.calendar-title {
  font-size: 18px;
  font-weight: 500;
}

.calendar-nav {
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  background-color: white;
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
}

.calendar-day-header {
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: white;
}

.calendar-day {
  min-height: 80px;
  padding: 8px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  position: relative;
}

.calendar-day.prev-month,
.calendar-day.next-month {
  color: #aaa;
  background-color: #f9f9f9;
}

.calendar-day.active {
  background-color: #f0f7ff;
}

.calendar-event {
  margin-top: 4px;
  padding: 4px 6px;
  border-radius: 3px;
  font-size: 12px;
  background-color: #e1e1e1;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.calendar-event.urgent {
  background-color: #ffebee;
  color: #c62828;
  border-left: 3px solid #c62828;
}

.calendar-event.important {
  background-color: #e3f2fd;
  color: #1565c0;
  border-left: 3px solid #1565c0;
}

.calendar-event.deadline {
  background-color: #ffe0b2;
  color: #e65100;
  border-left: 3px solid #e65100;
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

@media (max-width: 600px) {
  .calendar-day {
    min-height: 60px;
    font-size: 12px;
  }

  .calendar-event {
    font-size: 10px;
  }
}
</style>
