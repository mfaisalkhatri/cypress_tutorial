class RegistrationSuccessPage {


    webElements = {
        registrationSuccessPageTitle: () =>		cy.get('.page-title'),			
		continueBtn : () => cy.get('.buttons > .btn')
		
    }
    
    getSuccessfulRegistrationMessage () {
       return this.webElements.registrationSuccessPageTitle();
    }

    continueToMyAccountPage () {
        this.webElements.continueBtn().click();
    }
    
}
module.exports = new RegistrationSuccessPage();