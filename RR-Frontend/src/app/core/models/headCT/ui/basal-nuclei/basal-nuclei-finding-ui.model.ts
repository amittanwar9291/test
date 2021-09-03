import { BasalNucleiDiagnosisTypeEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-diagnosis-type.enum';
import { BasalNucleiFindingTypeEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-finding-type.enum';
import { DensityTypeEnum } from '@enums/headCT/basal-nuclei/density-type.enum';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';
import { ContrastEnhancementBasalNucleiTypeEnum } from '@enums/headCT/basal-nuclei/contrast-enhancement-type.enum';
import { DistributionTypeEnum } from '@enums/headCT/common/distribution-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headCT/common/histology-known-type.enum';
import { MarginTypeEnum } from '@enums/headCT/common/margin-type.enum';
import { MidlineShiftSideTypeEnum } from '@enums/headCT/common/midline-shift-side-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/shape-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { BasalGangliaLocationsModel } from '../../../shared/head/basal-ganglia-locations.model';

export class BasalNucleiFindingUiModel extends FindingBase {
  // Common
  findingType: BasalNucleiFindingTypeEnum;
  descriptionType: DescriptionTypeEnum;

  // Pathology
  differentialDiagnosisLocalizationType: BasalNucleiDiagnosisTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  basalGangliaLocations: BasalGangliaLocationsModel;
  distributionType: DistributionTypeEnum;
  size: number;
  size2ndPlane: number;
  size3rdPlane: number;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  densityType: DensityTypeEnum;
  quantitative: number;
  isSubstanceDefect: boolean;
  isHemorrhage: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isFat: boolean;
  isCysts: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isFluidLevel: boolean;
  isConfluent: boolean;
  isMassEffect: boolean;
  isInfiltration: boolean;
  isAtrophy: boolean;
  isPerifocalEdema: boolean;
  isAbscess: boolean;
  maximumDiameter: number;
  isMidlineShift: boolean;
  midlineShiftSideType: MidlineShiftSideTypeEnum;
  extentOfMidlineShift: number;
  isInvolvementOfVentricles: boolean;
  isLateralVentricleRight: boolean;
  isLateralVentricleLeft: boolean;
  isThirdVentricle: boolean;
  isFourthVentricle: boolean;
  contrastEnhancementType: ContrastEnhancementBasalNucleiTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastDistributionType: ContrastDistributionTypeEnum;
  differentialDiagnosisType1: BasalNucleiDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosisType2: BasalNucleiDiagnosisTypeEnum;
  isSubordinate: boolean;
  differentialDiagnosisType3: BasalNucleiDiagnosisTypeEnum;
  is1LesionOfTheSamePathology: boolean;

  constructor() {
    super();

    // Common
    this.findingType = BasalNucleiFindingTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;

    // Pathology
    this.differentialDiagnosisLocalizationType = BasalNucleiDiagnosisTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.basalGangliaLocations = new BasalGangliaLocationsModel();
    this.distributionType = DistributionTypeEnum.None;
    this.size = null;
    this.size2ndPlane = null;
    this.size3rdPlane = null;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.quantitative = null;
    this.isSubstanceDefect = false;
    this.isHemorrhage = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isFat = false;
    this.isCysts = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isFluidLevel = false;
    this.isConfluent = false;
    this.isMassEffect = false;
    this.isInfiltration = false;
    this.isAtrophy = false;
    this.isPerifocalEdema = false;
    this.isAbscess = false;
    this.maximumDiameter = null;
    this.isMidlineShift = false;
    this.midlineShiftSideType = MidlineShiftSideTypeEnum.None;
    this.extentOfMidlineShift = null;
    this.isInvolvementOfVentricles = false;
    this.isLateralVentricleRight = false;
    this.isLateralVentricleLeft = false;
    this.isThirdVentricle = false;
    this.isFourthVentricle = false;
    this.contrastEnhancementType = ContrastEnhancementBasalNucleiTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastDistributionType = ContrastDistributionTypeEnum.None;
    this.differentialDiagnosisType1 = BasalNucleiDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosisType2 = BasalNucleiDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.differentialDiagnosisType3 = BasalNucleiDiagnosisTypeEnum.None;
    this.is1LesionOfTheSamePathology = false;
  }
}
