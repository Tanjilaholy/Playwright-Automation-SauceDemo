import { MenuObject } from '../pageObject/menuObject';
import { expect } from '@playwright/test';

export class MenuAction {
  constructor(page) {
    this.page = page;
    this.menu = new MenuObject(page);
  }

  async openMenu() {
    await this.menu.menuButton.click();
    await this.menu.logout.waitFor({ state: 'visible' });
  }

  async resetAppState() {
    await this.openMenu();
    
    await this.menu.resetAppState.dispatchEvent('click');
    
    const closeButton = this.page.locator('#react-burger-cross-btn');
    await closeButton.click();
    
    await this.menu.menuButton.waitFor({ state: 'visible' });
  }

  async logout() {
    await this.openMenu();
    await this.menu.logout.dispatchEvent('click');
  }
}