<script lang="ts" setup>
import handleImg from '@/utils/handleImg'
const emit = defineEmits(['handleWallet'])

const targetWallet = ref('')

const selectWallet = (title: string) => targetWallet.value = title

const closeWallentModal = () => {
  if (targetWallet.value) {
    emit('handleWallet', false)
  }
}

const wallet = [{
  title: 'MetaMask',
  icon: '01',
},
{
  title: 'Coinbase Wallet',
  icon: '02',
},
{
  title: 'WalletConnect',
  icon: '03',
},
{
  title: 'Phantom',
  icon: '04',
},
{
  title: 'Glow',
  icon: '05',
},
{
  title: 'Fortmatic',
  icon: '06',
}]
</script>

<template>
  <div
    class="fixed top-0 left-0 z-50 flex h-full w-full bg-black/50 sm:items-center sm:justify-center"
    @click.stop.self.prevent="emit('handleWallet', false)"
  >
    <div class="z-[60] w-full bg-white sm:w-[500px]">
      <h2 class="mb-2 border-b-2 border-black py-5 text-center text-xl">
        連結你的錢包<i class="fa-solid fa-xmark absolute right-2 top-6 sm:hidden" @click="emit('handleWallet', false)" />
      </h2>
      <ul class="grid gap-2 py-4 px-2 sm:grid-cols-2 sm:p-4">
        <li
          v-for="item in wallet"
          :key="item.title"
          class="flex cursor-pointer items-center justify-between border-2 border-black p-4"
          :class="targetWallet === item.title && '!border-primary'"
          @click="selectWallet(item.title)"
        >
          <div class="flex items-center">
            <img class="mr-4 h-4 w-4" :src="handleImg(`/icon/connect${item.icon}.png`)" alt="icon">
            <p>{{ item.title }}</p>
          </div>
          <i v-show="targetWallet === item.title" class="fa-solid fa-check text-primary" />
        </li>
      </ul>
      <div class="fixed bottom-0 w-full text-center sm:static sm:mb-4">
        <button
          class="w-full border border-black bg-primary px-12 py-2 text-white hover:bg-primary/80 sm:w-auto"
          :class="{ 'cursor-not-allowed': !targetWallet }"
          @click="closeWallentModal()"
        >
          連結錢包
        </button>
      </div>
    </div>
  </div>
</template>
