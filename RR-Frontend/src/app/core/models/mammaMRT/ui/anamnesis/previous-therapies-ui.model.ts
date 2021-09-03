import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { BreastReconstruction } from '@models/shared/mamma/breast/breast-reconstruction.model';
import { FindingBase } from '@models/shared/finding/finding.base';
import { BreastLocation } from '@models/shared/mamma/breast/breast-location.model';

import { TheraphyType, TimeStatusType } from '@enums/shared/mamma/anamnesis-medical-history';

export class PreviousTherapiesUi extends FindingBase {
  findingType: TheraphyType;
  monthyear: MonthYearModel;
  timeStatusType: TimeStatusType;
  breastLocation: BreastLocation;
  reconstruction: BreastReconstruction;

  constructor() {
    super();

    this.findingType = TheraphyType.None;
    this.monthyear = new MonthYearModel();
    this.timeStatusType = TimeStatusType.None;
    this.breastLocation = new BreastLocation();
    this.reconstruction = new BreastReconstruction();
  }
}
