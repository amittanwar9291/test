import { FindingBase } from '@models/shared/finding/finding.base';

import { FindingTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/finding-type.enum';
import { SideTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/side-type.enum';
import { DistinctionTypeEnum, LocalizationTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/ligamentous-lesion';
import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  DistributionPatternTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum,
  ShapeTypeEnum
} from '@enums/hipMRT/capsule-and-ligaments/synovia-mass';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class CapsuleAndLigamentsFindingUiModel extends FindingBase {
  // Common
  findingType: FindingTypeEnum;
  sideType: SideTypeEnum;

  // Ligamentous Lesion
  localizationType: LocalizationTypeEnum;
  distinctionType: DistinctionTypeEnum;
  isThickening: boolean;
  isT2wSignalElevation: boolean;

  // Synovia Diffuse Pathology
  isRightSide: boolean;
  isLeftSide: boolean;
  isHyperplasia: boolean;
  isPronouncedContrastEnhancement: boolean;

  // Synovia Mass
  descriptionType: DescriptionTypeEnum;
  synoviaDifferentialDiagnosis: string;
  differentialDiagnosis1: string;
  differentialDiagnosis2: string;
  growthPatternsType: DistributionPatternTypeEnum;
  extensionSizeInMm: number;
  extension2ndPlaneInMm: number;
  extension3rdPlaneInMm: number;
  marginType: MarginTypeEnum;
  characterizationIIHomogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  t1wSignal: number;
  t2wSignal: number;
  isNecrosis: boolean;
  isSusceptibilityArtifacts: boolean;
  isBloomingArtifact: boolean;
  isSynovialnodulus: boolean;
  isAbove1LesionSamePathology: boolean;
  isSynovialProliferations: boolean;
  isArticularEffusion: boolean;
  isHaemarthrosis: boolean;
  isLooseBody: boolean;
  isAbove1Lesion: boolean;
  looseBodyMaxDiameterInMm: number;
  isBonyErosionsSynovialInsertion: boolean;
  isPerifocalSoftTissueEdema: boolean;
  isPeriarticularCalcification: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  pronouncedHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isAbove1LesionSameEntity: boolean;
  isSuspected: boolean;
  isSubordinated: boolean;

  constructor() {
    super();

    // Common
    this.findingType = FindingTypeEnum.None;
    this.sideType = SideTypeEnum.None;

    // Ligamentous Lesion
    this.localizationType = LocalizationTypeEnum.None;
    this.distinctionType = DistinctionTypeEnum.None;
    this.isThickening = false;
    this.isT2wSignalElevation = false;

    // Synovia Diffuse Pathology
    this.isRightSide = false;
    this.isLeftSide = false;
    this.isHyperplasia = false;
    this.isPronouncedContrastEnhancement = false;

    // Synovia Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.synoviaDifferentialDiagnosis = 'None';
    this.differentialDiagnosis1 = 'None';
    this.differentialDiagnosis2 = 'None';
    this.growthPatternsType = DistributionPatternTypeEnum.None;
    this.extensionSizeInMm = null;
    this.extension2ndPlaneInMm = null;
    this.extension3rdPlaneInMm = null;
    this.marginType = MarginTypeEnum.None;
    this.characterizationIIHomogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.t1wSignal = 0;
    this.t2wSignal = 0;
    this.isNecrosis = false;
    this.isSusceptibilityArtifacts = false;
    this.isBloomingArtifact = false;
    this.isSynovialnodulus = false;
    this.isAbove1LesionSamePathology = false;
    this.isSynovialProliferations = false;
    this.isArticularEffusion = false;
    this.isHaemarthrosis = false;
    this.isLooseBody = false;
    this.isAbove1Lesion = false;
    this.looseBodyMaxDiameterInMm = null;
    this.isBonyErosionsSynovialInsertion = false;
    this.isPerifocalSoftTissueEdema = false;
    this.isPeriarticularCalcification = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.pronouncedHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isAbove1LesionSameEntity = false;
    this.isSuspected = false;
    this.isSubordinated = false;
  }
}
