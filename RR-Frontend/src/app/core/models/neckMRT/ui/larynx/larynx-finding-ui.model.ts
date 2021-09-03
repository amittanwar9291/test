import {
  DifferentialDiagnosisTypeEnum,
  ClassificationTypeEnum,
  CricothyroidClassificationTypeEnum,
  EntityTypeEnum,
  FractureLocalizationTypeEnum,
  FractureOrientationTypeEnum,
  LuxationLocalizationTypeEnum,
  SoftTissueLocalizationTypeEnum,
  HistologyKnownTypeEnum
} from '@enums/neckMRT/larynx/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { LarynxFindingBaseUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-base-ui.model';

export class LarynxFindingUiModel extends LarynxFindingBaseUiModel {
  // Common
  isSubordinated: boolean;

  // Mass
  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  isSuspected: boolean;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  referencePicture: ReferencePictureUiModel;

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
    this.isSubordinated = false;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.isSuspected = false;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.referencePicture = new ReferencePictureUiModel();

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
