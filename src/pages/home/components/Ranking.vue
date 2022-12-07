<script lang="ts" setup>
import handleImg from '@/utils/handleImg'

const router = useRouter()

const rankingData = ref([{
  title: '散步遇到的女人',
  en: 'Zoe Jiang',
  money: '300',
  img: 'art04',
},
{
  title: '爆炸頭的母親',
  en: 'Yui',
  money: '300',
  img: 'art05',
},
{
  title: '夏天的時候',
  en: 'Bug Lin',
  money: '300',
  img: 'art06',
},
{
  title: '追求者送我的花',
  en: 'Michael',
  money: '300',
  img: 'art29',
},
{
  title: '今天釣到的魚',
  en: 'Wei JJ',
  money: '300',
  img: 'art07',
},
{
  title: '人生中的貓咪們',
  en: 'Even Lai',
  money: '300',
  img: 'art08',
}])

const newRankingData = computed(() => [...rankingData.value].slice(0, 3))
</script>

<template>
  <div class="container">
    <div class="mb-6 flex justify-between border-b-2 border-black pb-3 md:mb-12">
      <h2>Ranking<span class="ml-4 text-xl font-bold">市價排行榜</span></h2>
      <Button class="relative bottom-[-13px]" :border="false" @click="router.push('/marketPrice')" />
    </div>
    <ul class="mb-6 hidden md:flex">
      <li
        v-for="(item, index) in newRankingData"
        :key="item.title"
        class="group cursor-pointer border-2 border-black"
        :class="{ 'mr-6 ': index !== 2 }"
        @click="router.push('/marketPrice')"
      >
        <div class="relative">
          <span class="flex-center absolute z-10 h-[64px] w-[64px] border-r-2 border-b-2 border-black bg-white font-mono text-[32px] font-bold">
            {{ index + 1 }}
          </span>
          <img :src="handleImg(`${item.img}.jpg`)" class="h-[375px] w-[415px] object-top" alt="art">
          <div class="absolute top-0 h-full w-full duration-700 group-hover:bg-black/50">
            <div class="flex h-full items-end justify-end opacity-0 duration-700 group-hover:opacity-100">
              <Button class="group-hover:bg-primary group-hover:text-white" />
            </div>
          </div>
        </div>
        <p class="border-b-2 border-black bg-white p-4 text-lg font-bold">
          {{ item.title }}
        </p>
        <div class="flex items-center justify-between bg-white py-2 px-4">
          <p>{{ item.en }}</p>
          <p><i class="fa-brands fa-ethereum" />{{ item.money }}</p>
        </div>
      </li>
    </ul>
    <ul class="md:flex">
      <li
        v-for="(item, index) in rankingData"
        :key="item.title" class="group mb-4 flex w-full cursor-pointer border-2 border-black md:mb-0 md:w-[415px]"
        :class="{ 'md:hidden': index < 3, 'md:mr-6': index !== 5 }"
        @click="router.push('/marketPrice')"
      >
        <p class="flex-center bg-white py-6 px-4 font-mono text-2xl font-bold">
          {{ index + 1 }}
        </p>
        <div class="relative">
          <img :src="handleImg(`${item.img}.jpg`)" class="h-[90px] w-[120px]" alt="art">
          <div class="absolute top-0 h-full w-full overflow-hidden duration-700 group-hover:bg-black/50">
            <div class="flex-center h-full opacity-0 duration-700 group-hover:opacity-100">
              <p class="text-white">
                MORE
              </p>
              <span
                class="
                  absolute
                  -right-2
                  -bottom-12
                  h-full
                  w-[22px]
                  rotate-45
                  duration-700
                  group-hover:bg-primary
                "
              />
            </div>
          </div>
        </div>
        <div class="w-full bg-white">
          <p class="border-b-2 border-black p-3 font-bold">
            {{ item.title }}
          </p>
          <div class="flex justify-between p-2 pl-4">
            <p>{{ item.en }}</p>
            <p><i class="fa-brands fa-ethereum" />{{ item.money }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
