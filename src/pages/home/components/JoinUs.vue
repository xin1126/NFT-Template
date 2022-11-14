<script lang="ts" setup>
const data = [{
  title: '設置你的錢包',
  text: '設置好您選擇的錢包後<br/>點擊右上角的錢包圖標進行連接',
  icon: 'fa-wallet',
},
{
  title: '創建您的主頁',
  text: '註冊成為會員<br/>編輯您的資料 讓大家了解你',
  icon: 'fa-pen-ruler',
},
{
  title: '添加你的 NFT',
  text: '上傳你的作品<br/>添加標題和描述',
  icon: 'fa-icons',
},
{
  title: '列出它們出售',
  text: '選擇出售 NFT 的方式<br/>並設定價格，等待有緣人',
  icon: 'fa-tags',
}]
</script>

<template>
  <div class="text-center font-bold">
    <h2 class=" mb-3 text-5xl">
      Join Us
    </h2>
    <p class="mb-4 text-2xl  sm:mb-8">
      創建並出售你的藝術品
    </p>
    <div class="border-t-4 border-black py-1">
      <div class="border-t-2 border-black">
        <ul class="container justify-between py-12 lg:flex lg:py-20">
          <li v-for="(item, index) in data" :key="item.title" class="lg:mb-0" :class="{ 'mb-12': data.length !== index + 1 }">
            <div>
              <i :class="[item.icon]" class="fa-solid mb-2 text-4xl text-primary" />
              <h3 class="mb-4 text-lg">
                {{ item.title }}
              </h3>
              <p class="font-normal" v-html="item.text" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
