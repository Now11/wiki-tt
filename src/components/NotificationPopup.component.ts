import { Page } from '@playwright/test';
import { BaseFragment } from '@src/base';
import { test } from '@test';

export class NotificationPopup extends BaseFragment {
	constructor(page: Page) {
		super(page, page.locator('#mw-notification-area .mw-notification-content'), 'Notification Popup');
	}

	async getNotificationText() {
		return test.step(`[${this.name}] Get text `, async () => {
			await this.root.waitFor({ state: 'visible', timeout: 5000 });
			return await this.root.innerText();
		});
	}
}
