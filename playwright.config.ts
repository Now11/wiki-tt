import dotenv from 'dotenv';
import { PlaywrightTestConfig } from '@playwright/test';

dotenv.config({ path: '.env' });

const config: PlaywrightTestConfig = {
	use: {
		actionTimeout: 30000,
		baseURL: process.env.APP_URL,
		headless: process.env.HEADLESS === 'false' ? false : true,
		channel: process.env.BROWSER_TYPE || 'chromium',
		viewport: { width: 1920, height: 1080 },
		screenshot: 'only-on-failure',
	},
	testMatch: process.env.TESTS_PATH || '**/*.test.[jt]s?(x)',
	testDir: './specs',
	reporter: [['html', { open: 'never', outputFolder: 'report', outputFile: 'index.html' }]],
	workers: Number(process.env.WORKER_NUMBER) || 1,
	timeout: 180000, // 3min,
	outputDir: '.temp',
};

if (process.env.LOG === 'trace') {
	config.use!.trace = 'retain-on-failure';
}

export default config;
