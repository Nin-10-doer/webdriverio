const { browser } = require('@wdio/globals')
const { When } = require('@cucumber/cucumber')
const { pages } = require('../pageobjects')

When('I open {string} page', async (pageName) => {
	return await pages(pageName).open()
})

When('I enter {string} {string}', async (selector, value) => {
	return await pages('login').enterInput(selector, value)
})

When('I clear the {string} field', async (selector) => {
	return await pages('login').clearInput(selector, browser)

})

When('I click the {string} button', async (pageName) => {
	const el = await pages(pageName).clickBtn()
	return el
})

