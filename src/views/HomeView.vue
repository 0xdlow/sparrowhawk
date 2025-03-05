<script setup lang="ts">
// 项目特性列表
const features = [
  {
    id: 'vue',
    icon: "🔧"
  },
  {
    id: 'vite',
    icon: "⚡"
  },
  {
    id: 'pinia',
    icon: "📦"
  },
  {
    id: 'router',
    icon: "🧭"
  },
  {
    id: 'i18n',
    icon: "🌐"
  },
  {
    id: 'api',
    icon: "🔌"
  }
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1 class="title">{{ $t('home.title') }}</h1>
      <p class="subtitle">{{ $t('home.subtitle') }}</p>
      <div class="actions">
        <a href="https://github.com/your-username/sparrowhawk" target="_blank" class="primary-button">
          {{ $t('nav.github') }}
        </a>
        <router-link to="/about" class="secondary-button">
          {{ $t('home.learnMore') }}
        </router-link>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">{{ $t('home.features') }}</h2>
      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ $t(`home.featuresList.${feature.id}.title`) }}</h3>
          <p class="feature-description">{{ $t(`home.featuresList.${feature.id}.description`) }}</p>
        </div>
      </div>
    </section>

    <section class="getting-started">
      <h2 class="section-title">{{ $t('home.gettingStarted') }}</h2>
      <div class="code-block">
        <pre><code># {{ $t('home.cloneRepo') }}
git clone https://github.com/your-username/sparrowhawk.git

# {{ $t('home.installDeps') }}
cd sparrowhawk
npm install

# {{ $t('home.startDevServer') }}
npm run dev</code></pre>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 0;
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-button, .secondary-button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
  text-decoration: none;
}

.primary-button {
  background-color: #4f46e5;
  color: white;
  border: none;
}

.primary-button:hover {
  background-color: #4338ca;
  transform: translateY(-2px);
}

.secondary-button {
  background-color: #f3f4f6;
  color: #4b5563;
  border: 1px solid #e5e7eb;
}

.secondary-button:hover {
  background-color: #e5e7eb;
  color: #1f2937;
  transform: translateY(-2px);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1f2937;
}

.features {
  padding: 0 1rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.feature-description {
  color: #6b7280;
  line-height: 1.5;
}

.getting-started {
  padding: 0 1rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.code-block {
  background-color: #1f2937;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  color: #e5e7eb;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }
  
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.25rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style> 