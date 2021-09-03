import { FindingBase } from '@models/shared/finding/finding.base';
import { PreviousInterventionsTherapiesTypeEnum } from '@enums/headMRT/anamnesis/previous-interventions-therapies-type.enum';

export class PreviousInterventionsTherapiesFindingApiModel extends FindingBase {
  findingType: PreviousInterventionsTherapiesTypeEnum;
  month: number;
  year: number;

  constructor() {
    super();
    this.findingType = PreviousInterventionsTherapiesTypeEnum.None;
    this.month = null;
    this.year = null;
  }
}
