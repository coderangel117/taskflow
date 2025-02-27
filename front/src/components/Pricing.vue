<script setup lang="ts">
// JavaScript pour la bascule entre les modèles de tarification
import PricingFree from '@/components/icons/PricingFree.vue'
import PricingPay from '@/components/icons/PricingPay.vue'

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtns = document.querySelectorAll('.toggle-btn')

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Mise à jour des boutons
      toggleBtns.forEach((b) => b.classList.remove('active'))
      this.classList.add('active')

      // Mise à jour des sections
      const targetId = this.getAttribute('data-target')
      document.querySelectorAll('.pricing-section').forEach((section) => {
        section.classList.remove('active')
      })
      document.getElementById(targetId + '-section').classList.add('active')
    })
  })

  // Gestion des FAQ
  const faqQuestions = document.querySelectorAll('.faq-question')

  faqQuestions.forEach((question) => {
    question.addEventListener('click', function () {
      this.classList.toggle('active')
    })
  })
})
</script>

<template>
  <div class="container">
    <header>
      <h1>Choisissez le plan qui vous convient</h1>
      <p class="subtitle">Des options flexibles pour tous les besoins de gestion de tâches</p>

      <div class="pricing-toggle">
        <button class="toggle-btn active" data-target="freemium">Modèle Freemium</button>
        <button class="toggle-btn" data-target="paid">Modèle 100% Payant</button>
      </div>
    </header>

    <section id="freemium-section" class="pricing-section active">
      <div class="pricing-intro">
        <h2>Modèle Freemium</h2>
        <p>
          Commencez gratuitement et évoluez avec nous selon vos besoins. Notre plan Free vous permet
          de tester l'application, tandis que nos options Premium et Équipe offrent des
          fonctionnalités avancées pour les professionnels et les entreprises.
        </p>
      </div>

      <div class="svg-container">
        <PricingFree />
      </div>
    </section>

    <section id="paid-section" class="pricing-section">
      <div class="pricing-intro">
        <h2>Modèle 100% Payant</h2>
        <p>
          Des options simplifiées et accessibles avec toutes les fonctionnalités dont vous avez
          besoin. Choisissez entre notre plan Basique économique, notre plan Premium complet ou
          notre plan Équipe pour la collaboration professionnelle.
        </p>
      </div>

      <div class="svg-container">
        <PricingPay />
      </div>
    </section>

    <div class="cta-container">
      <h3 class="cta-title">Prêt à améliorer votre productivité ?</h3>
      <p>
        Commencez dès aujourd'hui et découvrez comment notre application peut transformer votre
        gestion de tâches.
      </p>
      <a href="#" class="cta-btn">Essayer gratuitement</a>
    </div>

    <section class="faq-section">
      <h2 class="faq-title">Questions fréquentes</h2>

      <div class="faq-item">
        <div class="faq-question">Puis-je changer de plan à tout moment ?</div>
        <div class="faq-answer">
          <p>
            Oui, vous pouvez passer d'un plan à l'autre à tout moment. Si vous passez à un plan
            supérieur, la différence sera calculée au prorata. Si vous passez à un plan inférieur,
            le changement prendra effet à la fin de votre cycle de facturation actuel.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          Y a-t-il une limite au nombre d'utilisateurs pour le plan Équipe ?
        </div>
        <div class="faq-answer">
          <p>
            Non, il n'y a pas de limite au nombre d'utilisateurs que vous pouvez ajouter au plan
            Équipe. Nous proposons des tarifs dégressifs en fonction du nombre d'utilisateurs pour
            rendre notre solution accessible aux équipes de toutes tailles.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">Proposez-vous un essai gratuit pour les plans payants ?</div>
        <div class="faq-answer">
          <p>
            Oui, nous offrons un essai gratuit de 14 jours pour tous nos plans payants. Vous pouvez
            explorer toutes les fonctionnalités sans engagement et sans avoir à fournir vos
            informations de paiement.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">Quels moyens de paiement acceptez-vous ?</div>
        <div class="faq-answer">
          <p>
            Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, et
            pour les plans Équipe, nous pouvons également proposer le paiement par virement
            bancaire.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:root {
  --primary-color: #4361ee;
  --secondary-color: #5b9bd5;
  --light-bg: #f8f9fa;
  --border-color: #ddd;
  --text-color: #333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Arial, sans-serif;
}

body {
  line-height: 1.6;
  color: var(--text-color);
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  padding: 40px 0;
}

h1 {
  font-size: 36px;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.pricing-toggle {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.toggle-btn {
  background-color: #fff;
  border: 1px solid var(--primary-color);
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.toggle-btn:first-child {
  border-radius: 4px 0 0 4px;
}

.toggle-btn:last-child {
  border-radius: 0 4px 4px 0;
}

.toggle-btn.active {
  background-color: var(--primary-color);
  color: white;
}

.pricing-section {
  margin-bottom: 60px;
  display: none;
}

.pricing-section.active {
  display: block;
}

.pricing-intro {
  text-align: center;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.svg-container {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 30px;
}

.svg-pricing {
  width: 100%;
  max-width: 950px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.cta-container {
  text-align: center;
  margin-top: 50px;
  padding: 40px 0;
  background-color: var(--light-bg);
  border-radius: 8px;
}

.cta-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.cta-btn {
  display: inline-block;
  background-color: #4361ee;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.cta-btn:hover {
  background-color: #3a76d8;
}

.faq-section {
  margin-top: 60px;
}

.faq-title {
  text-align: center;
  margin-bottom: 30px;
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.faq-question {
  padding: 15px 20px;
  background-color: var(--light-bg);
  font-weight: 600;
  cursor: pointer;
  position: relative;
}

.faq-question::after {
  content: '+';
  position: absolute;
  right: 20px;
  transition: transform 0.3s ease;
}

.faq-question.active::after {
  content: '-';
}

.faq-answer {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;
}

.faq-question.active + .faq-answer {
  padding: 15px 20px;
  max-height: 200px;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  h1 {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
  }
}
</style>
