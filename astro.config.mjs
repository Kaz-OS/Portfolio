// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "",
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Open Sans",
      cssVariable: "--font-sans"
    }]
  },
  integrations: [mdx()]
});