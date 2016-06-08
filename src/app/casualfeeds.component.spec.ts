import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CasualfeedsAppComponent } from '../app/casualfeeds.component';

beforeEachProviders(() => [CasualfeedsAppComponent]);

describe('App: Casualfeeds', () => {
  it('should create the app',
      inject([CasualfeedsAppComponent], (app: CasualfeedsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'casualfeeds works!\'',
      inject([CasualfeedsAppComponent], (app: CasualfeedsAppComponent) => {
    expect(app.title).toEqual('casualfeeds works!');
  }));
});
