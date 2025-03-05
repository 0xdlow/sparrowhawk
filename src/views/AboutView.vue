<script setup lang="ts">
// 技术栈信息
const techStack = [
  {
    name: "Vue.js 3",
    description: "{{ $t('about.techStack.vue.description') }}",
    link: "https://vuejs.org/"
  },
  {
    name: "TypeScript",
    description: "{{ $t('about.techStack.typescript.description') }}",
    link: "https://www.typescriptlang.org/"
  },
  {
    name: "Vite",
    description: "{{ $t('about.techStack.vite.description') }}",
    link: "https://vitejs.dev/"
  },
  {
    name: "Pinia",
    description: "{{ $t('about.techStack.pinia.description') }}",
    link: "https://pinia.vuejs.org/"
  },
  {
    name: "Vue Router",
    description: "{{ $t('about.techStack.router.description') }}",
    link: "https://router.vuejs.org/"
  },
  {
    name: "Vue I18n",
    description: "{{ $t('about.techStack.i18n.description') }}",
    link: "https://vue-i18n.intlify.dev/"
  }
]

// 项目结构信息
const projectStructure = [
  {
    name: "src/api",
    description: "{{ $t('about.projectStructure.api') }}"
  },
  {
    name: "src/assets",
    description: "{{ $t('about.projectStructure.assets') }}"
  },
  {
    name: "src/components",
    description: "{{ $t('about.projectStructure.components') }}"
  },
  {
    name: "src/config",
    description: "{{ $t('about.projectStructure.config') }}"
  },
  {
    name: "src/layouts",
    description: "{{ $t('about.projectStructure.layouts') }}"
  },
  {
    name: "src/locales",
    description: "{{ $t('about.projectStructure.locales') }}"
  },
  {
    name: "src/routes",
    description: "{{ $t('about.projectStructure.routes') }}"
  },
  {
    name: "src/stores",
    description: "{{ $t('about.projectStructure.stores') }}"
  },
  {
    name: "src/utils",
    description: "{{ $t('about.projectStructure.utils') }}"
  },
  {
    name: "src/views",
    description: "{{ $t('about.projectStructure.views') }}"
  }
]
</script>

<template>
  <div class="about">
    <section class="about-section">
      <h1 class="page-title">{{ $t('about.title') }}</h1>
      <p class="description">
        {{ $t('about.description1') }}
      </p>
      <p class="description">
        {{ $t('about.description2') }}
      </p>
    </section>

    <section class="about-section">
      <h2 class="section-title">{{ $t('about.techStack.title') }}</h2>
      <div class="tech-stack">
        <div v-for="(tech, index) in techStack" :key="index" class="tech-item">
          <h3 class="tech-name">
            <a :href="tech.link" target="_blank" rel="noopener">{{ tech.name }}</a>
          </h3>
          <p class="tech-description">{{ $t(`about.techStack.${tech.name.toLowerCase().replace('.js', '').replace(' ', '')}.description`) }}</p>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2 class="section-title">{{ $t('about.projectStructure.title') }}</h2>
      <div class="project-structure">
        <div v-for="(item, index) in projectStructure" :key="index" class="structure-item">
          <h3 class="structure-name">{{ item.name }}</h3>
          <p class="structure-description">{{ $t(`about.projectStructure.${item.name.split('/')[1]}`) }}</p>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2 class="section-title">{{ $t('about.developmentGuide') }}</h2>
      <div class="development-guide">
        <h3>{{ $t('about.installDeps') }}</h3>
        <div class="code-block">
          <pre><code>npm install</code></pre>
        </div>

        <h3>{{ $t('about.devServer') }}</h3>
        <div class="code-block">
          <pre><code>npm run dev</code></pre>
        </div>

        <h3>{{ $t('about.buildProd') }}</h3>
        <div class="code-block">
          <pre><code>npm run build</code></pre>
        </div>

        <h3>{{ $t('about.codeCheck') }}</h3>
        <div class="code-block">
          <pre><code>npm run lint</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-section {
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #1f2937;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #374151;
}

.description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 1rem;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 1.25rem;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tech-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
}

.tech-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.tech-name a {
  color: #4f46e5;
  text-decoration: none;
  transition: color 0.2s;
}

.tech-name a:hover {
  color: #4338ca;
  text-decoration: underline;
}

.tech-description {
  color: #6b7280;
  font-size: 0.95rem;
}

.project-structure {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.structure-item {
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e5e7eb;
}

.structure-name {
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  color: #4f46e5;
  margin-bottom: 0.5rem;
}

.structure-description {
  color: #6b7280;
  font-size: 0.9rem;
}

.development-guide h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
  color: #374151;
}

.code-block {
  background-color: #1f2937;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
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
  .tech-stack, .project-structure {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style> 