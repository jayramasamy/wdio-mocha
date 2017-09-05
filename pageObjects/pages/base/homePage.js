import { config } from '../../../wdio.conf';
import FooterLinks from '../../sections/base/footerLinks';

var basePage = {
  // page elements
  searchInputBox: function() {return browser.element("#query")},
  searchGoButton: function() {return browser.element('#query+button.icon-search-white')},
  loginButton:    function () {return browser.element('.button.button-primary')},
  bookSlotButton: function () {return browser.element('div.action')},
  checkoutButton: function () {return browser.element('a.mini-trolley--checkout')},
  registerButton: function () {return browser.element('.signin-register--register-button a')},
  welcomeMessage: function () {return browser.element('.user-greeting--name')},

  search(searchTerm)  {
      this.searchInputBox().setValue(searchTerm);
      this.searchGoButton().click();
    },

  // methods
  open: () => {
    return browser.url(config.base_url);
  },
  // search: function (searchTerm) {
  //   this.searchInputBox().setValue(searchTerm);
  //   this.searchGoButton().click();
  // },
  footerLinks: FooterLinks
};

var HomePage = Object.assign({}, basePage, {});

// tablet viewport
if (process.env.VIEWPORT === 'tablet') {

    var HomePage = Object.assign({}, basePage, {
          // add tablet specific elements
        });
        // add tablet specifc methods if any change from base
}
// mobile viewport
else if (process.env.VIEWPORT === 'mobile') {
  // add mobile specific elements
  var HomePage = Object.assign({}, basePage, {
        // add tablet specific elements
      });
      // add tablet specifc methods if any change from base
}

//export the final object
export default HomePage;
//module.exports = HomePage;
