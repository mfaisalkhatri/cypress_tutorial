class registrationPage  {

webElements = {

firstnameField : () => cy.get('#input-firstname'),
lastNameField : ()  => cy.get('#input-lastname'),
emailField : () => cy.get('#input-email'),
telephoneField : () =>		cy.get('#input-telephone'),
passwordField : ()	=>	cy.get('#input-password'),
confirmParsswordField : () => 		cy.get('#input-confirm'),
agreeTermsField : () => cy.get('.float-right > .custom-control > .custom-control-label'),
continueBtn : () =>		cy.get('.float-right > .btn'),
}

registerUser () {
        this.webElements.firstnameField().type(FIRST_NAME);
		this.webElements.lastNameField().type(LAST_NAME);
		this.webElements.emailField().type(faker.internet.email());
		this.webElements.telephoneField().type(faker.datatype.number(9999999999));
		this.webElements.passwordField().type(PASSWORD);
		this.webElements.confirmParsswordField().type(PASSWORD);
		this.webElements.agreeTermsField().click();
		this.webElements.continueBtn().click();
}
}

module.exports = new registrationPage();