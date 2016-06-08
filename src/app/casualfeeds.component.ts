import { Component, OnInit } from '@angular/core';
import { Feed } from './feed';
import { FeedServiceService } from './feed-service.service';
// import { FeedRowComponent } from './feed-row/feed-row.component'
import { HTTP_PROVIDERS } from '@angular/http';
/*@TODO need to understand why i can't use another component.*/
@Component({
  moduleId: module.id,
  selector: 'casualfeeds-app',
  templateUrl: 'casualfeeds.component.html',
  styleUrls: ['casualfeeds.component.css'],
  providers: [FeedServiceService, HTTP_PROVIDERS],
  // directives: [FeedRowComponent]
})
export class CasualfeedsAppComponent implements OnInit {
  title = 'Today Reddit feeds';
  Feeds: Feed[];
  show: string;

  starFeed(feed: Feed) {
    feed.starred = !feed.starred;
  }

  changeShowMode(mode: string) {
    this.show = mode;
  }

  constructor(private feedService: FeedServiceService) { }

  ngOnInit() {
    this.feedService.getFeeds().then(feeds => this.Feeds = feeds);
    this.show = "AllFeeds";
  }
}
