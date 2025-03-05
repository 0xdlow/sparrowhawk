<script setup lang="ts">
import AppNavbar from '../components/AppNavbar.vue'
</script>

<template>
  <div class="main-layout">
    <header>
      <AppNavbar />
    </header>
    
    <main>
      <div class="content-container">
        <slot></slot>
      </div>
    </main>
    
    <footer>
      <div class="footer-content">
        <div class="footer-links">
          <a href="https://vuejs.org" target="_blank">{{ $t('footer.links.vue') }}</a>
          <a href="https://vitejs.dev" target="_blank">{{ $t('footer.links.vite') }}</a>
          <a href="https://pinia.vuejs.org" target="_blank">{{ $t('footer.links.pinia') }}</a>
          <a href="https://router.vuejs.org" target="_blank">{{ $t('footer.links.router') }}</a>
        </div>
        <p class="copyright">{{ $t('common.copyright', { year: new Date().getFullYear() }) }}</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  border-bottom: 1px solid #e5e7eb;
}

main {
  flex: 1;
  padding: 2rem 0;
  background-color: #f9fafb;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

footer {
  padding: 2rem 0;
  border-top: 1px solid #e5e7eb;
  background-color: white;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  color: #6b7280;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #4f46e5;
}

.copyright {
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 640px) {
  main {
    padding: 1.5rem 0;
  }
  
  .content-container {
    padding: 0 1rem;
  }
  
  .footer-content {
    padding: 0 1rem;
  }
  
  .footer-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style> 