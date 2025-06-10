<template>
  <header class="app-logo-wrapper">
    <a href="/">
      <img src="/logo.svg" alt="Logo" class="logo-object" />
    </a>
  </header>
</template>

<script setup></script>

<style scoped>
.app-logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 24px;
  width: 100%;
  position: relative;
  margin-bottom: 258px;
}

@media (max-width: 1200px) {
  .app-logo-wrapper {
    margin-bottom: 258px;
  }
}

@media (max-width: 1024px) {
  .app-logo-wrapper {
    margin-bottom: 128px;
  }
}

@media (max-width: 768px) {
  .app-logo-wrapper {
    margin-bottom: 128px;
  }
}

@media (max-width: 375px) {
  .app-logo-wrapper {
    margin-bottom: 96px;
    padding: 16px 0;
  }
}

.logo-object {
  width: 1019px;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

@media (max-width: 375px) {
  .logo-object {
    width: 90vw;
  }

  .app-logo-wrapper {
    padding: 16px 0;
  }
}
</style>
