<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperCore from 'swiper'
import 'swiper/css'

const swiperSlideTarget = ref(1)
const onSlideChange = ({ activeIndex }: { activeIndex: number }) => {
  swiperSlideTarget.value = activeIndex
}

const onSwiper = (swiper: SwiperCore) => {
  swiper.activeIndex = 1
}

const swiperRight = computed(() => swiperSlideTarget.value === 0 ? '100px' : swiperSlideTarget.value === 1 ? '0' : `${-80 * swiperSlideTarget.value}px`)
const swiperSlideStyle = (item: number) => item - 1 === swiperSlideTarget.value ? '!w-[640px] !h-[400px]' : '!w-[310px] !h-[260px]'
</script>

<template>
  <div class="container">
    <div class="mb-6 flex justify-between border-b-2 border-black pb-3 md:mb-12">
      <h2>Artist<span class="ml-4 text-xl font-bold">市價排行榜</span></h2>
      <Button class="relative bottom-[-13px]" :border="false" />
    </div>
    <Swiper
      :slides-per-view="3"
      :space-between="10"
      class="hidden xl:block"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide class="opacity-0" />
      <SwiperSlide v-for="item in 5" :key="item" :class="[swiperSlideStyle(item)]">
        <img :src="`/images/artist0${item}.jpg`" alt="art" class="duration-300" :class="[swiperSlideStyle(item)]">
      </SwiperSlide>
      <SwiperSlide class="opacity-0" />
    </Swiper>
    <Swiper
      :space-between="10"
    >
      <SwiperSlide v-for="item in 5" :key="item" class="xl:hidden">
        <img :src="`/images/artist0${item}.jpg`" alt="art" class="h-[300px] w-full">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-wrapper {
  align-items: center;
  right: v-bind(swiperRight);
}
</style>
