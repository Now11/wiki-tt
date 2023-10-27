import { Locator, Page } from '@playwright/test';
import { BaseElement } from './BaseElement';
import { test } from '@test';

type ClickOptions = {
	button?: 'left' | 'right' | 'middle';
	clickCount?: number;
	delay?: number;
	force?: boolean;
	modifiers?: Array<'Alt' | 'Control' | 'Meta' | 'Shift'>;
	noWaitAfter?: boolean;
	position?: {
		x: number;
		y: number;
	};
	timeout?: number;
	trial?: boolean;
};

class Button extends BaseElement {
	constructor(page: Page, root: Locator, name: string) {
		super(page, root, name);
	}

	async click(options?: ClickOptions) {
		await test.step(`[${this.name}] Execute Click`, async () => {
			await this.root.scrollIntoViewIfNeeded();
			await this.root.click(options);
		});
	}
}

export { Button };
