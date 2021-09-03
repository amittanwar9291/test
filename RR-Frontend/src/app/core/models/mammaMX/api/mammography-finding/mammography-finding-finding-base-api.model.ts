import { FindingBase } from '@models/shared/finding/finding.base';
import { FormType, MarginType, DensityType, MammographyFindingType } from '@enums/mammaMX/mammography-finding/';

export class MammographyFindingFindingBaseApiModel extends FindingBase {
  findingType: MammographyFindingType;
  formType: FormType;
  marginType: MarginType;
  densityType: DensityType;
  massKnownDiagnosisType: string;

  constructor() {
    super();

    this.findingType = MammographyFindingType.None;
    this.formType = FormType.None;
    this.marginType = MarginType.None;
    this.densityType = DensityType.None;
    this.massKnownDiagnosisType = 'None';
  }
}
