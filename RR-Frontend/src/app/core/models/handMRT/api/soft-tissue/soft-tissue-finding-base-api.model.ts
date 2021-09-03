import { FindingBase } from '@models/shared/finding/finding.base';
import { LocalizationTypeEnum } from '@enums/handMRT/soft-tissue/localization-type.enum';
import { MarginTypeEnum } from '@enums/handMRT/soft-tissue/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/handMRT/soft-tissue/contrast-enhancement-distribution-type.enum';
import { CMEnhancementTypeEnum } from '@enums/handMRT/soft-tissue/cm-enhancement-type.enum';
import { SoftTissueFindingTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-finding-type.enum';
import { SoftTissueDifferentialDiagnosisTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-differential-diagnosis-type.enum';

export class SoftTissueFindingBaseApiModel extends FindingBase {
  findingType: SoftTissueFindingTypeEnum;

  localizationType: LocalizationTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  cmHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementType: CMEnhancementTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;

  isMacrodactyly: boolean;
  isPressureCorrosionBone: boolean;
  isAlongMedianNerve: boolean;
  isSubcutaneous: boolean;
  isDisplacedNerveFasciclesAxialPomegranateSign: boolean;
  isSpaghettiLikeAppearanceOfTheNerve: boolean;
  isCapsule: boolean;
  isCalcification: boolean;
  isCysts: boolean;
  isFat: boolean;

  signalTypeT1w: string;
  signalTypeT2w: string;

  differentialDiagnosis: SoftTissueDifferentialDiagnosisTypeEnum;

  constructor() {
    super();
    this.findingType = SoftTissueFindingTypeEnum.None;

    this.localizationType = LocalizationTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.cmHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementType = CMEnhancementTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;

    this.isMacrodactyly = false;
    this.isPressureCorrosionBone = false;
    this.isAlongMedianNerve = false;
    this.isSubcutaneous = false;
    this.isDisplacedNerveFasciclesAxialPomegranateSign = false;
    this.isSpaghettiLikeAppearanceOfTheNerve = false;
    this.isCapsule = false;
    this.isCalcification = false;
    this.isCysts = false;
    this.isFat = false;

    this.signalTypeT1w = 'None';
    this.signalTypeT2w = 'None';

    this.differentialDiagnosis = SoftTissueDifferentialDiagnosisTypeEnum.None;
  }
}
