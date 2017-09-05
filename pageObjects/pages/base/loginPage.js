import { config } from '../../../wdio.conf';

let loginPage = {
  // page elements
  emailId: 'input[type=email]',
  passwordId: '#password',
  loginButton: '.ui-component__button',
  welcomeMessage: '.user-greeting--name',
  logoutButton: 'button.utility-header__logout-button',

  // methods
  open: () => {
    return browser.url('/login/');
  },

  login(email, password) {
      //open()
      return browser
          .setValue(this.emailId,email)
          .setValue(this.passwordId,password)
          .click(this.loginButton);
  }
};


// desktop viewport
if (process.env.VIEWPORT === 'tablet') {

    loginPage = Object.assign({}, loginPage, {
          // add tablet specific elements
        });
}
else if (process.env.VIEWPORT === 'mobile') {
  // add tablet specific elements
}

export default loginPage;
