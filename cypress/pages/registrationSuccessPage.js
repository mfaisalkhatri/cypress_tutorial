class registrationSuccessPage {


    webElements = {
        registrationSuccessPageTitle: () =>		cy.get('.page-title'),			
		continueBtn : () => cy.get('.buttons > .btn');
		
    }
    
}

module.exports = new registrationSuccessPage();