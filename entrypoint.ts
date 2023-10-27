import { LoginPage, MainPage, PreferencesPage } from '@src/pages';
import { NotificationPopup } from '@src/components';
import { test as base, expect } from '@playwright/test';

interface IPageObjectFixtures {
	loginPage: LoginPage;
	preferencesPage: PreferencesPage;
	mainPage: MainPage;
	notificationPopup: NotificationPopup;
}

const test = base.extend<IPageObjectFixtures>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},
	preferencesPage: async ({ page }, use) => {
		const preferencesPage = new PreferencesPage(page);
		await use(preferencesPage);
	},
	mainPage: async ({ page }, use) => {
		const mainPage = new MainPage(page);
		await use(mainPage);
	},
	notificationPopup: async ({ page }, use) => {
		const notificationPopup = new NotificationPopup(page);
		await use(notificationPopup);
	},
});

export { test, expect };
