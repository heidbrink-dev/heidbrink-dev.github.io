// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://heidbrink.dev",
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  redirects: {
    "blog/golden2-how-i-became-an-aws-golden-jacket-and-cncf-golden-kubestronaut-in-12-weeks": "https://www.dthn.io/blog/golden2-how-i-became-an-aws-golden-jacket-and-cncf-golden-kubestronaut-in-12-weeks/",
  }
});
