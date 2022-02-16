
const AdminLogin = require('../../../src/wyre/ui/admin/adminLogin.page');

const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^I navigate to the admin dashboard$/, async () => {
 await AdminLogin.open();

});

When(/^I login with valid credentials$/, async () => {
    await AdminLogin.login('marcus@sendwyre.com', 'S3nd@wyre');
});

Then(/^I should see account list$/, async () => {
    await expect(AdminLogin.accountList).toBeExisting();
});