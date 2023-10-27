import { Locator, Page } from '@playwright/test';
import { ItemsList } from './List.component';

class DropDownList extends ItemsList {
	constructor(page: Page, selector: Locator, name: string) {
		super(page, selector, name);
		this.list = this.root.locator('div span');
	}
}

export { DropDownList };
