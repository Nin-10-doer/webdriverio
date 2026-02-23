describe("saucedemo test suite", () => {

	it("should show an error message 'Username is required'", async () => {

		await browser.url("/")

		const userName = await $("//input[@id='user-name']")
		const password = await $("//input[@id='password']")

		await userName.addValue("abc")
		await password.addValue("123")

		//XXX:
		//Workaround for correct clearValue behaviour
		//There's a current issue on chromium-based browsers (Firefox ftw lol). 
		//See: https://github.com/webdriverio/webdriverio/discussions/7650
		await userName.doubleClick()
		await browser.keys(['Backspace'])
		await password.doubleClick()
		await browser.keys(['Backspace'])

		const button = await $("//input[@id='login-button']")
		await button.click()

		const error = await $("//h3[@data-test='error']")
		await expect(error).toBeDisplayed()
		await expect(error).toHaveText(expect.stringContaining("Username is required"))
	})

	it("should show an error message 'Password is required'", async () => {

		await browser.url("/")

		const userName = await $("//input[@id='user-name']")
		const password = await $("//input[@id='password']")

		await userName.addValue("abc")
		await password.addValue("123")

		//XXX:
		//Now I had to do this because Edge was being stubborn and was only deleting one character >:C
		//Apparently since in this case the password input is already selected, double clicking it on Edge deselects it all
		//This should be Command instead of Control on MacOS
		await browser.keys(['Control', 'a'])
		await browser.keys(['Backspace'])

		const button = await $("//input[@id='login-button']")
		await button.click()

		const error = await $("//h3[@data-test='error']")
		await expect(error).toBeDisplayed()
		await expect(error).toHaveText(expect.stringContaining("Password is required"))
	})

	it("should have title of 'Swag Labs'", async () => {

		await browser.url("/")

		const userName = await $("//input[@id='user-name']")
		const password = await $("//input[@id='password']")

		await userName.addValue("standard_user")
		await password.addValue("secret_sauce")

		const button = await $("//input[@id='login-button']")
		await button.click()

		await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
		await expect(browser).toHaveTitle("Swag Labs")
	})

})
