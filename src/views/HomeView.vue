<template>
  <Layout>
    <template #left>
      <LeftPanel />
    </template>

    <template #right>
      <RightPanel />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "../components/Layout.vue";
import RightPanel from "../components/Panel/RightPanel.vue";
import LeftPanel from "../components/Panel/LeftPanel.vue";
import { useThanks } from "../composables/useThanks";

useThanks();
</script>

<style scoped></style>
