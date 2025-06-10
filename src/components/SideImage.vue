<template>
  <div>
    <img :src="FixedImg" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  FixedImg: string;
}>();
</script>
<style scoped>
img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: block;
}
@media (max-width: 375px) {
  img {
    height: auto;
    max-height: 400px;
  }
}
</style>
