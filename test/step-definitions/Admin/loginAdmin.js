
const AdminLogin = require('../../../src/wyre/ui/admin/adminLogin.page');
const config = require('../../../src/core/envHelper')

const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^I navigate to the admin dashboard$/, async () => {
 await AdminLogin.open();

});

When(/^I login with valid credentials$/, async () => {
    await AdminLogin.login(config.test_email, config.test_pwd);
});

Then(/^I should see account list$/, async () => {
    await expect(AdminLogin.accountList).toBeExisting();
});