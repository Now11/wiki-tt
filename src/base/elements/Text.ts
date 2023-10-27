import { Locator, Page } from '@playwright/test';
import { BaseElement } from './BaseElement';

class Text extends BaseElement {
	constructor(page: Page, root: Locator, name: string) {
		super(page, root, name);
	}
}

export { Text };
