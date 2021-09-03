import { MatchingControl } from '@models/shared/search-engine/matching-control-models/matching-control.model';

export class StandardMatchingControl extends MatchingControl {
  label: string;

  constructor(rrId: string, label: string, columnNumber: number, area?: string) {
    super(rrId, columnNumber, false);
    this.label = label;
    this.area = area;
  }
}
