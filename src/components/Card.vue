<template>
  <div class="card" @click="handleImageClick">
    <div class="image-wrapper">
      <img ref="imgRef" :src="img" :alt="title" />
    </div>
    <div class="card-footer">
      <p class="title sans-serif-small">{{ title }}</p>
      <p class="date serif-small">{{ date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useImageFly } from "../composables/useAnimationCard";

const props = defineProps<{
  img: string;
  title: string;
  date: string;
}>();

const imgRef = ref<HTMLImageElement | null>(null);

const { handleClick } = useImageFly();

function handleImageClick() {
  if (imgRef.value) {
    handleClick(imgRef.value);
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1.3 / 1;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 4s cubic-bezier(0, 0.2, 0.2, 1);
}

.image-wrapper:hover img {
  transform: scale(1.1);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

@media (hover: none) {
  .image-wrapper:hover img {
    transform: none;
  }
  /* Noticed from the videos you sent that the mobile version
   doesn’t have a hover effect when the card is tapped */
}
</style>
