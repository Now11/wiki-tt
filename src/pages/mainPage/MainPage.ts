import { Locator, Page } from '@playwright/test';
import { BasePage } from '@src/base';
import { ItemsList } from '@src/components';
import { test } from '@test';

export class MainPage extends BasePage {
	readonly userDropDowMenu: ItemsList;
	readonly userIcon: Locator;
	constructor(page: Page) {
		super(page, 'Main Page');
		this.url = '/wiki/Special:Preferences';
		this.userDropDowMenu = this.create(ItemsList, page.locator('#p-personal'), 'User DropDown Menu');
		this.userIcon = this.page.locator('#vector-user-links-dropdown');
	}

	async openUserDropDownMenu() {
		return test.step(`[${this.name}] Open User DropDown menu`, async () => {
			await this.userIcon.waitFor({ state: 'visible', timeout: 5000 });
			await this.userIcon.click();
			await this.userDropDowMenu.waitForVisible({ timeout: 5000 });
			return this.userDropDowMenu;
		});
	}
}
