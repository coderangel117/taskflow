<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 680">
    <!-- Title -->
    <text x="475" y="30" text-anchor="middle" class="title">
      Plans de tarification - Modèle Freemium
    </text>

    <!-- Headers -->
    <rect x="50" y="50" width="200" height="40" class="header" />
    <rect x="250" y="50" width="200" height="40" class="header" />
    <rect x="450" y="50" width="200" height="40" class="header" />
    <rect x="650" y="50" width="200" height="40" class="header" />

    <text x="150" y="75" text-anchor="middle" class="header-text">Caractéristiques</text>
    <text x="350" y="75" text-anchor="middle" class="header-text">Plan Gratuit ("Free")</text>
    <text x="550" y="75" text-anchor="middle" class="header-text">Plan Pro ("Premium")</text>
    <text x="750" y="75" text-anchor="middle" class="header-text">Plan Équipe / Entreprise</text>

    <!-- Rows -->
    <!-- Row 1: Tarif -->
    <rect x="50" y="90" width="200" height="50" class="row-odd" />
    <rect x="250" y="90" width="200" height="50" class="row-odd" />
    <rect x="450" y="90" width="200" height="50" class="row-odd" />
    <rect x="650" y="90" width="200" height="50" class="row-odd" />

    <text x="70" y="115" class="cell-title">Tarif</text>
    <text x="350" y="115" text-anchor="middle" class="cell-text">Gratuit</text>
    <text x="550" y="108" text-anchor="middle" class="cell-text">9,99 € - 12 €/mois</text>
    <text x="550" y="125" text-anchor="middle" class="cell-text">100 € - 120 €/an</text>
    <text x="750" y="108" text-anchor="middle" class="cell-text">
      29,99 € - 39 €/mois par utilisateur
    </text>
    <text x="750" y="125" text-anchor="middle" class="cell-text">(tarif dégressif)</text>

    <!-- Row 2: Gestion de tâches -->
    <rect x="50" y="140" width="200" height="40" class="row-even" />
    <rect x="250" y="140" width="200" height="40" class="row-even" />
    <rect x="450" y="140" width="200" height="40" class="row-even" />
    <rect x="650" y="140" width="200" height="40" class="row-even" />

    <text x="70" y="165" class="cell-title">Gestion de tâches</text>
    <text x="350" y="165" text-anchor="middle" class="cell-text">Limitée (50 tâches actives)</text>
    <text x="550" y="165" text-anchor="middle" class="cell-text">Illimitée</text>
    <text x="750" y="165" text-anchor="middle" class="cell-text">Illimitée</text>

    <!-- Row 3: Vues -->
    <rect x="50" y="180" width="200" height="50" class="row-odd" />
    <rect x="250" y="180" width="200" height="50" class="row-odd" />
    <rect x="450" y="180" width="200" height="50" class="row-odd" />
    <rect x="650" y="180" width="200" height="50" class="row-odd" />

    <text x="70" y="205" class="cell-title">Vues</text>
    <text x="350" y="198" text-anchor="middle" class="cell-text">Eisenhower et Kanban</text>
    <text x="350" y="215" text-anchor="middle" class="cell-text">(options limitées)</text>
    <text x="550" y="198" text-anchor="middle" class="cell-text">Toutes les vues avec</text>
    <text x="550" y="215" text-anchor="middle" class="cell-text">personnalisation complète</text>
    <text x="750" y="198" text-anchor="middle" class="cell-text">Toutes les vues avec</text>
    <text x="750" y="215" text-anchor="middle" class="cell-text">personnalisation complète</text>

    <!-- Row 4: Calendrier -->
    <rect x="50" y="230" width="200" height="40" class="row-even" />
    <rect x="250" y="230" width="200" height="40" class="row-even" />
    <rect x="450" y="230" width="200" height="40" class="row-even" />
    <rect x="650" y="230" width="200" height="40" class="row-even" />

    <text x="70" y="255" class="cell-title">Calendrier</text>
    <text x="350" y="255" text-anchor="middle" class="cell-text">Affichage basique</text>
    <text x="550" y="255" text-anchor="middle" class="cell-text">Complet et personnalisable</text>
    <text x="750" y="255" text-anchor="middle" class="cell-text">Complet et personnalisable</text>

    <!-- Row 5: Notifications -->
    <rect x="50" y="270" width="200" height="40" class="row-odd" />
    <rect x="250" y="270" width="200" height="40" class="row-odd" />
    <rect x="450" y="270" width="200" height="40" class="row-odd" />
    <rect x="650" y="270" width="200" height="40" class="row-odd" />

    <text x="70" y="295" class="cell-title">Notifications</text>
    <text x="350" y="295" text-anchor="middle" class="cell-text">Basiques</text>
    <text x="550" y="295" text-anchor="middle" class="cell-text">Avancées</text>
    <text x="750" y="295" text-anchor="middle" class="cell-text">Avancées</text>

    <!-- Row 6: Historique -->
    <rect x="50" y="310" width="200" height="40" class="row-even" />
    <rect x="250" y="310" width="200" height="40" class="row-even" />
    <rect x="450" y="310" width="200" height="40" class="row-even" />
    <rect x="650" y="310" width="200" height="40" class="row-even" />

    <text x="70" y="335" class="cell-title">Historique</text>
    <text x="350" y="335" text-anchor="middle" class="cell-text">Limité</text>
    <text x="550" y="335" text-anchor="middle" class="cell-text">Complet</text>
    <text x="750" y="335" text-anchor="middle" class="cell-text">Complet</text>

    <!-- Row 7: Personnalisation -->
    <rect x="50" y="350" width="200" height="50" class="row-odd" />
    <rect x="250" y="350" width="200" height="50" class="row-odd" />
    <rect x="450" y="350" width="200" height="50" class="row-odd" />
    <rect x="650" y="350" width="200" height="50" class="row-odd" />

    <text x="70" y="375" class="cell-title">Personnalisation</text>
    <text x="350" y="375" font-size="13" text-anchor="middle" class="cell-text">Basique</text>
    <text x="550" y="375" font-size="13" text-anchor="middle" class="cell-text">Avancée</text>
    <text x="550" y="390" font-size="13" text-anchor="middle" class="cell-text">
      (thèmes, couleurs, mise en page)
    </text>

    <text x="750" y="375" font-size="13" text-anchor="middle" class="cell-text">Avancée</text>
    <text x="750" y="390" font-size="13" text-anchor="middle" class="cell-text">
      (thèmes, couleurs, mise en page)
    </text>

    <!-- Row 8: Collaboration -->
    <rect x="50" y="400" width="200" height="40" class="row-even" />
    <rect x="250" y="400" width="200" height="40" class="row-even" />
    <rect x="450" y="400" width="200" height="40" class="row-even" />
    <rect x="650" y="400" width="200" height="40" class="row-even" />

    <text x="70" y="425" class="cell-title">Collaboration</text>
    <!-- Cross -->
    <text x="350" y="425" text-anchor="middle" class="cross">✗</text>
    <!-- Cross -->
    <text x="550" y="425" text-anchor="middle" class="cross">✗</text>
    <!-- Check -->
    <text x="750" y="425" font-size="13" text-anchor="middle" class="check">
      ✓ Temps réel et partage de tâches
    </text>

    <!-- Row 9: Gestion des rôles -->
    <rect x="50" y="440" width="200" height="40" class="row-odd" />
    <rect x="250" y="440" width="200" height="40" class="row-odd" />
    <rect x="450" y="440" width="200" height="40" class="row-odd" />
    <rect x="650" y="440" width="200" height="40" class="row-odd" />

    <text x="70" y="465" class="cell-title">Gestion des rôles</text>
    <!-- Cross -->
    <text x="350" y="465" text-anchor="middle" class="cross">✗</text>
    <!-- Cross -->
    <text x="550" y="465" text-anchor="middle" class="cross">✗</text>
    <!-- Check -->
    <text x="750" y="465" font-size="13" text-anchor="middle" class="check">
      ✓ Permissions personnalisables
    </text>

    <!-- Row 10: Intégrations -->
    <rect x="50" y="480" width="200" height="40" class="row-even" />
    <rect x="250" y="480" width="200" height="40" class="row-even" />
    <rect x="450" y="480" width="200" height="40" class="row-even" />
    <rect x="650" y="480" width="200" height="40" class="row-even" />

    <text x="70" y="505" class="cell-title">Intégrations</text>
    <!-- Cross -->
    <text x="350" y="505" text-anchor="middle" class="cross">✗</text>
    <text x="550" y="505" text-anchor="middle" class="cell-text">Basiques</text>
    <text x="750" y="505" text-anchor="middle" class="cell-text">
      Avancées (calendriers externes, outils)
    </text>

    <!-- Row 11: Analytics -->
    <rect x="50" y="520" width="200" height="40" class="row-odd" />
    <rect x="250" y="520" width="200" height="40" class="row-odd" />
    <rect x="450" y="520" width="200" height="40" class="row-odd" />
    <rect x="650" y="520" width="200" height="40" class="row-odd" />

    <text x="70" y="545" class="cell-title">Analytics</text>
    <!-- Cross -->
    <text x="350" y="545" text-anchor="middle" class="cross">✗</text>
    <text x="550" y="545" text-anchor="middle" class="cell-text">Basiques</text>
    <text x="750" y="545" text-anchor="middle" class="cell-text">Rapports détaillés</text>

    <!-- Row 12: Support -->
    <rect x="50" y="560" width="200" height="40" class="row-even" />
    <rect x="250" y="560" width="200" height="40" class="row-even" />
    <rect x="450" y="560" width="200" height="40" class="row-even" />
    <rect x="650" y="560" width="200" height="40" class="row-even" />

    <text x="70" y="585" class="cell-title">Support</text>
    <text x="350" y="585" text-anchor="middle" class="cell-text">Standard</text>
    <text x="550" y="585" text-anchor="middle" class="cell-text">Prioritaire</text>
    <text x="750" y="585" text-anchor="middle" class="cell-text">
      Dédié avec formation personnalisée
    </text>

    <!-- Row 13: Public cible -->
    <rect x="50" y="600" width="200" height="50" class="row-odd" />
    <rect x="250" y="600" width="200" height="50" class="row-odd" />
    <rect x="450" y="600" width="200" height="50" class="row-odd" />
    <rect x="650" y="600" width="200" height="50" class="row-odd" />

    <text x="70" y="625" class="cell-title">Public cible</text>
    <text x="350" y="618" text-anchor="middle" class="cell-text">Utilisateurs individuels</text>
    <text x="350" y="635" text-anchor="middle" class="cell-text">avec besoins modestes</text>
    <text x="550" y="618" text-anchor="middle" class="cell-text">Utilisateurs individuels</text>
    <text x="550" y="635" text-anchor="middle" class="cell-text">ou freelances</text>
    <text x="750" y="618" text-anchor="middle" class="cell-text">Petites et moyennes équipes</text>
    <text x="750" y="635" text-anchor="middle" class="cell-text">ou entreprises</text>

    <!-- Table Borders -->
    <rect x="50" y="50" width="800" height="600" class="table-border" />
    <!-- Vertical lines -->
    <line x1="250" y1="50" x2="250" y2="650" stroke="#ddd" />
    <line x1="450" y1="50" x2="450" y2="650" stroke="#ddd" />
    <line x1="650" y1="50" x2="650" y2="650" stroke="#ddd" />
    <!-- Horizontal lines -->
    <line x1="50" y1="90" x2="850" y2="90" stroke="#ddd" />
    <line x1="50" y1="140" x2="850" y2="140" stroke="#ddd" />
    <line x1="50" y1="180" x2="850" y2="180" stroke="#ddd" />
    <line x1="50" y1="230" x2="850" y2="230" stroke="#ddd" />
    <line x1="50" y1="270" x2="850" y2="270" stroke="#ddd" />
    <line x1="50" y1="310" x2="850" y2="310" stroke="#ddd" />
    <line x1="50" y1="350" x2="850" y2="350" stroke="#ddd" />
    <line x1="50" y1="400" x2="850" y2="400" stroke="#ddd" />
    <line x1="50" y1="440" x2="850" y2="440" stroke="#ddd" />
    <line x1="50" y1="480" x2="850" y2="480" stroke="#ddd" />
    <line x1="50" y1="520" x2="850" y2="520" stroke="#ddd" />
    <line x1="50" y1="560" x2="850" y2="560" stroke="#ddd" />
    <line x1="50" y1="600" x2="850" y2="600" stroke="#ddd" />
  </svg>
</template>
<!-- Styles -->
<style>
.table-border {
  fill: none;
  stroke: #ddd;
  stroke-width: 1;
}

.header {
  fill: #4a86e8;
}

.row-even {
  fill: #f8f9fa;
}

.row-odd {
  fill: white;
}

.header-text {
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  fill: white;
}

.cell-text {
  font-family: Arial, sans-serif;
  font-size: 12px;
  fill: #333;
}

.cell-title {
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  fill: #333;
}

.check {
  fill: #4caf50;
}

.cross {
  fill: #f44336;
}

.title {
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  fill: #333;
}
</style>
