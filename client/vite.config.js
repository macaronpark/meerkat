import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@axios",
        replacement: path.resolve(__dirname, "./src/axios"),
      },
      {
        find: "@api",
        replacement: path.resolve(__dirname, "./src/api"),
      },
    ],
  },
});
