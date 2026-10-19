// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",

  site: "https://tudominio.com",
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ["./src/styles"],
        },
      },
    },
  },
});
