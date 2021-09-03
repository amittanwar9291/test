import { FindingBase } from '@models/shared/finding/finding.base';
import { FormType, MarginType, DensityType, MammographyFindingType } from '@enums/mammaMX/mammography-finding/';

export class MammographyFindingFindingBaseUiModel extends FindingBase {
  // Common
  findingType: MammographyFindingType;
  massKnownDiagnosisType: string;
  formType: FormType;
  marginType: MarginType;
  densityType: DensityType;

  constructor() {
    super();

    // Common
    this.findingType = MammographyFindingType.None;
    this.formType = FormType.None;
    this.marginType = MarginType.None;
    this.densityType = DensityType.None;
    this.massKnownDiagnosisType = 'None';
  }
}
