<template>
  <div class="w-full flex flex-col justify-center items-center gap-12">
    <!-- 邀請區塊 -->
    <div
      class="min-h-[calc(100vh-124px)] w-full flex justify-center items-center"
    >
      <div
        class="w-full md:w-[500px] h-[710px] bg-white relative flex justify-center items-center"
      >
        <div
          class="w-full md:w-[645px] absolute bg-white p-8 md:p-20 flex flex-col justify-center items-center"
        >
          <span class="text-5xl">我們要結婚了！</span>
          <span class="text-3xl mt-4">Wilson ♡ Yura</span>
          <span class="text-2xl sm:text-3xl mt-4">
            誠摯邀請您來參與我們的訂婚宴
          </span>
          <div class="my-10 px-44">
            <hr class="h-20 w-px border-0 border-black bg-black" />
          </div>
          <span class="text-5xl">
            2024
            <span class="mx-1">年</span>
            11
            <span class="mx-1">月</span>
            23<span class="mx-1">日</span>
          </span>
          <div class="flex mt-4">
            <div class="w-7">
              <img src="../../public/images/location.svg" alt="location" />
            </div>
            <span class="text-3xl">成都雅宴時尚會館</span>
          </div>
          <router-link :to="'/form'" class="mt-4">
            <button class="custom-btn btn-7">
              <span class="text-2xl p-1">點此報名</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 我們的故事 -->
    <div
      class="w-full bg-parchment py-20 flex justify-center flex-col items-center"
    >
      <span class="text-5xl">我們的故事</span>
      <div class="my-10 px-44">
        <hr class="h-20 w-px border-0 border-black bg-black" />
      </div>
      <div class="w-1/2 h-56 md:h-72 flex justify-between max-md:w-2/3">
        <div class="relative w-52">
          <img
            class="absolute z-10 left-4 top-6 max-md:z-0 max-md:shadow-lg max-md:w-[90%]"
            src="/public/images/index_Yura.jpg"
            alt=""
          />
          <div
            class="absolute top-0 w-60 h-52 bg-customGradient max-md:hidden"
          ></div>
        </div>
        <div class="relative w-52">
          <img
            class="absolute z-10 left-4 top-6 max-md:z-0 max-md:shadow-lg max-md:w-[90%]"
            src="/public/images/index_Wilson.jpg"
            alt=""
          />
          <div
            class="absolute top-0 w-60 h-52 bg-customGradient max-md:hidden"
          ></div>
        </div>
      </div>
      <div class="w-4/5 text-2xl leading-10 max-md:px-2">
        <span
          >2021 年 5 月，Yura 剛剛轉職進入 Wilson
          的公司。公司不久後舉辦了一場減重比賽，我們因為在同一組而有了更多的接觸。一起健身、互相鼓勵，我們在這段過程中漸漸發現彼此的默契和共同點。減重比賽期間的歡笑和努力不僅改變了我們的身體，還拉近了我們的心。隨著時間的推移，感情也在不知不覺中升溫。最終，我們於
          2022 年 7 月開始正式交往，踏上了屬於我們的愛情旅程。</span
        >
      </div>
      <router-link :to="'/our-story'" class="mt-8">
        <button class="custom-btn btn-7">
          <span class="text-2xl p-1">更多的我們</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
