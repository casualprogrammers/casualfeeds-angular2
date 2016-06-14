import { CasualfeedsAngular2Page } from './app.po';

describe('casualfeeds-angular2 App', function() {
  let page: CasualfeedsAngular2Page;

  beforeEach(() => {
    page = new CasualfeedsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('casualfeeds-angular2 works!');
  });
});
