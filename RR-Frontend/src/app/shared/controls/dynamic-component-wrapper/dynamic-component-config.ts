import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class DynamicComponentConfig {
  placeholder: string;
  dropdownValues: DropdownModel[];
  findingType: string;
  buttonRRId: string;
  findingRRId: string;
  buttonText: string;
  itemCount: number;
  translationBits: any;

  constructor() {
    this.placeholder = 'placeholder';
    this.dropdownValues = [];
    this.findingType = 'findingType';
    this.buttonText = 'Add Finding';
    this.buttonRRId = 'none';
    this.findingRRId = 'none';
    this.itemCount = 9;
    this.translationBits = '';
  }
}
