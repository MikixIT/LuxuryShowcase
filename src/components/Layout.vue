<template>
  <div class="layout">
    <div class="left-panel">
      <slot name="left"> </slot>
    </div>
    <div class="right-panel">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  column-gap: 24px;
  padding: 0 24px;
}

.left-panel {
  grid-column: 1 / span 4;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  margin-left: -24px;
}

.right-panel {
  grid-column: 5 / span 4;
}

/* 🎯 Mobile layout UNDER 375px */
@media (max-width: 375px) {
  .layout {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    padding: 0 24px;
    column-gap: 24px;
    row-gap: 24px;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }

  .left-panel {
    grid-column: 1 / -1;
    grid-row: 1;
    position: relative;
    height: auto;
    overflow: visible;
    margin: 0 -24px 0 -24px;
  }

  .right-panel {
    grid-column: 1 / -1;
    grid-row: 2;
    height: auto;
    overflow: visible;
  }
}
</style>
