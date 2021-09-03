import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class DropdownGroupedModel {
  label: string;
  items: DropdownModel[];

  constructor(label: string, items: DropdownModel[]) {
    this.label = label;
    this.items = items;
  }
}
