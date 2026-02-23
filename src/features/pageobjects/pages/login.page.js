const { LoginComponent, Button, Message } = require('../components')
const BasePage = require('./base.page')

class Login extends BasePage {

	constructor() {
		super('/')
		this.login = new LoginComponent()
		this.button = new Button()
		this.message = new Message()
	}

	enterInput(field, value) {
		return this.login.input(field).setValue(value)
	}


	/*XXX:
	*Workaround for correct clearValue behaviour
	*There's a current issue on chromium-based browsers (Firefox ftw lol). 
	*See: https://github.com/webdriverio/webdriverio/discussions/7650
	*/
	async clearInput(field, browser) {
		const input = this.login.input(field)
		await input.click()
		await browser.keys(['Control', 'a'])
		return await browser.keys(['Backspace'])
	}

	clickBtn() {
		return this.button.element().click()
	}

	getMsg() {
		return this.message.element().getText()
	}

}

module.exports = Login
