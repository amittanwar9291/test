import { DropdownModel } from './dropdown.model';

export class FindingDropdownModel extends DropdownModel {
  public isLocked?: boolean;
  public limit?: number;
  public isHeader?: boolean;
  public dropdownClosedLabel?: string;

  constructor(label: string, value: string, isLocked?: boolean, limit?: number, isHeader?: boolean, dropdownClosedLabel?: string) {
    super(label, value);
    this.isLocked = isLocked ? isLocked : false;
    this.limit = limit ? limit : 0;
    this.isHeader = isHeader ? isHeader : false;
    this.dropdownClosedLabel = dropdownClosedLabel ? dropdownClosedLabel : '';
  }
}
