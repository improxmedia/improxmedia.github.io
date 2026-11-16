import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. Not live yet: improxmedia.com currently shows an expired-domain page.
// Canonical URLs and the sitemap use it on purpose, and work once the domain is renewed and pointed at the host.
export default defineConfig({
  site: 'https://improxmedia.com',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
