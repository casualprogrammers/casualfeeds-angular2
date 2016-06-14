export class CasualfeedsAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('casualfeeds-angular2-app h1')).getText();
  }
}
