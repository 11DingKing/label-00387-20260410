<script setup lang="ts">
import { ref, watch } from 'vue'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/about', label: '关于', icon: '📖' },
  { path: '/gallery', label: '图库', icon: '🖼️' },
  { path: '/seo-test', label: 'SEO', icon: '🔍' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(() => route.path, () => {
  closeMenu()
})
</script>

<template>
  <div class="app-layout">
    <!-- 头部导航 -->
    <header class="header">
      <div class="header-inner">
        <NuxtLink to="/" class="logo">
          <div class="logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
              <path d="M12 20L18 14L24 20L18 26L12 20Z" fill="white" opacity="0.9"/>
              <path d="M18 14L24 20L30 14L24 8L18 14Z" fill="white" opacity="0.7"/>
              <path d="M24 20L30 26L24 32L18 26L24 20Z" fill="white" opacity="0.5"/>
              <defs>
                <linearGradient id="logo-gradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3b82f6"/>
                  <stop offset="1" stop-color="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">Nuxt4 Demo</span>
        </NuxtLink>

        <!-- 桌面端导航 -->
        <nav class="nav nav-desktop">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: route.path === item.path }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="header-actions">
          <a href="https://github.com" target="_blank" class="github-link">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          
          <!-- 移动端菜单按钮 -->
          <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
            <span class="menu-bar"></span>
            <span class="menu-bar"></span>
            <span class="menu-bar"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- 移动端导航菜单 -->
    <Transition name="slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <nav class="nav-mobile">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-mobile-link"
            :class="{ active: route.path === item.path }"
            @click="closeMenu"
          >
            <span class="nav-mobile-icon">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </NuxtLink>
        </nav>
      </div>
    </Transition>
    
    <!-- 遮罩层 -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
    </Transition>

    <!-- 主内容 -->
    <main class="main">
      <slot />
    </main>

    <!-- 底部 -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
              <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#footer-gradient)"/>
              <path d="M12 20L18 14L24 20L18 26L12 20Z" fill="white" opacity="0.9"/>
              <path d="M18 14L24 20L30 14L24 8L18 14Z" fill="white" opacity="0.7"/>
              <path d="M24 20L30 26L24 32L18 26L24 20Z" fill="white" opacity="0.5"/>
              <defs>
                <linearGradient id="footer-gradient" x1="4" y1="4" x2="36" y2="36">
                  <stop stop-color="#3b82f6"/>
                  <stop offset="1" stop-color="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="footer-logo-text">Nuxt4 Demo</span>
        </div>
        <p class="footer-copyright">© 2026 All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 移除移动端点击高亮 */
* {
  -webkit-tap-highlight-color: transparent;
}

/* ===== Header ===== */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  height: var(--header-height);
}

.header-inner {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: transform var(--transition-fast);
}

.logo:hover {
  transform: translateY(-1px);
}

.logo-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.logo-icon svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop Nav */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.nav-link {
  padding: 8px 16px;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.nav-link.active {
  color: var(--color-primary);
  background: rgba(59, 130, 246, 0.08);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.github-link:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

/* Menu Toggle Button */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 5px;
}

.menu-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle.active .menu-bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active .menu-bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .menu-bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: var(--header-height);
  right: 0;
  width: 280px;
  max-width: 85vw;
  height: calc(100vh - var(--header-height));
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border);
  z-index: 99;
  overflow-y: auto;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
}

.nav-mobile {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.nav-mobile-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 1rem;
  font-weight: 500;
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.nav-mobile-link:hover,
.nav-mobile-link.active {
  color: var(--color-primary);
  background: rgba(59, 130, 246, 0.08);
}

.nav-mobile-icon {
  font-size: 1.25rem;
}

/* Menu Overlay */
.menu-overlay {
  position: fixed;
  inset: 0;
  top: var(--header-height);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 98;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ===== Main ===== */
.main {
  flex: 1;
}

/* ===== Footer ===== */
.footer {
  background: var(--color-bg-primary);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg) 0;
}

.footer-inner {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo {
  display: flex;
  align-items: center;
  filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
}

.footer-logo-text {
  font-size: 1.125rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.footer-copyright {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .logo-text {
    font-size: 1.125rem;
  }
  
  .logo-icon {
    width: 32px;
    height: 32px;
  }
  
  .footer-inner {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
  
  .footer-brand {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .header-inner {
    padding: 0 var(--spacing-sm);
  }
  
  .github-link {
    width: 36px;
    height: 36px;
  }
  
  .github-link svg {
    width: 20px;
    height: 20px;
  }
}
</style>
