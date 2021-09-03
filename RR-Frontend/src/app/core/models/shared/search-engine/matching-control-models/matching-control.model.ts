export abstract class MatchingControl {
  'rr-id': string;
  column: number;
  isDropdownOptionControl?: boolean;
  area?: string; // this is used for CardioMRT page 6 controls placed in a dialog window; potentially can be used in other places
  finding?: string;
  subFinding?: string;
  tab?: string;
  subTab?: string;

  constructor(
    rrId: string,
    columnNumber: number,
    isDropdownItem: boolean,
    findingName?: string,
    subFindingName?: string,
    areaName?: string,
    tabName?: string,
    subTab?: string
  ) {
    this['rr-id'] = rrId;
    this.column = columnNumber;
    this.isDropdownOptionControl = isDropdownItem;
    this.finding = findingName;
    this.subFinding = subFindingName;
    this.area = areaName;
    this.tab = tabName;
    this.subTab = subTab;
  }
}
