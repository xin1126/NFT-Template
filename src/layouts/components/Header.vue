<script lang="ts" setup>
import { ref } from 'vue'

const menu = ref(false)
const search = ref(false)

const handelSearch = () => {
  search.value = true
  menu.value = false
}
</script>

<template>
  <div class="fixed w-full border-black bg-backound xl:border-b-2">
    <div class="container flex w-full justify-between border-b-2 border-black bg-backound xl:border-0 ">
      <img
        class="w-[85px] py-4 xl:w-[190px] xl:py-8"
        :class="{ hidden: search }"
        src="/images/logo.svg"
        alt="logo"
      >
      <ul class="hidden text-2xl font-bold xl:flex">
        <li class="flex-center h-full border-l-2 border-black px-12">
          <span class="mr-[120px] text-secondary">搜尋作品名稱、藝術家名稱</span>
          <i class="fa-sharp fa-solid fa-magnifying-glass" />
        </li>
        <li class="flex-center h-full border-l-2 border-black px-12">
          探索
        </li>
        <li class="flex-center h-full border-l-2 border-black px-12">
          市值
        </li>
        <li class="flex-center h-full border-l-2 border-black px-12">
          <i class="fa-solid fa-wallet" />
        </li>
      </ul>
      <ul
        class="flex items-center justify-between xl:hidden"
        :class="{ 'w-full': search }"
      >
        <li :class="{ hidden: !search }">
          <i
            class="fa-solid fa-chevron-left mr-3 cursor-pointer"
            @click="search = false"
          />
          <input
            type="text"
            class="bg-transparent outline-0"
            placeholder="搜尋作品名稱、藝術家名稱"
          >
        </li>
        <li
          class="cursor-pointer py-4"
          @click="handelSearch"
        >
          <i class="fa-sharp fa-solid fa-magnifying-glass" />
        </li>
        <li
          class="ml-6 cursor-pointer"
          :class="{ hidden: search }"
          @click="menu = !menu"
        >
          <div
            class="
              relative
              left-0 mb-1
              w-[20px]
              border-b-[3px]
              border-black
              transition-all
            "
            :class="{ 'rotate-45': menu, 'top-[4px]': menu }"
          />
          <div
            class="mb-1 w-[20px] border-b-[3px] border-black"
            :class="{ hidden: menu }"
          />
          <div
            class="relative w-[20px] border-b-[3px] border-black transition-all"
            :class="{ '-rotate-45': menu, '-top-[3px]': menu }"
          />
        </li>
      </ul>
      <ul
        class="
          absolute
          -top-52 left-0
          -z-10
          flex
          w-full
          flex-col
          justify-center
          bg-white
          px-4
          text-lg
          font-bold
          transition-all
          xl:hidden
        "
        :class="{ '!top-12': menu }"
      >
        <li class="mb-6 border-b-2 border-black py-6">
          <a href="#">探索</a>
        </li>
        <li class="mb-6">
          <a href="#">市值</a>
        </li>
        <li>
          <a
            href="#"
            class="mb-6 block border border-black bg-primary py-[14px] text-white"
          >連結錢包</a>
        </li>
      </ul>
    </div>
  </div>
</template>
