import { MyleonBaseFindingApiModel } from '@models/spineMRT/api/myelon/myleon-base-finding-api.model';
import { SpinalCanalFindingTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpinalCanalDifferentialDiagnosisTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-differential-diagnosis-type.enum';
import { SpinalCanalStenosisDetailTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-stenosis-detail-type.enum';
import { MalformationTypeEnum } from '@enums/spineMRT/myelon/malformation-type.enum';
import { CharacterizationTypeEnum } from '@enums/spineMRT/myelon/characterization-type.enum';
import { CharacterizationOpenTypeEnum } from '@enums/spineMRT/myelon/characterization-open-type.enum';
import { LocalizationTypeEnum } from '@enums/spineMRT/myelon/localization-type.enum';
import { DetailsClosedDysraphismTypeEnum } from '@enums/spineMRT/myelon/details-closed-dysraphism-type.enum';
import { ClassificationSubcutaneousMassTypeEnum } from '@enums/spineMRT/myelon/classification-subcutaneous-mass-type.enum';
import { ClassificationDysraphyTypeEnum } from '@enums/spineMRT/myelon/classification-dysraphy-type.enum';
import { DifferentialDiagnosesTypeEnum } from '@enums/spineMRT/myelon/differential-diagnoses-type.enum';
import { AdditionalExtensionTypeEnum } from '@enums/spineMRT/myelon/additional-extension-type.enum';
import { LocalizationInTheSpinalCanalTypeEnum } from '@enums/spineMRT/myelon/localizationIn-the-spinal-canal-type.enum';

export class MyelonFindingAPIModel extends MyleonBaseFindingApiModel {
  findingType: SpinalCanalFindingTypeEnum;
  // Common
  descriptionType: DescriptionTypeEnum;
  spineLocation: string;
  isSecondary: boolean;
  spineLocationNonTarget: string;
  differentialDiagnosis01: SpinalCanalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis02: SpinalCanalDifferentialDiagnosisTypeEnum;

  // SpinalCanalStenosis
  spinalCanalStenosisDetailType: SpinalCanalStenosisDetailTypeEnum;
  widthOfTheSpinalCanal: number;
  isMyelopathy: boolean;

  // DevelopmentalDisorderOrMalformation
  malformationType: MalformationTypeEnum;
  isCaudalPositionOfTheMedullaryCone: boolean;
  isThickenedFilumTerminale: boolean;
  expansionInCcDimension: number;
  characterizationType: CharacterizationTypeEnum;
  expansionProtrusionCcDimension: number;
  diameter: number;
  characterizationOpenType: CharacterizationOpenTypeEnum;
  localizationType: LocalizationTypeEnum;
  isPerineuralCyst: boolean;
  detailsClosedDysraphismType: DetailsClosedDysraphismTypeEnum;
  classificationSubcutaneousMassType: ClassificationSubcutaneousMassTypeEnum;
  classificationDysraphyType: ClassificationDysraphyTypeEnum;
  differentialDiagnosesType: DifferentialDiagnosesTypeEnum;
  isT1wHyperintense: boolean;
  isT2wHyperintense: boolean;
  isT1wFatSaturationHypointense: boolean;
  isNoContrastEnhancement: boolean;

  // MassEffect
  spinalCanalLocation: string;
  sizeAxial: number;
  sizeCraniocaudal: number;
  additionalExtensionType: AdditionalExtensionTypeEnum;
  isAnterior: boolean;
  isPosterior: boolean;
  isLeft: boolean;
  isRight: boolean;
  isRootDisplacement: boolean;
  spineLocationBones: string;
  spineLocationDisks: string;
  isNecrosis: boolean;
  isCharacterizationIIIHemorrhage: boolean;
  localizationInTheSpinalCanalType: LocalizationInTheSpinalCanalTypeEnum;

  // NoMassEffect
  isPosteriorRadix: boolean;
  isArachnoidDiverticula: boolean;
  differentialDiagnosis03: SpinalCanalDifferentialDiagnosisTypeEnum;
  constructor() {
    super();
    this.findingType = SpinalCanalFindingTypeEnum.None;
    // Common
    this.descriptionType = DescriptionTypeEnum.IDescribe;
    this.spineLocation = 'None';
    this.isSecondary = false;
    this.spineLocationNonTarget = 'None';
    this.differentialDiagnosis01 = SpinalCanalDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis02 = SpinalCanalDifferentialDiagnosisTypeEnum.None;

    // SpinalCanalStenosis
    this.spinalCanalStenosisDetailType = SpinalCanalStenosisDetailTypeEnum.None;
    this.widthOfTheSpinalCanal = null;
    this.isMyelopathy = false;

    // DevelopmentalDisorderOrMalformation
    this.malformationType = MalformationTypeEnum.None;
    this.isCaudalPositionOfTheMedullaryCone = false;
    this.isThickenedFilumTerminale = false;
    this.expansionInCcDimension = null;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.expansionProtrusionCcDimension = null;
    this.diameter = null;
    this.characterizationOpenType = CharacterizationOpenTypeEnum.None;
    this.localizationType = LocalizationTypeEnum.None;
    this.isPerineuralCyst = false;
    this.detailsClosedDysraphismType = DetailsClosedDysraphismTypeEnum.None;
    this.classificationSubcutaneousMassType = ClassificationSubcutaneousMassTypeEnum.None;
    this.classificationDysraphyType = ClassificationDysraphyTypeEnum.None;
    this.differentialDiagnosesType = DifferentialDiagnosesTypeEnum.None;
    this.isT1wHyperintense = false;
    this.isT2wHyperintense = false;
    this.isT1wFatSaturationHypointense = false;
    this.isNoContrastEnhancement = false;

    // MassEffect
    this.spinalCanalLocation = 'None';
    this.sizeAxial = null;
    this.sizeCraniocaudal = null;
    this.additionalExtensionType = AdditionalExtensionTypeEnum.None;
    this.isAnterior = false;
    this.isPosterior = false;
    this.isLeft = false;
    this.isRight = false;
    this.isRootDisplacement = false;
    this.spineLocationBones = 'None';
    this.spineLocationDisks = 'None';
    this.isNecrosis = false;
    this.isCharacterizationIIIHemorrhage = false;
    this.localizationInTheSpinalCanalType = LocalizationInTheSpinalCanalTypeEnum.None;

    // NoMassEffect
    this.isPosteriorRadix = false;
    this.isArachnoidDiverticula = false;
    this.differentialDiagnosis03 = SpinalCanalDifferentialDiagnosisTypeEnum.None;
  }
}
