import { DetailsInterventionTypeEnum } from '@enums/spineCT/anamnesis/details-intervention-type.enum';
import { PreviousInterventionTypeEnum } from '@enums/spineCT/anamnesis/previous-intervention-type.enum';
import { ReportModelBase } from '@models/report-model-base';
import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

export class PreviousInterventionUiModel extends FindingBase {
  previousInterventionType: PreviousInterventionTypeEnum;

  // Common

  spineLocation: SpineLocation;
  isRight: boolean;
  isLeft: boolean;

  // StatusPostBoneCementImplantation

  detailsInterventionType: DetailsInterventionTypeEnum;

  // LumbarPuncture

  dateOfLumbarPuncture: MonthYearModel;

  constructor() {
    super();
    this.previousInterventionType = PreviousInterventionTypeEnum.None;

    // Common

    this.spineLocation = new SpineLocation();
    this.isRight = false;
    this.isLeft = false;

    // StatusPostBoneCementImplantation

    this.detailsInterventionType = DetailsInterventionTypeEnum.None;

    // LumbarPuncture
    this.dateOfLumbarPuncture = new MonthYearModel();
  }
}
