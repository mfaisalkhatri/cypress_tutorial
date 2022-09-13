import homePage from "../pages/HomePage";
import loginPage from "../pages/LoginPage";
import myAccountPage from "../pages/myAccountPage";
import registrationPage from "../pages/RegistrationPage";
import registrationSuccessPage from "../pages/RegistrationSuccessPage";
import productPage from "../pages/ProductPage";
import checkoutPage from "../pages/CheckoutPage";
import confirmOrderPage from "../pages/ConfirmOrderPage"
import { BillingData } from "../testdata/billingDataNew";


describe("LambdaTest ECommerce Playground Website End to End Tests", () => {

  let unitPrice;

    it("should register the user and place an order by checking out the product", () => {
    cy.visit("/");
    homePage.navigatToLoginPage();
   // homePage.navigateToRegistrationPage();

    // registrationPage.pageHeader().should("have.text", "Register Account");
    // registrationPage.registerUser();
    // registrationSuccessPage
    //   .getSuccessfulRegistrationMessage()
    //   .should("have.text", " Your Account Has Been Created!");

    // registrationSuccessPage.continueToMyAccountPage();
    // myAccountPage.getMyAccountPageTitle().should("have.text", "My Account");

    loginPage.loginIntoWebsite();

    homePage.shopByComponentsCategory();

    productPage.addPalmProductToCart();
    productPage
      .getSuccessMessage()
      .should(
        "have.text",
        "Success: You have added Palm Treo Pro to your shopping cart!"
      );
    productPage.checkoutProduct();

    checkoutPage
      .getUnitPriceField().then(textContent => {
        unitPrice = textContent.toString();
      });
      
    checkoutPage.productName().should("have.text", "Palm Treo Pro");
   // checkoutPage.enterBillingAddress();
    checkoutPage.continueToConfirmOrder();

  confirmOrderPage.getProductName().then(textContent => {
      let productName = textContent.toString();
      expect(productName).to.be.equal('Palm Treo Pro');
     });

  confirmOrderPage.unitPrice().then(textContent => {
    let actualUnitPrice = textContent.toString ();
    expect(actualUnitPrice).to.be.equal(unitPrice);
    
  });
   confirmOrderPage.shippingAddress().then(textContent => {
    cy.log(textContent.toString());
   });
  });
});
