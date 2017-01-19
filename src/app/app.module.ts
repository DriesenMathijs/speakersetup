import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './container/about/about.component';
import { SearchTalkComponent } from './container/search-talk/search-talk.component';

import { SearchBarComponent } from './presentational/search-bar/search-bar.component';
import { SearchTalkResultComponent } from './presentational/search-talk-result/search-talk-result.component';

import { TalkService } from './shared';
import { TalkAction } from './actions';

import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchTalkComponent,
    SearchBarComponent,
    SearchTalkResultComponent
  ],
  providers: [
    TalkService,
    TalkAction
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
