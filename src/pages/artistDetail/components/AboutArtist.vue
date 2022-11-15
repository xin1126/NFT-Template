<script lang="ts" setup>
import { useRoute } from 'vue-router'
import handleImg from '@/utils/handleImg'
const route = useRoute()
</script>

<template>
  <section class="container">
    <div class="sm:flex">
      <div class="mb-4 sm:mb-0 xl:flex">
        <img :src="handleImg(`${route.params.img}.jpg`)" alt="artist" class="h-[285px] w-full">
        <div class="border-2 border-t-0 border-black bg-white p-4 sm:p-6 xl:border-l-0 xl:border-t-2">
          <div class="mb-4 flex justify-between">
            <h3 class="text-5xl">
              Michael
            </h3>
            <div>
              <a href="#" class="mr-1">
                <i class="fa-brands fa-discord me-1" />
              </a>
              <a href="#" class="mr-1">
                <i class="fa-brands fa-facebook-f me-1" />
              </a>
              <a href="#" class="mr-1">
                <i class="fa-solid fa-globe me-1" />
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter" />
              </a>
            </div>
          </div>
          <p class="mb-6">
            0x3ya666…88ef
          </p>
          <p>
            Michael自小在山林長大，能夠與花草樹木大自然進行靈體溝通，創作題材常見大山、大水、花草與樹木，從日常生活出發，擁有個⼈獨樹⼀格的創作風格，
            作品觸及靈魂深處、探索未知宇宙，透過與大自然的溝通，探討著存在的本質。
          </p>
        </div>
      </div>
      <ul class="min-w-[305px] place-self-start border-2 border-black bg-white sm:ml-6">
        <li class="flex items-center justify-between border-b-2 border-black px-6 py-4 font-bold">
          <span>販售中</span>
          <span class="text-3xl">168</span>
        </li>
        <li class="flex items-center justify-between border-b-2 border-black px-6 py-4 font-bold">
          <span>地板價格</span>
          <span class="text-3xl">0.6 <span class="text-2xl">ETH</span></span>
        </li>
        <li class="flex items-center justify-between border-b-2 border-black px-6 py-4 font-bold">
          <span>7 日成交</span>
          <span class="text-3xl">8.8 <span class="text-2xl">ETH</span></span>
        </li>
        <li class="flex items-center justify-between px-6 py-4 font-bold">
          <span>30 日成交</span>
          <span class="text-3xl">23.1 <span class="text-2xl">ETH</span></span>
        </li>
      </ul>
    </div>
  </section>
</template>
