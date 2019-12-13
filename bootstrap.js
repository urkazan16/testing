// const puppeteer = require('puppeteer');
// const { expect } = require('chai');
// const _ = require('lodash');
// const path = require('path');
// const globalVariables = _.pick(global, ['browser', 'expect']);

// const opts = {
//   headless: true,
//   // headless: false,
//   defaultViewport: null,
//   executablePath: '/usr/bin/google-chrome',
//   output: 'filename.xml',
//   // slowMo: 250,
//   // accept: false,
//   // timeout: 10000,
//   args : [
//         // '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'
//         '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080','--disable-dev-shm-usage'
//   ]

// };



// before (function (done) {

//       this.enableTimeouts(false)
//   puppeteer
//     .launch(opts)
//     .then(function (browser) {
//       global.browser = browser;
//       global.baseURL = 'https://kazan.hh.ru/'
//       global.expect = expect;
//       global.nambeTime = 8500;
//       done();
//     });
    
// });



// after (async function () {
//   await page.waitFor(5000);
//   await browser.close();
//   global.browser = globalVariables.browser;
//   global.expect = globalVariables.expect;

// });

// // const puppeteer = require('puppeteer');
// // const { expect } = require('chai');

// // const _ = require('lodash');
// // const path = require('path');
// // const globalVariables = _.pick(global, ['browser', 'expect']);

// // const opts = {
// //   headless: true,
// //   // headless: false,
// //   defaultViewport: null,
// //   executablePath: '/usr/bin/google-chrome',
// //   output: 'filename.xml',
// //     // slowMo: 100,
// //     // timeout: 0,
// //   args : [
// //         // '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'
// //         '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080','--disable-dev-shm-usage'
// //   ]

// // };

// // // before (async (done) => {
// // //   global.expect = expect;
// // //   global.browser = await puppeteer
// // //   // .then(() => done())
// // //   .launch(opts)
// // //       // global.nambeTime = 5000;
// // //       // // global.nambeTime = 4200;
// // //       // global.namTimeone = 3000;
// // //       // // global.namTimeone = 1500;
// // //       // // global.namTimetwo = 2500;
// // //       // global.namTimetwo = 4500;
// // //       // // global.namTimetwo = 2500;
// // //       // global.nambeTimedop = 6000;
// // //       // global.nambeTimedop = 5800;
// // //       done()
// // // });

// // before (function (done) {

// //   puppeteer
// //     .launch(opts)
// //     .then(function (browser) {
// //       global.browser = browser;
// //       // global.page = await browser.newPage();
// //       global.baseURL = 'http://localhost:3000'
// //       // global.baseURL = 'http://151.248.121.54:3000/'
// //       global.expect = expect;
// //       global.nambeTime = 5000;
// //       // global.nambeTime = 4200;
// //       global.namTimeone = 3000;
// //       // global.namTimeone = 1500;
// //       // global.namTimetwo = 2500;
// //       global.namTimetwo = 4500;
// //       // global.namTimetwo = 2500;
// //       global.nambeTimedop = 6000;
// //       // global.nambeTimedop = 5800;
// //       done();
// //     });
    
// // });



// // after (async () => {
// //   // await page.waitFor(4300);
// //   // await page.waitFor(3000);
// //   browser.close();
// //    // await browser.close();
// //   global.browser = globalVariables.browser;
// //   global.expect = globalVariables.expect;

// // });