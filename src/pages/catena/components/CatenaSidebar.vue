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

const type = {
  bird: [
    {
      type: 'variety',
      title: '品種',
      content: ['八哥', '虎皮鸚鵡', '太平鳥', '畫眉鳥'],
    },
    {
      type: 'count',
      title: '數量',
      content: ['一枝獨秀', '成雙成對', '三人成虎', '不計其數'],
    },
    {
      type: 'checkFlower',
      title: '是否有花草',
      content: ['華麗花叢', '花田', '秋季', '一般'],
    },
    {
      type: 'color',
      title: '鳥的顏色',
      content: ['強烈對比', '炫目', '和諧', '一般'],
    },
  ],
  eye: [
    {
      type: 'eyeShape',
      title: '眼型',
      content: ['杏眼', '丹鳳眼', '細長眼', '眯縫眼', '圓眼'],
    },
    {
      type: 'expressionEyes',
      title: '眼神',
      content: ['凝視 ', '飄忽', '茫然 ', '掃視'],
    },
    {
      type: 'gender',
      title: '性別',
      content: ['男性', '女性'],
    },
  ],
  flower: [
    {
      type: 'variety',
      title: '品種',
      content: ['杜鵑花', '馬蹄蓮', '康乃馨', '雛菊', '百合花'],
    },
    {
      type: 'count',
      title: '數量',
      content: ['一枝獨秀', '成雙成對', '三人成虎', '不計其數'],
    },
    {
      type: 'color',
      title: '花的顏色',
      content: ['強烈對比', '炫目', '和諧', '一般'],
    },
  ],
}

onMounted(() => {
  switch (route.params.type) {
    case 'eye':
      openTarger.value = [...openTarger.value, ...Object.keys(type.eye)]
      break
    case 'bird':
      openTarger.value = [...openTarger.value, ...Object.keys(type.bird)]
      break
    case 'flower':
      openTarger.value = [...openTarger.value, ...Object.keys(type.flower)]
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
      <div class="p-6" :class="{ 'pb-2': !checkTarget('price') }">
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
        <template v-for="item in type[route.params.type]" :key="item.type">
          <div class="mb-3 flex cursor-pointer items-center justify-between" @click="handleTarget(item.type)">
            <p class="font-bold">
              {{ item.title }}
            </p>
            <i class="fa-solid fa-angle-down" :class="checkTarget(item.type) && 'rotate-180'" />
          </div>
          <div class="mb-6 hidden" :class="checkTarget(item.type) && '!block'">
            <Checkbox v-for="text in item.content" :key="text">
              {{ text }}
            </Checkbox>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
