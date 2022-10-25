<template>
  <div class="md:container">
    <div class="md:flex">
      <div class="hidden bg-black xl:block">
        <p
          class="text-vertical flex items-center p-6 text-[48px] text-white"
        >
          Recommend <span class="mt-5 text-[20px] tracking-widest">推 薦 系 列</span>
        </p>
      </div>
      <img class="w-full md:h-[360px] md:w-[50%] xl:h-[500px] xl:w-[756px]" src="/images/art01.jpg" alt="art">
      <Card layout="main">
        <template #en>
          Kemus Wu
        </template>
        <template #title>
          瞳孔:流動的脈絡
        </template>
        <template #text>
          眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。
        </template>
      </Card>
    </div>
    <div class="xl:flex">
      <div class="flex flex-col-reverse md:flex-row xl:w-2/4">
        <Card layout="secondary">
          <template #en>
            Joanne
          </template>
          <template #title>
            海洋波度
          </template>
          <template #text>
            海洋的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。
          </template>
        </Card>
        <img class="w-full border-black md:h-[360px] md:w-[50%] md:border-r-2 md:border-b-2 xl:border-r-0" src="/images/art02.jpg" alt="art">
      </div>
      <div class="flex flex-col-reverse md:flex-row-reverse xl:w-2/4  xl:flex-row">
        <Card layout="secondary">
          <template #en>
            Michael
          </template>
          <template #title>
            我家窗前的鳥
          </template>
          <template #text>
            家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。
          </template>
        </Card>
        <img class="w-full border-black md:h-[360px] md:w-[50%] md:border-b-2 md:border-l-2 xl:border-l-0 xl:border-r-2" src="/images/art27.jpg" alt="art">
      </div>
    </div>
  </div>
</template>
