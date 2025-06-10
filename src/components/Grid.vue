<template>
  <div class="card-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  justify-items: stretch;
  will-change: contents;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    justify-content: center;
    max-width: 100%;
  }
}
</style>
