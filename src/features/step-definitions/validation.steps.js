const { browser } = require('@wdio/globals')
const { Then } = require('@cucumber/cucumber')
const { compareText, checkDisplayed } = require('./utils')
const { pages } = require('../pageobjects')

Then("I expect that element {string} not contains any text", async (selector) => {

	const elementText = await pages('login').login.input(selector).getValue()
	return compareText(elementText, '', 'be equal to')
})

Then('I expect message to {string}', async (opt) => {
	return checkDisplayed(await pages('login').message.element(), opt)
})

Then('I expect message to {string} {string}', async (opt, expectedMessage) => {
	const message = await pages('login').getMsg()
	return compareText(message, expectedMessage, opt)
})


Then('I expect url to {string} {string}', async (opt, expectedUrl) => {
	const url = await browser.getUrl()
	return compareText(url, expectedUrl, opt)
})

Then('I expect title to {string} {string}', async (opt, expectedTitle) => {
	const title = await browser.getTitle()
	return compareText(title, expectedTitle, opt)
})

