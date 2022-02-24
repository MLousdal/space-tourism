<script setup>
import { usePageContext } from './usePageContext'
const pageContext = usePageContext()
</script>

<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>