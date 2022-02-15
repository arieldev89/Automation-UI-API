const AdminLogin = require('../pageobjects/adminLogin.page');

describe('Login Admin', () => {
    it('should login with valid credentials', async () => {
        await AdminLogin.open();

        await AdminLogin.login('marcus@sendwyre.com', 'S3nd@wyre');

        await AdminLogin.accountList.waitForExist({ timeout: 20000 })

        await expect(AdminLogin.accountList).toBeExisting();

    });
});


