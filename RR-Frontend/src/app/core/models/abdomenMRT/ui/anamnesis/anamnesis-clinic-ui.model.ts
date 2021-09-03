import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisClinicTypeEnum } from '@enums/abdomenMRT/anamnesis/';

export class AnamnesisClinicUiModel extends FindingBase {
  clinicType: AnamnesisClinicTypeEnum;

  constructor() {
    super();
    this.clinicType = AnamnesisClinicTypeEnum.None;
  }
}
