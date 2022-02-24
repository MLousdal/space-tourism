<script setup>
import Link from '@/renderer/Link.vue'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

defineProps(['is404'])

const siteData = reactive({
  title: `Page not found!`,
  description: `The page was not found!`,
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
  <main v-if="is404" class="wrapper preview">
    <header>
      <h1>Page not found</h1>
    </header>
    <Link href="/">Home page</Link>
  </main>
</template>
