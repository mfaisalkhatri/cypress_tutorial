class HomePage {

    webElements = {

        myAccountMenu : ()  => cy.get('a:contains("My account")'),
        loginLink : () => cy.get('a:contains("Login")'),
		registerLink : () => cy.get('a:contains("Register")'),
		shopByCategoryLink :() => cy.get('a:contains("Shop by Category")'),
		componentsLink :() => cy.get('a:contains("Components")'),    
	}

    navigateToRegistrationPage () {
        this.webElements.myAccountMenu().last().trigger('mouseover');
        this.webElements.registerLink().click();
    }

    shopByComponentsCategory() {
        this.webElements.shopByCategoryLink().click();
        this.webElements.componentsLink().first().click();
    }

    navigatToLoginPage() {
        this.webElements.myAccountMenu().last().trigger('mouseover');
        this.webElements.loginLink().click();
    }

}

module.exports = new HomePage();