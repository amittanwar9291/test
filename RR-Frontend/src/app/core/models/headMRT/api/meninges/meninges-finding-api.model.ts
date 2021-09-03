import { MeningesDiffuseDiagnosisTypeEnum } from '@enums/headMRT/meninges';

import {
  CystTypeEnum,
  FatTypeEnum,
  GrowthPatternTypeEnum,
  HistologyKnownTypeEnum,
  MeningesMassDiagnosisTypeEnum
} from '@enums/headMRT/meninges';

import { CharacterizationHematomaTypeEnum, RegionTypeEnum, SideTypeEnum } from '@enums/headMRT/meninges';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MeningesFindingBaseApiModel } from './meninges-finding-base-api.model';

export class MeningesFindingApiModel extends MeningesFindingBaseApiModel {
  // Common

  descriptionType: DescriptionTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  isMedian: boolean;
  isFrontal: boolean;
  isTemporal: boolean;
  isParietal: boolean;
  isOccipital: boolean;
  isInfratentorial: boolean;
  isFalx: boolean;
  isTentorium: boolean;
  isLaminaCribrosa: boolean;
  isOpticNerveSheath: boolean;
  isIntrasellar: boolean;
  isPosteriorClinoidProcess: boolean;
  isSphenoidWing: boolean;
  isCerebellopontineAngle: boolean;
  isSulcusSigmoideus: boolean;
  isTrigoneOfTheLateralVentricle: boolean;
  isInsularCistern: boolean;
  isForamenMagnum: boolean;
  size: number;
  secondPlane: number;
  thirdPlane: number;
  isDiffusionRestriction: boolean;
  isCapsule: boolean;
  isSignalVoids: boolean;
  isSuspicionOf: boolean;

  // Mass

  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isFat: boolean;
  fatType: FatTypeEnum;
  cystType: CystTypeEnum;
  isHemorrhageHemosiderin: boolean;
  isSepta: boolean;
  isCalcification: boolean;
  growthPatternType: GrowthPatternTypeEnum;
  isIntrameatalGrowth: boolean;
  isIntraforaminalFissuralGrowth: boolean;
  isLocalVenousStasis: boolean;
  isBoneInfiltration: boolean;
  massDifferentialDiagnosis1: MeningesMassDiagnosisTypeEnum;
  massDifferentialDiagnosis2: MeningesMassDiagnosisTypeEnum;
  isSubordinate: boolean;
  massDifferentialDiagnosis3: MeningesMassDiagnosisTypeEnum;
  isLesionOfTheSameEntity: boolean;
  dwiSignal: string;
  adcSignal: string;

  // DiffuseChanges

  isThickening: boolean;
  meningesWidth: number;
  t1WSignalDiffuse: string;
  t2WSignalDiffuse: string;
  isAbscess: boolean;
  maxExtension: number;
  isEmpyema: boolean;
  isHydrocephalus: boolean;
  isPachymeninges: boolean;
  isLeptomeninges: boolean;
  diffuseDifferentialDiagnosis1: MeningesDiffuseDiagnosisTypeEnum;
  diffuseDifferentialDiagnosis2: MeningesDiffuseDiagnosisTypeEnum;

  // SubduralHematoma

  isSickleShaped: boolean;
  isCrossingSutures: boolean;
  isMajorAttachmentNotExceeded: boolean;
  maxWidth: number;
  isAlongFalx: boolean;
  isAlongTentorium: boolean;
  isSeptations: boolean;
  isContrastEnhancementMembrane: boolean;
  isFluid: boolean;
  isFluidLevel: boolean;
  isBridgeVeinDisplacementInward: boolean;
  isDuralThickening: boolean;
  isContrastEnhancement: boolean;
  isMidlineShift: boolean;
  sideType: SideTypeEnum;
  midlineDeviation: number;
  isHerniation: boolean;
  regionType: RegionTypeEnum;
  characterizationHematomaType: CharacterizationHematomaTypeEnum;
  isSubduralHygroma: boolean;

  // EpiduralHematoma

  isDuraleAttachmentExceeded: boolean;
  isSuturesNotExceeded: boolean;
  isDisplacedDuraBetweenEdhAndBrain: boolean;
  isBiconvex: boolean;
  isSkullFracture: boolean;
  isContrecoupSdh: boolean;
  isAdjacentContusion: boolean;
  isConcomitantCerebrospinalFluidCongestion: boolean;
  isAssociatedInfarction: boolean;

  constructor() {
    super();

    // Common

    this.descriptionType = DescriptionTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.isMedian = false;
    this.isFrontal = false;
    this.isTemporal = false;
    this.isParietal = false;
    this.isOccipital = false;
    this.isInfratentorial = false;
    this.isFalx = false;
    this.isTentorium = false;
    this.isLaminaCribrosa = false;
    this.isOpticNerveSheath = false;
    this.isIntrasellar = false;
    this.isPosteriorClinoidProcess = false;
    this.isSphenoidWing = false;
    this.isCerebellopontineAngle = false;
    this.isSulcusSigmoideus = false;
    this.isTrigoneOfTheLateralVentricle = false;
    this.isInsularCistern = false;
    this.isForamenMagnum = false;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.isDiffusionRestriction = false;
    this.isCapsule = false;
    this.isSignalVoids = false;
    this.isSuspicionOf = false;

    // Mass

    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isFat = false;
    this.fatType = FatTypeEnum.None;
    this.cystType = CystTypeEnum.None;
    this.isHemorrhageHemosiderin = false;
    this.isSepta = false;
    this.isCalcification = false;
    this.growthPatternType = GrowthPatternTypeEnum.None;
    this.isIntrameatalGrowth = false;
    this.isIntraforaminalFissuralGrowth = false;
    this.isLocalVenousStasis = false;
    this.isBoneInfiltration = false;
    this.massDifferentialDiagnosis1 = MeningesMassDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosis2 = MeningesMassDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.massDifferentialDiagnosis3 = MeningesMassDiagnosisTypeEnum.None;
    this.isLesionOfTheSameEntity = false;
    this.dwiSignal = 'None';
    this.adcSignal = 'None';

    // DiffuseChanges

    this.isThickening = false;
    this.meningesWidth = null;
    this.t1WSignalDiffuse = 'None';
    this.t2WSignalDiffuse = 'None';
    this.isAbscess = false;
    this.maxExtension = null;
    this.isEmpyema = false;
    this.isHydrocephalus = false;
    this.isPachymeninges = false;
    this.isLeptomeninges = false;
    this.diffuseDifferentialDiagnosis1 = MeningesDiffuseDiagnosisTypeEnum.None;
    this.diffuseDifferentialDiagnosis2 = MeningesDiffuseDiagnosisTypeEnum.None;

    // SubduralHematoma

    this.isSickleShaped = false;
    this.isCrossingSutures = false;
    this.isMajorAttachmentNotExceeded = false;
    this.maxWidth = null;
    this.isAlongFalx = false;
    this.isAlongTentorium = false;
    this.isSeptations = false;
    this.isContrastEnhancementMembrane = false;
    this.isFluid = false;
    this.isFluidLevel = false;
    this.isBridgeVeinDisplacementInward = false;
    this.isDuralThickening = false;
    this.isContrastEnhancement = false;
    this.isMidlineShift = false;
    this.sideType = SideTypeEnum.None;
    this.midlineDeviation = null;
    this.isHerniation = false;
    this.regionType = RegionTypeEnum.None;
    this.characterizationHematomaType = CharacterizationHematomaTypeEnum.None;
    this.isSubduralHygroma = false;

    // EpiduralHematoma

    this.isDuraleAttachmentExceeded = false;
    this.isSuturesNotExceeded = false;
    this.isDisplacedDuraBetweenEdhAndBrain = false;
    this.isBiconvex = false;
    this.isSkullFracture = false;
    this.isContrecoupSdh = false;
    this.isAdjacentContusion = false;
    this.isConcomitantCerebrospinalFluidCongestion = false;
    this.isAssociatedInfarction = false;
  }
}
