import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { satteriBreaks } from 'satteri-breaks';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: "/",
  site: "https://kiiatto.net",
  markdown: {
    processor: satteri({
      mdastPlugins: [satteriBreaks()]
    }),
  },
  integrations: [sitemap()]
});
