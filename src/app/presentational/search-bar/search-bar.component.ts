import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rsm-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() searchPlaceholder: string;
    searchTerm: string;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    constructor() {

    }

    ngOnInit() {
    }

    onSearchClicked() {
        this.notify.emit(this.searchTerm);
    }
}
