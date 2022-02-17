const { Then, When } = require("@wdio/cucumber-framework");

const faker = require('faker');

const user = require("../../../src/wyre/api/User/UserService")

let context = null;

When(/^I create an account with valid data$/, async () => {
    const userEmail = faker.internet.email();
    console.log(userEmail)
    const body = {"email": userEmail, "password": "wyreWYRE1234", "country": "US"}
    context = await user.createUser(body);
    //console.log(context)
    console.log(context.body)
   
   });
   
Then(/^I should get response (.*)$/, async (expected_status)=> {
    expect(context.status).toBe(parseInt(expected_status));
})   