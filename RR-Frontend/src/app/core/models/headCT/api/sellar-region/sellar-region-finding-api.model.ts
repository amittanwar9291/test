import { FindingBase } from '@models/shared/finding/finding.base';
import { SellarRegionDiagnosisTypeEnum, SellarRegionFindingTypeEnum } from '@enums/headCT/sellar-region/';

import { RelationToThePituitaryGlandTypeEnum } from '@enums/headCT/sellar-region/pathology/relation-to-the-pituitary-gland-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum } from '@enums/shared/head/histology-known-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { MarginTypeEnum } from '@enums/shared/head/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/shared/head/shape-type.enum';
import { DensityTypeEnum } from '@enums/shared/head/density-type.enum';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';
import { ContrastQuantitativeTypeEnum } from '@enums/shared/head/cortex/common';
import { MidlineShiftSideTypeEnum } from '@enums/headCT/common/midline-shift-side-type.enum';

export class SellarRegionFindingApiModel extends FindingBase {
  // Common

  findingType: SellarRegionFindingTypeEnum;
  descriptionType: DescriptionTypeEnum;
  histologyKnownType: HistologyKnownTypeEnum;
  sideType: SideTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  densityType: DensityTypeEnum;
  carotidArterySideType: SideTypeEnum;
  pituitaryStalkSideType: MidlineShiftSideTypeEnum;
  contrastQuantitativeType: ContrastQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastDistributionType: ContrastDistributionTypeEnum;

  // Pathology

  sellarRegionDiagnosisLocalizationType: SellarRegionDiagnosisTypeEnum;
  isHistologyKnown: boolean;
  relationToThePituitaryGlandType: RelationToThePituitaryGlandTypeEnum;
  isNeurohypophysis: boolean;
  isAdenohypophysis: boolean;
  isPituitaryStalk: boolean;
  isCavernousSinus: boolean;
  isOpticNerveI: boolean;
  isOpticChiasm: boolean;
  isOlfactoryNerveII: boolean;
  isOculomotorNerveIII: boolean;
  isTrochlearNerveIV: boolean;
  isAbducensNerveVI: boolean;
  isInternalCarotidArtery: boolean;
  isDuraMaterMeningen: boolean;
  isSphenoidSinus: boolean;
  isNasopharynx: boolean;
  extensionSize: number;
  extensionSize2ndPlane: number;
  extensionSize3rdPlane: number;
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
  isToothBoneFormation: boolean;
  isDisplacement: boolean;
  isInfiltration: boolean;
  isHydrocephalus: boolean;
  isPerifocalEdema: boolean;
  isBonyRemodeling: boolean;
  isDuraTailSign: boolean;
  isContactWithCarotidArtery: boolean;
  isDisplacementOfPituitaryStalk: boolean;
  isInfiltrationIntoCavernousSinus: boolean;
  isSuspicionOfInfiltration: boolean;
  isExtensionToSuprasellar: boolean;
  isContactToOpticChiasm: boolean;
  isDetectionOfLesion: boolean;
  sellarRegionDiagnosis1Type: SellarRegionDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  sellarRegionDiagnosis2Type: SellarRegionDiagnosisTypeEnum;
  isSubordinate: boolean;
  sellarRegionDiagnosis3Type: SellarRegionDiagnosisTypeEnum;
  is1LesionOfTheSameEntity: boolean;

  constructor() {
    super();

    // Common

    this.findingType = SellarRegionFindingTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.carotidArterySideType = SideTypeEnum.None;
    this.pituitaryStalkSideType = MidlineShiftSideTypeEnum.None;
    this.contrastQuantitativeType = ContrastQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastDistributionType = ContrastDistributionTypeEnum.None;

    // Pathology

    this.sellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisTypeEnum.None;
    this.isHistologyKnown = false;
    this.relationToThePituitaryGlandType = RelationToThePituitaryGlandTypeEnum.None;
    this.isNeurohypophysis = false;
    this.isAdenohypophysis = false;
    this.isPituitaryStalk = false;
    this.isCavernousSinus = false;
    this.isOpticNerveI = false;
    this.isOpticChiasm = false;
    this.isOlfactoryNerveII = false;
    this.isOculomotorNerveIII = false;
    this.isTrochlearNerveIV = false;
    this.isAbducensNerveVI = false;
    this.isInternalCarotidArtery = false;
    this.isDuraMaterMeningen = false;
    this.isSphenoidSinus = false;
    this.isNasopharynx = false;
    this.extensionSize = null;
    this.extensionSize2ndPlane = null;
    this.extensionSize3rdPlane = null;
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
    this.isToothBoneFormation = false;
    this.isDisplacement = false;
    this.isInfiltration = false;
    this.isHydrocephalus = false;
    this.isPerifocalEdema = false;
    this.isBonyRemodeling = false;
    this.isDuraTailSign = false;
    this.isContactWithCarotidArtery = false;
    this.isDisplacementOfPituitaryStalk = false;
    this.isInfiltrationIntoCavernousSinus = false;
    this.isSuspicionOfInfiltration = false;
    this.isExtensionToSuprasellar = false;
    this.isContactToOpticChiasm = false;
    this.isDetectionOfLesion = false;
    this.sellarRegionDiagnosis1Type = SellarRegionDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.sellarRegionDiagnosis2Type = SellarRegionDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.sellarRegionDiagnosis3Type = SellarRegionDiagnosisTypeEnum.None;
    this.is1LesionOfTheSameEntity = false;
  }
}
