<script setup>
import Link from '@/renderer/Link.vue'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
// import "@/assets/scss/base/media";

const siteData = reactive({
  title: `Frontend Mentor | Space tourism website`,
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
    <div class="wrapper">
      <header>
        <p class="header-5">So, you want to travel to</p>
        <h1>Space</h1>
        <p class="text-brand">
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </header>
      <Link class="explore" href="/">
        <span>EXPLORE</span>
      </Link>
    </div>
  </main>
</template>
