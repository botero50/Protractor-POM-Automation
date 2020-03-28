module.exports = function Wait() {
  this.EC = protractor.ExpectedConditions;

  this.maxTime = {
    halfSecond: 500,
    oneSecond: 1000,
    fiveSeconds: 5000,
    tenSeconds: 10000,
    twentySeconds: 20000,
    oneMinute: 60000,
    twoMinutes: 120000,
    fiveMinutes: 300000,
    tenMinutes: 600000,
    twentyMinutes: 1200000,
  };

  this.forBeClickable = function forBeClickable(webElement, timeout = this.maxTime.twentySeconds) {
    browser.wait(this.EC.elementToBeClickable(webElement), timeout);
  };

  this.forBeinvisible = function forBeinvisible(elm, timeout = this.maxTime.twentySeconds) {
    browser.wait(this.EC.invisibilityOf(elm), timeout);
  };

  this.forBeVisible = function forBeVisible(elm, timeout = this.maxTime.twentySeconds) {
    browser.wait(this.EC.visibilityOf(elm), timeout);
  };

  this.forUntilReady = function forUntilReady(elm, timeout = this.maxTime.twentySeconds) {
    return browser.wait(() => elm.isPresent(), timeout)
      .then(() => browser.wait(() => elm.isDisplayed(), timeout));
  };
};
