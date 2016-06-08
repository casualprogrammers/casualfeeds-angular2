export class CasualfeedsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('casualfeeds-app h1')).getText();
  }
}
