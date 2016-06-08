import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FeedServiceService } from './feed-service.service';

describe('FeedService Service', () => {
  beforeEachProviders(() => [FeedServiceService]);

  it('should ...',
      inject([FeedServiceService], (service: FeedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
