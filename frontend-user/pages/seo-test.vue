<script setup lang="ts">
useSeoMeta({
  title: 'SEO 测试 - Nuxt4 Element Plus Demo',
  description: '验证 SEO 功能配置',
  ogTitle: 'SEO 测试页面',
  ogDescription: '测试 Open Graph 和 Twitter Cards',
  twitterCard: 'summary_large_image'
})

useHead({
  meta: [
    { name: 'keywords', content: 'Nuxt 4, Element Plus, SEO, Vue 3' },
    { name: 'author', content: 'Demo Author' }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/seo-test' }
  ]
})

const seoFeatures = [
  { name: 'Meta Title', status: true, desc: '页面标题' },
  { name: 'Meta Description', status: true, desc: '页面描述' },
  { name: 'Open Graph', status: true, desc: '社交分享' },
  { name: 'Twitter Cards', status: true, desc: 'Twitter 卡片' },
  { name: 'Sitemap', status: true, desc: '站点地图' },
  { name: 'Robots.txt', status: true, desc: '爬虫规则' }
]

const verifySteps = [
  { step: '01', title: '查看源代码', desc: '右键 → 查看页面源代码，检查 <head> 中的 meta 标签' },
  { step: '02', title: '访问 Sitemap', desc: '打开 /sitemap.xml 查看自动生成的站点地图' },
  { step: '03', title: '访问 Robots', desc: '打开 /robots.txt 查看爬虫规则配置' },
  { step: '04', title: '开发者工具', desc: '使用浏览器 DevTools 的 Elements 面板检查' }
]
</script>

<template>
  <div class="seo-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <div class="header-bg">
          <div class="header-orb orb-1"></div>
          <div class="header-orb orb-2"></div>
        </div>
        <div class="header-content">
          <span class="header-badge">
            <span class="status-dot"></span>
            <span>SEO 已启用</span>
          </span>
          <h1>
            <span class="title-icon">🔍</span>
            SEO 功能验证
          </h1>
          <p>检查 @nuxtjs/seo 模块的配置状态，验证搜索引擎优化功能</p>
        </div>
      </div>

      <!-- 功能状态 -->
      <section class="status-section">
        <h2 class="section-title">功能状态</h2>
        
        <div class="status-grid">
          <div v-for="feature in seoFeatures" :key="feature.name" class="status-card">
            <div class="status-indicator" :class="{ active: feature.status }">
              {{ feature.status ? '✓' : '✗' }}
            </div>
            <div class="status-info">
              <h3>{{ feature.name }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 验证步骤 -->
      <section class="verify-section">
        <h2 class="section-title">验证方法</h2>
        
        <div class="steps-list">
          <div v-for="item in verifySteps" :key="item.step" class="step-item">
            <div class="step-number">{{ item.step }}</div>
            <div class="step-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 快速链接 -->
      <section class="links-section">
        <h2 class="section-title">快速访问</h2>
        
        <div class="links-grid">
          <a href="/sitemap.xml" target="_blank" class="link-card">
            <span class="link-icon">🗺️</span>
            <span class="link-text">sitemap.xml</span>
            <span class="link-arrow">→</span>
          </a>
          <a href="/robots.txt" target="_blank" class="link-card">
            <span class="link-icon">🤖</span>
            <span class="link-text">robots.txt</span>
            <span class="link-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.seo-page {
  padding: var(--spacing-xl) 0 var(--spacing-2xl);
}

.page-header {
  position: relative;
  text-align: center;
  margin-bottom: var(--spacing-xl);
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
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  top: -100px;
  right: -50px;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
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
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #10b981;
  margin-bottom: var(--spacing-md);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.1);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.page-header h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.02em;
}

.title-icon {
  font-size: 2rem;
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

/* Status Grid */
.status-section {
  margin-bottom: var(--spacing-2xl);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.status-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.status-indicator {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  background: #f0f0f0;
  color: #999;
}

.status-indicator.active {
  background: rgba(39, 174, 96, 0.1);
  color: #27ae60;
}

.status-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.status-info p {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

/* Verify Steps */
.verify-section {
  margin-bottom: var(--spacing-2xl);
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.step-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  opacity: 0.4;
  min-width: 50px;
}

.step-content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.step-content p {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

/* Links */
.links-section {
  margin-bottom: var(--spacing-xl);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.link-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: all var(--transition-normal);
}

.link-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.link-icon {
  font-size: 1.5rem;
}

.link-text {
  flex: 1;
  font-weight: 600;
  color: var(--color-text-primary);
}

.link-arrow {
  color: var(--color-primary);
  font-size: 1.25rem;
  transition: transform var(--transition-fast);
}

.link-card:hover .link-arrow {
  transform: translateX(4px);
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
  
  .section-title {
    font-size: 1.25rem;
  }
  
  .status-grid {
    grid-template-columns: 1fr;
  }
  
  .status-card {
    padding: var(--spacing-md);
  }
  
  .status-indicator {
    width: 36px;
    height: 36px;
    font-size: 0.875rem;
  }
  
  .status-info h3 {
    font-size: 0.9375rem;
  }
  
  .status-info p {
    font-size: 0.8125rem;
  }
  
  .step-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
  }
  
  .step-number {
    font-size: 1.25rem;
  }
  
  .step-content h3 {
    font-size: 0.9375rem;
  }
  
  .step-content p {
    font-size: 0.8125rem;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
  }
  
  .link-card {
    padding: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .seo-page {
    padding: var(--spacing-md) 0 var(--spacing-xl);
  }
  
  .page-header {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
  
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .header-badge {
    font-size: 0.8125rem;
    padding: 6px 12px;
  }
  
  .orb-1, .orb-2 {
    opacity: 0.3;
  }
}
</style>
