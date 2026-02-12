export class MenuObject {
  constructor(page) {
    this.page = page;

    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.resetAppState = page.getByRole('link', { name: 'Reset App State' });
    this.logout = page.getByRole('link', { name: 'Logout' });
    this.closeMenuButton = page.locator('#react-burger-cross-btn');
  }
}
