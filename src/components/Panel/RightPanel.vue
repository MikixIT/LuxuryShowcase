<template>
  <section class="right-panel">
    <ProjectDetail
      v-if="active"
      ref="projectDetailRef"
      :project="selectedProject"
      @close="handleClose"
      class="project-detail"
    />
    <div class="right-panel-content" v-show="!active">
      <div class="logo-container">
        <Logo />
      </div>
      <HeroText />
      <Grid>
        <Card
          v-for="(project, index) in projects"
          :key="project.id"
          :img="project.image"
          :title="project.title"
          :id="project.id"
          :date="project.date"
          @click="handleCardClick($event, project)"
        />
      </Grid>

      <div class="links-container">
        <Links
          href="https://michaeltorresdev.dev/"
          text="Get in Touch"
          class="sans-serif-large"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from "vue";
import { gsap } from "gsap";

import Card from "../Card.vue";
import Logo from "../Logo.vue";
import Grid from "../Grid.vue";
import HeroText from "../HeroText.vue";
import Links from "../Links.vue";
import ProjectDetail from "../ProjectDetail.vue";

import { useImageFly } from "../../composables/useAnimationCard";
import { useProjects } from "../../composables/useProject";

const { projects, fetchProjects } = useProjects();
onMounted(() => fetchProjects());

const projectDetailRef = ref(null);
let currentImg: HTMLImageElement | null = null;

const {
  active,
  selectedProject,
  handleClick,
  handleClose: handleCloseAnim,
} = useImageFly();

function handleCardClick(event: Event, project: any) {
  const target = event.target as HTMLElement;
  const img = target.closest("img") as HTMLImageElement | null;
  if (!img) return;

  selectedProject.value = project;
  currentImg = img;
  handleClick(img);
}

async function handleClose() {
  const detailEl = projectDetailRef.value?.$el || null;
  await handleCloseAnim(detailEl);
}

watch(active, async (newVal) => {
  if (newVal) {
    await nextTick();
    if (projectDetailRef.value) {
      gsap.fromTo(
        projectDetailRef.value.$el || projectDetailRef.value,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }
});
</script>

<style scoped>
.right-panel {
  grid-column: 5 / span 4;
  overflow: visible;
  display: flex;
  flex-direction: column;
  margin-bottom: 96px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
}

.links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 48px;
}

.right-panel-content {
  animation: fadeIn 0.5s cubic-bezier(0, 0.2, 0.2, 1);
  will-change: transform, opacity;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
