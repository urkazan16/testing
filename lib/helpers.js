module.exports = {

	click: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			await page.click(selector)
		} catch (error) {
			throw new Error(`not click: ${selector}`)
		}
	},

	clickXPath: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			// await page.click(selector)
			await page.$x("//a[contains(text(), "+selector+")]");

		} catch (error) {
			throw new Error(`not click: ${selector}`)
		}
	},

	typeText: async function (page, text, selector) {
		try {
			await page.waitForSelector(selector)
			await page.type(selector, text)
		} catch (error) {
			throw new Error(`not type text selector: ${selector}`)
		}
	},

	loadUrl: async function (page, url){
		// await page.goto(url, {waitUntil: 'networkidle2'})
		await page.goto(url, {waitUntil: 'networkidle0' })
	},

	getText: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return page.$eval(selector, e => e.innerHTML)
		} catch (error) {
			throw new Error(`Not get text from selector: ${selector}`)
		}
	},

	getCount: async function (page, selector) {
		try{
			await page.waitForSelector(selector)
			return page.$$eval(selector, items => items.length)
		} catch (error) {
			throw new Error(`Not get length from selector: ${selector}`)
		}
	},

	waitForText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector)
			await page.waitForFunction(
				(selector, text) => 
					document.querySelector(selector).innerText.includes(text),
				{},
				selector,
				text
			)
		} catch (error) {
			throw new Error(`Text: ${text} not ${selector} ` )
		}
	},



	pressKey: async function(page, key) {
		try {
			await page.keyboard.press(key)
		} catch (error) {
			throw new Error(`key not ${key}`)
		}
	},

	shouldExist: async function (page, selector){
		try {
			await page.waitForSelector(selector, {visible: true})

		} catch (error) {
			throw new Error(`Not selector: ${selector} not exist`)

		}
	},
	
	shouldNotExist: async function (page, selector){
		try {
			await page.waitFor(() => !document.querySelector(selector))

		} catch (error) {
			throw new Error(`Selector: ${selector} is visible `)
		}
	},


}