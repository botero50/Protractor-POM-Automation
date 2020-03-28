const Home = require('../pages/home.page.js');
const Result = require('../pages/result.page.js');
const Wait = require('../core/wait.js');
const TestDataEnvironment = require('../resources/test-data-environment.js');

describe('Test https://www.redfin.com', function () {
    const home = new Home();
    const wait = new Wait();
    const result = new Result();
    const testDataEnvironment = new TestDataEnvironment();

    it('Search Valley Stream and return the list ordered', () => {
        browser.driver.get(browser.params.redfinUrl);
        home.searchBox.sendKeys(testDataEnvironment.searchData);
        home.searchBoxButton.click();
        wait.forBeVisible(home.result);
        home.result.click();
        wait.forBeVisible(result.saveSearch);
 
        browser.getCurrentUrl().then(function (url) {
            browser.get(url + testDataEnvironment.filter);
        });
        expect(result.houseList.count()).not.toEqual(0);
    });
})