<script setup lang="ts">
useSeoMeta({
  title: '图库 - Nuxt4 Element Plus Demo',
  description: '展示 @nuxt/image 模块的图片优化功能'
})

const images = [
  { id: 1, src: 'https://picsum.photos/seed/a1/800/600', title: '自然风光', tag: 'WebP' },
  { id: 2, src: 'https://picsum.photos/seed/b2/800/600', title: '城市建筑', tag: '懒加载' },
  { id: 3, src: 'https://picsum.photos/seed/c3/800/600', title: '人文艺术', tag: '响应式' },
  { id: 4, src: 'https://picsum.photos/seed/d4/800/600', title: '科技未来', tag: 'AVIF' },
  { id: 5, src: 'https://picsum.photos/seed/e5/800/600', title: '抽象设计', tag: '优化' },
  { id: 6, src: 'https://picsum.photos/seed/f6/800/600', title: '极简主义', tag: '压缩' }
]

const features = [
  { icon: '🔄', title: '格式转换', desc: '自动转换为 WebP/AVIF' },
  { icon: '📐', title: '尺寸调整', desc: '按需生成多种尺寸' },
  { icon: '⏳', title: '懒加载', desc: '视口内才加载图片' },
  { icon: '🎯', title: '占位符', desc: '加载时显示模糊预览' }
]
</script>

<template>
  <div class="gallery-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header">
        <div class="header-bg">
          <div class="header-orb orb-1"></div>
          <div class="header-orb orb-2"></div>
        </div>
        <div class="header-content">
          <span class="header-badge">
            <span class="badge-icon">🖼️</span>
            <span>@nuxt/image</span>
          </span>
          <h1>
            <span class="title-icon">✨</span>
            图片优化演示
          </h1>
          <p>使用 @nuxt/image 模块实现智能图片优化，自动转换格式、响应式加载</p>
        </div>
      </div>

      <!-- 功能说明 -->
      <div class="features-bar">
        <div v-for="feature in features" :key="feature.title" class="feature-item">
          <span class="feature-icon">{{ feature.icon }}</span>
          <div class="feature-text">
            <strong>{{ feature.title }}</strong>
            <span>{{ feature.desc }}</span>
          </div>
        </div>
      </div>

      <!-- 图片网格 -->
      <div class="gallery-grid">
        <div v-for="image in images" :key="image.id" class="gallery-item">
          <div class="image-wrapper">
            <NuxtImg
              :src="image.src"
              :alt="image.title"
              width="400"
              height="300"
              loading="lazy"
              placeholder
              class="gallery-image"
            />
            <div class="image-overlay">
              <span class="image-tag">{{ image.tag }}</span>
            </div>
          </div>
          <div class="image-info">
            <h3>{{ image.title }}</h3>
          </div>
        </div>
      </div>

      <!-- 代码示例 -->
      <section class="code-section">
        <div class="section-header">
          <span class="section-badge">
            <span>💻</span>
            <span>代码示例</span>
          </span>
          <h2 class="section-title">使用方法</h2>
          <p class="section-desc">简单几行代码，即可实现图片优化</p>
        </div>
        
        <div class="code-grid">
          <div class="code-card">
            <div class="code-card-header">
              <div class="code-card-icon">📝</div>
              <div class="code-card-info">
                <h3>基础用法</h3>
                <span>最简单的图片组件使用</span>
              </div>
            </div>
            <div class="code-block">
              <div class="code-toolbar">
                <div class="code-dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="code-lang">vue</span>
              </div>
              <pre><code><span class="code-tag">&lt;NuxtImg</span>
  <span class="code-attr">src</span>=<span class="code-string">"/images/photo.jpg"</span>
  <span class="code-attr">alt</span>=<span class="code-string">"描述"</span>
  <span class="code-attr">width</span>=<span class="code-string">"400"</span>
  <span class="code-attr">height</span>=<span class="code-string">"300"</span>
<span class="code-tag">/&gt;</span></code></pre>
            </div>
          </div>
          
          <div class="code-card">
            <div class="code-card-header">
              <div class="code-card-icon">📱</div>
              <div class="code-card-info">
                <h3>响应式图片</h3>
                <span>自适应不同屏幕尺寸</span>
              </div>
            </div>
            <div class="code-block">
              <div class="code-toolbar">
                <div class="code-dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="code-lang">vue</span>
              </div>
              <pre><code><span class="code-tag">&lt;NuxtImg</span>
  <span class="code-attr">src</span>=<span class="code-string">"/images/photo.jpg"</span>
  <span class="code-attr">sizes</span>=<span class="code-string">"sm:100vw md:50vw lg:400px"</span>
  <span class="code-attr">loading</span>=<span class="code-string">"lazy"</span>
  <span class="code-attr">placeholder</span>
<span class="code-tag">/&gt;</span></code></pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.gallery-page {
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
  background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%);
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
  color: var(--color-primary);
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

/* Features Bar */
.features-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  margin-bottom: var(--spacing-xl);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-text {
  display: flex;
  flex-direction: column;
}

.feature-text strong {
  font-size: 0.875rem;
  color: var(--color-text-primary);
}

.feature-text span {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.gallery-item {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.gallery-item:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
}

.image-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 100px;
}

.image-info {
  padding: var(--spacing-md);
}

.image-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

/* Code Section */
.code-section {
  margin-top: var(--spacing-2xl);
  padding: var(--spacing-2xl);
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: var(--radius-xl);
}

.code-section .section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-badge {
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
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1);
}

.section-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.section-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.code-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.code-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.code-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: #3b82f6;
}

.code-card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: #fff;
}

.code-card-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%);
  border-radius: var(--radius-md);
  font-size: 1.25rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}

.code-card-info h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 2px;
}

.code-card-info span {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.code-block {
  background: #1e1e2e;
}

.code-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
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

.code-lang {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'SF Mono', Monaco, monospace;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
}

.code-block pre {
  padding: var(--spacing-lg);
  margin: 0;
  overflow-x: auto;
}

.code-block code {
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 0.875rem;
  color: #cdd6f4;
  line-height: 1.8;
}

.code-tag { color: #89b4fa; }
.code-attr { color: #89dceb; }
.code-string { color: #a6e3a1; }

/* 响应式 */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

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
  
  .features-bar {
    grid-template-columns: repeat(2, 1fr);
    padding: var(--spacing-md);
    gap: var(--spacing-sm);
  }
  
  .feature-icon {
    font-size: 1.25rem;
  }
  
  .feature-text strong {
    font-size: 0.8125rem;
  }
  
  .feature-text span {
    font-size: 0.6875rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .code-section {
    padding: var(--spacing-lg);
  }
  
  .code-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .code-card-header {
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .code-card-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .code-block pre {
    padding: var(--spacing-md);
  }
  
  .code-block code {
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .gallery-page {
    padding: var(--spacing-md) 0 var(--spacing-xl);
  }
  
  .page-header {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
  
  .page-header h1 {
    font-size: 1.5rem;
  }
  
  .features-bar {
    grid-template-columns: 1fr 1fr;
  }
  
  .feature-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
  }
  
  .image-info {
    padding: var(--spacing-sm);
  }
  
  .image-info h3 {
    font-size: 0.9375rem;
  }
  
  .orb-1, .orb-2 {
    opacity: 0.3;
  }
}
</style>
