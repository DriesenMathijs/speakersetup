import { inject, TestBed } from '@angular/core/testing';

import { TalkService } from './talk.service';

describe('Talk Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [TalkService]});
  });

  it('should ...', inject([TalkService], (api) => {
    expect(api.title).toBe('Angular 2');
  }));
});
