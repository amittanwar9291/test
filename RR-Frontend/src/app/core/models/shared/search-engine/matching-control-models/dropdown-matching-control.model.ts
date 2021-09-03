import { MatchingControl } from '@models/shared/search-engine/matching-control-models/matching-control.model';

export class DropdownMatchingControl extends MatchingControl {
  dropdownOptions: { label: string }[];
  dropdownLabel: string;

  constructor(rrId: string, dropdownOptions: { label: string }[], columnNumber: number, dropdownLabel: string) {
    super(rrId, columnNumber, true);
    this.dropdownOptions = dropdownOptions;
    this.dropdownLabel = dropdownLabel;
  }
}
