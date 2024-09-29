<template>
  <div class="w-full flex flex-col justify-center items-center">
    <!-- 邀請區塊 -->
    <div
      class="w-[500px] h-[710px] bg-white relative flex justify-center mb-12"
    >
      <div
        class="w-[645px] absolute bg-white mt-9 p-20 flex flex-col justify-center items-center"
      >
        <span class="text-5xl">我們要結婚了！</span>
        <span class="text-3xl mt-4">Wilson ♡ Yura</span>
        <span class="text-3xl mt-4">誠摯邀請您來參與我們的訂婚宴</span>
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
    <!-- 我們的故事 -->
    <div
      class="w-full bg-parchment py-20 flex justify-center flex-col items-center"
    >
      <span class="text-5xl">我們的故事</span>
      <div class="my-10 px-44">
        <hr class="h-20 w-px border-0 border-black bg-black" />
      </div>
      <div class="w-1/2 h-72 flex justify-between">
        <div class="relative w-52">
          <img
            class="absolute z-10 left-4 top-6"
            src="/public/images/index_Yura.jpg"
            alt=""
          />
          <div class="absolute top-0 w-60 h-52 bg-customGradient"></div>
        </div>
        <div class="relative w-52">
          <img
            class="absolute z-10 left-4 top-6"
            src="/public/images/index_Wilson.jpg"
            alt=""
          />
          <div class="absolute top-0 w-60 h-52 bg-customGradient"></div>
        </div>
      </div>
      <div class="w-full text-2xl leading-10">
        <span
          >2021 年 5 月，Yura 剛剛轉職進入 Wilson
          的公司。公司不久後舉辦了一場減重比賽，我們因為在同一組而有了更多的接觸。一起健身、互相鼓勵，我們在這段過程中漸漸發現彼此的默契和共同點。減重比賽期間的歡笑和努力不僅改變了我們的身體，還拉近了我們的心。隨著時間的推移，感情也在不知不覺中升溫。最終，我們於
          2022 年 7 月開始正式交往，踏上了屬於我們的愛情旅程。</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.custom-btn {
  width: 130px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 25px;
  color: black;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-7 {
  background: linear-gradient(
    rgba(2, 156, 251, 0.572) 0%,
    rgba(253, 89, 207, 0.645) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: '';
  right: 0;
  bottom: 0;
  background: rgba(253, 89, 207, 0.645);
  box-shadow:
    -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2),
    4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7:before {
  height: 0%;
  width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7 span:hover {
  background: linear-gradient(
    to top,
    rgba(2, 156, 251, 0.572) 20%,
    rgba(253, 89, 207, 0.645) 60%
  );
  background-clip: text;
  color: transparent;
}
.btn-7:hover {
  background: transparent;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  background: rgba(2, 156, 251, 0.572);
  box-shadow:
    -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2),
    4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}
</style>
