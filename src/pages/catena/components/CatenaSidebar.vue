<script lang="ts" setup>
import { useRoute } from 'vue-router'
const openTarger = ref(['currency', 'status', 'price', 'type'])

const route = useRoute()

const checkTarget = (data: string) => openTarger.value.includes(data)

const handleTarget = (type: string) => {
  if (checkTarget(type)) {
    openTarger.value = openTarger.value.filter(item => item !== type)
  }
  else {
    openTarger.value.push(type)
  }
}

const eye = ['']
const bird = ['variety', 'count', 'checkFlower', 'color']
const flower = ['']

onMounted(() => {
  switch (route.params.type) {
    case 'eye':
      openTarger.value = [...openTarger.value, ...eye]
      break
    case 'bird':
      openTarger.value = [...openTarger.value, ...bird]
      break
    case 'flower':
      openTarger.value = [...openTarger.value, ...flower]
      break
  }
})
</script>

<template>
  <div class="max-w-[306px] bg-white">
    <div class="border-b-2 border-gray-300">
      <div class="overflow-hidden px-6 pt-6 pb-2">
        <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget('currency')">
          <p class="font-bold">
            網路
          </p>
          <i
            class="fa-solid fa-angle-down" :class="checkTarget('currency') && 'rotate-180'"
          />
        </div>
        <div class="hidden" :class="checkTarget('currency') && '!block'">
          <Checkbox>以太坊</Checkbox>
          <Checkbox>BNB智能鏈</Checkbox>
        </div>
      </div>
    </div>
    <div class="border-b-2 border-gray-300">
      <div class="px-6 pt-6 pb-2">
        <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget('status')">
          <p class="font-bold">
            狀態
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('status') && 'rotate-180'" />
        </div>
        <div class="hidden" :class="checkTarget('status') && '!block'">
          <Checkbox>僅展示</Checkbox>
          <Checkbox>拍賣中</Checkbox>
        </div>
      </div>
    </div>
    <div class="border-b-2 border-gray-300">
      <div class="px-6 pt-6 pb-2">
        <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget('price')">
          <p class="font-bold">
            價格
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('price') && 'rotate-180'" />
        </div>
        <div class="hidden items-center" :class="checkTarget('price') && '!flex'">
          <select name="" class="mr-2 h-[40px] w-[75px] border border-black px-2 py-1">
            <option value="ETH">
              ETH
            </option>
            <option value="BTC">
              BTC
            </option>
          </select>
          <input type="text" name="" class="h-[40px] w-[75px] border border-black pl-2">
          <span class="mx-2">－</span>
          <input type="text" class="h-[40px] w-[75px] border border-black pl-2">
        </div>
      </div>
    </div>
    <div class="border-b-2 border-gray-300">
      <div class="px-6 pt-6 pb-2">
        <p class="mb-6 font-bold text-gray-500">
          屬性
        </p>
        <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget('variety')">
          <p class="font-bold">
            品種
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('variety') && 'rotate-180'" />
        </div>
        <div class="mb-6 hidden" :class="checkTarget('variety') && '!block'">
          <Checkbox>八哥</Checkbox>
          <Checkbox>虎皮鸚鵡</Checkbox>
          <Checkbox>太平鳥</Checkbox>
          <Checkbox>畫眉鳥</Checkbox>
        </div>
        <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget('count')">
          <p class="font-bold">
            數量
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('count') && 'rotate-180'" />
        </div>
        <div class="mb-6 hidden" :class="checkTarget('count') && '!block'">
          <Checkbox>一枝獨秀</Checkbox>
          <Checkbox>成雙成對</Checkbox>
          <Checkbox>三人成虎</Checkbox>
          <Checkbox>狐群狗黨</Checkbox>
        </div>
        <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget('checkFlower')">
          <p class="font-bold">
            鳥的數量
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('checkFlower') && 'rotate-180'" />
        </div>
        <div class="mb-6 hidden" :class="checkTarget('checkFlower') && '!block'">
          <Checkbox>華麗花叢</Checkbox>
          <Checkbox>花田</Checkbox>
          <Checkbox>秋季</Checkbox>
          <Checkbox>一般</Checkbox>
        </div>
        <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget('color')">
          <p class="font-bold">
            鳥的顏色
          </p>
          <i class="fa-solid fa-angle-down" :class="checkTarget('color') && 'rotate-180'" />
        </div>
        <div class="hidden" :class="checkTarget('color') && '!block'">
          <Checkbox>強烈對比</Checkbox>
          <Checkbox>炫目</Checkbox>
          <Checkbox>和諧</Checkbox>
          <Checkbox>一般</Checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
