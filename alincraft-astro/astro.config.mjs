import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN', 'zh-TW', 'ja', 'ko', 'pt', 'pt-BR', 'es', 'fr', 'de', 'it', 'ru', 'ar', 'hi', 'th', 'vi', 'id', 'ms', 'tr', 'pl', 'nl'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  site: 'https://alincraft.com'
});
