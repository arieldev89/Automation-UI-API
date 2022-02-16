const { Then, When } = require("@wdio/cucumber-framework");

const faker = require('faker');

const user = require("../../../src/wyre/api/User/UserService")

let context = null;

When(/^I create an account with valid data$/, async () => {
    console.log(faker.internet.email())
    const body = {"email": faker.internet.email(), "password": "wyreWYRE1234", "country": "US"}
    context = await user.createUser(body);
    //console.log(context)
    console.log(context.body)
   
   });
   
Then(/^I should get response (.*)$/, async (expected_status)=> {
    expect(context.status).toBe(parseInt(expected_status));
})   