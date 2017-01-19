import { Component, OnInit } from '@angular/core';
import { TalkAction } from '../../actions';

@Component({
  selector: 'rsm-search-talk',
  templateUrl: './search-talk.component.html',
  styleUrls: ['./search-talk.component.scss']
})
export class SearchTalkComponent implements OnInit {
  searchPlaceholder: string;
  searchResults: any;
  searchTerm: string;

  constructor(private talkAction: TalkAction) {
    // Do stuff
  }

  ngOnInit() {
    this.searchPlaceholder = "Search...";
  }

  onNotify(message: string): void {
    this.searchTerm = message;
    this.searchResults = this.talkAction.getSearchTalks(this.searchTerm);
  }

}
