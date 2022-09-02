class MyAccountPage {

    webElements = {
        myAccountTitle : () => cy.get(':nth-child(1) > .card-header')
    }

    verifyMyAccountPageTitle () {
        this.webElements.myAccountTitle().should('have.text', 'My Account');
    }
}

module.exports = new MyAccountPage();