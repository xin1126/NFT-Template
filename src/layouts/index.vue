<script lang="ts" setup>
const route = useRoute()
watch(() => route.path, () => document.documentElement.scrollTop = 0)

const openWallet = ref(false)

const handleWallet = (status: boolean) => openWallet.value = status
</script>

<template>
  <Header @handle-wallet="handleWallet" />
  <main class="pt-20 lg:pt-24 xl:pt-36" :class="{ 'md:mb-20': route.path !== '/home' }">
    <router-view />
  </main>
  <Footer />
  <Wallet v-show="openWallet" @handle-wallet="handleWallet" />
</template>
