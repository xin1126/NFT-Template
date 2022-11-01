<script lang="ts" setup>
import useInnerWidth from '@/store/innerWidth'

const innerWidthStore = useInnerWidth()
innerWidthStore.setInnerWidth()
</script>

<template>
  <router-view />
</template>

<style>
#app {
  @apply bg-backound min-h-screen;
  font-family: 'Squada One', 'Noto Sans TC', -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft JhengHei", "Helvetica Neue", Arial, system-ui, cursive, sans-serif;
}
</style>
