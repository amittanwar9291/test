import { FindingBase } from '@models/shared/finding/finding.base';
import { BasalNucleiDiagnosisTypeEnum, BasalNucleiFindingTypeEnum } from '@enums/headMRT/basal-nuclei/';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { DominantFindingTypeEnum } from '@enums/headMRT/basal-nuclei/dominant-finding-type.enum';
import { SideTypeEnum } from '@enums/headMRT/basal-nuclei/side-type.enum';
import { ContrastEnhancementBasalNucleiTypeEnum } from '@enums/headMRT/basal-nuclei/contrast-enhancement-basal-nuclei-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { BasalGangliaLocationsModel } from '@models/shared/head/basal-ganglia-locations.model';

export class BasalNucleiFindingBaseUiModel extends FindingBase {
  findingType: BasalNucleiFindingTypeEnum;

  // Pathology

  // Localization tab
  differentialDiagnosisLocalizationType: BasalNucleiDiagnosisTypeEnum;
  isHistologyKnown: boolean;
  knownHistologyType: HistologyKnownTypeEnum;
  basalGangliaLocations: BasalGangliaLocationsModel;

  // Characterization I tab
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  t1wSignalType: number;
  t2wSignalType: number;
  flairSignalType: number;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  dwiSignalType: number;
  adcSignalType: number;
  isDiffusionRestriction: boolean;
  dominantFindingType: DominantFindingTypeEnum;

  // Characterization II tab
  isSignalVoids: boolean;
  contrastEnhancementType: ContrastEnhancementBasalNucleiTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  isParenchymalDefect: boolean;
  isHemorrhage: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isFat: boolean;
  isCysts: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isFluidFluidLevel: boolean;
  isConfluent: boolean;
  isMassEffect: boolean;
  isInfiltration: boolean;
  isPerifocalEdema: boolean;
  isAbscess: boolean;
  maximumDiameter: number;
  isMidlineShift: boolean;
  sideType: SideTypeEnum;
  extentOfMidlineShift: number;
  isInvolvementOfVentricles: boolean;
  isLateralVentricleRight: boolean;
  isLateralVentricleLeft: boolean;
  isThirdVentricle: boolean;
  contrastDistributionType: ContrastEnhancementDistributionTypeEnum;

  // Differential diagnosis tab
  differentialDiagnosisType1: BasalNucleiDiagnosisTypeEnum;
  differentialDiagnosisType2: BasalNucleiDiagnosisTypeEnum;
  differentialDiagnosisType3: BasalNucleiDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  is1LesionOfTheSamePathology: boolean;

  constructor() {
    super();
    this.findingType = BasalNucleiFindingTypeEnum.None;

    // Pathology

    // Localization tab
    this.differentialDiagnosisLocalizationType = BasalNucleiDiagnosisTypeEnum.None;
    this.isHistologyKnown = false;
    this.knownHistologyType = HistologyKnownTypeEnum.None;
    this.basalGangliaLocations = new BasalGangliaLocationsModel();

    // Characterization I tab
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.t1wSignalType = 0;
    this.t2wSignalType = 0;
    this.flairSignalType = 0;
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.dwiSignalType = 0;
    this.adcSignalType = 0;
    this.isDiffusionRestriction = false;
    this.dominantFindingType = DominantFindingTypeEnum.None;

    // Characterization II tab
    this.isSignalVoids = false;
    this.contrastEnhancementType = ContrastEnhancementBasalNucleiTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.isParenchymalDefect = false;
    this.isHemorrhage = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isFat = false;
    this.isCysts = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isFluidFluidLevel = false;
    this.isConfluent = false;
    this.isMassEffect = false;
    this.isInfiltration = false;
    this.isPerifocalEdema = false;
    this.isAbscess = false;
    this.maximumDiameter = null;
    this.isMidlineShift = false;
    this.sideType = SideTypeEnum.None;
    this.extentOfMidlineShift = null;
    this.isInvolvementOfVentricles = false;
    this.isLateralVentricleRight = false;
    this.isLateralVentricleLeft = false;
    this.isThirdVentricle = false;
    this.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;

    // Differential diagnosis tab
    this.differentialDiagnosisType1 = BasalNucleiDiagnosisTypeEnum.None;
    this.differentialDiagnosisType2 = BasalNucleiDiagnosisTypeEnum.None;
    this.differentialDiagnosisType3 = BasalNucleiDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.is1LesionOfTheSamePathology = false;
  }
}
