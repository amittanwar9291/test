import { FindingBase } from '@models/shared/finding/finding.base';

import {
  DifferentialDiagnosisTypeEnum,
  LarynxFindingTypeEnum,
  CmQuantitativeTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum,
  LocalizationAxialTypeEnum,
  CystTypeEnum,
  CmDistributionTypeEnum
} from '@enums/neckMRT/larynx/';

export class LarynxFindingBaseUiModel extends FindingBase {
  findingType: LarynxFindingTypeEnum;

  // Common
  isLymphadenitis: boolean;
  isNecrosis: boolean;
  differentialDiagnosis: DifferentialDiagnosisTypeEnum;

  // Mass
  isSupraglotticSpace: boolean;
  isGlottis: boolean;
  isSinusOfMorgagni: boolean;
  marginType: MarginTypeEnum;
  t1wSignal: number;
  t2wSignal: number;
  isInvasive: boolean;
  cmQuantitativeType: CmQuantitativeTypeEnum;
  cmHomogeneityType: HomogeneityTypeEnum;
  isVestibularFold: boolean;
  isVocalCord: boolean;
  isThyroidCartilage: boolean;
  isAryepiglotticFold: boolean;
  isEpiglottis: boolean;
  isThyroarytenoidMuscle: boolean;
  isAnteriorCommissure: boolean;
  isPosteriorCommissure: boolean;
  isSubglotticSpace: boolean;
  localizationAxialType: LocalizationAxialTypeEnum;

  homogeneityType: HomogeneityTypeEnum;
  isDiffusionRestriction: boolean;
  isMicroscopicFat: boolean;
  isMacroscopicFat: boolean;
  isCysts: boolean;
  cystsType: CystTypeEnum;
  isHemorrhageSignsOfResidualHemorrhage: boolean;
  isCalcifications: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isToothBone: boolean;
  isAirFluidLevel: boolean;
  isExophytic: boolean;
  isEndophytic: boolean;
  isDisplacing: boolean;
  isSoftTissueEdema: boolean;
  cmDistributionType: CmDistributionTypeEnum;
  isMoreThan1LesionSameEntity: boolean;

  constructor() {
    super();
    this.findingType = LarynxFindingTypeEnum.None;

    // Common
    this.isLymphadenitis = false;
    this.isNecrosis = false;
    this.differentialDiagnosis = DifferentialDiagnosisTypeEnum.None;

    // Mass
    this.isSupraglotticSpace = false;
    this.isGlottis = false;
    this.isSinusOfMorgagni = false;
    this.marginType = MarginTypeEnum.None;
    this.t1wSignal = 0;
    this.t2wSignal = 0;
    this.isInvasive = false;
    this.cmQuantitativeType = CmQuantitativeTypeEnum.None;
    this.cmHomogeneityType = HomogeneityTypeEnum.None;
    this.isVestibularFold = false;
    this.isVocalCord = false;
    this.isThyroidCartilage = false;
    this.isAryepiglotticFold = false;
    this.isEpiglottis = false;
    this.isThyroarytenoidMuscle = false;
    this.isAnteriorCommissure = false;
    this.isPosteriorCommissure = false;
    this.isSubglotticSpace = false;
    this.localizationAxialType = LocalizationAxialTypeEnum.None;

    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isDiffusionRestriction = false;
    this.isMicroscopicFat = false;
    this.isMacroscopicFat = false;
    this.isCysts = false;
    this.cystsType = CystTypeEnum.None;
    this.isHemorrhageSignsOfResidualHemorrhage = false;
    this.isCalcifications = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isToothBone = false;
    this.isAirFluidLevel = false;
    this.isExophytic = false;
    this.isEndophytic = false;
    this.isDisplacing = false;
    this.isSoftTissueEdema = false;
    this.cmDistributionType = CmDistributionTypeEnum.None;
    this.isMoreThan1LesionSameEntity = false;
  }
}
