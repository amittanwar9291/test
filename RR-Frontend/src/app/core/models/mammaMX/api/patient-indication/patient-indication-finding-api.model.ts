import { FindingBase } from '@models/shared/finding/finding.base';
import { PatientIndicationFindingTypeEnum, MastodyniaTypeEnum, SinceWhenEnum } from '@enums/mammaMX/patient-indication';

export class PatientIndicationFindingApiModel extends FindingBase {
  // Common
  findingType: PatientIndicationFindingTypeEnum;
  nippleDischargeSinceWhen: SinceWhenEnum;
  nippleDischargeLocalization: string;

  // LumpIndurationDetected
  nippleDischargeShoulderLocalization: string;
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
    this.nippleDischargeLocalization = 'None';

    // LumpIndurationDetected
    this.nippleDischargeShoulderLocalization = 'None';
    this.isProgressiveFinding = false;

    // ChestPain
    this.chestPainType = MastodyniaTypeEnum.None;

    // Mastitis
    this.isAntibiosis = false;
  }
}
