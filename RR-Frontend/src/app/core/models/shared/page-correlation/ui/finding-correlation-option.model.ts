import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Guid } from '@models/shared/guid/guid';

export class FindingCorrelationOptionModel extends DropdownModel {
  findingType: string;
  number: number;
  id: string;

  constructor() {
    super();

    this.findingType = 'None';
    this.number = null;
    this.id = Guid.createEmpty();
  }
}
