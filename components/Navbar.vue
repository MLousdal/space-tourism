<script setup>
import Link from '@/renderer/Link.vue'
</script>

<template>
  <div class="navbar">
    <nav>
      <ul>
        <li>
          <Link href="/">
            <strong>00</strong> Home
          </Link>
        </li>
        <li>
          <Link href="/destination">
            <strong>01</strong> Destination
          </Link>
        </li>
        <li>
          <Link href="/crew">
            <strong>02</strong> Crew
          </Link>
        </li>
        <li>
          <Link href="/technology">
            <strong>03</strong> Technology
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</template>