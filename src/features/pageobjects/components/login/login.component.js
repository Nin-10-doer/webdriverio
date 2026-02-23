const { $ } = require('@wdio/globals')
const BaseComponent = require('../common/base.component')

class LoginComponent extends BaseComponent {
	constructor() {
		super("//div[@class='form_group']")
	}

	/**
	 * @param name {'username'|'password'}
	 * @returns {*}
	 */
	input(name) {
		const selectors = {
			username: "//input[@id='user-name']",
			password: "//input[@id='password']"
		}
		return $(selectors[name.toLowerCase()])
	}
}

module.exports = LoginComponent
