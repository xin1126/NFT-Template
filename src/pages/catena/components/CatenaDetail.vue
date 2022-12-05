<script lang="ts" setup>
import { useRoute } from 'vue-router'
import * as type from '@/utils/catenaData'

const route = useRoute()
const path = computed(() => route.params.type)

const newType = computed(() => type[path.value as keyof CatenaType])
</script>

<template>
  <div>
    <div class="mb-3 flex items-center">
      <img class="mr-2 h-[32px] w-[32px] rounded-full" src="@/assets/images/artist01.jpg" alt="artist">
      <span>Michael</span>
    </div>
    <div class="mb-10 xl:flex">
      <div class="mr-6 mb-4 xl:mb-0">
        <h2 class="mb-2 text-3xl font-bold">
          <template v-if="path === 'eye'">
            瞳孔:流動的脈絡
          </template>
          <template v-else-if="path === 'bird'">
            我家門前的鳥
          </template>
          <template v-else>
            不可預知的花
          </template>
        </h2>
        <p>
          <template v-if="path === 'eye'">
            眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。
          </template>
          <template v-else-if="path === 'bird'">
            家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。
          </template>
          <template v-else>
            花的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。
          </template>
        </p>
      </div>
      <ul class="flex ">
        <li class="relative flex w-full max-w-[104px] flex-col items-center justify-center border border-r-0 border-black bg-white py-4 md:min-w-[104px]">
          項目
          <p class="text-2xl font-bold">
            6.4k
          </p>
          <div class="absolute -right-1 z-10 h-[45px] w-[10px] bg-white" />
        </li>
        <li class="relative flex w-full max-w-[104px] flex-col items-center justify-center border border-r-0 border-black bg-white py-4 md:min-w-[104px]">
          擁有者
          <p class="text-2xl font-bold">
            2.5 k
          </p>
          <div class="absolute -right-1 z-10 h-[45px] w-[10px] bg-white" />
        </li>
        <li class="relative flex w-full max-w-[104px] flex-col items-center justify-center border border-r-0 border-black bg-white py-4 md:min-w-[104px]">
          底價
          <p class="text-2xl font-bold">
            <i class="fa-brands fa-ethereum text-sm" /> 1.38 k
          </p>
          <div class="absolute -right-1 z-10 h-[45px] w-[10px] bg-white" />
        </li>
        <li class="flex w-full max-w-[104px] flex-col items-center justify-center border border-black bg-white py-4 md:min-w-[104px]">
          總額
          <p class="text-2xl font-bold">
            2.8 k
          </p>
        </li>
      </ul>
    </div>
    <div class="relative mb-10 text-end">
      <i class="fa-solid fa-sort absolute top-4 right-4" />
      <select name="" class="appearance-none border border-black py-3 pl-4 pr-8 outline-none">
        <option value="">
          最新上架
        </option>
        <option value="">
          人氣上升
        </option>
        <option value="">
          排行前十
        </option>
        <option value="">
          極具潛力
        </option>
      </select>
    </div>
    <Masonry :data="newType" />
  </div>
</template>
