import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

export class SequenceUiModel extends SequenceUiBaseModel {
  // Second column
  isPostContrast: boolean;

  constructor() {
    super();

    // Second column
    this.isPostContrast = false;
  }
}
