import { FindingBase } from '@models/shared/finding/finding.base';
import {
  FindingTypeEnum,
  DifferentialDiagnosisTypeEnum,
  MarginTypeEnum,
  HomogeneityTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  HistologyKnownTypeEnum
} from '@enums/hipMRT/soft-tissue';

export class SoftTissueFindingBaseUiModel extends FindingBase {
  findingType: FindingTypeEnum;

  // Common
  t1wSignal: number;
  t2wSignal: number;
  differentialDiagnosis: DifferentialDiagnosisTypeEnum;
  isSuspected: boolean;
  isVentral: boolean;
  isMedial: boolean;
  isLateral: boolean;
  isDorsal: boolean;

  // SoftTissueMass
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  isFat: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isBoneErosion: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  cmHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isSepta: boolean;
  isNecrosis: boolean;
  isSignalVoids: boolean;
  isAlongTheTendonSheath: boolean;
  isInfiltration: boolean;
  isBones: boolean;
  isSkin: boolean;
  isMuscle: boolean;
  isFascia: boolean;
  isVessel: boolean;
  isNerves: boolean;
  isCutisThickening: boolean;
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  isSubordinated: boolean;
  differentialDiagnosis3: DifferentialDiagnosisTypeEnum;
  isMoreThanOneLesionSameEntity: boolean;

  constructor() {
    super();
    this.findingType = FindingTypeEnum.None;

    // Common
    this.t1wSignal = 0;
    this.t2wSignal = 0;
    this.differentialDiagnosis = DifferentialDiagnosisTypeEnum.None;
    this.isSuspected = false;
    this.isVentral = false;
    this.isMedial = false;
    this.isLateral = false;
    this.isDorsal = false;

    // SoftTissueMass
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isFat = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isBoneErosion = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.cmHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isSepta = false;
    this.isNecrosis = false;
    this.isSignalVoids = false;
    this.isAlongTheTendonSheath = false;
    this.isInfiltration = false;
    this.isBones = false;
    this.isSkin = false;
    this.isMuscle = false;
    this.isFascia = false;
    this.isVessel = false;
    this.isNerves = false;
    this.isCutisThickening = false;
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.differentialDiagnosis3 = DifferentialDiagnosisTypeEnum.None;
    this.isMoreThanOneLesionSameEntity = false;
  }
}
