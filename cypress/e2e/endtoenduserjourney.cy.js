import homePage from "../pages/HomePage";
import myAccountPage from "../pages/myAccountPage";
import registrationPage from "../pages/RegistrationPage";
import registrationSuccessPage from "../pages/RegistrationSuccessPage";
import productPage from "../pages/ProductPage";
import checkoutPage from "../pages/CheckoutPage";

describe("LambdaTest ECommerce Playground Website End to End Tests", () => {
  it("should register the user and place an order by checking out the product", () => {
    cy.visit("/");
    homePage.navigateToRegistrationPage();

    registrationPage.pageHeader().should("have.text", "Register Account");
    registrationPage.registerUser();
    registrationSuccessPage
      .getSuccessfulRegistrationMessage()
      .should("have.text", " Your Account Has Been Created!");

    registrationSuccessPage.continueToMyAccountPage();
    myAccountPage.getMyAccountPageTitle().should("have.text", "My Account");

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
      .getUnitPriceField()
      .then((textContent) => {
        textContent.toString();
      })
      .as("unitPrice");

    checkoutPage.productName().should("have.text", "Palm Treo Pro");
    checkoutPage.enterBillingAddress();
    checkoutPage.continueToConfirmOrder();


  });
});
