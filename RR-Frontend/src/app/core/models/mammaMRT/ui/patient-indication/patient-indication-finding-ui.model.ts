import { FindingBase } from '@models/shared/finding/finding.base';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastSimpleShoulder } from '@models/shared/mamma/breast/breast-simple-shoulder.model';

import { PatientIndicationFindingTypeEnum, ChestPainTypeEnum, SinceWhenEnum } from '@enums/mammaMRT/patient-indication';

export class PatientIndicationFindingUiModel extends FindingBase {
  // Common
  findingType: PatientIndicationFindingTypeEnum;
  nippleDischargeSinceWhen: SinceWhenEnum;
  nippleDischargeLocalization: BreastSimple;

  // LumpsHardeningInBreastDetected
  nippleDischargeShoulderLocalization: BreastSimpleShoulder;

  // ChestPain
  chestPainType: ChestPainTypeEnum;

  // Mastitis
  isAntibiosis: boolean;

  constructor() {
    super();

    // Common
    this.findingType = PatientIndicationFindingTypeEnum.None;
    this.nippleDischargeSinceWhen = SinceWhenEnum.None;
    this.nippleDischargeLocalization = new BreastSimple();

    // LumpsHardeningInBreastDetected
    this.nippleDischargeShoulderLocalization = new BreastSimpleShoulder();

    // ChestPain
    this.chestPainType = ChestPainTypeEnum.None;

    // Mastitis
    this.isAntibiosis = false;
  }
}
