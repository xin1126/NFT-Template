<script lang="ts" setup>
import items from '@/utils/artworkData'
import handleImg from '@/utils/handleImg'
import useInnerWidth from '@/store/innerWidth'

const router = useRouter()

const innerWidthStore = useInnerWidth()
const { innerWidth } = storeToRefs(innerWidthStore)

const type = ref('works')

const works = ref([31, 30, 14, 29])
const collection = ref([27, 20, 26, 22])

const imgCount = ref(4)
watch(innerWidth, () => {
  if (innerWidth.value > 1024) {
    imgCount.value = 4
  }
  else if (innerWidth.value > 768) {
    imgCount.value = 3
  }
  else if (innerWidth.value > 640) {
    imgCount.value = 2
  }
  else {
    imgCount.value = 1
  }
}, { immediate: true })
</script>

<template>
  <section class="container">
    <div class="mb-6 flex sm:mb-10">
      <button
        class="w-1/2 border-black p-4 py-4 text-3xl md:min-w-[365px] md:px-12 md:text-5xl"
        :class="[type === 'works' ? 'border-2  border-b-0 ' : 'border-b-2 text-black/50']"
        @click="type = 'works'"
      >
        Art Works <span class="hidden text-xl font-bold md:inline-block">系列作品</span>
      </button>
      <button
        class="w-1/2 border-black p-4 py-4 text-3xl md:min-w-[365px] md:px-12 md:text-5xl"
        :class="[type === 'collection' ? 'border-2  border-b-0 ' : 'border-b-2 text-black/50']"
        @click="type = 'collection'"
      >
        Collection <span class="hidden text-xl font-bold md:inline-block">收藏品</span>
      </button>
      <div class="hidden w-full border-b-2 border-black md:block" />
    </div>
    <template v-if="type === 'works'">
      <div class="relative mb-4 border-2 border-black px-4 pt-12 sm:mb-[88px] sm:px-[110px]">
        <h3 class="mb-4 text-2xl font-bold">
          追求者送我的花
        </h3>
        <div class="flex justify-between">
          <p class="mb-6 sm:mr-[40px] sm:mb-0 lg:mr-[88px]">
            我又沒有特別喜歡花，為什麼不給我現金就好，擺在那也不知道要幹嘛，只好畫起來看有沒有人要買，阿不然如果真的喜歡我，把這些都買回去八。
          </p>
          <div class="hidden sm:block">
            <Button @click="router.push(`/catena/flower`)" />
          </div>
        </div>
        <ul class="relative flex sm:bottom-[-48px]">
          <li
            v-for="(item, index) in works"
            v-show="index + 1 <= imgCount"
            :key="item"
            class="h-[270px] w-full border-8 border-black sm:mr-2 sm:w-[263px]"
            :class="{ 'sm-mr-2': index + 1 !== works.length }"
            data-aos="fade-up"
            :data-aos-duration="1000"
            :data-aos-delay="index * 200"
          >
            <img :src="handleImg(`art${item}.jpg`)" alt="works" class="h-full w-full">
          </li>
        </ul>
        <div class="mt-4 mb-8 text-center sm:hidden">
          <Button @click="router.push(`/catena/flower`)" />
        </div>
        <div class="absolute top-0 left-0 h-[40px] w-[30px] overflow-hidden">
          <div class="w-fll relative top-[-20px] right-[12px] h-full rotate-45 bg-black" />
        </div>
        <div class="absolute top-0 right-0 h-[40px] w-[30px] overflow-hidden">
          <div class="w-fll relative top-[-20px] left-[12px] h-full -rotate-45 bg-black" />
        </div>
      </div>
      <div class="relative mb-10 border-2 border-black px-4 pt-12 sm:mb-[136px] sm:px-[110px]">
        <h3 class="mb-4 text-2xl font-bold">
          我家窗前的鳥
        </h3>
        <div class="flex justify-between">
          <p class="mb-6 sm:mr-[40px] sm:mb-0 lg:mr-[88px]">
            家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。
          </p>
          <div class="hidden sm:block">
            <Button @click="router.push(`/catena/bird`)" />
          </div>
        </div>
        <ul class="relative flex sm:bottom-[-48px]">
          <li
            v-for="(item, index) in collection"
            v-show="index + 1 <= imgCount"
            :key="item"
            class="h-[270px] w-full border-8 border-black sm:mr-2 sm:w-[263px]"
            :class="{ 'sm-mr-2': index + 1 !== collection.length }"
            data-aos="fade-up"
            :data-aos-duration="1000"
            :data-aos-delay="index * 200"
          >
            <img :src="handleImg(`art${item}.jpg`)" alt="works" class="h-full w-full">
          </li>
        </ul>
        <div class="mt-4 mb-8 text-center sm:hidden">
          <Button @click="router.push(`/catena/bird`)" />
        </div>
        <div class="absolute top-0 left-0 h-[40px] w-[30px] overflow-hidden">
          <div class="w-fll relative top-[-20px] right-[12px] h-full rotate-45 bg-black" />
        </div>
        <div class="absolute top-0 right-0 h-[40px] w-[30px] overflow-hidden">
          <div class="w-fll relative top-[-20px] left-[12px] h-full -rotate-45 bg-black" />
        </div>
      </div>
    </template>
    <Masonry v-else class="mb-20" :data="items" />
  </section>
</template>
