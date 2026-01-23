import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT for GitHub Pages:
// Replace REPO_NAME with your GitHub repo name.
// Example repo: https://github.com/you/portfolio -> base: "/portfolio/"
const REPO_NAME = "eraserleeves.github.io";

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
});
