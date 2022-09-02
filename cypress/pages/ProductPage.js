class ProductPage {


    webElements = {
        palmTreoCameraLens :() => cy.get('#entry_212408 > div > div:nth-child(2)'),
        successMessage :() => cy.get('.d-flex > p'),
        checkoutBtn : () => cy.get('.form-row > :nth-child(2) > .btn')

    }

    addPalmProductToCart () {
        this.webElements.palmTreoCameraLens().trigger('mouseover')
        .wait(1000)
        .get(
            'div.product-thumb-top > div.product-action > button.btn.btn-cart.cart-29')
            .click({ force: true });
    }

    verifySuccessMessage () {
        this.webElements.successMessage().should(
            'have.text',
            'Success: You have added Palm Treo Pro to your shopping cart!'
        );
    }

    checkoutProduct () {
        this.webElements.checkoutBtn().click();
    }


}
module.exports = new ProductPage();