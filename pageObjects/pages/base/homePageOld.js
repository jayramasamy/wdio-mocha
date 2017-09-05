// import { config } from '../../../wdio.conf';
// import FooterLinks from '../../sections/base/footerLinks';
//
// let homePage = {
//   // page elements
//   searchInputBox: '#query',
//   searchGoButton: '#query+button.icon-search-white',
//   loginButton: '.button.button-primary',
//   bookSlotButton: 'div.action',
//   checkoutButton: 'a.mini-trolley--checkout',
//   //registerButton,
//   //welcomeMessage,
//
//   // methods
//   open: () => {
//     return browser.url(config.base_url);
//   },
//   footerLinks: FooterLinks
// };
// // homePage.search = (searchTerm) => {
// //   return browser
// //       .setValue(homePage.searchInputBox, searchTerm)
// //       .click(homePage.searchGoButton);
// //  };
//
// // desktop viewport
// if (process.env.VIEWPORT === 'tablet') {
//
//     homePage = Object.assign({}, homePage, {
//           // add tablet specific elements
//             registerButton: '.signin-register--register-button a',
//             welcomeMessage: '.user-greeting--name',
//         });
//
//         homePage.search = (searchTerm) => {
//           return browser
//               .setValue(homePage.searchInputBox, searchTerm)
//               .click(homePage.searchGoButton);
//          };
//
// }
// else if (process.env.VIEWPORT === 'mobile') {
//   // add tablet specific elements
// }
//
//
// //export the final object
// export default homePage;
