import { defineConfig, devices } from '@playwright/test';

// Tests run against a production build: `npm run build` first (the `test` script does it).
const port = 3210;
export default defineConfig({
  testDir: './tests',
  timeout: 45_000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: { baseURL: `http://localhost:${port}`, trace: 'retain-on-failure', actionTimeout: 10_000 },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } }],
  webServer: { command: `npx next start -p ${port}`, url: `http://localhost:${port}`, reuseExistingServer: true, timeout: 60_000 },
});
