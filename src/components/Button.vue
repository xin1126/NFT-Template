<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})

const bg = ref('')

switch (props.color) {
  case 'primary':
    bg.value = 'bg-primary'
    break
  case 'secondary':
    bg.value = 'bg-secondary'
    break
  case 'success':
    bg.value = 'bg-success'
    break
  case 'warning':
    bg.value = 'bg-warning'
    break
  case 'danger':
    bg.value = 'bg-danger'
    break
}
</script>

<template>
  <button class="rounded-lg p-2 text-white transition duration-700 hover:opacity-80" :class="bg">
    <slot />
  </button>
</template>

