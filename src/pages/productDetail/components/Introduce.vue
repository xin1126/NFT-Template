<script lang="ts" setup>
import handleImg from '@/utils/handleImg'

const route = useRoute()
</script>

<template>
  <div class="flex">
    <img class="mr-6 h-[550px] w-1/2" :src="handleImg(`art${route.params.img}.jpg`)" alt="art">
    <div class="w-1/2 border-2 border-black bg-white">
      <div class="mb-4 flex items-center justify-between px-10 pt-10">
        <h2 class="font-bold">
          兩情相悅
        </h2>
        <div class="flex items-center">
          <img class="mr-2 h-[32px] w-[32px] rounded-full" src="@/assets/images/artist01.jpg" alt="artist">
          <span>Michael</span>
        </div>
      </div>
      <p class="pl-10 text-sm text-gray-400">
        最高出價
      </p>
      <div class="mb-10 flex justify-between border-b-2 border-black pb-10">
        <div class="flex items-center pl-10">
          <img class="mr-2 h-[32px] w-[32px] rounded-full" src="@/assets/images/user01.jpg" alt="artist">
          <i class="fa-solid fa-arrow-right mr-2" />
          <span>0.044Eth</span>
        </div>
        <button class="mr-10 border border-black bg-primary px-12 py-2 text-white">
          出價
        </button>
      </div>
      <div class="px-10">
        <p class="mb-6">
          3/14情人節外面剛好有兩隻鳥，也在過情人節。
        </p>
        <p class="mb-6">
          而且其中一隻竟然有梳油頭，不知道是不是有用定型液，他們感情真好，出門還會特別打扮，看著看著不禁思考，我怎麼會變這樣？
        </p>
        <p>好羨慕啊，我也要有這樣兩情相悅的另一半。</p>
      </div>
    </div>
  </div>
</template>
