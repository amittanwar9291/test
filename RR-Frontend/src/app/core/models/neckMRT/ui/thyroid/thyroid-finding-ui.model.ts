import { FindingBase } from '@models/shared/finding/finding.base';
import {
  DifferentialDiagnosisTypeEnum,
  ThyroidFindingTypeEnum,
  AbnormalitiesNormVariantsThyroidTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum,
  SideTypeEnum,
  TotalVolumeTypeEnum,
  RelationToThyroidGlandTypeEnum,
  LocalizationTypeEnum,
  ShapeTypeEnum,
  ComplicationsTypeEnum,
  TherapyTypeEnum,
  ThyroidectomyTypeEnum,
  GrowthTypeEnum,
  MeasurementTypeEnum
} from '@enums/neckMRT/thyroid/';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

export class ThyroidFindingUiModel extends FindingBase {
  findingType: ThyroidFindingTypeEnum;

  // Common
  sideType: SideTypeEnum;
  totalVolumeType: TotalVolumeTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  cmHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  differentialDiagnosisType1: DifferentialDiagnosisTypeEnum;
  differentialDiagnosisType2: DifferentialDiagnosisTypeEnum;
  sizeRightLobeInMm: number;
  sizeRightLobeSecondPlaneInMm: number;
  sizeRightLobeThirdPlaneInMm: number;
  sizeLeftLobeInMm: number;
  sizeLeftLobeSecondPlaneInMm: number;
  sizeLeftLobeThirdPlaneInMm: number;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  automaticCalculationInMl: number;
  measurementInMl: number;
  minInnerDiameterAxialInMm: number;
  sagittalInMm: number;
  coronal: number;
  isAbscess: boolean;
  isDiffusionRestriction: boolean;
  isCyst: boolean;
  isCalcifications: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isFibrosis: boolean;
  isHemorrhage: boolean;
  isDisplacement: boolean;
  isTrachealCompression: boolean;
  isVascularCompressionRight: boolean;
  isVascularCompressionLeft: boolean;
  isInfiltration: boolean;
  isCutis: boolean;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  isMoreThanOneLesionOfTheSameEntity: boolean;
  t1wSignalType: number;
  t2wSignalType: number;

  // AnomaliesNormalVariantsThyroidGland
  abnormalitiesNormVariantsThyroidType: AbnormalitiesNormVariantsThyroidTypeEnum;

  // Thyroidectomy
  thyroidectomyType: ThyroidectomyTypeEnum;
  isNoThyroidTissue: boolean;
  thyroidectomySideType: SideTypeEnum;
  therapyType: TherapyTypeEnum;
  complicationsType: ComplicationsTypeEnum;

  // ThyroidGoiterMassInflammation
  isRightLobe: boolean;
  isLeftLobe: boolean;
  isIsthmus: boolean;
  measurementType: MeasurementTypeEnum;
  growthType: GrowthTypeEnum;
  expansionInMm: number;
  isNecrosis: boolean;
  isNodusSolitary: boolean;
  isMultinodular: boolean;
  isTranscapsular: boolean;
  isTrachea: boolean;
  isVascularNerveSheathRight: boolean;
  isVascularNerveSheathLeft: boolean;
  isRecurrentLaryngealNerve: boolean;
  isEsophagus: boolean;
  isLarynx: boolean;
  isPrevertebralFascia: boolean;
  isUpperMediastinum: boolean;

  // ParathyroidGlandMass
  relationToThyroidGlandType: RelationToThyroidGlandTypeEnum;

  // SalivaryGlandsMassInflammation
  localizationType: LocalizationTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  shapeType: ShapeTypeEnum;
  isFat: boolean;
  isSolitary: boolean;
  isMultiple: boolean;
  isCalcification: boolean;
  isDystrophy: boolean;
  isNecroses: boolean;
  isSignalVoids: boolean;
  isFluidLevel: boolean;
  isSubcutaneous: boolean;
  isPerineuralInvasion: boolean;
  isTransspatialSpread: boolean;
  isParapharyngealSpace: boolean;
  isMastricatorSpace: boolean;
  isParotidSpace: boolean;
  isCarotidSpace: boolean;
  isPostCervicalSpace: boolean;
  isSublingualSpace: boolean;
  isSubmandibularSpace: boolean;
  isMusclesOfMastication: boolean;
  isBones: boolean;
  isMandible: boolean;
  isMaxilla: boolean;
  isAnteriorCranialFossa: boolean;
  isMiddleCranialFossa: boolean;
  isDuctalCompression: boolean;
  isDuctalStenosis: boolean;
  isConcrement: boolean;
  concrementInMm: number;
  isDilatedDuctus: boolean;
  dilatedDuctusInMm: number;
  isEdematousSwelling: boolean;
  isFattyDegeneration: boolean;
  isAtrophy: boolean;
  isIntraglandularLymphNode: boolean;
  isNecrotic: boolean;
  abscessInMm: number;
  isExtensionIntoCervicalFascialSpaces: boolean;
  isMyositis: boolean;
  isPhlegmon: boolean;

  // ImageFileUpload
  referencePicture: ReferencePictureUiModel;

  constructor() {
    super();
    this.findingType = ThyroidFindingTypeEnum.None;

    // Common
    this.sideType = SideTypeEnum.None;
    this.totalVolumeType = TotalVolumeTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.cmHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.differentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosisType2 = DifferentialDiagnosisTypeEnum.None;
    this.sizeRightLobeInMm = null;
    this.sizeRightLobeSecondPlaneInMm = null;
    this.sizeRightLobeThirdPlaneInMm = null;
    this.sizeLeftLobeInMm = null;
    this.sizeLeftLobeSecondPlaneInMm = null;
    this.sizeLeftLobeThirdPlaneInMm = null;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.automaticCalculationInMl = null;
    this.measurementInMl = null;
    this.minInnerDiameterAxialInMm = null;
    this.sagittalInMm = null;
    this.coronal = null;
    this.isAbscess = false;
    this.isDiffusionRestriction = false;
    this.isCyst = false;
    this.isCalcifications = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isFibrosis = false;
    this.isHemorrhage = false;
    this.isDisplacement = false;
    this.isTrachealCompression = false;
    this.isVascularCompressionRight = false;
    this.isVascularCompressionLeft = false;
    this.isInfiltration = false;
    this.isCutis = false;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.isMoreThanOneLesionOfTheSameEntity = false;
    this.t1wSignalType = null;
    this.t2wSignalType = null;

    // AnomaliesNormalVariantsThyroidGland
    this.abnormalitiesNormVariantsThyroidType = AbnormalitiesNormVariantsThyroidTypeEnum.None;

    // Thyroidectomy
    this.thyroidectomyType = ThyroidectomyTypeEnum.None;
    this.isNoThyroidTissue = false;
    this.thyroidectomySideType = SideTypeEnum.None;
    this.therapyType = TherapyTypeEnum.None;
    this.complicationsType = ComplicationsTypeEnum.None;

    // ThyroidGoiterMassInflammation
    this.isRightLobe = false;
    this.isLeftLobe = false;
    this.isIsthmus = false;
    this.measurementType = MeasurementTypeEnum.None;
    this.growthType = GrowthTypeEnum.None;
    this.expansionInMm = null;
    this.isNecrosis = false;
    this.isNodusSolitary = false;
    this.isMultinodular = false;
    this.isTranscapsular = false;
    this.isTrachea = false;
    this.isVascularNerveSheathRight = false;
    this.isVascularNerveSheathLeft = false;
    this.isRecurrentLaryngealNerve = false;
    this.isEsophagus = false;
    this.isLarynx = false;
    this.isPrevertebralFascia = false;
    this.isUpperMediastinum = false;

    // ParathyroidGlandMass
    this.relationToThyroidGlandType = RelationToThyroidGlandTypeEnum.None;

    // SalivaryGlandsMassInflammation

    this.localizationType = LocalizationTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.shapeType = ShapeTypeEnum.None;
    this.isFat = false;
    this.isSolitary = false;
    this.isMultiple = false;
    this.isCalcification = false;
    this.isDystrophy = false;
    this.isNecroses = false;
    this.isSignalVoids = false;
    this.isFluidLevel = false;
    this.isSubcutaneous = false;
    this.isPerineuralInvasion = false;
    this.isTransspatialSpread = false;
    this.isParapharyngealSpace = false;
    this.isMastricatorSpace = false;
    this.isParotidSpace = false;
    this.isCarotidSpace = false;
    this.isPostCervicalSpace = false;
    this.isSublingualSpace = false;
    this.isSubmandibularSpace = false;
    this.isMusclesOfMastication = false;
    this.isBones = false;
    this.isMandible = false;
    this.isMaxilla = false;
    this.isAnteriorCranialFossa = false;
    this.isMiddleCranialFossa = false;
    this.isDuctalCompression = false;
    this.isDuctalStenosis = false;
    this.isConcrement = false;
    this.concrementInMm = null;
    this.isDilatedDuctus = false;
    this.dilatedDuctusInMm = null;
    this.isEdematousSwelling = false;
    this.isFattyDegeneration = false;
    this.isAtrophy = false;
    this.isIntraglandularLymphNode = false;
    this.isNecrotic = false;
    this.abscessInMm = null;
    this.isExtensionIntoCervicalFascialSpaces = false;
    this.isMyositis = false;
    this.isPhlegmon = false;

    // ImageFileUpload
    this.referencePicture = new ReferencePictureUiModel();
  }
}
