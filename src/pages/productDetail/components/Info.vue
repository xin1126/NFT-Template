<script lang="ts" setup>
const openTarger = ref(['type', 'bid', 'info', 'history'])

const checkTarget = (data: string) => openTarger.value.includes(data)

const handleTarget = (type: string) => {
  if (checkTarget(type)) {
    openTarger.value = openTarger.value.filter(item => item !== type)
  }
  else {
    openTarger.value.push(type)
  }
}
</script>

<template>
  <div class="md:flex">
    <div class="mb-6 md:mr-6 md:mb-0 md:w-1/2">
      <div
        class="mb-6 h-[56px] overflow-hidden border-2 border-black bg-white md:h-[80px]"
        :class="checkTarget('type') && '!h-fit'"
      >
        <div
          class="flex cursor-pointer items-center justify-between border-black p-4 md:p-6"
          :class="checkTarget('type') && 'border-b-2'"
          @click="handleTarget('type')"
        >
          <p class="font-bold">
            屬性
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('type') && 'rotate-180'" />
        </div>
        <ul class="p-4 md:p-6">
          <li class="mb-2 flex justify-between border-b border-gray-300 pb-1">
            <p>品種</p>
            <p class="text-secondary">
              青藍金剛鸚鵡
            </p>
          </li>
          <li class="mb-2 flex justify-between border-b border-gray-300 pb-1">
            <p>鳥的數量</p>
            <p class="text-secondary">
              2隻
            </p>
          </li>
          <li class="mb-2 flex justify-between border-b border-gray-300 pb-1">
            <p>是否有花草</p>
            <p class="text-secondary">
              是
            </p>
          </li>
          <li class="flex justify-between border-b border-gray-300 pb-1">
            <p>鳥的顏色</p>
            <p class="text-secondary">
              藍色
            </p>
          </li>
        </ul>
      </div>
      <div
        class="h-[56px] overflow-hidden border-2 border-black bg-white md:h-[80px]"
        :class="checkTarget('info') && '!h-fit'"
      >
        <div
          class="flex cursor-pointer items-center justify-between border-black p-4 md:p-6"
          :class="checkTarget('info') && 'border-b-2'"
          @click="handleTarget('info')"
        >
          <p class="font-bold">
            基本資訊
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('info') && 'rotate-180'" />
        </div>
        <ul class="p-4 md:p-6">
          <li class="mb-2 flex justify-between border-b border-gray-300 pb-1">
            <p>擁有者</p>
            <p class="text-secondary">
              0xa543x…1283
            </p>
          </li>
          <li class="mb-2 flex justify-between border-b border-gray-300 pb-1">
            <p>代幣ID</p>
            <p class="text-secondary">
              #1234
            </p>
          </li>
          <li class="mb-2 flex justify-between border-b border-gray-300 pb-1">
            <p>合約地址</p>
            <p class="text-secondary">
              0xa543x…1234
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:w-1/2">
      <div
        class="mb-6 h-[56px] overflow-hidden border-2 border-black bg-white md:h-[80px]"
        :class="checkTarget('bid') && '!h-fit'"
      >
        <div
          class="flex cursor-pointer items-center justify-between border-black p-4 md:p-6"
          :class="checkTarget('bid') && 'border-b-2'"
          @click="handleTarget('bid')"
        >
          <p class="font-bold">
            出價
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('bid') && 'rotate-180'" />
        </div>
        <ul class="p-4 md:p-6">
          <li class="flex bg-backound py-2 pl-4">
            <p class="w-1/2">
              價格
            </p>
            <p class="w-1/2">
              期限
            </p>
          </li>
          <li class="flex items-center border-b border-gray-300 py-2 pl-4">
            <div class="flex w-1/2 items-center">
              <img class="mr-2 h-[32px] w-[32px] rounded-full" src="@/assets/images/artist01.jpg" alt="artist">
              <i class="fa-solid fa-arrow-right mr-2" />
              <span>0.044Eth</span>
            </div>
            <p class="text-secondary">
              3個月後
            </p>
          </li>
          <li class="flex items-center border-b border-gray-300 py-2 pl-4">
            <div class="flex w-1/2 items-center">
              <img class="mr-2 h-[32px] w-[32px] rounded-full" src="@/assets/images/user02.jpg" alt="artist">
              <i class="fa-solid fa-arrow-right mr-2" />
              <span>0.054Eth</span>
            </div>
            <p class="text-secondary">
              1個月後
            </p>
          </li>
          <li class="flex items-center border-b border-gray-300 py-2 pl-4">
            <div class="flex w-1/2 items-center">
              <img class="mr-2 h-[32px] w-[32px] rounded-full" src="@/assets/images/user03.jpg" alt="artist">
              <i class="fa-solid fa-arrow-right mr-2" />
              <span>0.044Eth</span>
            </div>
            <p class="text-secondary">
              2週後
            </p>
          </li>
        </ul>
      </div>
      <div
        class="h-[56px] overflow-hidden border-2 border-black bg-white md:h-[80px]"
        :class="checkTarget('history') && '!h-fit'"
      >
        <div
          class="flex cursor-pointer items-center justify-between border-black p-4 md:p-6"
          :class="checkTarget('history') && 'border-b-2'"
          @click="handleTarget('history')"
        >
          <p class="font-bold">
            交易歷史
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('history') && 'rotate-180'" />
        </div>
        <ul class="p-4 md:p-6">
          <li class="flex bg-backound py-2 pl-4">
            <p class="flex w-1/2">
              <span class="mr-8 whitespace-nowrap md:mr-12">事件</span>
              <span class="mr-8 whitespace-nowrap md:mr-12">價格</span>
              <span>從</span>
            </p>
            <p class="w-1/2 text-center">
              時間
            </p>
          </li>
          <li class="flex items-center border-b border-gray-300 py-2 pl-4">
            <div class="flex w-1/2 items-center">
              <span class="mr-8 whitespace-nowrap md:mr-12">上架</span>
              <span class="mr-8 md:mr-12">2nb</span>
              <div class="flex items-center">
                <img class="mr-2 h-[32px] w-[32px] min-w-[32px] rounded-full" src="@/assets/images/artist02.jpg" alt="artist">
                <div class="hidden items-center md:flex">
                  <i class="fa-solid fa-arrow-right mr-2" />
                  <span>0.044Eth</span>
                </div>
              </div>
            </div>
            <p class="w-1/2 text-center text-secondary">
              14小時前
            </p>
          </li>
          <li class="flex items-center border-b border-gray-300 py-2 pl-4">
            <div class="flex w-1/2 items-center">
              <span class="mr-8 whitespace-nowrap md:mr-12">出價</span>
              <span class="mr-8 md:mr-12">2nb</span>
              <div class="flex items-center">
                <img class="mr-2 h-[32px] w-[32px] min-w-[32px] rounded-full" src="@/assets/images/artist01.jpg" alt="artist">
                <div class="hidden items-center md:flex">
                  <i class="fa-solid fa-arrow-right mr-2" />
                  <span>0.044Eth</span>
                </div>
              </div>
            </div>
            <p class="w-1/2 text-center text-secondary">
              2天前
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
