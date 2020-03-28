module.exports = function HomePage() {
    this.searchBox = element(by.name('searchInputBox'));
    this.searchBoxButton = element(by.css('#tabContentId0 button'));
    this.result = element(by.css('.expanded-section.clear-fix .expanded-row-content .item-row.clickable:nth-child(3) .item-title.block'));
}