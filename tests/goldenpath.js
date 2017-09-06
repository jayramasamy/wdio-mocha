import { config } from '../wdio.conf';
import chai from 'chai';
import { expect } from 'chai';

let chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
let options = {defaultWait: 10000} // 5000ms
chai.use(chaiWebdriver(browser, options));


import {readJsonFile,readYamlFile,readUserData,readCountryConfigData} from "../lib/helper";
import HomePage from '../pageObjects/pages/base/homePage';
import LoginPage from '../pageObjects/pages/base/loginPage';
import DeliveryPage from '../pageObjects/pages/base/deliveryPage';


//enviroment data from environments_url.yaml
const envData = readCountryConfigData(process.env.ENVIRONMENT,process.env.COUNTRY, null, null)
config.base_url = envData.base_url;


describe('sanity test golden path', function() {
/// start the tests here
  it("Place a delivery order and then cancel the order", function() {
      HomePage.open();
      //browser.url(envData.base_url);
      var userData = readUserData(process.env.COUNTRY,'user','default',null);
      console.log('login with:'+userData.email);
      LoginPage.open();
      LoginPage.login(userData.email, userData.password);
      // go to delivery page
      DeliveryPage.open();
      DeliveryPage.bookFirstAvailableSlot();
      expect(DeliveryPage.slotContextCard).to.be.visible();

      HomePage.search('cola');
      browser.waitForExist('.product-tile--title');

      // get trolleyItemTitle
      var items = browser.elements('.product-tile--title');
      var itemTitle = browser.elementIdText(items.value[0].ELEMENT).value;


      var availableProducts =  browser.elements('.add-control');
      browser.elementIdClick(availableProducts.value[0].ELEMENT);
      // check correct iems added

      var trolleyItemTitle = browser.getText('.mini-tile .mini-tile__title');
      expect(trolleyItemTitle).to.equal(itemTitle);

      // checkout
      browser.waitForEnabled(HomePage.checkoutButton);
      //  
      browser.url('checkout/review-trolley');
      browser.waitForExist("a[href*='checkout/order-summary']");
      browser.click("a[href*='checkout/order-summary']");
      browser.waitForExist("a[href*='checkout/payment-option']");
      browser.click("a[href*='checkout/payment-option']");
      // enter payment detaisl
      browser.waitForExist('#cardName');
      browser.setValue('#cardName','Test Card');
      browser.setValue('#cardNumber','4444333322221111');
      browser.selectByValue('#expireMonth','03');
      browser.selectByValue('#expireYear','19');
      browser.setValue('#securityCode', '123');
      browser.click('.place-order-online.button');
      browser.waitForExist('.confirmation-message--thankyou-section .heading3');

     expect(browser.getUrl()).to.include('groceries/en-GB/checkout/confirmation');
     browser.click('.utility-header__orders');
     browser.waitForExist('.my-orders');

     expect(browser.getUrl()).to.include('groceries/en-GB/orders');

      // cancel the order
      browser.waitForExist("a[href*='currentModal=pendingOrderCancel']");
      browser.click("a[href*='currentModal=pendingOrderCancel']");
      browser.waitForExist('.pending-order--modal-action-cancel button');
      browser.click('.pending-order--modal-action-cancel button');
      browser.waitForExist('.info-message--message',30000);

      expect(browser.getText('.info-message--message')).to.include('has been cancelled');

      browser.url(config.base_url);
      browser.waitForExist('.utility-header__logout-button');
      browser.click('.utility-header__logout-button');
      expect(browser.isExisting('.signin-register--signin-button a')).to.equal(true);
      return browser;
  });


});
