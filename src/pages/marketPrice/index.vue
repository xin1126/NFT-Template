<script lang="ts" setup>
import handleImg from '@/utils/handleImg'
import marketPriceData from '@/utils/marketPriceData'

const strColor = (str: string) => str.includes('+') ? 'text-[#53C139]' : 'text-[#E6553B]'

const openTarget = ref<string[]>([])

const checkTarget = (title: string) => openTarget.value.includes(title)

const handleTarget = (title: string) => {
  if (checkTarget(title)) {
    openTarget.value = openTarget.value.filter(item => item !== title)
  }
  else {
    openTarget.value.push(title)
  }
}
</script>

<template>
  <div class="container flex flex-col items-center">
    <h2 class="mb-4 font-bold md:mb-6">
      市價排行榜
    </h2>
    <p class="mb-8 font-sans font-semibold md:mb-12">
      NFT系列藝術作品排行榜！全球注目指標
    </p>
    <table data-aos="fade-up" data-aos-duration="1000" class="hidden table-auto md:block">
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
        <tr v-for="(item, index) in marketPriceData" :key="item.title" class="border-2 border-black bg-white hover:bg-backound">
          <td class="border-r-2 border-black px-4 py-5 text-center text-2xl">
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
          <td class="text-end" :class="strColor(item['24h'])">
            {{ item['24h'] }}
          </td>
          <td class="text-end" :class="strColor(item['7d'])">
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
    <ul data-aos="fade-up" data-aos-duration="1000" class="mb-12 w-full bg-white md:hidden">
      <li v-for="(item, index) in marketPriceData" :key="item.title" @click="handleTarget(item.title)">
        <div
          class="flex cursor-pointer items-center justify-between overflow-hidden border-2 border-black hover:bg-backound"
          :class="(!checkTarget(item.title) && marketPriceData.length !== index + 1) && 'border-b-0'"
        >
          <div class="flex items-center">
            <div class="w-[40px] text-center text-2xl">
              {{ index + 1 }}
            </div>
            <div class="border-l-2 border-black py-4 pl-2">
              <img class="mr-4 h-[48px] w-[48px] rounded-full " :src="handleImg(`art${item.img}.jpg`)" alt="art">
            </div>
            <p class="font-bold">
              {{ item.title }}
            </p>
          </div>
          <div class="relative">
            <div class="mr-2 text-xl">
              <i class="fa-brands fa-ethereum mr-1" />{{ item.price }}
            </div>
            <div
              class="absolute -right-4 -bottom-12 h-16 w-8 rotate-45 bg-black"
              :class="checkTarget(item.title) && '!bg-primary'"
            />
            <div class="absolute right-[2px] -bottom-8 text-2xl text-white">
              {{ checkTarget(item.title) ? '-' : '+' }}
            </div>
          </div>
        </div>
        <div
          class="hidden border-black"
          :class="[checkTarget(item.title) && '!block', marketPriceData.length === index + 1 && 'border-b-2']"
        >
          <div class="flex justify-around border-x-2 border-black py-2">
            <div>
              <p class="text-center text-sm">
                24h%
              </p>
              <p class="text-xl" :class="strColor(item['24h'])">
                {{ item['24h'] }}
              </p>
            </div>
            <div>
              <p class="text-center text-sm">
                7d%
              </p>
              <p class="text-xl" :class="strColor(item['7d'])">
                {{ item['7d'] }}
              </p>
            </div>
            <div>
              <p class="text-center text-sm">
                地板價
              </p>
              <p class="text-xl">
                <i class="fa-brands fa-ethereum mr-1" />{{ item.floor }}
              </p>
            </div>
          </div>
          <div class="flex border-x-2 border-black pb-2">
            <div class="w-1/2 text-center">
              <p class="text-sm">
                擁有者
              </p>
              <p class="text-xl">
                {{ item.owner }}
              </p>
            </div>
            <div class="w-1/2 text-center">
              <p class="text-sm">
                作品數量
              </p>
              <p class="text-xl">
                {{ item.work }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
