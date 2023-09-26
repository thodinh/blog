import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Đev',
  },
  locales: [
    { id: 'en-US', name: 'EN' },
  ],
  resolve: {
    docDirs: ['pages']
  }
});
