const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    api_base: process.env.baseAPI,
    test_email: process.env.test_account_email,
    test_pwd: process.env.test_account_pwd,
    admin_url: process.env.base_admin_url,
  };