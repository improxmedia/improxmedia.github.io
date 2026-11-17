import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live address: GitHub Pages for the improxmedia account. When a custom domain is connected, change this value to that domain.
export default defineConfig({
  site: 'https://improxmedia.github.io',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
