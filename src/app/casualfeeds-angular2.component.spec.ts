import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CasualfeedsAngular2AppComponent } from '../app/casualfeeds-angular2.component';

beforeEachProviders(() => [CasualfeedsAngular2AppComponent]);

describe('App: CasualfeedsAngular2', () => {
  it('should create the app',
      inject([CasualfeedsAngular2AppComponent], (app: CasualfeedsAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'casualfeeds-angular2 works!\'',
      inject([CasualfeedsAngular2AppComponent], (app: CasualfeedsAngular2AppComponent) => {
    expect(app.title).toEqual('casualfeeds-angular2 works!');
  }));
});
