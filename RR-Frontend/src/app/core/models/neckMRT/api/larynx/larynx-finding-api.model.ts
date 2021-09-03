import { DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/larynx/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  CmDistributionTypeEnum,
  CystTypeEnum,
  HistologyKnownTypeEnum,
  HomogeneityTypeEnum,
  LocalizationAxialTypeEnum,
  ClassificationTypeEnum,
  CricothyroidClassificationTypeEnum,
  EntityTypeEnum,
  FractureLocalizationTypeEnum,
  FractureOrientationTypeEnum,
  LuxationLocalizationTypeEnum,
  SoftTissueLocalizationTypeEnum
} from '@enums/neckMRT/larynx';

import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { LarynxFindingBaseApiModel } from '@models/neckMRT/api/larynx/larynx-finding-base-api.model';

export class LarynxFindingApiModel extends LarynxFindingBaseApiModel {
  // Common
  isEpiglottis: boolean;
  isLymphadenitis: boolean;
  isNecrosis: boolean;
  isSubordinated: boolean;

  // Mass
  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isVestibularFold: boolean;
  isVocalCord: boolean;
  isThyroidCartilage: boolean;
  isAryepiglotticFold: boolean;
  isThyroarytenoidMuscle: boolean;
  isAnteriorCommissure: boolean;
  isPosteriorCommissure: boolean;
  isSubglotticSpace: boolean;
  localizationAxialType: LocalizationAxialTypeEnum;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
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
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  isSuspected: boolean;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  isMoreThan1LesionSameEntity: boolean;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  // AcuteEpiglottitis
  isAryepiglotticFolds: boolean;
  isMucosalContrastEnhancement: boolean;
  isSupraglotticLaryngealEdema: boolean;
  isEdematousSwellingOfTheEpiglottis: boolean;
  isObliterationOfThePerifocalFattyTissue: boolean;
  isPhlegmon: boolean;
  isTongueEdema: boolean;
  isPalatinTonsilEdema: boolean;
  isAbscess: boolean;
  extensionInMm: number;
  isExtensionToSpacesOfSuprahyoidNeck: boolean;

  // Trauma
  isSoftTissueSwelling: boolean;
  softTissueLocalizationType: SoftTissueLocalizationTypeEnum;
  entityType: EntityTypeEnum;
  isEpiglotticDisruption: boolean;
  isRuptureAtLevelOfPetiole: boolean;
  isMucosalTearsOfTheAryepiglotticFolds: boolean;
  classificationType: ClassificationTypeEnum;
  isDislocation: boolean;
  isFracture: boolean;
  fractureLocalizationType: FractureLocalizationTypeEnum;
  isArytaenoidCartilageRight: boolean;
  isArytaenoidCartilageLeft: boolean;
  fractureOrientationType: FractureOrientationTypeEnum;
  isLuxationSubluxation: boolean;
  luxationLocalizationType: LuxationLocalizationTypeEnum;
  isCricothyroidalJointRight: boolean;
  isCricothyroidalJointLeft: boolean;
  isCartilagoArytaenoideaRight: boolean;
  isCartilagoArytaenoideaLeft: boolean;
  cricothyroidClassificationType: CricothyroidClassificationTypeEnum;
  isPronouncedSubcutaneousEdema: boolean;
  isRetractionOfRupture: boolean;
  isDissectionCarotidArtery: boolean;
  isDissectionCarotidArteryRight: boolean;
  isDissectionCarotidArteryLeft: boolean;
  isAirwayObstruction: boolean;
  isSubcutaneousEmphysema: boolean;
  isIpsilateralVocalFoldAdduction: boolean;
  isIpsilateralVocalFoldAdductionRight: boolean;
  isIpsilateralVocalFoldAdductionLeft: boolean;
  isDislocatedFractureFragments: boolean;
  constructor() {
    super();

    // Common
    this.isEpiglottis = false;
    this.isLymphadenitis = false;
    this.isNecrosis = false;
    this.isSubordinated = false;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isVestibularFold = false;
    this.isVocalCord = false;
    this.isThyroidCartilage = false;
    this.isAryepiglotticFold = false;
    this.isThyroarytenoidMuscle = false;
    this.isAnteriorCommissure = false;
    this.isPosteriorCommissure = false;
    this.isSubglotticSpace = false;
    this.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
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
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.isSuspected = false;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.isMoreThan1LesionSameEntity = false;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;

    // AcuteEpiglottitis
    this.isAryepiglotticFolds = false;
    this.isMucosalContrastEnhancement = false;
    this.isSupraglotticLaryngealEdema = false;
    this.isEdematousSwellingOfTheEpiglottis = false;
    this.isObliterationOfThePerifocalFattyTissue = false;
    this.isPhlegmon = false;
    this.isTongueEdema = false;
    this.isPalatinTonsilEdema = false;
    this.isAbscess = false;
    this.extensionInMm = null;
    this.isExtensionToSpacesOfSuprahyoidNeck = false;

    // Trauma
    this.isSoftTissueSwelling = false;
    this.softTissueLocalizationType = SoftTissueLocalizationTypeEnum.None;
    this.entityType = EntityTypeEnum.None;
    this.isEpiglotticDisruption = false;
    this.isRuptureAtLevelOfPetiole = false;
    this.isMucosalTearsOfTheAryepiglotticFolds = false;
    this.classificationType = ClassificationTypeEnum.None;
    this.isDislocation = false;
    this.isFracture = false;
    this.fractureLocalizationType = FractureLocalizationTypeEnum.None;
    this.isArytaenoidCartilageRight = false;
    this.isArytaenoidCartilageLeft = false;
    this.fractureOrientationType = FractureOrientationTypeEnum.None;
    this.isLuxationSubluxation = false;
    this.luxationLocalizationType = LuxationLocalizationTypeEnum.None;
    this.isCricothyroidalJointRight = false;
    this.isCricothyroidalJointLeft = false;
    this.isCartilagoArytaenoideaRight = false;
    this.isCartilagoArytaenoideaLeft = false;
    this.cricothyroidClassificationType = CricothyroidClassificationTypeEnum.None;
    this.isPronouncedSubcutaneousEdema = false;
    this.isRetractionOfRupture = false;
    this.isDissectionCarotidArtery = false;
    this.isDissectionCarotidArteryRight = false;
    this.isDissectionCarotidArteryLeft = false;
    this.isAirwayObstruction = false;
    this.isSubcutaneousEmphysema = false;
    this.isIpsilateralVocalFoldAdduction = false;
    this.isIpsilateralVocalFoldAdductionRight = false;
    this.isIpsilateralVocalFoldAdductionLeft = false;
    this.isDislocatedFractureFragments = false;
  }
}
