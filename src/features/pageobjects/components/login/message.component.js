const BaseComponent = require('../common/base.component')
class Message extends BaseComponent {
	constructor() {
		super("//h3[@data-test='error']")
	}

	element() {
		return this.rootEl
	}
}

module.exports = Message
