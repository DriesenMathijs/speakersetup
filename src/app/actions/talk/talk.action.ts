import { Injectable } from '@angular/core';
import { TalkService } from '../../shared';

@Injectable()
export class TalkAction {
  modifiedList: string[];
  constructor(private talkService: TalkService) {

  }

  getSearchTalks(term: string): string[] {
    this.modifiedList = this.talkService.getTalkDemoData();
    this.modifiedList.push(term);
    return this.modifiedList;
  }
}