<script lang="ts" setup>
const cardProps = defineProps({
  layout: {
    type: String,
    default: 'main',
  },
})

const cardStatus = computed(() => cardProps.layout === 'main')
</script>

<template>
  <div class="relative border-b-2 border-black bg-white px-6 pt-8 md:border-2" :class="[cardStatus ? 'lg:pt-20' : 'lg:pt-12 md:border-t-0']">
    <p class="mb-3 text-lg">
      <slot name="en" />
    </p>
    <p class="mb-6 text-2xl font-bold lg:text-3xl" :class="[cardStatus ? 'xl:text-5xl' : 'xl:text-[32px]']">
      <slot name="title" />
    </p>
    <p class="font-medium">
      <slot name="text" />
    </p>
    <div class="right-6 bottom-6 py-6 text-end md:absolute md:p-0">
      <Button />
    </div>
  </div>
</template>
