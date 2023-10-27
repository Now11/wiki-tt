import { Locator, Page } from '@playwright/test';
import { BaseFragment } from '@src/base';
import { test } from '@test';

class ItemsList extends BaseFragment {
	protected list: Locator;
	constructor(page: Page, selector: Locator, name: string) {
		super(page, selector, name);
		this.list = this.root.locator('li');
	}

	async clickItemByName(text: string) {
		await test.step(`[${this.name}] Select ${text} from list`, async () => {
			await this.waitForVisible({ timeout: 5000 });
			await this.list.filter({ hasText: text }).first().click({ force: true });
		});
	}

	async getItemsText() {
		return test.step(`[${this.name}] Get all items text from list`, async () => {
			await this.waitForVisible({ timeout: 5000 });
			return this.list.allInnerTexts();
		});
	}
}

export { ItemsList };
