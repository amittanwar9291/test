import { IDeletable } from '@interfaces/deletable.interface';
import { ModelBase } from '@models/model-base';
import { Guid } from '../guid/guid';

export class FindingBase extends ModelBase implements IDeletable {
  isDeleted: boolean;
  number: number;
  validationId?: string;
  scopeId: string;
  constructor() {
    super();
    this.isDeleted = false;
    this.number = 1;
    this.validationId = Guid.create();
    this.scopeId = Guid.create();
  }
}
