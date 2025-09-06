import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://USERNAME.github.io/",
  base: "/portfolio/",
  server: {
    host: true,
    port: 8080
  }
});