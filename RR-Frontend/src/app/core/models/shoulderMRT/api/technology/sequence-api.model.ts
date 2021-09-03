import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';

export class SequenceApiModel extends SequenceApiBaseModel {
  // Second column
  isPostContrast: boolean;

  constructor() {
    super();

    // Second column
    this.isPostContrast = false;
  }
}
