<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/" class="brand-link">
          <span class="brand-icon">🦅</span>
          <span class="brand-name">Sparrowhawk</span>
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="nav-link" active-class="active">
            {{ $t("nav.home") }}
          </router-link>
          <router-link to="/about" class="nav-link" active-class="active">
            {{ $t("nav.about") }}
          </router-link>
        </div>

        <div class="navbar-end">
          <a href="https://github.com/your-username/sparrowhawk" target="_blank" class="github-link">
            <svg class="github-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <div class="language-switcher">
            <button @click="toggleLanguage" class="language-button">
              {{ $t("common.switchLanguage") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import {ref, onUnmounted} from "vue"
  import {useI18n} from "vue-i18n"

  const {locale} = useI18n();

  const toggleLanguage = () => {
    locale.value = locale.value === "en-US" ? "zh-CN" : "en-US"
    localStorage.setItem("language", locale.value)
  }

  // 组件卸载时清理全局监听器
  onUnmounted(() => {
    document.removeEventListener("click", closeDropdown)
  })

  // 点击页面其他地方关闭下拉菜单
  const showUserDropdown = ref(false)
  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest(".user-menu")) {
      showUserDropdown.value = false
    }
  }

  // 添加全局点击事件监听器
  document.addEventListener("click", closeDropdown)
</script>

<style scoped>
  .navbar {
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    height: 64px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  .brand-link {
    color: #4f46e5;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .brand-icon {
    font-size: 1.75rem;
  }

  .brand-name {
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .navbar-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-left: 2rem;
  }

  .navbar-start, .navbar-end {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-link {
    color: #4b5563;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    background-color: #f3f4f6;
    color: #4f46e5;
  }

  .nav-link.active {
    color: #4f46e5;
    background-color: rgba(79, 70, 229, 0.08);
    font-weight: 600;
  }

  .github-link {
    display: flex;
    align-items: center;
    color: #4b5563;
    transition: color 0.2s;
  }

  .github-link:hover {
    color: #24292e;
  }

  .github-icon {
    width: 24px;
    height: 24px;
  }

  .language-switcher {
    margin-left: 1rem;
  }

  .language-button {
    background-color: #f3f4f6;
    border: none;
    color: #4b5563;
    cursor: pointer;
    padding: 0.4rem 0.8rem;
    font-size: 0.875rem;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .language-button:hover {
    background-color: #e5e7eb;
    color: #4f46e5;
  }

  @media (max-width: 640px) {
    .navbar-container {
      padding: 0 1rem;
    }
    
    .brand-name {
      display: none;
    }
    
    .navbar-menu {
      margin-left: 0.5rem;
    }
    
    .nav-link {
      padding: 0.5rem 0.75rem;
    }
  }
</style>
