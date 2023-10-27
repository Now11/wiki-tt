import { Page } from '@playwright/test';
import { BasePage, Button, Input } from '@src/base';

export class LoginPage extends BasePage {
	readonly userNameInput: Input;
	readonly passwordInput: Input;
	readonly logInButton: Button;

	constructor(page: Page) {
		super(page, 'Login Page');
		this.url =
			'/w/index.php?title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in';
		this.userNameInput = this.create(Input, page.locator('#wpName1'), 'User Name Input');
		this.passwordInput = this.create(Input, page.locator('#wpPassword1'), 'Password Name Input');
		this.logInButton = this.create(Button, page.locator('#wpLoginAttempt'), ' Log in button');
	}
}
