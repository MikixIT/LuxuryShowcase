<template>
  <a
    :href="href || '#'"
    class="animated-link"
    target="_blank"
    rel="noopener noreferrer"
    @click="handleClick"
  >
    {{ text }}
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: false,
    default: "", // safe default
  },
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    default: () => {},
    required: false,
  },
});

function handleClick(event) {
  if (!props.href || props.href === "#") {
    event.preventDefault();
  }

  props.onClick(event);
}
</script>

<style scoped>
.animated-link {
  position: relative;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
}

.animated-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: black;
  transform-origin: right;
  transform: scaleX(1);
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1);
}

.animated-link:hover::after {
  transform: scaleX(0);
}
</style>
