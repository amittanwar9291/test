import { FindingBase } from '@models/shared/finding/finding.base';
import { KidneysDifferentialDiagnosisTypeEnum, KidneysFindingTypeEnum, MarginTypeEnum } from '@enums/abdomenMRT/kidneys';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

export class KidneysFindingBaseApiModel extends FindingBase {
  findingType: KidneysFindingTypeEnum;

  // Common

  kidneysDifferentialDiagnosisType: KidneysDifferentialDiagnosisTypeEnum;

  // Mass

  homogeneityType: HomogeneityTypeEnum;
  marginType: MarginTypeEnum;
  t1wSignal: string;
  t2wSignal: string;
  isDisplacing: boolean;
  isDeformationOuterRenalContour: boolean;
  corticomedullaryPhase: string;
  nephrographicPhase: string;

  constructor() {
    super();

    this.findingType = KidneysFindingTypeEnum.None;

    // Common

    this.kidneysDifferentialDiagnosisType = KidneysDifferentialDiagnosisTypeEnum.None;

    // Mass

    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.t1wSignal = 'None';
    this.t2wSignal = 'None';
    this.isDisplacing = false;
    this.isDeformationOuterRenalContour = false;
    this.corticomedullaryPhase = 'None';
    this.nephrographicPhase = 'None';
  }
}
