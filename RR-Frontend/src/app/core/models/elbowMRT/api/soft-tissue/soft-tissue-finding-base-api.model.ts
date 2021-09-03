import {
  ContrastEnhancementQuantitativeType,
  DemarcationType,
  DiagnosisTypeEnum,
  HeterogenousType,
  HomogeneityType,
  SoftTissueFindingType
} from '@enums/elbowMRT/soft-tissue';
import { FindingBase } from '@models/shared/finding/finding.base';

export class SoftTissueFindingBaseApiModel extends FindingBase {
  findingType: SoftTissueFindingType;
  mainFeaturesDifferentialDiagnosisType: DiagnosisTypeEnum;
  t1w: string;
  t2w: string;
  demarcationType: DemarcationType;
  mainHomogeneityType: HomogeneityType;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeType;
  caEnhancementHomogeneityType: HomogeneityType;
  heterogenousType: HeterogenousType;
  isSubcutaneous: boolean;
  isAlongMedianNerve: boolean;
  isFat: boolean;
  isCalcification: boolean;
  isCysts: boolean;
  isCapsule: boolean;
  isSpaghettiLikeAppearanceOfTheNerve: boolean;
  isDistractedNerveFasciclesAxialPomegranateSign: boolean;
  isPressureErosionBonyErosion: boolean;
  isMacrodactyly: boolean;
  isSepta: boolean;
  isNecrosis: boolean;
  isSignalVoids: boolean;
  isNoDisplacement: boolean;
  isAlongTheTendonSheath: boolean;
  isCutisThickening: boolean;
  isInfiltration: boolean;

  constructor() {
    super();
    this.findingType = SoftTissueFindingType.None;
    this.t1w = 'None';
    this.t2w = 'None';
    this.demarcationType = DemarcationType.None;
    this.mainHomogeneityType = HomogeneityType.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
    this.caEnhancementHomogeneityType = HomogeneityType.None;
    this.heterogenousType = HeterogenousType.None;
    this.isSubcutaneous = false;
    this.isAlongMedianNerve = false;
    this.isFat = false;
    this.isCalcification = false;
    this.isCysts = false;
    this.isCapsule = false;
    this.isSpaghettiLikeAppearanceOfTheNerve = false;
    this.isDistractedNerveFasciclesAxialPomegranateSign = false;
    this.isPressureErosionBonyErosion = false;
    this.isMacrodactyly = false;
    this.mainFeaturesDifferentialDiagnosisType = DiagnosisTypeEnum.None;
    this.isSepta = false;
    this.isNecrosis = false;
    this.isSignalVoids = false;
    this.isNoDisplacement = false;
    this.isAlongTheTendonSheath = false;
    this.isCutisThickening = false;
    this.isInfiltration = false;
  }
}
