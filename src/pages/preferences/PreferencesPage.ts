import { Page } from '@playwright/test';
import { BasePage, Button } from '@src/base';
import { ItemsList, DropDownList } from '@src/components';
import { test } from '@test';

export class PreferencesPage extends BasePage {
	readonly languagesDropDownList: DropDownList;
	readonly navigationMenu: ItemsList;
	readonly languagesSelector: Button;
	readonly saveBtn: Button;
	readonly settingsList: DropDownList;

	constructor(page: Page) {
		super(page, 'Settings Page');
		this.url = '/wiki/Special:Preferences';
		this.languagesSelector = this.create(
			Button,
			this.page.locator('#mw-input-wplanguage div'),
			'Language Selector Field',
		);
		this.languagesDropDownList = this.create(
			DropDownList,
			this.page.locator('[id*=ooui][role="listbox"]'),
			'Languages DropDown',
		);
		this.saveBtn = this.create(Button, this.page.locator('#prefcontrol'), 'Save Prefferences Button');
		this.settingsList = this.create(DropDownList, this.page.locator('.oo-ui-menuLayout-menu'), 'Settings List');
	}

	async openLanguagesDropDown() {
		return test.step(`[${this.name}] open Language Drop Down menu`, async () => {
			await this.languagesSelector.waitForElementToBeVisible();
			await this.languagesSelector.click();
			await this.languagesDropDownList.waitForVisible();
			return this.languagesDropDownList;
		});
	}
}
