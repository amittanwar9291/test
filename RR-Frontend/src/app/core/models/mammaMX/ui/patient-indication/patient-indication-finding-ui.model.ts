import { FindingBase } from '@models/shared/finding/finding.base';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastSimpleShoulder } from '@models/shared/mamma/breast/breast-simple-shoulder.model';

import { PatientIndicationFindingTypeEnum, MastodyniaTypeEnum, SinceWhenEnum } from '@enums/mammaMX/patient-indication';

export class PatientIndicationFindingUiModel extends FindingBase {
  // Common
  findingType: PatientIndicationFindingTypeEnum;
  nippleDischargeSinceWhen: SinceWhenEnum;
  nippleDischargeLocalization: BreastSimple;

  // LumpIndurationDetected
  nippleDischargeShoulderLocalization: BreastSimpleShoulder;
  isProgressiveFinding: boolean;

  // ChestPain
  chestPainType: MastodyniaTypeEnum;

  // Mastitis
  isAntibiosis: boolean;

  constructor() {
    super();

    // Common
    this.findingType = PatientIndicationFindingTypeEnum.None;
    this.nippleDischargeSinceWhen = SinceWhenEnum.None;
    this.nippleDischargeLocalization = new BreastSimple();

    // LumpIndurationDetected
    this.nippleDischargeShoulderLocalization = new BreastSimpleShoulder();
    this.isProgressiveFinding = false;

    // ChestPain
    this.chestPainType = MastodyniaTypeEnum.None;

    // Mastitis
    this.isAntibiosis = false;
  }
}
