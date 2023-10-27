import { test, expect } from '@test';
import { localizationData } from './data/lozalizationData';

test.describe('User Profile Settings', async () => {
	let options: (typeof localizationData)['en' | 'uk'];

	test.beforeEach(async ({ loginPage, page, mainPage }) => {
		await loginPage.navigate();

		await loginPage.userNameInput.setInputValue(process.env.USER_NAME);
		await loginPage.passwordInput.setInputValue(process.env.USER_PASSWORD);

		await loginPage.logInButton.click();
		await mainPage.waitForLoaded();

		const languageKey = await page.evaluate(() => {
			return localStorage.getItem('uls-previous-language-code');
		});

		options = localizationData[languageKey];
	});

	test('Internationalisation: When user changes language, saves the changes, then the interface changes to the appropriate language', async ({
		preferencesPage,
		mainPage,
		notificationPopup,
	}) => {
		const { actions, match } = options;

		const userDropDownMenu = await mainPage.openUserDropDownMenu();
		await userDropDownMenu.clickItemByName(actions.preferencesOption);

		await preferencesPage.waitForLoaded({ state: 'networkidle', timeout: 5000 });
		await preferencesPage.settingsList.clickItemByName(actions.userSettingsProfile);

		const languagesList = await preferencesPage.openLanguagesDropDown();
		await languagesList.clickItemByName(actions.changeLanguageTo);
		await preferencesPage.saveBtn.click();

		await preferencesPage.waitForLoaded({ timeout: 10000, state: 'load' });

		expect(await notificationPopup.getNotificationText()).toEqual(match.popupText);
		expect(await preferencesPage.languagesSelector.getText()).toEqual(actions.changeLanguageTo);
		expect(await preferencesPage.settingsList.getItemsText()).toMatchObject(match.settingsList);
	});
});
