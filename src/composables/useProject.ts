import { ref } from "vue";
import type { Project } from "../types/project";
import { projects as projectData } from "../data/projectData";

export function useProjects() {
  const projects = ref<Project[]>([]);

  // Mock fetch
  function fetchProjects(): Promise<Project[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        projects.value = projectData;
        resolve(projectData);
      }, 10);
    });
  }

  const selectedProject = ref<Project | null>(null);

  function selectProject(project: Project) {
    selectedProject.value = project;
  }

  return {
    projects,
    fetchProjects,
    selectedProject,
    selectProject,
  };
}
