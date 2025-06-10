import { ref, onUnmounted } from "vue";
import { gsap } from "gsap";

export function useImageFly() {
  const active = ref(false);
  const selectedProject = ref(null);
  let cloneEl: HTMLImageElement | null = null;
  let originalImg: HTMLImageElement | null = null;

  // Cache panels for reuse
  const getPanels = () => {
    const left = document.querySelector(
      ".left-panel-content"
    ) as HTMLElement | null;
    const right = document.querySelector(
      ".right-panel-content"
    ) as HTMLElement | null;
    return { left, right };
  };

  // Fade out panels, keep clone visible
  function hidePanels() {
    const { left, right } = getPanels();
    if (!left || !right) return;
    gsap.to([left, right], {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.4,
      ease: "power2.out",
    });
    if (cloneEl) cloneEl.style.visibility = "visible";
  }

  // Fade panels back in
  function showPanels() {
    const { left, right } = getPanels();
    if (!left || !right) return;
    gsap.to([left, right], {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
      ease: "power2.inOut",
    });
  }

  // Reset styles and clean clones
  function reset() {
    if (!originalImg) return;

    // Reset original image styles
    Object.assign(originalImg.style, {
      display: "block",
      visibility: "",
      zIndex: "",
      position: "",
      pointerEvents: "",
      width: "",
      height: "",
      transform: "",
    });
    void originalImg.offsetHeight; // force reflow

    // Remove cloned image
    cloneEl?.parentNode?.removeChild(cloneEl);
    cloneEl = null;

    showPanels();
    active.value = false;
    selectedProject.value = null;
    originalImg = null;
    document.body.style.overflow = "";
  }

  // Update clone position on window resize (desktop only)
  function onResize() {
    if (!cloneEl || !active.value) return;
    const leftPanel = document.querySelector(
      ".left-panel"
    ) as HTMLElement | null;
    if (!leftPanel) return;

    const isMobile = window.innerWidth <= 375;
    if (!isMobile) {
      const rect = leftPanel.getBoundingClientRect();
      gsap.to(cloneEl, {
        duration: 0.4,
        width: rect.width + "px",
        height: rect.height + "px",
        top: rect.top + "px",
        left: rect.left + "px",
        ease: "power2.out",
        clearProps: "transform",
      });
    } else {
      gsap.to(cloneEl, { duration: 0.4, top: "0px", y: 0, ease: "power2.out" });
    }
  }

  window.addEventListener("resize", onResize);
  onUnmounted(() => window.removeEventListener("resize", onResize));

  // Main click handler for image animation
  async function handleClick(
    img: HTMLImageElement,
    projectDetailEl?: HTMLElement | null
  ) {
    const leftPanel = document.querySelector(
      ".left-panel"
    ) as HTMLElement | null;
    if (!leftPanel) return;

    const isMobile = window.innerWidth <= 375;

    if (!active.value) {
      originalImg = img;

      // Clone and style the image for animation
      cloneEl = img.cloneNode(true) as HTMLImageElement;
      cloneEl.classList.add("clone-fly");

      const rect = img.getBoundingClientRect();
      Object.assign(cloneEl.style, {
        position: "fixed",
        top: rect.top + "px",
        left: rect.left + "px",
        width: rect.width + "px",
        height: rect.height + "px",
        zIndex: "9999",
        pointerEvents: "none",
        objectFit: "cover",
        visibility: "visible",
      });

      document.body.appendChild(cloneEl);
      img.style.visibility = "hidden";
      img.style.display = "none";

      // Wait a bit for styles to apply
      await new Promise((r) => setTimeout(r, 400));
      hidePanels();
      await new Promise((r) => setTimeout(r, 400));

      if (isMobile) {
        // Animate clone fullscreen top half on mobile
        await gsap.to(cloneEl, {
          duration: 0.8,
          top: "0px",
          left: "0px",
          width: window.innerWidth + "px",
          height: window.innerHeight / 2 + "px",
          ease: "power2.inOut",
        });

        // Move clone inside left panel with relative styles
        document.body.removeChild(cloneEl);
        leftPanel.appendChild(cloneEl);
        Object.assign(cloneEl.style, {
          position: "relative",
          top: "0",
          left: "0",
          width: "100%",
          height: "50vh",
          pointerEvents: "none",
          zIndex: "10",
          objectFit: "cover",
        });

        if (projectDetailEl) {
          Object.assign(projectDetailEl.style, {
            display: "block",
            position: "relative",
            marginTop: "0",
            width: "100%",
            zIndex: "10",
            opacity: "0",
            transform: "translateY(30px)",
          });

          await gsap.to(projectDetailEl, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 1.1,
            ease: "cubic-bezier(0, 0.2, 0.2, 1)",
          });
        }
      } else {
        // Animate clone to left panel size on desktop
        const rect = leftPanel.getBoundingClientRect();
        await gsap.to(cloneEl, {
          duration: 0.8,
          top: rect.top + "px",
          left: rect.left + "px",
          width: rect.width + "px",
          height: rect.height + "px",
          ease: "power2.inOut",
        });

        if (projectDetailEl) {
          Object.assign(projectDetailEl.style, {
            display: "block",
            position: "relative",
            marginTop: rect.height + 50 + "px",
            width: "100%",
            zIndex: "10",
            opacity: "0",
            transform: "translateY(30px)",
          });

          await gsap.to(projectDetailEl, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 1.1,
            ease: "cubic-bezier(0, 0.2, 0.2, 1)",
          });
        }
      }

      active.value = true;
    } else {
      reset();
    }
  }

  // Remove all clone elements from DOM
  function removeAllClones() {
    document
      .querySelectorAll("img.clone-fly")
      .forEach((clone) => clone.remove());
  }

  // Close animation and reset
  async function handleClose(projectDetailEl?: HTMLElement | null) {
    const { left, right } = getPanels();
    if (!left || !right) return;

    if (window.innerWidth <= 375 && projectDetailEl) {
      await gsap.to(projectDetailEl, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      });
      Object.assign(projectDetailEl.style, {
        display: "none",
        overflowY: "",
        position: "",
        top: "",
        marginTop: "",
        zIndex: "",
      });
      document.body.style.overflow = "";
    }

    active.value = false;
    selectedProject.value = null;

    removeAllClones();
    cloneEl = null;

    if (originalImg) {
      originalImg.style.display = "block";
      originalImg.style.visibility = "visible";
    }
    originalImg = null;

    gsap.to([left, right], {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.4,
      ease: "power2.out",
    });
  }

  return {
    active,
    selectedProject,
    handleClick,
    handleClose,
  };
}
