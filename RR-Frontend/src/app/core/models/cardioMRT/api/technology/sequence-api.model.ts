import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';

export class SequenceApiModel extends SequenceApiBaseModel {
  examinationTechniqueType: string;
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
