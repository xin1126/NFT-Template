<script lang="ts" setup>
const route = useRoute()
watch(() => route.path, () => document.documentElement.scrollTop = 0)
</script>

<template>
  <Header />
  <main class="pt-20 lg:pt-24 xl:pt-36" :class="{ 'md:mb-20': route.path !== '/home' }">
    <router-view />
  </main>
  <Footer />
</template>
