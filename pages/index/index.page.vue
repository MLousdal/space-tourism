<script setup>
// import Link from '@/renderer/Link.vue'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

const siteData = reactive({
  title: `Home page`,
  description: `Home page description`,
})

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
  ],
})
</script>

<template>
  <main class="home">
    <header>
      <h1>Home page!</h1>
      <p class="text-5">Vite + Vue 3 + Vite-plugin-ssr + Open-props</p>
    </header>
  </main>
</template>
