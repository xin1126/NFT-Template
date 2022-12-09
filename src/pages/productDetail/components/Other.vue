<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperCore from 'swiper'
import 'swiper/css'
import useInnerWidth from '@/store/innerWidth'
import handleImg from '@/utils/handleImg'
import * as type from '@/utils/catenaData'

const router = useRouter()
const route = useRoute()

const innerWidthStore = useInnerWidth()
const { innerWidth } = storeToRefs(innerWidthStore)
const slidesPerView = ref(4)
const slidesPerPage = ref(3)
const spaceBetween = ref(30)
watch(innerWidth, (val) => {
  if (innerWidth.value < 1280) {
    slidesPerView.value = 2
    slidesPerPage.value = 5
    spaceBetween.value = 20
  }
  else {
    slidesPerView.value = 4
    slidesPerPage.value = 3
    spaceBetween.value = 30
  }
  slidesPerView.value = val < 1280 ? 2 : 4
}, { immediate: true })

const swiperSlideTarget = ref(1)
const onSlideChange = ({ activeIndex }: { activeIndex: number }) => {
  swiperSlideTarget.value = activeIndex + 1
}

const page = ref(0)
const resetSwiper = ref(0)
const onSwiper = (swiper: SwiperCore) => {
  swiper.slideTo(page.value, 0, false)
  swiperSlideTarget.value = page.value + 1
}

const handlePage = (num: number) => {
  resetSwiper.value++
  page.value = num
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
    <h2 class="flex items-end">
      Other<span class="ml-4 hidden text-xl font-bold md:block">其餘作品</span>
    </h2>
    <Button class="relative bottom-[-13px]" :border="false" />
  </div>
  <Swiper
    :key="resetSwiper"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="item in otherData" :key="item.title" class="group relative cursor-grab">
      <div class="mb-4 bg-white p-2 md:p-6" @click="router.push(`/productDetail/${item.num}`)">
        <div class="relative">
          <img :src="handleImg(`art${item.num}.jpg`)" alt="art" class="h-[165px] w-full object-top md:h-[330px]">
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
                <Button class="group-hover:bg-primary group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="border-b-2 border-black pb-2 text-sm font-semibold md:text-base">
        {{ item.title }}
      </p>
    </SwiperSlide>
  </Swiper>
  <div class="mt-6 mb-10 flex justify-center md:mb-0 xl:mt-12">
    <div
      v-for="item in slidesPerPage" :key="item" class="mr-2 h-[8px] w-[8px] cursor-pointer bg-black"
      :class="[swiperSlideTarget === item ? 'w-[16px] !bg-primary' : '']"
      @click="handlePage(item - 1)"
    />
  </div>
</template>
