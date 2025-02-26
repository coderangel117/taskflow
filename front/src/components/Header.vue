<script setup lang="ts">
        import { onMounted } from 'vue';
        
        // Toggle menu for mobile navigation
        const toggleMenu = () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('nav ul');
            
            if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                });
            }
        }
        onMounted(toggleMenu);
</script>

<template>
        <!-- Header and Navigation -->
        <header>
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">
                    <span class="logo-icon">✓</span>
                    TaskMatrix
                </a>
                
                <div class="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <nav>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Fonctionnalités</a></li>
                        <li><a href="#">Tarifs</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                
                <button class="cta-button">Essayer gratuitement</button>
            </div>
        </div>
    </header>
</template>
<style scoped>

/* Header & Navigation */
header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    color: var(--primary);
    text-decoration: none;
}

.logo-icon {
    margin-right: 10px;
    font-size: 28px;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: var(--primary);
}

</style>