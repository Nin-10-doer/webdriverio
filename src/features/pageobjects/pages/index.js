const Login = require('./login.page')


/**
 * I left this like in the "hands-on demo" lessons
 * in case I would need more pages in the future.
 * @param name {'login'}
 * @returns {Login}
 */
function pages(name) {
	const items = {
		login: new Login()
	}
	return items[name.toLowerCase()]
}

module.exports = { Login, pages }
