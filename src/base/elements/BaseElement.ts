import { Page, Locator } from '@playwright/test';
import { test } from '@test';

abstract class BaseElement {
	protected page: Page;
	protected root: Locator;
	protected name: string;

	constructor(page: Page, root: Locator, name: string) {
		this.page = page;
		this.root = root;
		this.name = name;
	}

	async waitForElementToBeVisible({ timeout } = { timeout: 5000 }) {
		await test.step(`[${this.name}] Wait for element to be visible`, async () => {
			await this.root.waitFor({ timeout, state: 'visible' });
		});
	}

	async getText() {
		return test.step(`[${this.name}] Get text `, async () => {
			return this.root.innerText();
		});
	}
}

export { BaseElement };
