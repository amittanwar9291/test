import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

export class SequenceUiModel extends SequenceUiBaseModel {
  examinationTechniqueType: string; // TODO make enum for it
  isECGTriggering: boolean;
  isPostContrast: boolean;
  isSubtraction: boolean;

  constructor() {
    super();

    this.examinationTechniqueType = 'None';
    this.isECGTriggering = false;
    this.isPostContrast = false;
    this.isSubtraction = false;
  }
}
