import { FindingBase } from '@models/shared/finding/finding.base';

import { PatientIndicationFindingTypeEnum, ChestPainTypeEnum, SinceWhenEnum } from '@enums/mammaMRT/patient-indication';

export class PatientIndicationFindingApiModel extends FindingBase {
  // Common
  findingType: PatientIndicationFindingTypeEnum;
  nippleDischargeSinceWhen: SinceWhenEnum;
  nippleDischargeLocalization: string;

  // ChestPain
  chestPainType: ChestPainTypeEnum;

  // Mastitis
  isAntibiosis: boolean;

  constructor() {
    super();

    // Common
    this.findingType = PatientIndicationFindingTypeEnum.None;
    this.nippleDischargeSinceWhen = SinceWhenEnum.None;
    this.nippleDischargeLocalization = 'None';

    // ChestPain
    this.chestPainType = ChestPainTypeEnum.None;

    // Mastitis
    this.isAntibiosis = false;
  }
}
