<script setup lang="ts">
import { watch } from "vue";
import { Message } from "@arco-design/web-vue";
import { useStore as useDemoStore } from "@/store/demo";

const demoStore = useDemoStore();

watch(
  () => demoStore.counter,
  (newCounter, oldCounter) => {
    Message.success({
      content: `demo store counter state change: ${oldCounter} -> ${newCounter}`,
      position: "bottom",
    });
  }
);
</script>

<template>
  <div class="h-full text-center mt-52">
    <a-typography>
      <a-typography-title bold> 🌟 {{ $t("home.title") }} </a-typography-title>
    </a-typography>
    <a-button type="primary" @click="demoStore.increment">
      ➡️ {{ $t("home.test") }}
    </a-button>
  </div>
</template>

<style scoped lang="less"></style>
