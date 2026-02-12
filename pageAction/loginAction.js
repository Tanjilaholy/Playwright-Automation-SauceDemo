import { LoginObject } from '../pageObject/loginObject.js';

export class LoginAction {
  constructor(page) {
    this.loginObject = new LoginObject(page);
  }

  async login(username, password) {
    await this.loginObject.usernameInput.fill(username);
    await this.loginObject.passwordInput.fill(password);
    await this.loginObject.loginButton.click();
  }

 
  
}
