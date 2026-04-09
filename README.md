# Nuxt4 Element Plus SEO Demo

基于 Nuxt 4 + Element Plus 构建的现代化 Web 应用示例，集成 SEO 优化和图片处理功能。

## How to Run

```bash
# 使用 Docker Compose 启动（推荐）
docker-compose up --build -d

# 查看运行状态
docker-compose ps

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

### 本地开发

```bash
cd frontend-user
npm install
npm run dev
```

## Services

| 服务 | 端口 | 描述 |
|------|------|------|
| frontend-user | 8081 | 用户端前端 |

### 访问地址

- 用户端: http://localhost:8081

## 测试账号

本项目为纯前端展示项目，无需登录账号。

## 题目内容

使用 Nuxt.js 4 最新稳定版本作为项目主体框架，集成 Element Plus UI 组件库构建用户界面，配置 @nuxtjs/seo 模块实现搜索引擎优化，整合 @nuxt/image 模块进行图片处理与优化。项目创建过程中需确保各依赖包版本兼容性，完成基础配置后实现响应式布局设计，并验证 SEO 功能及图片处理功能的正常运行。

---

## 项目介绍

### 技术栈

- **Nuxt 4.2.2** - 基于 Vue 3 的全栈框架
- **Element Plus 2.9.x** - 企业级 Vue 3 组件库
- **@nuxtjs/seo 3.1.x** - 完整的 SEO 解决方案
- **@nuxt/image 1.10.x** - 图片优化模块
- **TypeScript** - 类型安全

### 功能特性

- ✅ 响应式布局设计（移动端/平板/桌面端）
- ✅ SEO 优化（自动生成 sitemap.xml、robots.txt、meta 标签）
- ✅ 图片自动优化（WebP/AVIF 格式转换、懒加载）
- ✅ 现代化 UI 设计
- ✅ Docker 容器化部署

### 项目结构

```
.
├── frontend-user/       # 用户端前端
│   ├── assets/          # 静态资源
│   ├── components/      # Vue 组件
│   ├── layouts/         # 布局组件
│   ├── pages/           # 页面路由
│   ├── public/          # 公共文件
│   ├── nuxt.config.ts   # Nuxt 配置
│   ├── Dockerfile       # Docker 构建文件
│   └── README.md        # 前端说明文档
├── docker-compose.yml   # Docker Compose 配置
├── .gitignore           # Git 忽略文件
└── README.md            # 项目说明文档
```

### 页面说明

| 页面 | 路径 | 描述 |
|------|------|------|
| 首页 | / | 项目介绍和功能展示 |
| 关于 | /about | 技术栈和项目特点 |
| 图库 | /gallery | 图片优化功能演示 |
| SEO 测试 | /seo-test | SEO 功能验证 |
