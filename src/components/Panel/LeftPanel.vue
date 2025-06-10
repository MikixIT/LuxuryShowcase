<template>
  <div class="left-panel-content">
    <SideImage FixedImg="/assets/images/Fixed-image.jpg" />
  </div>
</template>

<script lang="ts" setup>
import SideImage from "../SideImage.vue";
</script>

<style scoped>
.left-panel-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (max-width: 375px) {
  .left-panel-content {
    height: auto;
  }
  .clone-fly {
    position: relative;
    object-fit: fill;
  }
}
</style>
