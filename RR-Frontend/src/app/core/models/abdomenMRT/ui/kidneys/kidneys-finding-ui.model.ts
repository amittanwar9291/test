import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import {
  KidneysDifferentialDiagnosisTypeEnum,
  KidneysFindingTypeEnum,
  SideTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  MultipleGasInclusionsLocalizationTypeEnum,
  LocalizationTypeEnum,
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
import { KidneysFindingBaseUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-base-ui.model';

export class KidneysFindingUiModel extends KidneysFindingBaseUiModel {
  // Common

  sideType: SideTypeEnum;
  kidneysDifferentialDiagnosisType1: KidneysDifferentialDiagnosisTypeEnum;
  kidneysDifferentialDiagnosisType2: KidneysDifferentialDiagnosisTypeEnum;
  kidneysDifferentialDiagnosisType3: KidneysDifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  isRight: boolean;
  isLeft: boolean;
  craniocaudalDiameterInMm: number;
  diameterKidneySecondPlaneInMm: number;
  diameterKidneyThirdPlaneInMm: number;
  renalCortexT1wSignal: number;
  renalCortexT2wSignal: number;
  isRenalCortexFocal: boolean;
  kidneyMarrowT1wSignal: number;
  kidneyMarrowT2wSignal: number;
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

  massChar2ExtensionSizeInMm: number;
  massChar2SecondPlaneInMm: number;
  massChar2ThirdPlaneInMm: number;

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
  renalInfarctionT1wSignal: number;
  renalInfarctionT2wSignal: number;
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
  normVariantOrAnomalyReferencePicture: ReferencePictureUiModel;
  obstructiveNephropathyChar1ReferencePicture: ReferencePictureUiModel;
  obstructiveNephropathyChar2ReferencePicture: ReferencePictureUiModel;
  massReferencePicture: ReferencePictureUiModel;
  decreasedRenalVolumeReferencePicture: ReferencePictureUiModel;
  increasedRenalVolumeReferencePicture: ReferencePictureUiModel;
  vascularNephropathyReferencePicture: ReferencePictureUiModel;

  constructor() {
    super();
    this.findingType = KidneysFindingTypeEnum.None;

    // Common

    this.sideType = SideTypeEnum.None;
    this.kidneysDifferentialDiagnosisType = KidneysDifferentialDiagnosisTypeEnum.None;
    this.kidneysDifferentialDiagnosisType1 = KidneysDifferentialDiagnosisTypeEnum.None;
    this.kidneysDifferentialDiagnosisType2 = KidneysDifferentialDiagnosisTypeEnum.None;
    this.kidneysDifferentialDiagnosisType3 = KidneysDifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.isRight = false;
    this.isLeft = false;
    this.craniocaudalDiameterInMm = null;
    this.diameterKidneySecondPlaneInMm = null;
    this.diameterKidneyThirdPlaneInMm = null;
    this.renalCortexT1wSignal = 0;
    this.renalCortexT2wSignal = 0;
    this.isRenalCortexFocal = false;
    this.kidneyMarrowT1wSignal = 0;
    this.kidneyMarrowT2wSignal = 0;
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

    this.massChar2ExtensionSizeInMm = null;
    this.massChar2SecondPlaneInMm = null;
    this.massChar2ThirdPlaneInMm = null;

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
    this.renalInfarctionT1wSignal = 0;
    this.renalInfarctionT2wSignal = 0;
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
    this.normVariantOrAnomalyReferencePicture = new ReferencePictureUiModel();
    this.obstructiveNephropathyChar1ReferencePicture = new ReferencePictureUiModel();
    this.obstructiveNephropathyChar2ReferencePicture = new ReferencePictureUiModel();
    this.massReferencePicture = new ReferencePictureUiModel();
    this.decreasedRenalVolumeReferencePicture = new ReferencePictureUiModel();
    this.increasedRenalVolumeReferencePicture = new ReferencePictureUiModel();
    this.vascularNephropathyReferencePicture = new ReferencePictureUiModel();
  }
}
