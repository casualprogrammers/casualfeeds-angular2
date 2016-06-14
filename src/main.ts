import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CasualfeedsAngular2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CasualfeedsAngular2AppComponent);

