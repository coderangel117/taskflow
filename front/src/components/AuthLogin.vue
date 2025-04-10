<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function SubmitForm(event: Event) {
  event.preventDefault()

  if (!email.value || !password.value) {
    alert('Veuillez remplir tous les champs')
    return
  }

  // Simulate a login request
  console.log('Login attempt with:', { email: email.value, password: password.value })
  // Here you would typically call your login API
}
</script>
<template>
  <div class="container">
    <div class="form-container">
      <h1>Connexion</h1>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="email" placeholder="Email" required type="email" />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe </label>
          <input
            id="password"
            v-model="password"
            placeholder="Mot de passe"
            required
            type="password"
          />
        </div>
        <button type="submit" v-on:click="SubmitForm">Se connecter</button>
      </form>
      <div class="forgot-password">
        <a href="#">Mot de passe oublié?</a>
      </div>
      <div class="register">
        Pas encore de compte ?
        <router-link to="/auth/register">S'inscrire</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  width: 100%;
  padding: 75px;
}

h1 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

input {
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
  padding: 12px 15px;
  width: 100%;
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

input:focus {
  background-color: #fff;
  box-shadow: 0 0 0 2px #a777e3;
}

label {
  color: #777;
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

button {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  width: 100%;
  margin-top: 10px;
}

button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 7px 14px rgba(0, 0, 0, 0.18),
    0 5px 5px rgba(0, 0, 0, 0.12);
}

.forgot-password {
  margin-top: 20px;
  text-align: center;
}

.forgot-password a {
  color: #a777e3;
  text-decoration: none;
  font-size: 14px;
}

.register {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #777;
}

.register a {
  color: #a777e3;
  text-decoration: none;
  font-weight: bold;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    flex-direction: column-reverse;
  }

  .form-container {
    width: 100%;
  }

  button {
    font-size: 14px;
  }
}
</style>
