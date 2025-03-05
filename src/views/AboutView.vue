<script setup lang="ts">
// 技术栈信息
const techStack = [
  {
    name: "Vue.js 3",
    description: "渐进式JavaScript框架",
    link: "https://vuejs.org/"
  },
  {
    name: "TypeScript",
    description: "JavaScript的超集，添加静态类型",
    link: "https://www.typescriptlang.org/"
  },
  {
    name: "Vite",
    description: "下一代前端构建工具",
    link: "https://vitejs.dev/"
  },
  {
    name: "Pinia",
    description: "Vue的状态管理库",
    link: "https://pinia.vuejs.org/"
  },
  {
    name: "Vue Router",
    description: "Vue.js的官方路由",
    link: "https://router.vuejs.org/"
  },
  {
    name: "Vue I18n",
    description: "Vue.js的国际化插件",
    link: "https://vue-i18n.intlify.dev/"
  }
]

// 项目结构信息
const projectStructure = [
  {
    name: "src/api",
    description: "API服务和HTTP客户端配置"
  },
  {
    name: "src/assets",
    description: "静态资源文件（图片、字体等）"
  },
  {
    name: "src/components",
    description: "可复用的Vue组件"
  },
  {
    name: "src/config",
    description: "应用配置文件"
  },
  {
    name: "src/layouts",
    description: "页面布局组件"
  },
  {
    name: "src/locales",
    description: "国际化语言文件"
  },
  {
    name: "src/routes",
    description: "路由配置和守卫"
  },
  {
    name: "src/stores",
    description: "Pinia状态存储"
  },
  {
    name: "src/utils",
    description: "工具函数和辅助方法"
  },
  {
    name: "src/views",
    description: "页面视图组件"
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
      <h2 class="section-title">{{ $t('about.techStack') }}</h2>
      <div class="tech-stack">
        <div v-for="(tech, index) in techStack" :key="index" class="tech-item">
          <h3 class="tech-name">
            <a :href="tech.link" target="_blank" rel="noopener">{{ tech.name }}</a>
          </h3>
          <p class="tech-description">{{ tech.description }}</p>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2 class="section-title">{{ $t('about.projectStructure') }}</h2>
      <div class="project-structure">
        <div v-for="(item, index) in projectStructure" :key="index" class="structure-item">
          <h3 class="structure-name">{{ item.name }}</h3>
          <p class="structure-description">{{ item.description }}</p>
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