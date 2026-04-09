# Frontend User - 用户端

基于 Nuxt 4 + Element Plus 构建的现代化用户端前端应用。

## 技术栈

- **Nuxt 4** - Vue 3 全栈框架
- **Element Plus** - 企业级 UI 组件库
- **@nuxtjs/seo** - SEO 优化模块
- **@nuxt/image** - 图片优化模块
- **TypeScript** - 类型安全

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 功能特性

- ✅ 响应式布局设计
- ✅ SEO 优化（sitemap、robots.txt、meta 标签）
- ✅ 图片自动优化（WebP/AVIF 转换）
- ✅ 移动端适配
- ✅ 暗色模式支持

## 目录结构

```
frontend-user/
├── assets/          # 静态资源
├── components/      # Vue 组件
├── layouts/         # 布局组件
├── pages/           # 页面路由
├── public/          # 公共文件
├── nuxt.config.ts   # Nuxt 配置
└── Dockerfile       # Docker 构建文件
```
