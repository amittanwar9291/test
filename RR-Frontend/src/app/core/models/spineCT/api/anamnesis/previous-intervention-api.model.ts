import { DetailsInterventionTypeEnum } from '@enums/spineCT/anamnesis/details-intervention-type.enum';
import { PreviousInterventionTypeEnum } from '@enums/spineCT/anamnesis/previous-intervention-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class PreviousInterventionApiModel extends FindingBase {
  previousInterventionType: PreviousInterventionTypeEnum;

  // Common

  spineLocation: string;
  isRight: boolean;
  isLeft: boolean;

  // StatusPostBoneCementImplantation

  detailsInterventionType: DetailsInterventionTypeEnum;

  // LumbarPuncture

  monthOfLumbarPuncture: number;
  yearOfLumbarPuncture: number;
  constructor() {
    super();
    this.previousInterventionType = PreviousInterventionTypeEnum.None;

    // Common

    this.spineLocation = null;
    this.isRight = false;
    this.isLeft = false;

    // StatusPostBoneCementImplantation

    this.detailsInterventionType = DetailsInterventionTypeEnum.None;

    // LumbarPuncture

    this.monthOfLumbarPuncture = 0;
    this.yearOfLumbarPuncture = 0;
  }
}
