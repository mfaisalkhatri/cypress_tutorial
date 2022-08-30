import { faker } from '@faker-js/faker';

describe('LambdaTest ECommerce Playground Website End to End Tests', () => {
	const PASSWORD = 'PASS123#';

	it('opens the website and navigates the user to registration page', () => {
		cy.visit('/');
		cy.get('a:contains("My account")').last().trigger('mouseover');
		cy.get('a:contains("Register")').click();
		cy.get('h1').should('have.text', 'Register Account');
	});

	it('should allow user registration successfully', () => {
		cy.get('#input-firstname').type(faker.name.firstName());
		cy.get('#input-lastname').type(faker.name.lastName());
		cy.get('#input-email').type(faker.internet.email());
		cy.get('#input-telephone').type(faker.datatype.number(9999999999));
		cy.get('#input-password').type(PASSWORD);
		cy.get('#input-confirm').type(PASSWORD);
		cy.get('.float-right > .custom-control > .custom-control-label').click();
		cy.get('.float-right > .btn').click();
		cy.get('.page-title').should(
			'have.text',
			' Your Account Has Been Created!'
		);
		cy.get('.buttons > .btn').click();
		cy.get(':nth-child(1) > .card-header').should('have.text', 'My Account');
	});

	it.only('navigates to component product page and selects camera lens for checkout', () => {
		cy.visit('/');
		cy.get('a:contains("Shop by Category")').click();
		cy.get('a:contains("Components")').first().click();
		cy.get('#entry_212408 > div > div:nth-child(2)')
			.trigger('mouseover')
			.wait(1000)
			.get(
				'div.product-thumb-top > div.product-action > button.btn.btn-cart.cart-29'
			)
			.click({ force: true });
	});
});
