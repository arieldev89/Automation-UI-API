# webdriverio-test

First install the dependencies
```
npm i
```
Then run the selenium
```
npx selenium-standalone install && npx selenium-standalone start
```
Finally you can run the tests
```
npx wdio run ./wdio.conf.js
```

```
npx wdio ./wdio.conf.js --cucumberOpts.tagExpression @User_001
```


Install Allure report comand line tool
```
sudo npm install -g allure-commandline --save-dev
```

To generate report run
```
allure generate
```

To serve allure report run
```
allure serve
```

---
Config 
---

Create .env file on root project, you can find .env_example with the required env variables needed for the application