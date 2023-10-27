import { Locator, Page } from '@playwright/test';
import { BaseElement } from './BaseElement';
import { test } from '@test';

class Input extends BaseElement {
	constructor(page: Page, root: Locator, name: string) {
		super(page, root, name);
	}

	async getInputValue() {
		await this.waitForElementToBeVisible({ timeout: 10000 });
		return this.root.inputValue();
	}

	async setInputValue(text: string, options: { delay: number } = { delay: 50 }) {
		await test.step(`[${this.name}] Set value in the input field`, async () => {
			await this.waitForElementToBeVisible();
			await this.root.pressSequentially(text, { delay: options.delay });
		});
	}
}

export { Input };
