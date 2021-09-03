import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { FindingColumnIds } from './finding-column-ids';

export class FindingColumnConfig {
  placeholder: string;
  dropdownValues: FindingDropdownModel[];
  findingType: string;
  subFindings: string[];
  buttonText: string;
  itemCount: number;
  translationBits: any;
  descriptionLabelClass: string;
  groupedOptions: boolean;
  findingColumnIds: FindingColumnIds;
  autoConfigFindingRRId: string;

  constructor() {
    this.placeholder = 'placeholder';
    this.dropdownValues = [];
    this.findingType = 'findingType';
    this.subFindings = [];
    this.buttonText = 'Add Finding';
    this.itemCount = 9;
    this.translationBits = '';
    this.descriptionLabelClass = '';
    this.groupedOptions = false;
    this.findingColumnIds = new FindingColumnIds();
    this.autoConfigFindingRRId = 'none';
  }
}
