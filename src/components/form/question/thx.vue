<template>
  <form-field :show-chevrons="false" question="非常感謝您的填寫！">
    <router-link :to="'/event-detail'">
      <button class="custom-btn btn-7">
        <span class="text-2xl p-1">點我看資訊</span>
      </button>
    </router-link>
  </form-field>
</template>

<script setup lang="ts"></script>
