import { CasualfeedsPage } from './app.po';

describe('casualfeeds App', function() {
  let page: CasualfeedsPage;

  beforeEach(() => {
    page = new CasualfeedsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('casualfeeds works!');
  });
});
