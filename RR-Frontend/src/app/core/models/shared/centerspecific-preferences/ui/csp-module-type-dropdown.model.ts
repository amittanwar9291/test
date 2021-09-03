import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class CSPModuleTypeDropdownModel extends DropdownModel {
  findingType: string;

  constructor() {
    super();
    this.findingType = 'None';
  }
}
