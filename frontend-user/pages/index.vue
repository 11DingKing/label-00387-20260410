<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Feature {
  icon: string
  title: string
  description: string
  color: string
  link: string
}

const features: Feature[] = [
  { icon: '⚡', title: 'Nuxt 4', description: '最新版本框架，极致的开发体验与性能优化', color: '#3b82f6', link: 'https://nuxt.com' },
  { icon: '🎨', title: 'Element Plus', description: '企业级 Vue 3 组件库，开箱即用', color: '#06b6d4', link: 'https://element-plus.org' },
  { icon: '🔍', title: 'SEO 优化', description: '自动生成 sitemap、robots.txt 和 meta 标签', color: '#10b981', link: '/seo-test' },
  { icon: '🖼️', title: '图片优化', description: '自动转换 WebP/AVIF，响应式加载', color: '#0ea5e9', link: '/gallery' }
]

const stats = [
  { value: '4.2.2', label: 'Nuxt 版本', icon: '🚀' },
  { value: '100%', label: 'TypeScript', icon: '📘' },
  { value: '5+', label: '核心模块', icon: '📦' },
  { value: '∞', label: '可能性', icon: '✨' }
]

const isVisible = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

onMounted(() => {
  isVisible.value = true
  document.addEventListener('mousemove', (e) => {
    mouseX.value = (e.clientX / window.innerWidth - 0.5) * 20
    mouseY.value = (e.clientY / window.innerHeight - 0.5) * 20
  })
})

useSeoMeta({
  title: '首页 - Nuxt4 Element Plus Demo',
  description: '基于 Nuxt 4、Element Plus、@nuxtjs/seo 和 @nuxt/image 构建的现代化响应式网站'
})
</script>

<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <section class="hero">
      <!-- 动态背景 -->
      <div class="hero-bg">
        <div class="gradient-orb orb-1" :style="{ transform: `translate(${mouseX}px, ${mouseY}px)` }"></div>
        <div class="gradient-orb orb-2" :style="{ transform: `translate(${-mouseX}px, ${-mouseY}px)` }"></div>
        <div class="gradient-orb orb-3" :style="{ transform: `translate(${mouseX * 0.5}px, ${-mouseY * 0.5}px)` }"></div>
        <div class="grid-pattern"></div>
      </div>

      <div class="container">
        <div class="hero-content" :class="{ visible: isVisible }">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>🚀 Nuxt 4 正式发布</span>
          </div>
          <h1 class="hero-title">
            构建现代化
            <span class="highlight">
              <span class="highlight-text">全栈应用</span>
              <svg class="highlight-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,8 T200,6" stroke="url(#gradient)" stroke-width="4" fill="none"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#3b82f6"/>
                    <stop offset="100%" style="stop-color:#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p class="hero-desc">
            基于 Nuxt 4 + Element Plus 的企业级开发模板，<br>
            集成 SEO 优化与图片处理，开箱即用。
          </p>
          <div class="hero-actions">
            <NuxtLink to="/about" class="btn-primary-link">
              <span>快速开始</span>
              <span class="btn-arrow">→</span>
            </NuxtLink>
            <a href="https://nuxt.com/docs" target="_blank" class="btn-secondary-link">
              查看文档
            </a>
          </div>
          
          <!-- 技术标签 -->
          <div class="tech-tags">
            <span class="tech-tag">Vue 3</span>
            <span class="tech-tag">TypeScript</span>
            <span class="tech-tag">Vite</span>
            <span class="tech-tag">SSR</span>
          </div>
        </div>

        <!-- 统计数据 -->
        <div class="stats-container" :class="{ visible: isVisible }">
          <div class="stats-grid">
            <div v-for="(stat, index) in stats" :key="stat.label" class="stat-item" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <!-- 功能特性 -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">功能</span>
          <h2 class="section-title">核心功能</h2>
          <p class="section-desc">一站式解决方案，满足现代 Web 开发需求</p>
        </div>

        <div class="features-grid">
          <NuxtLink 
            v-for="(feature, index) in features" 
            :key="feature.title" 
            :to="feature.link.startsWith('http') ? feature.link : feature.link"
            :target="feature.link.startsWith('http') ? '_blank' : undefined"
            :external="feature.link.startsWith('http')"
            class="feature-card"
            :style="{ '--accent-color': feature.color, animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-glow"></div>
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
            <div class="feature-link">
              了解更多 <span>→</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 代码展示区 -->
    <section class="code-showcase">
      <div class="container">
        <div class="showcase-grid">
          <div class="showcase-content">
            <span class="section-badge">简单易用</span>
            <h2 class="showcase-title">几行代码，即刻启动</h2>
            <p class="showcase-desc">
              无需复杂配置，克隆项目后即可开始开发。
              所有模块已预配置完成，专注于业务逻辑。
            </p>
            <ul class="showcase-list">
              <li><span class="check">✓</span> 自动导入组件和 API</li>
              <li><span class="check">✓</span> 文件系统路由</li>
              <li><span class="check">✓</span> 服务端渲染开箱即用</li>
              <li><span class="check">✓</span> 热模块替换</li>
            </ul>
          </div>
          <div class="showcase-code">
            <div class="code-window">
              <div class="code-header">
                <div class="code-dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="code-filename">nuxt.config.ts</span>
              </div>
              <pre class="code-content"><code><span class="code-keyword">export default</span> <span class="code-function">defineNuxtConfig</span>({
  <span class="code-property">modules</span>: [
    <span class="code-string">'@element-plus/nuxt'</span>,
    <span class="code-string">'@nuxt/image'</span>,
    <span class="code-string">'@nuxtjs/seo'</span>
  ],
  <span class="code-property">site</span>: {
    <span class="code-property">url</span>: <span class="code-string">'https://example.com'</span>,
    <span class="code-property">name</span>: <span class="code-string">'My App'</span>
  }
})</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 响应式演示 -->
    <section class="responsive-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">响应式</span>
          <h2 class="section-title">完美适配各种设备</h2>
          <p class="section-desc">基于 Element Plus 栅格系统，从移动端到桌面端无缝适配</p>
        </div>

        <div class="devices-showcase">
          <div class="device device-mobile">
            <div class="device-frame">
              <div class="device-screen">
                <div class="mock-header"></div>
                <div class="mock-content">
                  <div class="mock-card"></div>
                  <div class="mock-card"></div>
                </div>
              </div>
            </div>
            <span class="device-label">移动端</span>
          </div>
          <div class="device device-tablet">
            <div class="device-frame">
              <div class="device-screen">
                <div class="mock-header"></div>
                <div class="mock-content">
                  <div class="mock-card"></div>
                  <div class="mock-card"></div>
                  <div class="mock-card"></div>
                </div>
              </div>
            </div>
            <span class="device-label">平板</span>
          </div>
          <div class="device device-desktop">
            <div class="device-frame">
              <div class="device-screen">
                <div class="mock-header"></div>
                <div class="mock-content">
                  <div class="mock-card"></div>
                  <div class="mock-card"></div>
                  <div class="mock-card"></div>
                  <div class="mock-card"></div>
                </div>
              </div>
            </div>
            <span class="device-label">桌面端</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-bg">
            <div class="cta-grid"></div>
            <div class="cta-orb cta-orb-1"></div>
            <div class="cta-orb cta-orb-2"></div>
            <div class="cta-orb cta-orb-3"></div>
          </div>
          <div class="cta-content">
            <div class="cta-badge">🚀 开始你的项目</div>
            <h2>准备好开始了吗？</h2>
            <p>立即体验 Nuxt 4 带来的全新开发体验，构建现代化 Web 应用</p>
            <div class="cta-actions">
              <NuxtLink to="/about" class="cta-btn-primary">
                <span>立即开始</span>
                <span class="btn-icon">→</span>
              </NuxtLink>
              <a href="https://github.com/nuxt/nuxt" target="_blank" class="cta-btn-ghost">
                <span class="github-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                <span>GitHub</span>
              </a>
            </div>
            <div class="cta-stats">
              <div class="cta-stat">
                <span class="stat-value">4.2.2</span>
                <span class="stat-label">最新版本</span>
              </div>
              <div class="cta-divider"></div>
              <div class="cta-stat">
                <span class="stat-value">MIT</span>
                <span class="stat-label">开源协议</span>
              </div>
              <div class="cta-divider"></div>
              <div class="cta-stat">
                <span class="stat-value">50K+</span>
                <span class="stat-label">GitHub Stars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  overflow-x: hidden;
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 60px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  transition: transform 0.3s ease-out;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  top: -200px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  bottom: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
  letter-spacing: -0.02em;
}

.highlight {
  position: relative;
  display: inline-block;
}

.highlight-text {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 5s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.highlight-underline {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 12px;
  opacity: 0.8;
}

.hero-desc {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-xl);
}

.btn-primary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border: none;
  padding: 0 32px;
  height: 52px;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  transition: all 0.3s ease;
}

.btn-primary-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
}

.btn-arrow {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.btn-primary-link:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-secondary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
  padding: 0 32px;
  height: 52px;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary-link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.tech-tags {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.tech-tag {
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

/* Stats */
.stats-container {
  position: relative;
  z-index: 1;
  margin-top: var(--spacing-2xl);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.stats-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.stat-item:hover {
  background: rgba(59, 130, 246, 0.05);
  transform: translateY(-4px);
}

.stat-icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-top: 4px;
  font-weight: 500;
}

/* ===== Features Section ===== */
.features {
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(180deg, var(--color-bg-secondary) 0%, #fff 100%);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.section-badge {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.02em;
}

.section-desc {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.feature-card {
  position: relative;
  padding: var(--spacing-xl);
  background: #fff;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-color);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: var(--accent-color);
  filter: blur(100px);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover .feature-glow {
  opacity: 0.15;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  transition: transform 0.4s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) translateY(-4px);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.feature-desc {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.feature-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-color);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-link {
  opacity: 1;
  transform: translateY(0);
}

.feature-link span {
  display: inline-block;
  transition: transform 0.3s ease;
}

.feature-link:hover span {
  transform: translateX(4px);
}

/* ===== Code Showcase ===== */
.code-showcase {
  padding: var(--spacing-2xl) 0;
  background: #fff;
}

.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}

.showcase-content {
  padding-right: var(--spacing-xl);
}

.showcase-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin: var(--spacing-md) 0;
  letter-spacing: -0.02em;
}

.showcase-desc {
  font-size: 1.0625rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.showcase-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.showcase-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  font-size: 1rem;
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border);
}

.showcase-list li:last-child {
  border-bottom: none;
}

.check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #fff;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
}

.showcase-code {
  position: relative;
}

.code-window {
  background: #1e1e2e;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: transform 0.5s ease;
}

.code-window:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
}

.code-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-dots {
  display: flex;
  gap: 8px;
}

.code-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-dots span:nth-child(1) { background: #ff5f56; }
.code-dots span:nth-child(2) { background: #ffbd2e; }
.code-dots span:nth-child(3) { background: #27ca40; }

.code-filename {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'SF Mono', Monaco, monospace;
}

.code-content {
  padding: var(--spacing-lg);
  margin: 0;
  overflow-x: auto;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.8;
}

.code-content code {
  color: #cdd6f4;
}

.code-keyword { color: #7dd3fc; }
.code-function { color: #89b4fa; }
.code-property { color: #89dceb; }
.code-string { color: #a6e3a1; }

/* ===== Responsive Section ===== */
.responsive-section {
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(180deg, #fff 0%, var(--color-bg-secondary) 100%);
}

.devices-showcase {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: var(--spacing-xl);
  padding: var(--spacing-xl) 0;
}

.device {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.device-frame {
  background: #1a1a2e;
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
}

.device:hover .device-frame {
  transform: translateY(-10px);
}

.device-screen {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.device-mobile .device-screen {
  width: 120px;
  height: 200px;
}

.device-tablet .device-screen {
  width: 200px;
  height: 260px;
}

.device-desktop .device-screen {
  width: 320px;
  height: 200px;
}

.mock-header {
  height: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
}

.mock-content {
  padding: 12px;
  display: grid;
  gap: 8px;
}

.device-mobile .mock-content {
  grid-template-columns: 1fr;
}

.device-tablet .mock-content {
  grid-template-columns: repeat(2, 1fr);
}

.device-desktop .mock-content {
  grid-template-columns: repeat(4, 1fr);
}

.mock-card {
  height: 40px;
  background: var(--color-bg-tertiary);
  border-radius: 6px;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

.device-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

/* ===== CTA Section ===== */
.cta-section {
  padding: var(--spacing-xl) 0 var(--spacing-2xl);
}

.cta-card {
  position: relative;
  padding: var(--spacing-2xl) var(--spacing-xl);
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cta-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.cta-orb-1 {
  width: 400px;
  height: 400px;
  background: #3b82f6;
  top: -150px;
  right: -100px;
  opacity: 0.25;
  animation: float 8s ease-in-out infinite;
}

.cta-orb-2 {
  width: 300px;
  height: 300px;
  background: #06b6d4;
  bottom: -100px;
  left: 10%;
  opacity: 0.2;
  animation: float 10s ease-in-out infinite reverse;
}

.cta-orb-3 {
  width: 200px;
  height: 200px;
  background: #10b981;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15;
  animation: pulse 6s ease-in-out infinite;
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
}

.cta-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #60a5fa;
  margin-bottom: var(--spacing-lg);
}

.cta-content h2 {
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.02em;
}

.cta-content p {
  font-size: 1.125rem;
  opacity: 0.7;
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-xl);
}

.cta-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: #fff;
  color: #0f172a;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
}

.cta-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
}

.cta-btn-primary .btn-icon {
  transition: transform 0.3s ease;
}

.cta-btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

.cta-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}

.github-icon {
  display: flex;
  align-items: center;
}

.cta-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-stat {
  text-align: center;
}

.cta-stat .stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.cta-stat .stat-label {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
}

.cta-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .showcase-content {
    padding-right: 0;
    text-align: center;
  }
  
  .showcase-list {
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .code-window {
    transform: none;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 60px 0 40px;
  }
  
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hero-desc {
    font-size: 1rem;
  }
  
  .hero-desc br {
    display: none;
  }
  
  .hero-badge {
    padding: 6px 14px;
    font-size: 0.8125rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary-link,
  .btn-secondary-link {
    width: 100%;
    max-width: 280px;
  }
  
  .tech-tags {
    gap: 8px;
  }
  
  .tech-tag {
    padding: 5px 12px;
    font-size: 0.75rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: var(--spacing-md);
    gap: var(--spacing-sm);
  }
  
  .stat-item {
    padding: var(--spacing-sm);
  }
  
  .stat-value {
    font-size: 1.75rem;
  }
  
  .stat-icon {
    font-size: 1.25rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .feature-card {
    padding: var(--spacing-lg);
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-desc {
    font-size: 0.9375rem;
  }
  
  .devices-showcase {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
  }
  
  .device-desktop .device-screen {
    width: 280px;
    height: 175px;
  }
  
  .scroll-indicator {
    display: none;
  }
  
  .cta-card {
    padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .cta-content h2 {
    font-size: 1.5rem;
  }
  
  .cta-content p {
    font-size: 1rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn-primary,
  .cta-btn-ghost {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .cta-stats {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .cta-divider {
    width: 60px;
    height: 1px;
  }
  
  .showcase-title {
    font-size: 1.75rem;
  }
  
  .code-content {
    font-size: 0.8125rem;
    padding: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 0 30px;
  }
  
  .hero-title {
    font-size: 1.875rem;
  }
  
  .highlight-underline {
    bottom: -4px;
    height: 8px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
  
  .stat-label {
    font-size: 0.75rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
  
  .section-header {
    margin-bottom: var(--spacing-lg);
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .device-mobile .device-screen {
    width: 100px;
    height: 170px;
  }
  
  .device-tablet .device-screen {
    width: 160px;
    height: 210px;
  }
  
  .device-desktop .device-screen {
    width: 240px;
    height: 150px;
  }
  
  .cta-content h2 {
    font-size: 1.25rem;
  }
  
  .cta-badge {
    font-size: 0.75rem;
    padding: 6px 14px;
  }
}
</style>
