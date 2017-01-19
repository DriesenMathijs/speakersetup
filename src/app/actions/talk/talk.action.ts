import { Injectable } from '@angular/core';
import { TalkService } from '../../shared';

@Injectable()
export class TalkAction {
  constructor(private talkService: TalkService) {

  }

  getSearchTalks(term: string): string[] {
    return this.talkService.getTalkDemoData();
  }
}