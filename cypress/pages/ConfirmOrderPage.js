class ConfirmOrderPage {

    webElements = {
        productName: () => cy.get('#content > .table-responsive > .table > tbody > tr > :nth-child(1)'),
        unitPrice : () => cy.get('#content > .table-responsive > .table > tbody > tr > :nth-child(4)'),
        shippingAddress: () => cy.get(':nth-child(2) > .card > .card-body'),
        confirmOrderBtn: () => cy.get('#button-confirm')
    }

    getProductName() {
        return this.webElements.productName().invoke('prop', 'innerText');
    }

    unitPrice () {
        return this.webElements.unitPrice().invoke('prop', 'innerText');
    }

    shippingAddress () {
        return this.webElements.shippingAddress().invoke('prop', 'innerText');
    }
    confirmOrder () {
        this.webElements.confirmOrderBtn().click();
    
    }
}
module.exports = new ConfirmOrderPage();