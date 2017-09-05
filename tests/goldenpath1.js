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

//
// describe('sanity test golden path all detailed steps', function() {
// /// start the tests here
//   it("I have logged in with valid credentials", function() {
//       browser.url(envData.base_url);
//       var userData = readUserData(process.env.COUNTRY,'user','default',null);
//       console.log('login with:'+userData.email);
//       LoginPage.open();
//       return LoginPage.login(userData.email, userData.password);
//   });
//
// it("I have booked the 1st available delivery slot", function() {
//     DeliveryPage.open();
//     return DeliveryPage.bookFirstAvailableSlot();
// });
//
// it("I should see the slot details on the context card", function() {
//   //  return expect(DeliveryPage.slotContextCard).to.be.visible();
// });
//
// it("I search for cola", function() {
//     return HomePage.search('cola');
// });
//
// it("I add the first avaialble item on search results page", function() {
//     browser.waitForExist('.product-tile--title');
//     var availableProducts =  browser.elements('.add-control');
//     return browser.elementIdClick(availableProducts.value[0].ELEMENT);
// });
//
// it("correct item should be added to the trolley", function() {
//     browser.waitForExist('.product-tile--title');
//     var items = browser.elements('.product-tile--title');
//     var itemTitle = browser.elementIdText(items.value[0].ELEMENT).value;
//     var trolleyItemTitle = browser.getText('.mini-tile .mini-tile__title');
//   //  expect(trolleyItemTitle).to.equal(itemTitle);
//     return true;
// });
//
// it("I checkout the order and continue to payment page", function() {
//       browser.waitForEnabled(HomePage.checkoutButton);
//       browser.url('checkout/review-trolley');
//       browser.waitForExist("a[href*='checkout/order-summary']");
//       browser.click("a[href*='checkout/order-summary']");
//       browser.waitForExist("a[href*='checkout/payment-option']");
//       return browser.click("a[href*='checkout/payment-option']");
// });
//
// it("I provide the valid card details to confirm the order", function() {
//     browser.waitForExist('#cardName');
//     browser.setValue('#cardName','Test Card');
//     browser.setValue('#cardNumber','4444333322221111');
//     browser.selectByValue('#expireMonth','03');
//     browser.selectByValue('#expireYear','19');
//     browser.setValue('#securityCode', '123');
//     return browser.click('.place-order-online.button');
// });
//
// it("I should see the order confirmation page", function() {
//     browser.waitForExist('.confirmation-message--thankyou-section .heading3');
//   //  expect(browser.getUrl()).to.include('groceries/en-GB/checkout/confirmation');
//     return browser;
// });
//
// it("I am on the my orders page", function() {
//     browser.click('.utility-header__orders');
//     browser.waitForExist('.my-orders');
// //    expect(browser.getUrl()).to.include('groceries/en-GB/orders');
//     return browser;
// });
//
// it("I cancel the pending order and confirm confirmation", function() {
//     browser.waitForExist("a[href*='currentModal=pendingOrderCancel']");
//     browser.click("a[href*='currentModal=pendingOrderCancel']");
//     browser.waitForExist('.pending-order--modal-action-cancel button');
//     return browser.click('.pending-order--modal-action-cancel button');
// });
//
// it("the order should be cancelled", function() {
//     browser.waitForExist('.info-message--message',30000);
//   //  expect(browser.getText('.info-message--message')).to.include('has been cancelled');
//     return browser;
// });
//
// it("I navigate to the home page", function() {
//     return browser.url(config.base_url);
// });
//
// it("I sign out", function() {
//     browser.waitForExist('.utility-header__logout-button');
//     return browser.click('.utility-header__logout-button');
// });
//
// it("I am signed out", function() {
//   //  expect(browser.isExisting('.signin-register--signin-button a')).to.equal(true);
//     return true;
// });
//
//
// });
