<script setup lang="ts">
defineOptions({ name: 'AppHome' })
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>Gérez vos tâches de façon intelligente</h1>
      <p>
        TaskMatrix combine Eisenhower, Kanban et vue Calendrier pour une gestion de tâches optimale.
        Prenez le contrôle de votre temps.
      </p>
      <button class="cta-button">Commencer maintenant</button>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features">
    <div class="container">
      <div class="section-title">
        <h2>Trois façons de visualiser vos tâches</h2>
        <p>Adaptez votre vue selon vos besoins et votre style de travail</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⊞</div>
          <h3>Matrice Eisenhower</h3>
          <p>
            Priorisez vos tâches selon leur importance et leur urgence pour une meilleure prise de
            décision.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📅</div>
          <h3>Vue Calendrier</h3>
          <p>
            Planifiez votre semaine et gardez une vision claire de vos échéances et rendez-vous.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">☰</div>
          <h3>Vue Kanban</h3>
          <p>Suivez la progression de vos tâches avec un tableau visuel dynamique et intuitif.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshots Section -->
  <section class="screenshots">
    <div class="container">
      <div class="section-title">
        <h2>Découvrez notre interface</h2>
        <p>Une expérience utilisateur fluide et intuitive pour tous vos besoins</p>
      </div>

      <div class="screenshots-container">
        <div class="screenshot">
          <img src="../assets/eisenhower-matrix-view.svg" alt="Vue Matrice Eisenhower" />
        </div>

        <div class="screenshot">
          <img src="../assets/calendar-view.svg" alt="Vue Calendrier" />
        </div>

        <div class="screenshot">
          <img src="../assets/kanban-view.svg" alt="Vue Kanban" />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <div class="container">
      <h2>Prêt à optimiser votre productivité ?</h2>
      <p>
        Rejoignez des milliers d'utilisateurs qui ont transformé leur façon de gérer leurs tâches
        quotidiennes.
      </p>
      <RouterLink to="/auth/Login">
        <button class="cta-button-white">Se connecter</button>
      </RouterLink>
    </div>
  </section>
</template>
<style>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-button {
  background-color: var(--primary);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: var(--primary-dark);
}

/* Hero Section */
.hero {
  padding: 180px 0 100px;
  text-align: center;
  background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(114, 9, 183, 0.1));
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: var(--dark);
}

.hero p {
  font-size: 20px;
  color: #555;
  max-width: 700px;
  margin: 0 auto 40px;
}

/* Features Section */
.features {
  padding: 100px 0;
  background-color: white;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 36px;
  margin-bottom: 15px;
  color: var(--dark);
}

.section-title p {
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 50px;
  margin-bottom: 20px;
  color: var(--primary);
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: var(--dark);
}

.feature-card p {
  color: #666;
}

/* Screenshots Section */
.screenshots {
  padding: 100px 0;
  background-color: #f5f7fa;
}

.screenshots-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 60px;
}

.screenshot {
  width: 100%;
  max-width: 350px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.screenshot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.screenshot:hover img {
  transform: scale(1.05);
}

.screenshot-label {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
}

/* CTA Section */
.cta {
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
}

.cta h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.cta p {
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 40px;
}

.cta-button-white {
  background-color: white;
  color: var(--primary);
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.cta-button-white:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

/* Mobile Navigation */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--dark);
  border-radius: 3px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  nav ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    background: white;
    width: 100%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }

  nav ul.active {
    display: flex;
  }

  nav ul li {
    margin: 0;
    text-align: center;
    padding: 15px 0;
  }

  .header-content {
    padding: 15px;
  }

  .hero {
    padding: 150px 0 80px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
