<script setup lang="ts">
import useInnerWidth from '@/store/innerWidth'

const innerWidthStore = useInnerWidth()
const { innerWidth } = storeToRefs(innerWidthStore)

const columnWidth = computed(() => innerWidth.value > 1024 ? 306 : innerWidth.value > 640 ? 200 : 156)

const items = [
  {
    title: '區塊戀-他的私生活',
    num: '09',
    height: 'sm:h-[302px] h-[155px]',
    mobileHidden: false,
  },
  {
    title: '夏娃的醜聞',
    num: '10',
    height: 'sm:h-[375px] h-[167px]',
    mobileHidden: false,
  },
  {
    title: '藍色啤酒海',
    num: '02',
    height: 'sm:h-[302px] h-[109px]',
    mobileHidden: false,
  },
  {
    title: '沒有人愛我',
    num: '11',
    height: 'sm:h-[217px] h-[189px]',
    mobileHidden: false,
  },
  {
    title: '不哭不哭眼淚是珍珠',
    num: '12',
    height: 'sm:h-[222px] h-[208px]',
    mobileHidden: false,
  },
  {
    title: '十分鐘就到',
    num: '03',
    height: 'sm:h-[302px] h-[115px]',
    mobileHidden: false,
  },
  {
    title: '我這樣有美嗎',
    num: '04',
    height: 'h-[443px]',
    mobileHidden: true,
  },
  {
    title: '我真的受傷了',
    num: '27',
    height: 'h-[302px]',
    mobileHidden: true,
  },
]
</script>

<template>
  <div class="container">
    <div class="mb-6 flex justify-between border-b-2 border-black pb-3 md:mb-12">
      <h2>Artwork<span class="ml-4 text-xl font-bold">最新藝術品</span></h2>
      <Button class="relative bottom-[-13px]" :border="false" />
    </div>
    <masonry-wall :items="items" :ssr-columns="1" :column-width="columnWidth" :gap="16">
      <template #default="{ item }">
        <div :class="{ hidden: item.mobileHidden }" class="group cursor-pointer sm:block">
          <div class="relative mb-4 border-[8px] border-white bg-white sm:border-[24px]" :class="[item.height]">
            <img :src="`/images/art${item.num}.jpg`" alt="art" class="h-full w-full">
            <div class="absolute top-0 left-0 hidden h-full w-full items-center justify-center duration-700 group-hover:bg-black/50 lg:flex">
              <div class="flex h-[90%] w-[90%] flex-col justify-between border-2 border-white p-4 opacity-0 duration-700 group-hover:opacity-100">
                <div>
                  <p class="mb-2 text-white">
                    唯一想擁有的人，唯一不可以擁有的
                  </p>
                  <p class="text-white">
                    <i class="fa-brands fa-ethereum" />300
                  </p>
                </div>
                <div class="self-end">
                  <Button class="group-hover:bg-primary group-hover:text-white" />
                </div>
              </div>
            </div>
          </div>
          <p class="mb-2 border-black font-bold sm:mb-6 sm:border-b-2 sm:pb-4">
            {{ item.title }}
          </p>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>
