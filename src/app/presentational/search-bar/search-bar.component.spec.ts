import { TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBar Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [SearchBarComponent]});
    });

    it('Should ...', () => {
        const fixture = TestBed.createComponent(SearchBarComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('Search...');
    });
}); 