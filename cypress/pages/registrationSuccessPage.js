class RegistrationSuccessPage {


    webElements = {
        registrationSuccessPageTitle: () =>		cy.get('.page-title'),			
		continueBtn : () => cy.get('.buttons > .btn')
		
    }
    
    verifySuccessfulRegistration () {
        this.webElements.registrationSuccessPageTitle().should(
			'have.text',
			' Your Account Has Been Created!'
		);
    }

    continueToMyAccountPage () {
        this.webElements.continueBtn().click();
    }
    
}
module.exports = new RegistrationSuccessPage();