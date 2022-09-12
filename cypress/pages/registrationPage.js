import { faker } from '@faker-js/faker';

class RegistrationPage  {
	
	
webElements = {

pageTitle : () => cy.get('h1'),
firstnameField : () => cy.get('#input-firstname'),
lastNameField : ()  => cy.get('#input-lastname'),
emailField : () => cy.get('#input-email'),
telephoneField : () =>		cy.get('#input-telephone'),
passwordField : ()	=>	cy.get('#input-password'),
confirmParsswordField : () => 		cy.get('#input-confirm'),
agreeTermsField : () => cy.get('.float-right > .custom-control > .custom-control-label'),
continueBtn : () =>		cy.get('.float-right > .btn'),
}

	pageHeader () {
		return this.webElements.pageTitle();
	}

	registerUser () {
		const PASSWORD = 'PASS123#';
	
        this.webElements.firstnameField().type(faker.name.firstName());
		this.webElements.lastNameField().type(faker.name.lastName());
		this.webElements.emailField().type(faker.internet.email());
		this.webElements.telephoneField().type(faker.datatype.number(9999999999));
		this.webElements.passwordField().type(PASSWORD);
		this.webElements.confirmParsswordField().type(PASSWORD);
		this.webElements.agreeTermsField().click();
		this.webElements.continueBtn().click();
	}
}

export default new RegistrationPage();