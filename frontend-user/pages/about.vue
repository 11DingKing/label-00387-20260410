<script setup lang="ts">
useSeoMeta({
  title: '关于 - Nuxt4 Element Plus Demo',
  description: '了解 Nuxt 4 + Element Plus 项目的技术栈和特性'
})

const techStack = [
  {
    name: 'Nuxt 4',
    version: '4.2.2',
    desc: '基于 Vue 3 的全栈框架，提供 SSR、文件路由、自动导入等特性',
    icon: '⚡'
  },
  {
    name: 'Element Plus',
    version: '2.9.x',
    desc: '企业级 Vue 3 组件库，提供 70+ 高质量组件',
    icon: '🎨'
  },
  {
    name: '@nuxtjs/seo',
    version: '3.1.x',
    desc: '完整的 SEO 解决方案，自动生成 sitemap 和 robots.txt',
    icon: '🔍'
  },
  {
    name: '@nuxt/image',
    version: '1.10.x',
    desc: '图片优化模块，支持 WebP/AVIF 转换和响应式图片',
    icon: '🖼️'
  }
]
</script>

<template>
  <div class="about-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <div class="header-bg">
          <div class="header-orb orb-1"></div>
          <div class="header-orb orb-2"></div>
        </div>
        <div class="header-content">
          <span class="header-badge">
            <span class="badge-icon">📚</span>
            <span>项目介绍</span>
          </span>
          <h1>
            <span class="title-icon">🚀</span>
            关于本项目
          </h1>
          <p>基于最新技术栈构建的现代化 Web 应用模板，开箱即用</p>
        </div>
      </div>

      <!-- 技术栈 -->
      <section class="tech-section">
        <h2 class="section-title">技术栈</h2>
        
        <div class="tech-grid">
          <div v-for="tech in techStack" :key="tech.name" class="tech-card">
            <div class="tech-header">
              <span class="tech-icon">{{ tech.icon }}</span>
              <div class="tech-info">
                <h3>{{ tech.name }}</h3>
                <span class="tech-version">v{{ tech.version }}</span>
              </div>
            </div>
            <p class="tech-desc">{{ tech.desc }}</p>
          </div>
        </div>
      </section>

      <!-- 项目特点 -->
      <section class="features-section">
        <h2 class="section-title">项目特点</h2>
        
        <div class="features-list">
          <div class="feature-item">
            <div class="feature-number">01</div>
            <div class="feature-content">
              <h3>开箱即用</h3>
              <p>预配置好所有模块，克隆即可开始开发，无需繁琐配置</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-number">02</div>
            <div class="feature-content">
              <h3>TypeScript 支持</h3>
              <p>完整的类型定义，享受智能提示和类型检查带来的开发体验</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-number">03</div>
            <div class="feature-content">
              <h3>SEO 友好</h3>
              <p>服务端渲染 + 自动 meta 标签 + sitemap，搜索引擎优化无忧</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-number">04</div>
            <div class="feature-content">
              <h3>性能优化</h3>
              <p>图片自动优化、代码分割、懒加载，确保最佳加载性能</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 快速开始 -->
      <section class="quickstart-section">
        <h2 class="section-title">快速开始</h2>
        
        <div class="code-block">
          <div class="code-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
          </div>
          <pre><code># 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: var(--spacing-xl) 0 var(--spacing-2xl);
}

.page-header {
  position: relative;
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.header-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.header-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  top: -100px;
  right: -50px;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #06b6d4 0%, #10b981 100%);
  bottom: -80px;
  left: -30px;
  animation: float 10s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.header-content {
  position: relative;
  z-index: 1;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #3b82f6;
  margin-bottom: var(--spacing-md);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1);
}

.badge-icon {
  font-size: 1rem;
}

.page-header h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 2.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.02em;
}

.title-icon {
  font-size: 2.5rem;
  -webkit-text-fill-color: initial;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(10deg); }
}

.page-header p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
}

/* Tech Stack */
.tech-section {
  margin-bottom: var(--spacing-2xl);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.tech-card {
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-normal);
}

.tech-card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.tech-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.tech-icon {
  font-size: 2rem;
}

.tech-info h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.tech-version {
  font-size: 0.75rem;
  color: var(--color-primary);
  background: rgba(0, 102, 255, 0.08);
  padding: 2px 8px;
  border-radius: 100px;
}

.tech-desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Features */
.features-section {
  margin-bottom: var(--spacing-2xl);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.feature-item {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-normal);
}

.feature-item:hover {
  box-shadow: var(--shadow-md);
}

.feature-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  opacity: 0.3;
  min-width: 60px;
}

.feature-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.feature-content p {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
}

/* Code Block */
.quickstart-section {
  margin-bottom: var(--spacing-xl);
}

.code-block {
  background: var(--color-text-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.code-header {
  display: flex;
  gap: 6px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.code-dot:nth-child(1) { background: #ff5f56; }
.code-dot:nth-child(2) { background: #ffbd2e; }
.code-dot:nth-child(3) { background: #27ca40; }

.code-block pre {
  padding: var(--spacing-lg);
  margin: 0;
  overflow-x: auto;
}

.code-block code {
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 0.875rem;
  color: #e2e8f0;
  line-height: 1.8;
}

/* 响应式 */
@media (max-width: 768px) {
  .page-header {
    padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .page-header h1 {
    font-size: 1.75rem;
    flex-direction: column;
    gap: 8px;
  }
  
  .title-icon {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1rem;
  }
  
  .header-badge {
    font-size: 0.8125rem;
    padding: 6px 12px;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-card {
    padding: var(--spacing-md);
  }
  
  .tech-icon {
    font-size: 1.75rem;
  }
  
  .tech-info h3 {
    font-size: 1rem;
  }
  
  .feature-item {
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
  }
  
  .feature-number {
    font-size: 1.5rem;
  }
  
  .feature-content h3 {
    font-size: 1rem;
  }
  
  .feature-content p {
    font-size: 0.875rem;
  }
  
  .code-block pre {
    padding: var(--spacing-md);
  }
  
  .code-block code {
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
  
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .orb-1, .orb-2 {
    opacity: 0.3;
  }
}
</style>
