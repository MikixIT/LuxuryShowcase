# Vue 3 Portfolio UI – Responsive, Animated & Scalable

A modern front-end project built with **Vue 3**, **Vite**, **GSAP**, **TypeScript**, and **CSS (Vanilla)** — focused on clean architecture, precise UI, and smooth interactions.

This is a **two-column layout application**, inspired by a refined portfolio design. On the **left**, a fixed image section showcases high-quality visuals with curated taste and composition. On the **right**, scrollable content dynamically reveals project descriptions with smooth transitions and pixel-perfect alignment.

All animations, layout proportions, and UI interactions were carefully recreated to match the **original Figma design** with high fidelity — especially across breakpoints.

---

## 🚀 Stack

- **Vue 3** with `<script setup>` + Composition API
- **Vite** for fast dev/build
- **TypeScript** with strong typings
- **GSAP** for advanced animations
- **CSS Grid / Flexbox** for ultra-precise layout
- Local **mock API** with strongly typed data

---

## 📐 Key Features

### 🎯 Pixel-Perfect Layout

- Built with **CSS Grid** and **responsive calculations** for high-precision placement.
- Recreated complex designs from Figma with close attention to spacing, alignment, and proportions.
- Includes both **desktop** and **mobile** views, carefully crafted and tested.

### 📁 Clean Architecture

- Scalable folder structure with:
  - `components/` for reusable UI blocks
  - `components/panel` for reusable left-side and right-side.
  - `composables/` for logic, state and to isolate GSAP logic
  - `data/` for local API simulation (mook local)
  - `types/` for TypeScript interface define.
  - `views/` for Vue page-level views.

### 💫 Smooth Animations

- **GSAP-powered transitions** and element reveals.
- Custom animation on **window resize** that adapts beautifully mid-transition — optimized and fluid across breakpoints.
- Animations separated from components for better reusability and maintainability.

### 🔌 Mocked API Integration

- Local mock JSON mimics real API responses.
- Fetched via native `fetch` API with fully typed TypeScript responses.

---

## 🧠 Thought Process

This project was built with attention to:

- **Maintainability** → modular code & logic separation
- **Scalability** → reusable components & clean folder structure
- **Performance** → minimal, optimized animations and assets
- **UX consistency** → transitions, spacing, and behavior synced with the Figma design

The goal was not just to "make it work", but to build something professional, readable, and production-ready.

---

## 🛠️ Getting Started

Clone the repo and run:

```bash
npm install
npm run dev
```

Thanks again for your time and consideration!

- Michael "MikixIT" Torres
