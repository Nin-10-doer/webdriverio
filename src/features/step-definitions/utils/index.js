const { expect } = require('@wdio/globals')
function compareText(txt1, txt2, opt) {
	switch (opt) {
		case "contain":
			return expect(txt1).toContain(txt2)
		case "not contain":
			return expect(txt1).not.toContain(txt2)
		case "be equal to":
			return expect(txt1).toEqual(txt2)
		case "not be equal to":
			return expect(txt1).not.toEqual(txt2)
		default:
			throw Error(`${opt} not a valid option!`)
	}
}

function checkDisplayed(element, opt) {
	switch (opt) {
		case "be displayed":
			return expect(element).toBeDisplayed()
		case "not be displayed":
			return expect(element).not.toBeDisplayed()
		default:
			throw Error(`${opt} not a valid option!`)
	}
}

module.exports = {
	compareText,
	checkDisplayed
}
