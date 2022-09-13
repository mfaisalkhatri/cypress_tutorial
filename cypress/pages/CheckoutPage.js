import { BillingData } from '../testdata/billingDataNew';
class CheckoutPage {
    
  webElements = {
    unitPrice: () =>
      cy.get("#checkout-total > tbody > :nth-child(1) > .text-right"),
    productName: () =>
      cy.get("#checkout-cart > .table > tbody > tr > :nth-child(2) > a"),
    firstNameField: () => cy.get("#input-payment-firstname"),
    lastNameField: () => cy.get("#input-payment-lastname"),
    addressOneField: () => cy.get("#input-payment-address-1"),
    cityField: () => cy.get("#input-payment-city"),
    postCodeField: () => cy.get("#input-payment-postcode"),
    countryField: () => cy.get("#input-payment-country"),
    stateField: () => cy.get("#input-payment-zone"),
    termsAndConditions: () => cy.get("#input-agree +label"),
    continueBtn: () => cy.get("#button-save")
  };

  getUnitPriceField() {
    return this.webElements.unitPrice().invoke("prop", "textContent")
  }
  productName() {
    return this.webElements.productName();
  }


  enterBillingAddress() {
    this.webElements.firstNameField().type(BillingData.billingAddress.firstName);
    this.webElements.lastNameField().type(BillingData.billingAddress.lastName);
    this.webElements.addressOneField().type(BillingData.billingAddress.address);
    this.webElements.cityField().type(BillingData.billingAddress.city);
    this.webElements.postCodeField().type(BillingData.billingAddress.postCode);
    this.webElements.countryField().select('India');
    this.webElements.stateField().select('Maharashtra');
    this.webElements.termsAndConditions().click();
  }

  continueToConfirmOrder () {
    this.webElements.termsAndConditions().click();
    this.webElements.continueBtn().click();
  }
}

module.exports = new CheckoutPage();