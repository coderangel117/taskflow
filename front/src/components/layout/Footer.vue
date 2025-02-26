<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>TaskMatrix</h3>
          <ul>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Carrières</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Fonctionnalités</h3>
          <ul>
            <li><a href="#">Matrice Eisenhower</a></li>
            <li><a href="#">Vue Calendrier</a></li>
            <li><a href="#">Vue Kanban</a></li>
            <li><a href="#">Synchronisation</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Ressources</h3>
          <ul>
            <li><a href="#">Guide utilisateur</a></li>
            <li><a href="#">Tutoriels vidéo</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Légal</h3>
          <ul>
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 TaskMatrix. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
/* Footer */
footer {
  background-color: var(--dark);
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-column h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #444;
  color: #888;
}
</style>
