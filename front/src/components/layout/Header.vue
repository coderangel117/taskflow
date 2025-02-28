<script setup>
defineOptions({ name: 'AppHeader' })
import { onMounted, onUnmounted, ref } from 'vue' // États pour les menus déroulants

// États pour les menus déroulants
const featuresMenuOpen = ref(false)
const mobileMenuOpen = ref(false)
const mobileFeaturesMenuOpen = ref(false)

// Fonctions pour gérer les menus
const toggleFeaturesMenu = () => {
  featuresMenuOpen.value = !featuresMenuOpen.value
}

const closeFeaturesMenu = () => {
  featuresMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileFeaturesMenuOpen.value = false
  }
}

const toggleMobileFeaturesMenu = () => {
  mobileFeaturesMenuOpen.value = !mobileFeaturesMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileFeaturesMenuOpen.value = false
}

// Fermer les menus déroulants quand on clique en dehors
const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.dropdown')
  const mobileDropdown = document.querySelector('.mobile-dropdown')

  if (dropdown && !dropdown.contains(event.target)) {
    featuresMenuOpen.value = false
  }

  if (
    mobileDropdown &&
    !mobileDropdown.contains(event.target) &&
    !document.querySelector('.mobile-menu-toggle').contains(event.target)
  ) {
    mobileFeaturesMenuOpen.value = false
  }
}

// Fermer les menus déroulants quand on appuie sur Echap
const handleEscKey = (event) => {
  if (event.key === 'Escape') {
    featuresMenuOpen.value = false
    mobileFeaturesMenuOpen.value = false
    mobileMenuOpen.value = false
  }
}

// Mettre en place et nettoyer les écouteurs d'événements
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscKey)
})
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <span class="logo-icon">✓</span>
          TaskFlow
        </router-link>
      </div>

      <nav class="main-nav">
        <ul class="nav-list">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" @click.prevent="toggleFeaturesMenu">
              Fonctionnalités
              <span class="dropdown-icon" :class="{ 'dropdown-open': featuresMenuOpen }">▼</span>
            </a>
            <ul class="dropdown-menu" v-show="featuresMenuOpen">
              <li>
                <router-link to="/features/matrix" @click="closeFeaturesMenu">
                  Méthode Eisenhower
                </router-link>
              </li>
              <li>
                <router-link to="/features/kanban" @click="closeFeaturesMenu">
                  Méthode Kanban
                </router-link>
              </li>
              <li>
                <router-link to="/features/calendar" @click="closeFeaturesMenu">
                  Vue Calendrier
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/pricing">Tarifs</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>

      <div class="auth-buttons">
        <router-link to="/auth/login" class="login-btn">Connexion</router-link>
        <router-link to="/auth/register" class="register-btn">S'inscrire</router-link>
      </div>

      <!-- Menu burger pour mobile -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span class="burger-icon"></span>
      </button>
    </div>

    <!-- Menu mobile -->
    <div class="mobile-menu" v-show="mobileMenuOpen">
      <ul class="mobile-nav-list">
        <li>
          <router-link to="/dashboard" @click="closeMobileMenu">Dashboard</router-link>
        </li>
        <li class="mobile-dropdown">
          <a href="#" @click.prevent="toggleMobileFeaturesMenu">
            Fonctionnalités
            <span class="dropdown-icon" :class="{ 'dropdown-open': mobileFeaturesMenuOpen }"
              >▼</span
            >
          </a>
          <ul class="mobile-dropdown-menu" v-show="mobileFeaturesMenuOpen">
            <li>
              <router-link to="/features/eisenhower" @click="closeMobileMenu">
                Méthode Eisenhower
              </router-link>
            </li>
            <li>
              <router-link to="/features/kanban" @click="closeMobileMenu">
                Méthode Kanban
              </router-link>
            </li>
            <li>
              <router-link to="/features/calendar" @click="closeMobileMenu">
                Vue Calendrier
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/pricing" @click="closeMobileMenu">Tarifs</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="closeMobileMenu">Contact</router-link>
        </li>
        <li class="mobile-auth">
          <router-link to="/login" class="mobile-login-btn" @click="closeMobileMenu"
            >Connexion
          </router-link>
          <router-link to="/register" class="mobile-register-btn" @click="closeMobileMenu">
            S'inscrire
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.logo a {
  text-decoration: none;
  color: #333;
}

/* Navigation principale */
.main-nav {
  display: flex;
  height: 100%;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.nav-list > li {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-list > li > a {
  padding: 0 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  transition: color 0.3s;
}

.nav-list > li > a:hover {
  color: #4c84ff;
}

/* Menu déroulant */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-icon {
  font-size: 10px;
  margin-left: 5px;
  transition: transform 0.3s;
}

.dropdown-icon.dropdown-open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0;
  list-style: none;
  z-index: 10;
}

.dropdown-menu li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.dropdown-menu li a:hover {
  background-color: #f5f5f5;
  color: #4c84ff;
}

/* Boutons d'authentification */
.auth-buttons {
  display: flex;
  gap: 12px;
}

.login-btn,
.register-btn {
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
}

.login-btn {
  color: #4c84ff;
  border: 1px solid #4c84ff;
}

.login-btn:hover {
  background-color: rgba(76, 132, 255, 0.1);
}

.register-btn {
  background-color: #4c84ff;
  color: white;
}

.register-btn:hover {
  background-color: #3a70e0;
}

/* Menu mobile */
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
}

.burger-icon,
.burger-icon::before,
.burger-icon::after {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s;
}

.burger-icon {
  top: 13px;
}

.burger-icon::before {
  content: '';
  top: -8px;
}

.burger-icon::after {
  content: '';
  bottom: -8px;
}

.mobile-menu {
  display: none;
  background-color: white;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-list li {
  margin-bottom: 15px;
}

.mobile-nav-list a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  display: block;
}

.mobile-dropdown-menu {
  list-style: none;
  padding: 10px 0 0 20px;
}

.mobile-dropdown-menu li {
  margin-bottom: 10px;
}

.mobile-auth {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.mobile-login-btn,
.mobile-register-btn {
  text-align: center;
  padding: 12px;
  border-radius: 4px;
  font-weight: 500;
}

.mobile-login-btn {
  color: #4c84ff;
  border: 1px solid #4c84ff;
}

.mobile-register-btn {
  background-color: #4c84ff;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .main-nav,
  .auth-buttons {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
