import { StandardOrDropdownMatchingControl } from '@models/shared/search-engine/matching-control-models/standard-or-dropdown-mactching-control.type';

export class SlideSearchResults {
  slideNumber: string;
  slideName: string;
  slideNameTranslation: string;
  findingName?: string;
  matchingControls: StandardOrDropdownMatchingControl[];

  constructor(slideName: string, controls: StandardOrDropdownMatchingControl[]) {
    this.slideName = slideName;
    this.matchingControls = controls;
  }
}
