<script lang="ts" setup>
import handleImg from '@/utils/handleImg'
import marketPriceData from '@/utils/marketPriceData'
</script>

<template>
  <div class="container flex flex-col items-center">
    <h2 class="mb-6 font-bold">
      市價排行榜
    </h2>
    <p class="mb-6">
      NFT系列藝術作品排行榜！全球注目指標
    </p>
    <table class="table-auto">
      <thead>
        <tr>
          <th />
          <th class="w-[385px] pb-4 text-start font-normal">
            系列作品名稱
          </th>
          <th class="w-[140px] pb-4 text-end font-normal">
            價值
          </th>
          <th class="w-[140px] pb-4 text-end font-normal">
            24h%
          </th>
          <th class="w-[140px] pb-4 text-end font-normal">
            7d%
          </th>
          <th class="w-[140px] pb-4 text-end font-normal">
            地板價
          </th>
          <th class="w-[140px] pb-4 text-end font-normal">
            擁有者
          </th>
          <th class="w-[140px] pr-6 pb-4 text-end font-normal">
            作品數量
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in marketPriceData" :key="item.title" class="border-2 border-black bg-white">
          <td class="border-r-2 border-black px-4 py-5 text-2xl">
            {{ index + 1 }}
          </td>
          <td>
            <div class="mx-4 flex items-center">
              <img class="mr-4 h-[48px] w-[48px] rounded-full" :src="handleImg(`art${item.img}.jpg`)" alt="art">
              {{ item.title }}
            </div>
          </td>
          <td class="text-end">
            <i class="fa-brands fa-ethereum mr-1" />{{ item.price }}
          </td>
          <td class="text-end" :class="item['24h'].includes('+') ? 'text-[#53C139]' : 'text-[#E6553B]'">
            {{ item['24h'] }}
          </td>
          <td class="text-end" :class="item['7d'].includes('+') ? 'text-[#53C139]' : 'text-[#E6553B]'">
            {{ item['7d'] }}
          </td>
          <td class="text-end">
            <i class="fa-brands fa-ethereum mr-1" />{{ item.floor }}
          </td>
          <td class="text-end">
            {{ item.owner }}
          </td>
          <td class="pr-6 text-end">
            {{ item.work }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
