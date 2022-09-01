import { faker } from '@faker-js/faker';

describe('LambdaTest ECommerce Playground Website End to End Tests', () => {
	const PASSWORD = 'PASS123#';
	const FIRST_NAME = faker.name.firstName();
	const LAST_NAME = faker.name.lastName();
	let unitPrice;

	
	it('opens the website and navigates the user to registration page', () => {
		cy.visit('/');
		cy.get('a:contains("My account")').last().trigger('mouseover');
		cy.get('a:contains("Register")').click();
		cy.get('h1').should('have.text', 'Register Account');
	});

	it('should allow user registration successfully', () => {
		cy.get('#input-firstname').type(FIRST_NAME);
		cy.get('#input-lastname').type(LAST_NAME);
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

	it('navigates to component product page and selects camera lens for checkout', () => {
		cy.get('a:contains("Shop by Category")').click();
		cy.get('a:contains("Components")').first().click();
		cy.get('#entry_212408 > div > div:nth-child(2)')
			.trigger('mouseover')
			.wait(1000)
			.get(
				'div.product-thumb-top > div.product-action > button.btn.btn-cart.cart-29'
			)
		.click({ force: true });
		cy.get('.d-flex > p').should(
				'have.text',
				'Success: You have added Palm Treo Pro to your shopping cart!'
			);
		cy.get('.form-row > :nth-child(2) > .btn').click();
	});

	it('navigates to the product checkout window and checks out the camera lens aaded to cart ', () => {
		cy.get('#checkout-cart > .table > tbody > tr > :nth-child(4)')
		.invoke('prop', 'textContent').then(textContent => {
			cy.log(textContent.toString())
			unitPrice = textContent;
			cy.log(unitPrice);
		});
		cy.get('#checkout-cart > .table > tbody > tr > :nth-child(2) > a').should('have.text','Palm Treo Pro');


	})
	it('should display the unit price of camera lens stored from previous test', () => {
		cy.log(unitPrice);

	});
});
