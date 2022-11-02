<script setup lang="ts">
import items, { other } from '@/utils/artworkData'

const total = computed(() => [...items, ...other])
</script>

<template>
  <div class="container">
    <Masonry :data="total" />
  </div>
</template>
