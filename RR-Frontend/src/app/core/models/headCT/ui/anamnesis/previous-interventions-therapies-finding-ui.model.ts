import { FindingBase } from '@models/shared/finding/finding.base';
import { PreviousInterventionsTherapiesTypeEnum } from '@enums/headCT/anamnesis/previous-interventions-therapies-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class PreviousInterventionsTherapiesFindingUiModel extends FindingBase {
  findingType: PreviousInterventionsTherapiesTypeEnum;
  date: MonthYearModel;

  constructor() {
    super();
    this.findingType = PreviousInterventionsTherapiesTypeEnum.None;
    this.date = new MonthYearModel();
  }
}
