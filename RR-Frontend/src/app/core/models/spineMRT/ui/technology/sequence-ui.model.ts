import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

export class SequenceUiModel extends SequenceUiBaseModel {
  isPostContrast: boolean;

  constructor() {
    super();
    this.isPostContrast = false;
  }
}
