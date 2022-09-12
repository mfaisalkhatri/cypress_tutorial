import { faker } from "@faker-js/faker";

export const BillingData = {
  billingAddress: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postCode: faker.address.zipCode(),
  }


};
