import { Component, OnInit } from '@angular/core';
import { Feed } from './feed';
import { FeedServiceService } from './feed-service.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'casualfeeds-app',
  templateUrl: 'casualfeeds.component.html',
  styleUrls: ['casualfeeds.component.css'],
  providers: [FeedServiceService, HTTP_PROVIDERS]
})
export class CasualfeedsAppComponent implements OnInit {
  title = 'Today Reddit feeds';
  Feeds: any[];

  constructor(private feedService: FeedServiceService) {}
  
  ngOnInit() {
    this.feedService.getFeeds().then(feeds => this.Feeds = feeds);
  }
}
