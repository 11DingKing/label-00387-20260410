<script setup lang="ts">
// SEO 全局配置
useSeoMeta({
  title: 'Nuxt4 Element Plus Demo',
  ogTitle: 'Nuxt4 Element Plus Demo',
  description: '基于 Nuxt 4 + Element Plus 的响应式网站示例',
  ogDescription: '基于 Nuxt 4 + Element Plus 的响应式网站示例',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
