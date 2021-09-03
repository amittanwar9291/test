import { FindingBase } from '@models/shared/finding/finding.base';
import { MarginTypeEnum } from '@enums/handMRT/soft-tissue/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { FormTypeEnum } from '@enums/handMRT/soft-tissue/form-type.enum';
import { HistologyKnownTypeEnum } from '@enums/handMRT/soft-tissue/histology-known-type.enum';
import { LocalizationTypeEnum } from '@enums/handMRT/soft-tissue/localization-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/handMRT/soft-tissue/contrast-enhancement-distribution-type.enum';
import { CMEnhancementTypeEnum } from '@enums/handMRT/soft-tissue/cm-enhancement-type.enum';
import { SoftTissueFindingTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-finding-type.enum';
import { SoftTissueDifferentialDiagnosisTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-differential-diagnosis-type.enum';

export class SoftTissueFindingBaseUiModel extends FindingBase {
  findingType: SoftTissueFindingTypeEnum;

  localizationType: LocalizationTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  cmHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementType: CMEnhancementTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  formType: FormTypeEnum;
  histologyKnownType: HistologyKnownTypeEnum;

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
  isHemarthros: boolean;
  isHistologyKnown: boolean;
  isCapsuleRupture: boolean;
  isArticularEffusionWithExtraarticularSpread: boolean;
  isLooseBody: boolean;
  isCompressionOfThePosteriorInterosseousNerve: boolean;
  isCutisThickening: boolean;
  isNerves: boolean;
  isVessel: boolean;
  isFascia: boolean;
  isMuscle: boolean;
  isSkin: boolean;
  isBones: boolean;
  isInfiltration: boolean;
  isAlongTendonSheath: boolean;
  isNoDisplacement: boolean;
  isSignalVoids: boolean;
  isNecrosis: boolean;
  isSepta: boolean;
  isDiffusionRestriction: boolean;
  isMoreThanOneLesionSameEntity: boolean;
  isSuspected: boolean;
  isSecondary: boolean;

  signalTypeT1w: number;
  signalTypeT2w: number;

  differentialDiagnosis: SoftTissueDifferentialDiagnosisTypeEnum;
  differentialDiagnosis1: SoftTissueDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2: SoftTissueDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3: SoftTissueDifferentialDiagnosisTypeEnum;

  constructor() {
    super();
    this.findingType = SoftTissueFindingTypeEnum.None;

    this.localizationType = LocalizationTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.cmHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementType = CMEnhancementTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.histologyKnownType = HistologyKnownTypeEnum.None;

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
    this.isHemarthros = false;
    this.isHistologyKnown = false;
    this.isCapsuleRupture = false;
    this.isArticularEffusionWithExtraarticularSpread = false;
    this.isLooseBody = false;
    this.isCompressionOfThePosteriorInterosseousNerve = false;
    this.isCutisThickening = false;
    this.isNerves = false;
    this.isVessel = false;
    this.isFascia = false;
    this.isMuscle = false;
    this.isSkin = false;
    this.isBones = false;
    this.isInfiltration = false;
    this.isAlongTendonSheath = false;
    this.isNoDisplacement = false;
    this.isSignalVoids = false;
    this.isNecrosis = false;
    this.isSepta = false;
    this.isDiffusionRestriction = false;
    this.isMoreThanOneLesionSameEntity = false;
    this.isSecondary = false;
    this.isSuspected = false;

    this.signalTypeT1w = 0;
    this.signalTypeT2w = 0;

    this.differentialDiagnosis = SoftTissueDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis1 = SoftTissueDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = SoftTissueDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = SoftTissueDifferentialDiagnosisTypeEnum.None;
  }
}
