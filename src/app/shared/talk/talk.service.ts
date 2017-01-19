import { Injectable } from '@angular/core';

const TALKS: string[] = [
    "Talk 1",
    "Talk 2",
    "Talk 3"
];

@Injectable()
export class TalkService {
    title = 'Angular 2';

    constructor() {

    }

    getTalkDemoData() {
        return TALKS;
    }

}
