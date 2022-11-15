<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperCore from 'swiper'
import useInnerWidth from '@/store/innerWidth'
import handleImg from '@/utils/handleImg'
import 'swiper/css'

const innerWidthStore = useInnerWidth()
const { innerWidth } = storeToRefs(innerWidthStore)

const swiperSlideTarget = ref(1)
const onSlideChange = ({ activeIndex }: { activeIndex: number }) => {
  swiperSlideTarget.value = activeIndex
}

const resetSwiperMobile = ref(0)
const resetSwiperPC = ref(0)
watch(innerWidth, () => {
  if (innerWidth.value < 1280) {
    swiperSlideTarget.value = 0
    resetSwiperMobile.value++
  }
  else {
    swiperSlideTarget.value = 1
    resetSwiperPC.value++
  }
})

const onSwiperMobile = (swiper: SwiperCore) => {
  if (innerWidth.value < 1280) {
    swiperSlideTarget.value = 0
    swiper.activeIndex = 0
  }
}

const onSwiperPC = (swiper: SwiperCore) => {
  if (innerWidth.value > 1280) {
    swiperSlideTarget.value = 1
    swiper.activeIndex = 1
  }
}

const swiperRight = computed(() => {
  switch (swiperSlideTarget.value) {
    case 0:
      return '120px'
    case 1:
      return '0'
    case 2:
      return '-95px'
    case 3:
      return '-220px'
    case 4:
      return '-330px'
  }
})
const swiperSlideStyle = (item: number) => item - 1 === swiperSlideTarget.value ? '!w-[640px] !h-[400px]' : '!w-[310px] !h-[260px] grayscale'

const router = useRouter()
</script>

<template>
  <div class="container">
    <div class="mb-6 flex justify-between border-b-2 border-black pb-3 md:mb-12">
      <h2>Artist<span class="ml-4 text-xl font-bold">市價排行榜</span></h2>
      <Button class="relative bottom-[-13px]" :border="false" />
    </div>
    <Swiper
      :key="resetSwiperPC"
      :slides-per-view="3"
      :space-between="10"
      class="onSwiperPC hidden xl:block"
      @swiper="onSwiperPC"
      @slide-change="onSlideChange"
    >
      <SwiperSlide class="opacity-0" />
      <SwiperSlide v-for="item in 5" :key="item" :class="[swiperSlideStyle(item)]" class="relative cursor-grab">
        <img :src="handleImg(`artist0${item}.jpg`)" alt="art" class="duration-300" :class="[swiperSlideStyle(item)]">
        <div :class="{ hidden: item - 1 !== swiperSlideTarget }" class="absolute top-0 flex h-full w-full flex-col justify-between p-6">
          <div class="fon-bold text-6xl text-white">
            <p>Antony</p>
            <p>Wu</p>
          </div>
          <div class="flex items-end justify-between ">
            <p class="w-[310px] bg-white/80 p-6">
              喜愛大自然，創作題材常見大山、大水、花草與樹木。
            </p>
            <div>
              <Button class="bg-white" @click="router.push(`artistDetail/artist0${item}`)" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="opacity-0" />
    </Swiper>
    <Swiper
      :key="resetSwiperMobile"
      :space-between="10"
      class="xl:hidden"
      @swiper="onSwiperMobile"
      @slide-change="onSlideChange"
    >
      <SwiperSlide v-for="item in 5" :key="item" class="relative cursor-grab">
        <img :src="handleImg(`artist0${item}.jpg`)" alt="art" class="h-[232px] w-full">
        <div class="absolute top-0 flex h-full w-full justify-between">
          <p class="fon-bold whitespace-nowrap p-6 text-3xl text-white">
            Antony Wu
          </p>
          <div class="self-end p-2">
            <Button class="bg-white" @click="router.push(`artistDetail/artist0${item}`)" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <p class=" mt-4 bg-white/80 p-6 xl:hidden">
      喜愛大自然，創作題材常見大山、大水、花草與樹木。
    </p>
    <div class="mt-6 flex justify-center xl:mt-12">
      <div v-for="item in 5" :key="item" class="mr-2 h-[8px] w-[8px] bg-black" :class="[swiperSlideTarget === item - 1 ? 'w-[16px] !bg-primary' : '']" />
    </div>
  </div>
</template>

<style>
.onSwiperPC .swiper-wrapper {
  align-items: center;
  right: v-bind(swiperRight);
}
</style>
