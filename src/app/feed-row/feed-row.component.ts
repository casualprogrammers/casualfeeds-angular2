import { Component, Input } from '@angular/core';
import { Feed } from './../feed';

@Component({
  selector: 'app-feed-row',
  templateUrl: './../app/feed-row/feed-row.component.html',
  styleUrls: ['./../app/feed-row/feed-row.component.css']
})
export class FeedRowComponent {

  constructor() { }

  starFeed(feed: Feed) {
    feed.starred = !feed.starred;
  }

  @Input() feed: Feed;
  @Input() showStarred: boolean;

}
