class myAccountPage {

    webElements = {
        myAccountTitle : () => cy.get(':nth-child(1) > .card-header')
    }
}

module.exports = new myAccountPage();