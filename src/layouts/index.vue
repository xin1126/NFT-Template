<script lang="ts" setup>
const route = useRoute()
watch(() => route.path, () => document.documentElement.scrollTop = 0)
</script>

<template>
  <Header />
  <router-view class="pt-20 md:mb-20 lg:pt-24 xl:pt-36" />
  <Footer />
</template>
