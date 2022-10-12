<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const router = useRouter();

const routerBeforeResolveGuard = ref<() => void>(
  router.beforeResolve((guard) => {
    document.title = guard.meta.i18nKey
      ? t(`page-title.${guard.meta.i18nKey}`)
      : t("page-title.default-title");
  })
);

onUnmounted(() => {
  routerBeforeResolveGuard.value();
});
</script>

<template>
  <router-view />
</template>

<style scoped lang="less"></style>
