class LoginPage {

    webElements = {
        emailField: () => cy.get("#input-email"),
        passwordField: () => cy.get("#input-password"),
        loginBtn :() => cy.get('form > .btn')
    }

    loginIntoWebsite () {
        this.webElements.emailField().type ("faisal@test.com");
        this.webElements.passwordField().type ("Pass@123");
        this.webElements.loginBtn().click();
    }

}
module.exports = new LoginPage();