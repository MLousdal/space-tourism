<script setup>
import Link from '@/renderer/Link.vue'
import { ref, onMounted, onUnmounted } from 'vue'

let showMenu = ref(true)
const navBtn = ref(null)

function mqResize() {
  console.log('resize')
  const mql = window.matchMedia('(max-width: 600px)')
  if (mql.matches) {
    console.log('matches');
    toggleShowMenu(false)
  } else {
    toggleShowMenu(true)
    console.log('else matches');
  }
}

function toggleShowMenu(state) {
  showMenu.value = state
  if (state === true) {
    document.querySelector('body').style.overflow = 'hidden'
    navBtn.value.src = "/icon-close.svg"
  }
  if (state === false) {
    document.querySelector('body').style.overflow = 'auto'
    navBtn.value.src = "/icon-hamburger.svg"
  }
}

function handleOutside(e) {
  const navbar = document.querySelector('.navbar')
  if (window.innerWidth < 800) {
    if (!navbar.contains(e.target)) {
      toggleShowMenu(false)
    }
  }
}

onMounted(() => {
  mqResize()
  window.addEventListener("resize", mqResize);
  document.addEventListener('mouseup', (e) => {
    handleOutside(e)
  })
});

onUnmounted(() => {
  window.removeEventListener("resize", mqResize);
});
</script>

<template>
  <div class="navbar">
    <img src="@/assets/shared/logo.svg" alt="logo" />
    <div class="line transparent"></div>
    <nav v-show="showMenu">
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
          <Link href="/meet-your-crew">
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
    <input
      ref="navBtn"
      type="image"
      name="nav-btn"
      src="/icon-hamburger.svg"
      class="nav-btn"
      @click="toggleShowMenu(!showMenu)"
    />
  </div>
</template>