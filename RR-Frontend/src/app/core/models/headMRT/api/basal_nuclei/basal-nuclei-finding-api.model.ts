import { BasalNucleiDiagnosisTypeEnum } from '@enums/headMRT/basal-nuclei/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { DominantFindingTypeEnum } from '@enums/headMRT/basal-nuclei/dominant-finding-type.enum';
import { SideTypeEnum } from '@enums/headMRT/basal-nuclei/side-type.enum';
import { BasalNucleiFindingBaseApiModel } from './basal-nuclei-finding-base-api.model';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { BasalGangliaLocationsEnum } from '@enums/shared/head/basal-ganglia-locations.enum';

export class BasalNucleiFindingApiModel extends BasalNucleiFindingBaseApiModel {
  // Pathology

  // Localization tab
  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  knownHistologyType: HistologyKnownTypeEnum;
  basalGangliaLocations: string;

  // Characterization I tab
  size: number;
  size2ndPlane: number;
  size3rdPlane: number;
  shapeType: ShapeTypeEnum;
  dominantFindingType: DominantFindingTypeEnum;

  // Characterization II tab
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
    // Pathology

    // Localization tab
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.knownHistologyType = HistologyKnownTypeEnum.None;
    this.basalGangliaLocations = BasalGangliaLocationsEnum.None;

    // Characterization I tab
    this.size = null;
    this.size2ndPlane = null;
    this.size3rdPlane = null;
    this.shapeType = ShapeTypeEnum.None;
    this.dominantFindingType = DominantFindingTypeEnum.None;

    // Characterization II tab
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
