<template>
  <div>
    <div class="bg-red-200">U</div>
    <el-input-number v-model="count" :min="1" :max="10" />
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
import { ElInputNumber } from "element-plus";
const count =  useState('count', () => Math.round(Math.random() * 20))
</script>

