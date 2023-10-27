import config from '../../../playwright.config';
import { Page } from '@playwright/test';
import { Base } from './base';
import { test } from '@test';

class BasePage extends Base {
	protected url = '';

	constructor(page: Page, name: string) {
		super(page, name);
	}

	async navigate(
		options: { timeout: number; waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit' } = {
			timeout: 15000,
			waitUntil: 'domcontentloaded',
		},
	): Promise<void> {
		await this.page.goto(new URL(this.url, config.use.baseURL).href, {
			timeout: options.timeout,
			waitUntil: options.waitUntil,
		});
	}

	async waitForLoaded(
		options: {
			timeout?: number;
			state?: 'load' | 'domcontentloaded' | 'networkidle';
		} = { timeout: 15000, state: 'domcontentloaded' },
	): Promise<void> {
		await test.step(`[${this.name}] Wait for page to be loaded`, async () => {
			await this.page.waitForLoadState(options.state, { timeout: options.timeout });
			await this.page.waitForTimeout(2000);
		});
	}
}

export { BasePage };
