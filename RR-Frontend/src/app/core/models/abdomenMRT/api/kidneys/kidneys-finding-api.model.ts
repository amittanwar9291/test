import { FileApiModel } from '@models/shared/uploader/file-api.model';
import {
  KidneysDifferentialDiagnosisTypeEnum,
  SideTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  MultipleGasInclusionsLocalizationTypeEnum,
  BosniakClassificationTypeEnum,
  CalcificationTypeEnum,
  ExtensionTypeEnum,
  FatTypeEnum,
  FormTypeEnum,
  HistologyKnownTypeEnum,
  LocalizationTypeEnum,
  ModalityTypeEnum,
  FusionAnomaliesKidneyTypeEnum,
  NormVariantOrAnomalyTypeEnum,
  PolarArteryTypeEnum,
  RenalArteryTypeEnum,
  RenalVeinsTypeEnum,
  UreterTypeEnum,
  AssociatedCausalFindingsTypeEnum,
  EnlargedUterusDetailsTypeEnum,
  SeverityTypeEnum,
  UrolithiasisDetailsUreterTypeEnum,
  PathologyTypeEnum,
  RenalInfarctionCharacterizationTypeEnum
} from '@enums/abdomenMRT/kidneys/';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { KidneysFindingBaseApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-finding-base-api.model';

export class KidneysFindingApiModel extends KidneysFindingBaseApiModel {
  // Common

  sideType: SideTypeEnum;
  kidneysDifferentialDiagnosisType1: KidneysDifferentialDiagnosisTypeEnum;
  kidneysDifferentialDiagnosisType2: KidneysDifferentialDiagnosisTypeEnum;
  kidneysDifferentialDiagnosisType3: KidneysDifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  isRight: boolean;
  isLeft: boolean;
  isMoreThanOneLesionSameEntity: boolean;
  craniocaudalDiameterInMm: number;
  diameterKidneySecondPlaneInMm: number;
  diameterKidneyThirdPlaneInMm: number;
  renalCortexT1wSignal: string;
  renalCortexT2wSignal: string;
  isRenalCortexFocal: boolean;
  kidneyMarrowT1wSignal: string;
  kidneyMarrowT2wSignal: string;
  isKidneyMarrowFocal: boolean;
  isStreakyInflammatoryInfiltrationPerirenalAdiposeTissue: boolean;
  isThickeningGerotaFascia: boolean;
  isMultipleGasInclusions: boolean;
  contrastEnhancementRenalParenchymaQuantitative: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementQuantitativeStrongType: HomogeneityTypeEnum;

  // NormVariantOrAnomaly

  normVariantOrAnomalyType: NormVariantOrAnomalyTypeEnum;
  isAgenesis: boolean;
  isAplasia: boolean;
  isEnlargementOfTheContralateralKidney: boolean;
  isHypoplasia: boolean;
  isLobarDysmorphia: boolean;
  isDDMass: boolean;
  isDuplexCollectingSystem: boolean;
  isDoubleKidney: boolean;
  isRenalEctopy: boolean;
  isFloatingKidney: boolean;
  isFusionAnomalies: boolean;
  fusionAnomaliesKidneyType: FusionAnomaliesKidneyTypeEnum;
  isNonrotation: boolean;
  isPersistentFetalLobulation: boolean;
  renalArteryType: RenalArteryTypeEnum;
  polarArteryType: PolarArteryTypeEnum;
  renalVeinsType: RenalVeinsTypeEnum;
  isBifurcatedLeftRenalVeinAnteriorAndPosteriorAorta: boolean;
  ureterType: UreterTypeEnum;

  // ObstructiveNephropathy

  severityType: SeverityTypeEnum;
  isDilatationOfTheRenalPelvisAndTheRenalCalices: boolean;
  maxDilatationInMm: number;
  maxDilatationParenchymaInMm: number;
  isRenalPelvisDilatation: boolean;
  isReducedRenalParenchymaThickness: boolean;
  isLossOfParenchymaHydronephrosis: boolean;
  isSideDifferenceContrastEnhancement: boolean;
  isLossCorticomedullaryDifferentiation: boolean;
  isSwollenKidney: boolean;
  isIndurationPerirenal: boolean;
  isPerirenalFluid: boolean;
  isDilatationUreter: boolean;
  dilatationInMm: number;
  isContrastEnhancementUreteralWall: boolean;
  associatedCausalFindingsType: AssociatedCausalFindingsTypeEnum;
  isRenalCalice: boolean;
  isRenalPelvis: boolean;
  isUreter: boolean;
  urolithiasisDetailsUreterType: UrolithiasisDetailsUreterTypeEnum;
  isUrinaryBladder: boolean;
  isOstiumRight: boolean;
  isOstiumLeft: boolean;
  isUrethra: boolean;
  maxDiameterConcrementInMm: number;
  isPhlebolite: boolean;
  isReferenceImageConcretion: boolean;
  enlargedUterusDetailsType: EnlargedUterusDetailsTypeEnum;
  isFornixRupture: boolean;
  isPyelonephritis: boolean;
  isAmpullaryTypeOfRenalPelvis: boolean;
  isRenalSinusCyst: boolean;
  isPapillaryCalcifications: boolean;

  // Mass

  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  massSideType: SideTypeEnum;
  isCompletelyIntrarenal: boolean;
  localizationType: LocalizationTypeEnum;
  bosniakClassificationType1: BosniakClassificationTypeEnum;
  bosniakClassificationType2: BosniakClassificationTypeEnum;
  bosniakClassificationType3: BosniakClassificationTypeEnum;
  isLocalization: boolean;
  massSideMoreThanOneLesionType: SideTypeEnum;
  isUpperPoleKidney: boolean;
  isCranialThird: boolean;
  isMiddleThird: boolean;
  isLowerThird: boolean;
  isLowerPoleKidney: boolean;
  isRenalHilus: boolean;
  isDetailsCompletelyIntrarenal: boolean;
  massChar2ExtensionSizeInMm: number;
  massChar2SecondPlaneInMm: number;
  massChar2ThirdPlaneInMm: number;
  formType: FormTypeEnum;
  isFat: boolean;
  fatType: FatTypeEnum;
  isCysts: boolean;
  isCalcification: boolean;
  calcificationType: CalcificationTypeEnum;
  isSepta: boolean;
  isNodularThickening: boolean;
  isDelicate: boolean;
  isSeptaCalcification: boolean;
  isNecrosis: boolean;
  isCentralScar: boolean;
  isHemosiderin: boolean;
  isExophytic: boolean;
  isAngularInterfaceSign: boolean;
  isFungalConfiguration: boolean;
  isPlaqueLikeGrowthRenalPelvis: boolean;
  isObstructionAndHydronephrosis: boolean;
  isCommunicationWithRenalPelvis: boolean;
  isBeanShaped: boolean;
  isInfiltration: boolean;
  isInfiltrationRenalPelvis: boolean;
  isInfiltrationPerirenalSpace: boolean;
  isInfiltrationMusculature: boolean;
  isInfiltrationAbdominalWall: boolean;
  isInfiltrationAdrenalGlands: boolean;
  isInfiltrationLiver: boolean;
  isInfiltrationSpleen: boolean;
  isInfiltrationIntestine: boolean;
  isInfiltrationBones: boolean;
  excretoryPhase: string;
  isSpokeWheelEnhancementPattern: boolean;
  isDiffusionRestriction: boolean;
  isCapsule: boolean;
  isAssociatedFindingsNodularThickening: boolean;
  isAssociatedFindingsCalcification: boolean;
  isPseudoCapsularExtension: boolean;
  isInfiltrationPerirenalAdiposeTissue: boolean;
  isHemorrhage: boolean;
  isLocoregionalLN: boolean;
  sadInMm: number;
  isVascularInfiltration: boolean;
  vascularInfiltrationType: NormVariantOrAnomalyTypeEnum;
  extensionType: ExtensionTypeEnum;
  isCompleteOcclusion: boolean;
  isIntramuralInfiltration: boolean;
  isRetroperitonealCollateralVessels: boolean;
  isFluidAroundCyst: boolean;
  dD1FollowUpMonths: number;
  dD1ModalityType: ModalityTypeEnum;
  dD2FollowUpMonths: number;
  dD2ModalityType: ModalityTypeEnum;
  dD3FollowUpMonths: number;
  dD3ModalityType: ModalityTypeEnum;

  // DecreasedRenalVolume

  isIrregularNarrowingRenalParenchyma: boolean;
  isDeformationCalices: boolean;
  isMultipleScars: boolean;
  isReductionCortexAndMedulla: boolean;

  // IncreasedRenalVolume

  multipleGasInclusionsLocalizationType: MultipleGasInclusionsLocalizationTypeEnum;

  // VascularNephropathy

  pathologyType: PathologyTypeEnum;
  renalInfarctionLocalizationType: LocalizationTypeEnum;
  renalInfarctionExtensionSizeInMm: number;
  renalInfarctionSecondPlaneInMm: number;
  renalInfarctionThirdPlaneInMm: number;
  renalInfarctionT1wSignal: string;
  renalInfarctionT2wSignal: string;
  isWedgeShapedDefect: boolean;
  isMissingCMEnhancement: boolean;
  isCorticalRimSign: boolean;
  isFibroticChangesOrScarTissue: boolean;
  isDeformationsBarkContour: boolean;
  isShrinkageInfarctedTissue: boolean;
  isDissectionRenalArtery: boolean;
  isStenosisOrOcclusionRenalArtery: boolean;
  renalInfarctionCharacterizationType: RenalInfarctionCharacterizationTypeEnum;
  isOnyMedullaryContrastEnhancement: boolean;
  isNarrowContrastedRimAroundCortex: boolean;
  isCorticalCalcifications: boolean;
  isAtrophy: boolean;
  isCompleteRenalCorticalNecrosis: boolean;
  dilatationOfTheRenalVeinInMm: number;
  isFillingDefectAfterContrastAdministration: boolean;
  isNodularThrombusEnhancement: boolean;
  isDiffusionRestrictionInTheThrombus: boolean;
  isAlteredRenalPerfusion: boolean;
  isTumorThrombosis: boolean;

  // REFERENCE PICTURE
  normVariantOrAnomalySerialNumber: string; // uni_07_003
  normVariantOrAnomalyPictureNumber: string; // uni_07_005
  normVariantOrAnomalyImageFileId: string;
  normVariantOrAnomalyImageFile: FileApiModel; // uni_07_007

  obstructiveNephropathyChar1SerialNumber: string; // uni_07_003_01
  obstructiveNephropathyChar1PictureNumber: string; // uni_07_005_01
  obstructiveNephropathyChar1ImageFileId: string;
  obstructiveNephropathyChar1ImageFile: FileApiModel; // uni_07_007_01

  obstructiveNephropathyChar2SerialNumber: string; // uni_07_003_02
  obstructiveNephropathyChar2PictureNumber: string; // uni_07_005_02
  obstructiveNephropathyChar2ImageFileId: string;
  obstructiveNephropathyChar2ImageFile: FileApiModel; // uni_07_007_02

  massSerialNumber: string; // uni_07_003
  massPictureNumber: string; // uni_07_005
  massImageFileId: string;
  massImageFile: FileApiModel; // uni_07_007

  decreasedRenalVolumeSerialNumber: string; // uni_07_003
  decreasedRenalVolumePictureNumber: string; // uni_07_005
  decreasedRenalVolumeImageFileId: string;
  decreasedRenalVolumeImageFile: FileApiModel; // uni_07_007

  increasedRenalVolumeSerialNumber: string; // uni_07_003
  increasedRenalVolumePictureNumber: string; // uni_07_005
  increasedRenalVolumeImageFileId: string;
  increasedRenalVolumeImageFile: FileApiModel; // uni_07_007

  vascularNephropathySerialNumber: string; // uni_07_003
  vascularNephropathyPictureNumber: string; // uni_07_005
  vascularNephropathyImageFileId: string;
  vascularNephropathyImageFile: FileApiModel; // uni_07_007

  constructor() {
    super();

    // Common

    this.sideType = SideTypeEnum.None;
    this.kidneysDifferentialDiagnosisType1 = KidneysDifferentialDiagnosisTypeEnum.None;
    this.kidneysDifferentialDiagnosisType2 = KidneysDifferentialDiagnosisTypeEnum.None;
    this.kidneysDifferentialDiagnosisType3 = KidneysDifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.isRight = false;
    this.isLeft = false;
    this.isMoreThanOneLesionSameEntity = false;
    this.craniocaudalDiameterInMm = null;
    this.diameterKidneySecondPlaneInMm = null;
    this.diameterKidneyThirdPlaneInMm = null;
    this.renalCortexT1wSignal = 'None';
    this.renalCortexT2wSignal = 'None';
    this.isRenalCortexFocal = false;
    this.kidneyMarrowT1wSignal = 'None';
    this.kidneyMarrowT2wSignal = 'None';
    this.isKidneyMarrowFocal = false;
    this.isStreakyInflammatoryInfiltrationPerirenalAdiposeTissue = false;
    this.isThickeningGerotaFascia = false;
    this.isMultipleGasInclusions = false;
    this.contrastEnhancementRenalParenchymaQuantitative = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementQuantitativeStrongType = HomogeneityTypeEnum.None;

    // NormVariantOrAnomaly

    this.normVariantOrAnomalyType = NormVariantOrAnomalyTypeEnum.None;
    this.isAgenesis = false;
    this.isAplasia = false;
    this.isEnlargementOfTheContralateralKidney = false;
    this.isHypoplasia = false;
    this.isLobarDysmorphia = false;
    this.isDDMass = false;
    this.isDuplexCollectingSystem = false;
    this.isDoubleKidney = false;
    this.isRenalEctopy = false;
    this.isFloatingKidney = false;
    this.isFusionAnomalies = false;
    this.fusionAnomaliesKidneyType = FusionAnomaliesKidneyTypeEnum.None;
    this.isNonrotation = false;
    this.isPersistentFetalLobulation = false;
    this.renalArteryType = RenalArteryTypeEnum.None;
    this.polarArteryType = PolarArteryTypeEnum.None;
    this.renalVeinsType = RenalVeinsTypeEnum.None;
    this.isBifurcatedLeftRenalVeinAnteriorAndPosteriorAorta = false;
    this.ureterType = UreterTypeEnum.None;

    // ObstructiveNephropathy

    this.severityType = SeverityTypeEnum.None;
    this.isDilatationOfTheRenalPelvisAndTheRenalCalices = false;
    this.maxDilatationInMm = null;
    this.maxDilatationParenchymaInMm = null;
    this.isRenalPelvisDilatation = false;
    this.isReducedRenalParenchymaThickness = false;
    this.isLossOfParenchymaHydronephrosis = false;
    this.isSideDifferenceContrastEnhancement = false;
    this.isLossCorticomedullaryDifferentiation = false;
    this.isSwollenKidney = false;
    this.isIndurationPerirenal = false;
    this.isPerirenalFluid = false;
    this.isDilatationUreter = false;
    this.dilatationInMm = null;
    this.isContrastEnhancementUreteralWall = false;
    this.associatedCausalFindingsType = AssociatedCausalFindingsTypeEnum.None;
    this.isRenalCalice = false;
    this.isRenalPelvis = false;
    this.isUreter = false;
    this.urolithiasisDetailsUreterType = UrolithiasisDetailsUreterTypeEnum.None;
    this.isUrinaryBladder = false;
    this.isOstiumRight = false;
    this.isOstiumLeft = false;
    this.isUrethra = false;
    this.maxDiameterConcrementInMm = null;
    this.isPhlebolite = false;
    this.isReferenceImageConcretion = false;
    this.enlargedUterusDetailsType = EnlargedUterusDetailsTypeEnum.None;
    this.isFornixRupture = false;
    this.isPyelonephritis = false;
    this.isAmpullaryTypeOfRenalPelvis = false;
    this.isRenalSinusCyst = false;
    this.isPapillaryCalcifications = false;

    // Mass

    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.massSideType = SideTypeEnum.None;
    this.isCompletelyIntrarenal = false;
    this.localizationType = LocalizationTypeEnum.None;
    this.bosniakClassificationType1 = BosniakClassificationTypeEnum.None;
    this.bosniakClassificationType2 = BosniakClassificationTypeEnum.None;
    this.bosniakClassificationType3 = BosniakClassificationTypeEnum.None;
    this.isLocalization = false;
    this.massSideMoreThanOneLesionType = SideTypeEnum.None;
    this.isUpperPoleKidney = false;
    this.isCranialThird = false;
    this.isMiddleThird = false;
    this.isLowerThird = false;
    this.isLowerPoleKidney = false;
    this.isRenalHilus = false;
    this.isDetailsCompletelyIntrarenal = false;
    this.massChar2ExtensionSizeInMm = null;
    this.massChar2SecondPlaneInMm = null;
    this.massChar2ThirdPlaneInMm = null;
    this.formType = FormTypeEnum.None;
    this.isFat = false;
    this.fatType = FatTypeEnum.None;
    this.isCysts = false;
    this.isCalcification = false;
    this.calcificationType = CalcificationTypeEnum.None;
    this.isSepta = false;
    this.isNodularThickening = false;
    this.isDelicate = false;
    this.isSeptaCalcification = false;
    this.isNecrosis = false;
    this.isCentralScar = false;
    this.isHemosiderin = false;
    this.isExophytic = false;
    this.isAngularInterfaceSign = false;
    this.isFungalConfiguration = false;
    this.isPlaqueLikeGrowthRenalPelvis = false;
    this.isObstructionAndHydronephrosis = false;
    this.isCommunicationWithRenalPelvis = false;
    this.isBeanShaped = false;
    this.isInfiltration = false;
    this.isInfiltrationRenalPelvis = false;
    this.isInfiltrationPerirenalSpace = false;
    this.isInfiltrationMusculature = false;
    this.isInfiltrationAbdominalWall = false;
    this.isInfiltrationAdrenalGlands = false;
    this.isInfiltrationLiver = false;
    this.isInfiltrationSpleen = false;
    this.isInfiltrationIntestine = false;
    this.isInfiltrationBones = false;
    this.excretoryPhase = 'None';
    this.isSpokeWheelEnhancementPattern = false;
    this.isDiffusionRestriction = false;
    this.isCapsule = false;
    this.isAssociatedFindingsNodularThickening = false;
    this.isAssociatedFindingsCalcification = false;
    this.isPseudoCapsularExtension = false;
    this.isInfiltrationPerirenalAdiposeTissue = false;
    this.isHemorrhage = false;
    this.isLocoregionalLN = false;
    this.sadInMm = null;
    this.isVascularInfiltration = false;
    this.vascularInfiltrationType = NormVariantOrAnomalyTypeEnum.None;
    this.extensionType = ExtensionTypeEnum.None;
    this.isCompleteOcclusion = false;
    this.isIntramuralInfiltration = false;
    this.isRetroperitonealCollateralVessels = false;
    this.isFluidAroundCyst = false;
    this.dD1FollowUpMonths = null;
    this.dD1ModalityType = ModalityTypeEnum.None;
    this.dD2FollowUpMonths = null;
    this.dD2ModalityType = ModalityTypeEnum.None;
    this.dD3FollowUpMonths = null;
    this.dD3ModalityType = ModalityTypeEnum.None;

    // DecreasedRenalVolume

    this.isIrregularNarrowingRenalParenchyma = false;
    this.isDeformationCalices = false;
    this.isMultipleScars = false;
    this.isReductionCortexAndMedulla = false;

    // IncreasedRenalVolume

    this.multipleGasInclusionsLocalizationType = MultipleGasInclusionsLocalizationTypeEnum.None;

    // VascularNephropathy

    this.pathologyType = PathologyTypeEnum.None;
    this.renalInfarctionLocalizationType = LocalizationTypeEnum.None;
    this.renalInfarctionExtensionSizeInMm = null;
    this.renalInfarctionSecondPlaneInMm = null;
    this.renalInfarctionThirdPlaneInMm = null;
    this.renalInfarctionT1wSignal = 'None';
    this.renalInfarctionT2wSignal = 'None';
    this.isWedgeShapedDefect = false;
    this.isMissingCMEnhancement = false;
    this.isCorticalRimSign = false;
    this.isFibroticChangesOrScarTissue = false;
    this.isDeformationsBarkContour = false;
    this.isShrinkageInfarctedTissue = false;
    this.isDissectionRenalArtery = false;
    this.isStenosisOrOcclusionRenalArtery = false;
    this.renalInfarctionCharacterizationType = RenalInfarctionCharacterizationTypeEnum.None;
    this.isOnyMedullaryContrastEnhancement = false;
    this.isNarrowContrastedRimAroundCortex = false;
    this.isCorticalCalcifications = false;
    this.isAtrophy = false;
    this.isCompleteRenalCorticalNecrosis = false;
    this.dilatationOfTheRenalVeinInMm = null;
    this.isFillingDefectAfterContrastAdministration = false;
    this.isNodularThrombusEnhancement = false;
    this.isDiffusionRestrictionInTheThrombus = false;
    this.isAlteredRenalPerfusion = false;
    this.isTumorThrombosis = false;

    // REFERENCE PICTURE
    this.normVariantOrAnomalySerialNumber = '';
    this.normVariantOrAnomalyPictureNumber = '';
    this.normVariantOrAnomalyImageFileId = '';
    this.normVariantOrAnomalyImageFile = null;

    this.obstructiveNephropathyChar1SerialNumber = '';
    this.obstructiveNephropathyChar1PictureNumber = '';
    this.obstructiveNephropathyChar1ImageFileId = '';
    this.obstructiveNephropathyChar1ImageFile = null;

    this.obstructiveNephropathyChar2SerialNumber = '';
    this.obstructiveNephropathyChar2PictureNumber = '';
    this.obstructiveNephropathyChar2ImageFileId = '';
    this.obstructiveNephropathyChar2ImageFile = null;

    this.massSerialNumber = '';
    this.massPictureNumber = '';
    this.massImageFileId = '';
    this.massImageFile = null;

    this.decreasedRenalVolumeSerialNumber = '';
    this.decreasedRenalVolumePictureNumber = '';
    this.decreasedRenalVolumeImageFileId = '';
    this.decreasedRenalVolumeImageFile = null;

    this.increasedRenalVolumeSerialNumber = '';
    this.increasedRenalVolumePictureNumber = '';
    this.increasedRenalVolumeImageFileId = '';
    this.increasedRenalVolumeImageFile = null;

    this.vascularNephropathySerialNumber = '';
    this.vascularNephropathyPictureNumber = '';
    this.vascularNephropathyImageFileId = '';
    this.vascularNephropathyImageFile = null;
  }
}
