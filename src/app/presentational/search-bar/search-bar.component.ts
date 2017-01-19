import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    searchPlaceholder: string;
    searchTerm: string;

    constructor() {
        
    }

    ngOnInit() {
        console.log('Hello from the search bar');
        this.searchPlaceholder = "Search...";
    }

    onSearchClicked() {
        console.log(this.searchTerm);
    }
}
