import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    use: {
      baseURL: 'http://192.168.0.119:8080',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    reporter: 'html',
  }); 