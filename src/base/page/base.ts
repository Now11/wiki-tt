import { Locator, Page } from '@playwright/test';
import { BaseFragment } from './base.fragment';
import { BaseElement } from '../elements/BaseElement';

export abstract class Base {
	protected readonly page: Page;
	protected name: string;
	protected root: Locator;

	constructor(page: Page, name?: string) {
		this.page = page;
		this.name = name ?? this.constructor.name;
		this.root = this.page.locator('html');
	}

	protected create<T extends BaseFragment | BaseElement>(
		childClass: new (...args: any[]) => T,
		root: Locator,
		name: string,
	) {
		return new childClass(this.page, root, name);
	}
}
