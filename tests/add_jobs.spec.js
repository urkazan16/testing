const puppeteer = require('puppeteer')
const expect = require('chai').expect
const click = require('../lib/helpers').click
// const clickByTexts = require('../lib/helpers').clickByTexts
const typeText = require('../lib/helpers').typeText
const loadUrl = require('../lib/helpers').loadUrl
const waitForText = require('../lib/helpers').waitForText
const pressKey = require('../lib/helpers').pressKey
const shouldExist = require('../lib/helpers').shouldExist
const getCount = require('../lib/helpers').getCount

describe('My first test', () => {
	let browser
	let page

	before(async function(){
		browser = await puppeteer.launch({
			// baseUrl: "https://yandex.ru",
			headless: true,
			// headless: false,
			slowMo: 0,
			devtools: false,
			defaultViewport: null,
			timeout: 25000,
			executablePath: '/usr/bin/google-chrome',
			  args : [
        // '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'
        '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080','--disable-dev-shm-usage'
  ]
		})

		page = await browser.newPage()
		await page.setDefaultTimeout(25000)
		// await page.setViewport({
		// 	width: 1940,
		// 	height: 1000
		// })
	})

	after(async function(){
		await browser.close()
	})
	

describe('login test', () => {

	it("Ввод логин и пароль", async () => {

		await page.goto("https://kazan.hh.ru/", {waitUntil: 'networkidle2' })

		const btn1 = await Promise.race([

	    	page.waitForXPath("//div[contains(@class,'bloko-column bloko-column_xs-0 bloko-column_s-8 bloko-column_m-12 bloko-column_l-16')]//a[@class='supernova-button']")

		]);
		await btn1.click()

	    await page.screenshot({path: '1.png'})

	    // await page.waitFor(nambeTime)

		const btn1type = await Promise.race([

	    	page.waitForXPath("//input[@placeholder='Email или телефон']")

		]);

		await btn1type.type("urkazan16@gmail.com")

		const btn2type = await Promise.race([

	    	page.waitForXPath("//input[@placeholder='Пароль']")
		]);

		await btn2type.type("DinDisplay")

	    await page.screenshot({path: '1.1.png'})


		const btn2 = await Promise.race([

	    	page.waitForSelector('.account-form-actions input')

		]);
		await btn2.click()

	    // await page.waitFor(nambeTime)

	    await page.screenshot({path: '1.2.png'})

	

	});

	it("Поиск вакансии", async () => {

			const btn11 = await Promise.race([

			page.waitForSelector('.bloko-icon-link')

		]);
		await btn11.click()

		const btn12 = await Promise.race([

			page.waitForXPath('//span[text()="в названии вакансии"]')

		]);
		await btn12.click()

		const btn13 = await Promise.race([

			page.waitForXPath('//span[text()="20 вакансий"]')

		]);
		await btn13.click()


		const btn23type = await Promise.race([

			page.waitForSelector("#advancedsearchmainfield")
		]);

		await btn23type.type("Тестировщик")

		await page.keyboard.press("Enter")


		  await page.waitFor(5000)


});




it("Количесво вакансий", async () => {


const postsSelectorlink = '.bloko-button-group span a';
await page.waitForSelector(postsSelectorlink, { timeout: 0 });
const baseURLss = await page.$$eval(
  postsSelectorlink, postLinks => postLinks.map(link => link.href)
);




	for (var i = 0; i < baseURLss.length; i++) {


	    try {
	        await page.goto(baseURLss[i], {waitUntil: 'networkidle2' });
	        console.log('Открываю страницу пагинации: ', baseURLss[i]);
	    } catch (error) {
	        console.log(error);
	        console.log('Не удалось открыть страницу пагинации: ', baseURLss[i]);
	    }


				const postsCol = '.bloko-link.HH-LinkModifier';
				await page.waitForSelector(postsCol, { timeout: 0 });
				const baseURLCol = await page.$$eval(
				  postsCol, postLinks => postLinks.map(link => link.href)
				);

				console.log(baseURLCol.length)

				for (let baseURL of baseURLCol) {

						    try {
						        await page.goto(baseURL, {waitUntil: 'networkidle2' });
						        console.log('Открываю страницу: ', baseURL);
						    } catch (error) {
						        console.log(error);
						        console.log('Не удалось открыть страницу: ', baseURL);
						    }


						const titleJop = '.vacancy-title h1';
						await page.waitForSelector(titleJop);
						const pageTitle = await page.$eval(
						titleJop, titleJop => titleJop.innerText
						);

						console.log(pageTitle)
			    const titlePages = '.noprint .bloko-gap a:nth-child(1)';
			    await page.waitForSelector(titlePages);
			    const pageTitles = await page.$eval(
			      titlePages, titlePages => titlePages.innerText
			    );


						

			    if(pageTitles == "Откликнуться") {


			    	console.log("Резюме отправить: "+pageTitle)
			    	// console.log("++"+pageTitles[i]+": "+pageTitle[i])

					// const btnTit = await Promise.race([

					// page.waitForSelector('.noprint .bloko-gap a:nth-child(1)')

					// ]);
					// await btnTit.click()

					//   const xPath = '//span[text()="Тестировщик ПО"]'; // Резюме
					//   const element = await page.waitForXPath(xPath);
					//   await page.waitFor(1000);
					//   await element.click();

					// await page.waitFor(2000);

					// const btnsubmit = await Promise.race([

					// 	page.waitForSelector('.HH-VacancyResponsePopup-Submit.HH-SubmitDisabler-Submit')

					// 	]);
					
					// await btnsubmit.click()

					await page.waitFor(2000);

					 await page.screenshot({path: 'submit.png'})


			    } else {

			    	console.log("Резюме отправленно: "+pageTitle)
			    }





				}
	

		}

	});



})
})




