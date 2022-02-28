<script setup>
import Link from '@/renderer/Link.vue'
</script>

<template>
  <main class="subpage destination">
    <div class="wrapper">
      <header class="page-title">
        <p>
          <span class="transparent">01</span>
          Pick your destination
        </p>
      </header>
      <section class="content-wrapper">
        <picture>
          <source srcset="/assets/destination/image-moon.webp" type="image/webp" />
          <img src="@/assets/destination/image-moon.png" alt="image of the moon" />
        </picture>
        <article>
          <nav class="dest-nav">
            <ul>
              <li>
                <Link href="/destination">MOON</Link>
              </li>
              <li>
                <Link href="/destination/mars">MARS</Link>
              </li>
              <li>
                <Link href="/destination/europa">EUROPA</Link>
              </li>
              <li>
                <Link href="/destination/titan">TITAN</Link>
              </li>
            </ul>
          </nav>
          <section class="content">
            <h1>MOON</h1>
            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <section class="content-info">
              <div>
                <p class="text-1">AVG. DISTANCE</p>
                <p class="text-3 text-white font-serif">384,400 KM</p>
              </div>
              <div>
                <p class="text-1">EST. TRAVEL TIME</p>
                <p class="text-3 text-white font-serif">3 DAYS</p>
              </div>
            </section>
          </section>
        </article>
      </section>
    </div>
  </main>
</template>
