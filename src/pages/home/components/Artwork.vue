<script setup lang="ts">
import items from '@/utils/artworkData'
</script>

<template>
  <div class="container">
    <div class="mb-6 flex justify-between border-b-2 border-black pb-3 md:mb-12">
      <h2>Artwork<span class="ml-4 text-xl font-bold">最新藝術品</span></h2>
      <Button class="relative bottom-[-13px]" :border="false" />
    </div>
    <Masonry :data="items" />
  </div>
</template>
