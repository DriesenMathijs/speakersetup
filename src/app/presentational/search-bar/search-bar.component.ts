import { Component, OnInit } from '@angular/core';
import { TalkAction } from '../../actions';

@Component({
    selector: 'rsm-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    searchPlaceholder: string;
    searchTerm: string;
    result: string[];

    constructor(private talkAction: TalkAction) {
        
    }

    ngOnInit() {
        console.log('Hello from the search bar');
        this.searchPlaceholder = "Search...";
    }

    onSearchClicked() {
        console.log(this.searchTerm);
        this.result = this.talkAction.getSearchTalks("talk");
        alert(this.result[0]);
    }
}
