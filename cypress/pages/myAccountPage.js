class MyAccountPage {

    webElements = {
        myAccountPageTitle : () => cy.get(':nth-child(1) > .card-header')
    }

    getMyAccountPageTitle () {
        return this.webElements.myAccountPageTitle();
    }
}

module.exports = new MyAccountPage();