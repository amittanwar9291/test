import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class SoftTissueTranslations {
  findingType: DropdownModel[];
  right: string;
  left: string;

  constructor() {
    this.findingType = [];
    this.right = 'rechts';
    this.left = 'links';
  }
}
