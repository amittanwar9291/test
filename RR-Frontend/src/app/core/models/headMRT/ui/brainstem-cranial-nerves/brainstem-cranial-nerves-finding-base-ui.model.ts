import { FindingBase } from '@models/shared/finding/finding.base';
import {
  BrainstemCranialNervesDiagnosisTypeEnum,
  BrainstemCranialNervesFindingTypeEnum,
  SideTypeEnum
} from '@enums/headMRT/brainstem-cranial-nerves';

import { CranialNerveTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/cranial-nerve-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class BrainstemCranialNervesFindingBaseUiModel extends FindingBase {
  findingType: BrainstemCranialNervesFindingTypeEnum;

  // Common
  differentialDiagnosis: BrainstemCranialNervesDiagnosisTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  t1WSignalType: number;
  t2WSignalType: number;
  flairSignalType: number;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  dwiSignalType: number;
  adcSignalType: number;
  isDiffusionRestriction: boolean;
  isSubstanceDefect: boolean;
  isHemorrhage: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isFat: boolean;
  isCysts: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isSignalVoids: boolean;
  isFluidLevel: boolean;
  isConfluent: boolean;
  isMassEffect: boolean;
  isInfiltration: boolean;
  isPerineuralTumorSpread: boolean;
  isHydrocephalus: boolean;
  isPerifocalEdema: boolean;
  isMidbrainAtrophy: boolean;
  isBrainstemAtrophy: boolean;
  isNerveThickening: boolean;
  isNerveCompression: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  differentialDiagnosis1: BrainstemCranialNervesDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2: BrainstemCranialNervesDiagnosisTypeEnum;
  isSubordinate: boolean;
  differentialDiagnosis3: BrainstemCranialNervesDiagnosisTypeEnum;
  isMoreThan1Lesion: boolean;

  // Brainstem
  isMesencephalon: boolean;
  isCrusCerebri: boolean;
  isCrusCerebriRight: boolean;
  isCrusCerebriLeft: boolean;
  isTegmentumMesencephali: boolean;
  isSubstantiaNigra: boolean;
  isNucleusRuber: boolean;
  isLaminaTecti: boolean;
  isPons: boolean;
  isPonsRight: boolean;
  isPonsLeft: boolean;
  isPonsCentral: boolean;
  isPonsPeripheral: boolean;
  isMedullaOblongata: boolean;
  isMedullaOblongataAnterior: boolean;
  isMedullaOblongataCentral: boolean;
  isMedullaOblongataPosterior: boolean;

  // CranialNerves
  sideType: SideTypeEnum;
  cranialNerveType: CranialNerveTypeEnum;
  isRootEntryZone: boolean;
  isGeniculumOfTheFacialNerve: boolean;
  isMeatusAcusticusInternus: boolean;
  isFacialisCanal: boolean;
  isForamenStylomastoid: boolean;
  isVestibularNerve: boolean;
  isCochlearNerve: boolean;
  isSuperciliaryGanglion: boolean;
  isFossulaPetrosa: boolean;
  isGanglionInferius: boolean;
  isSulcusLateralisPosterior: boolean;
  isTrigonumNerviVagi: boolean;
  isCanalisHypoglossi: boolean;

  constructor() {
    super();
    this.findingType = BrainstemCranialNervesFindingTypeEnum.None;

    // Common
    this.differentialDiagnosis = BrainstemCranialNervesDiagnosisTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.t1WSignalType = 0;
    this.t2WSignalType = 0;
    this.flairSignalType = 0;
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.dwiSignalType = 0;
    this.adcSignalType = 0;
    this.isDiffusionRestriction = false;
    this.isSubstanceDefect = false;
    this.isHemorrhage = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isFat = false;
    this.isCysts = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isSignalVoids = false;
    this.isFluidLevel = false;
    this.isConfluent = false;
    this.isMassEffect = false;
    this.isInfiltration = false;
    this.isPerineuralTumorSpread = false;
    this.isHydrocephalus = false;
    this.isPerifocalEdema = false;
    this.isMidbrainAtrophy = false;
    this.isBrainstemAtrophy = false;
    this.isNerveThickening = false;
    this.isNerveCompression = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.differentialDiagnosis1 = BrainstemCranialNervesDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2 = BrainstemCranialNervesDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.differentialDiagnosis3 = BrainstemCranialNervesDiagnosisTypeEnum.None;
    this.isMoreThan1Lesion = false;

    // Brainstem
    this.isMesencephalon = false;
    this.isCrusCerebri = false;
    this.isCrusCerebriRight = false;
    this.isCrusCerebriLeft = false;
    this.isTegmentumMesencephali = false;
    this.isSubstantiaNigra = false;
    this.isNucleusRuber = false;
    this.isLaminaTecti = false;
    this.isPons = false;
    this.isPonsRight = false;
    this.isPonsLeft = false;
    this.isPonsCentral = false;
    this.isPonsPeripheral = false;
    this.isMedullaOblongata = false;
    this.isMedullaOblongataAnterior = false;
    this.isMedullaOblongataCentral = false;
    this.isMedullaOblongataPosterior = false;

    // CranialNerves
    this.sideType = SideTypeEnum.None;
    this.cranialNerveType = CranialNerveTypeEnum.None;
    this.isRootEntryZone = false;
    this.isGeniculumOfTheFacialNerve = false;
    this.isMeatusAcusticusInternus = false;
    this.isFacialisCanal = false;
    this.isForamenStylomastoid = false;
    this.isVestibularNerve = false;
    this.isCochlearNerve = false;
    this.isSuperciliaryGanglion = false;
    this.isFossulaPetrosa = false;
    this.isGanglionInferius = false;
    this.isSulcusLateralisPosterior = false;
    this.isTrigonumNerviVagi = false;
    this.isCanalisHypoglossi = false;
  }
}
