// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
//pnpm dlx @astrojs/upgrade
// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
});