import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rsm-search-talk-result',
    templateUrl: './search-talk-result.component.html',
    styleUrls: ['./search-talk-result.component.scss']
})
export class SearchTalkResultComponent implements OnInit {
    @Input() searchResults: any;


    constructor() {

    }

    ngOnInit() {
    }
}
