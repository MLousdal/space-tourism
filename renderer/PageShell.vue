<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar></Navbar>
  <div class="content">
    <slot />
  </div>
</template>

