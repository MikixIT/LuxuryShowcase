<template>
  <div class="project-details" :class="{ closing: isClosing }">
    <h2 class="heading">{{ project?.title || "project 1" }}</h2>
    <h3 class="date serif-large">{{ project?.date || "project 1" }}</h3>
    <p class="sans-serif-large">
      {{ project?.description || "lorem lorem lorem" }}
    </p>
    <Links @Click="handleClose" text="Go Back" class="links sans-serif-large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Links from "./Links.vue";

const props = defineProps({
  project: {
    type: Object,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["close"]);
const isClosing = ref(false);

function handleClose() {
  isClosing.value = true;
  setTimeout(() => {
    emit("close");
  }, 400);
}
</script>

<style scoped>
.project-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow-wrap: break-word;
  text-align: center;
  padding: 96px 0 0 0;

  animation: fadeIn 0.4s ease-out;
  transition:
    opacity 0.4s ease-out,
    transform 0.4s ease-out;
}

.project-details.closing {
  animation: fadeOut 0.4s ease-in forwards;
}

.project-details h2 {
  margin-bottom: 1rem;
}

.project-details p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  margin-bottom: 24px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(24px);
  }
}
</style>
