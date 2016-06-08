import { Injectable } from '@angular/core';
import { Feed } from './feed';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeedServiceService {
  private redditUrl = 'https://www.reddit.com/r/all.json';


  constructor(private http: Http) {}
  
  //utility functions declared to improve readability
  private jsonize = res => res.json().data;
  private formatDataToReturn = data => data.children.map ( c => c.data  ) ;

  getFeeds() {
    return this.http.get(this.redditUrl)
      .toPromise()
      .then(this.jsonize)
      .then(this.formatDataToReturn)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
