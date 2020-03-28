module.exports = function ResultPage() {
    this.saveSearch = element(by.css("[data-rf-test-id='save-search-button']"));
    this.houseList = element.all(by.css(".HomeCardContainer"));
}