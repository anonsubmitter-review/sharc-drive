// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anonsubmitter-review.github.io',
  base: '/sharc-drive',
  vite: {
    plugins: [tailwindcss()]
  }
});