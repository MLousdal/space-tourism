<script setup>
import Link from '@/renderer/Link.vue'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

const siteData = reactive({
  title: `Home page`,
  description: `Home page description`,
})

useHead({
  // Can be static or computed
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
  <main class="wrapper preview">
    <img alt="Vue logo" src="@/assets/logo.svg" />
    <header>
      <h1>Home page!</h1>
      <p class="text-5">Vite + Vue 3 + Vite-plugin-ssr + Open-props</p>
    </header>
    <nav>
      <Link href="/about">About page</Link>
      <Link href="/open-props">OpenProps Page</Link>
    </nav>
  </main>
</template>
