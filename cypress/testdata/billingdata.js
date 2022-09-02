import { faker } from '@faker-js/faker';

class BillingData {

 billingAddress = {
    firstName: faker.name.firstName()
}

}
module.exports = new BillingData();