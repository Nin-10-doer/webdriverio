const BaseComponent = require('../common/base.component')
class Button extends BaseComponent {
	constructor() {
		super("//input[@id='login-button']")
	}

	element() {
		return this.rootEl
	}
}
module.exports = Button
