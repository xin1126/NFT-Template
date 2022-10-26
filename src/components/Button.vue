<script lang="ts" setup>
defineProps({
  border: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <button
    class="
      group
      relative
      overflow-hidden
      border-black
      px-12
      py-2
      font-bold
      text-black
      duration-700
      hover:bg-primary hover:text-white
    "
    :class="{ 'border-2': border, 'hover:border-2': !border }"
  >
    MORE
    <span
      class="
        absolute
        -right-2
        -bottom-6
        h-full
        w-[22px]
        rotate-45
        bg-primary
        duration-700
        group-hover:bg-black
      "
    />
  </button>
</template>
