<script lang="ts" setup>
import type { PropType } from 'vue'
import handleImg from '@/utils/handleImg'
import useInnerWidth from '@/store/innerWidth'

interface Props {
  title: string
  num: string
  height: string
  mobileHidden?: boolean
  dalay?: number
}

const props = defineProps({
  data: {
    type: Array as PropType<Props[]>,
    default: () => [],
  },
})

const router = useRouter()

const innerWidthStore = useInnerWidth()
const { innerWidth } = storeToRefs(innerWidthStore)

const columnWidth = computed(() => innerWidth.value > 1024 ? 250 : innerWidth.value > 640 ? 200 : 156)

// 隨機亂數 delay 瀑布
const newData = ref(props.data)
const aosDelay = ref<number[]>([])
props.data.forEach((item, index) => {
  aosDelay.value.push((index + 1) * 200)
})
aosDelay.value.sort(() => Math.random() - 0.5)
aosDelay.value.forEach((item, index) => {
  newData.value[index].dalay = aosDelay.value[index]
})
</script>

<template>
  <masonry-wall :items="newData" :ssr-columns="1" :column-width="columnWidth" :gap="16">
    <template #default="{ item }">
      <div data-aos="zoom-in" data-aos-duration="2000" :data-aos-delay="item.dalay" :class="{ hidden: item.mobileHidden }" class="group cursor-pointer sm:block" @click="router.push(`/productDetail/${item.num}`)">
        <div class="relative mb-4 border-[8px] border-white bg-white sm:border-[24px]" :class="[item.height]">
          <img :src="handleImg(`art${item.num}.jpg`)" alt="art" class="h-full w-full">
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
</template>
