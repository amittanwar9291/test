import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';

export class SequenceApiModel extends SequenceApiBaseModel {
  isPostContrast: boolean;

  constructor() {
    super();
    this.isPostContrast = false;
  }
}
