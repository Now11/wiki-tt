import { Locator, Page } from '@playwright/test';
import { Base } from './base';
import { test } from '@test';

/**
 * @class BaseFragment class
 * @description Creates simple fragmet of the page
 */

class BaseFragment extends Base {
	protected root: Locator;

	constructor(page: Page, root?: Locator, name?: string) {
		super(page, name);
		this.root = root;
	}

	async waitForVisible(options: { timeout: number } = { timeout: 10000 }): Promise<boolean> {
		return await test.step(`[${this.name}] Wait to be visible`, async () => {
			await this.root.waitFor({ state: 'visible', timeout: options.timeout });
			return this.root.isVisible();
		});
	}
}

export { BaseFragment };
