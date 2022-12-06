<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperCore from 'swiper'
import 'swiper/css'
import handleImg from '@/utils/handleImg'
import * as type from '@/utils/catenaData'

const router = useRouter()
const route = useRoute()
const swiperSlideTarget = ref(1)
const onSlideChange = ({ activeIndex }: { activeIndex: number }) => {
  swiperSlideTarget.value = activeIndex
}

const otherData = computed(() => {
  let targetType = ''
  Object.keys(type).forEach((key) => {
    type[key as keyof CatenaType].forEach((item) => {
      if (item.num === route.params.img) {
        targetType = key
      }
    })
  })
  return type[targetType as keyof CatenaType]
})
</script>

<template>
  <div class="mb-6 flex justify-between border-b-2 border-black pb-3 md:mb-12">
    <h2>Other<span class="ml-4 text-xl font-bold">其餘作品</span></h2>
    <Button class="relative bottom-[-13px]" :border="false" />
  </div>
  <Swiper
    :slides-per-view="4"
    :space-between="30"
    @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="item in otherData" :key="item.title" class="group relative cursor-grab">
      <div class="mb-4 bg-white p-6">
        <div class="relative">
          <img :src="handleImg(`art${item.num}.jpg`)" alt="art" class="h-[330px] w-full">
          <div class="absolute top-0 left-0 hidden h-full w-full items-center justify-center duration-700 group-hover:bg-black/50 lg:flex">
            <div class="flex h-[90%] w-[90%] flex-col justify-between border-2 border-white p-4 opacity-0 duration-700 group-hover:opacity-100">
              <div>
                <p class="mb-2 text-white">
                  {{ item.title }}
                </p>
                <p class="text-white">
                  <i class="fa-brands fa-ethereum" />300
                </p>
              </div>
              <div class="self-end">
                <Button class="group-hover:bg-primary group-hover:text-white" @click="router.push(`/productDetail/${item.num}`)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="border-b-2 border-black pb-2 font-semibold">
        {{ item.title }}
      </p>
    </SwiperSlide>
  </Swiper>
  <div class="mt-6 flex justify-center xl:mt-12">
    <div v-for="item in 3" :key="item" class="mr-2 h-[8px] w-[8px] bg-black" :class="[swiperSlideTarget === item - 1 ? 'w-[16px] !bg-primary' : '']" />
  </div>
</template>
