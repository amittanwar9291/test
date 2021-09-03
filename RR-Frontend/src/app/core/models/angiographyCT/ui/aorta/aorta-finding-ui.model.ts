import { AcuteAortalSyndromeAasTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/acute-aortal-syndrome-aas-type.enum';
import { BeginningTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/beginning-type.enum';
import { DebakeyTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/debakey-type.enum';
import { DensityTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/density-type.enum';
import { LocalizationOfTheMeasurementTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/localization-of-the-measurement-type.enum';
import { PericardialPleuralEffusionTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/pericardial-pleural-effusion-type.enum';
import { StanfordTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/stanford-type.enum';
import { SvenssonTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/svensson-type.enum';
import { AortaCharacterizationTypeEnum } from '@enums/angiographyCT/aorta/aorta-characterization-type.enum';
import { AortaFindingTypeEnum } from '@enums/angiographyCT/aorta/aorta-finding-type.enum';
import { AnomaliesTypeEnum } from '@enums/angiographyCT/aorta/aortic-abnormalities/anomalies-type.enum';
import { DetailsAorticArchKinkingPseudocoarctationTypeEnum } from '@enums/angiographyCT/aorta/aortic-abnormalities/details-aorti-arch-kinking-pseudocoarctation-type.enum';
import { DetailsCongenitalVascularRingsTypeEnum } from '@enums/angiographyCT/aorta/aortic-abnormalities/details-congenital-vascular-rings-type.enum';
import { AortitisDifferentialDiagnosisTypeEnum } from '@enums/angiographyCT/aorta/aortitis/aortitis-differential-diagnosis-type.enum';
import { QuantificationAortitisTypeEnum } from '@enums/angiographyCT/aorta/aortitis/quantification-aortitis-type.enum';
import { DilatationDifferentialDiagnosisTypeEnum } from '@enums/angiographyCT/aorta/dilatation-aorta/dilatation-differential-diagnosis-type.enum';
import { FollowUpTypeEnum } from '@enums/angiographyCT/aorta/dilatation-aorta/follow-up-type.enum';
import { EndoleakClassificationTypeEnum } from '@enums/angiographyCT/aorta/endoleak/endoleak-classification-type.enum';
import { FormTypeEnum } from '@enums/angiographyCT/aorta/form-type.enum';
import { PathologyTypeEnum } from '@enums/angiographyCT/aorta/pathology-type.enum';
import { ShapeTypeEnum } from '@enums/angiographyCT/aorta/shape-type.enum';
import { TypeTypeEnum } from '@enums/angiographyCT/aorta/type-type.enum';
import { SeverityTypeEnum } from '@enums/angiographyCT/severity-type.enum';
import { AorticArch } from '@models/angiographyMRT/ui/localizers/aortic-arch.model';
import { FindingBase } from '@models/shared/finding/finding.base';

export class AortaFindingUiModel extends FindingBase {
  findingType: AortaFindingTypeEnum;
  characterizationType: AortaCharacterizationTypeEnum;
  shapeType: ShapeTypeEnum;
  formType: FormTypeEnum;
  typeType: TypeTypeEnum;
  aortaLocations1: AorticArch;
  aortaLocations2: AorticArch;
  isWallCalcifications: boolean;
  isSuspicionOf: boolean;
  isHemodynamicallyRelevant: boolean;
  isShortLengthStenosis: boolean;
  isThrombus: boolean;
  isFreeFloating: boolean;
  isWallAdherent: boolean;
  isIrregularContour: boolean;
  isInferiorMesentericArteryIma: boolean;
  isAcuteExtravascularHematoma: boolean;
  isWallThickening: boolean;
  maxAxialDiameterInMm: number;
  maxDiameterInMm: number;
  diameterNormalPoststenoticSegmentInMm: number;
  degreeOfStenosisNASCETInPercent: number;
  craniodualLengthInMm: number;
  proximalNeckLengthInMm: number;
  proximalAneurysmaticNeckDiameterInMm: number;
  maxDiameterPreviousExaminationInMm: number;
  lengthInMm: number;
  wallThicknessInMm: number;
  pathologyType = PathologyTypeEnum.None;

  // AorticAbnormalities
  anomaliesType: AnomaliesTypeEnum;
  isHypoplasticAorticArch: boolean;
  isPoststenoticDilatation: boolean;
  isResidualStenosisAfterSurgery: boolean;
  detailsAorticArchKinkingPseudocoarctationType: DetailsAorticArchKinkingPseudocoarctationTypeEnum;
  detailsCongenitalVascularRingsType: DetailsCongenitalVascularRingsTypeEnum;
  isLusoriaKommerellDiverticulum: boolean;
  isSubclavianArteryKommerellDiverticulum: boolean;

  // DilatationAorta
  isEccentricPartialThrombus: boolean;
  followUpType: FollowUpTypeEnum;
  dilatationDifferentialDiagnosisType: DilatationDifferentialDiagnosisTypeEnum;

  // /ArterioscleroticChanges
  isStenosis: boolean;
  isLongIntermittent: boolean;
  sizeInAxialPlaneInMm: number;
  isPorcelainAorta: boolean;

  // AcuteAortalSyndromeAas
  acuteAortalSyndromeAasType: AcuteAortalSyndromeAasTypeEnum;
  maxDiameterAortaInMm: number;
  localizationOfTheMeasurementType: LocalizationOfTheMeasurementTypeEnum;
  craniocaudalLengthInMm: number;
  isThrombosisFalseLumen: boolean;
  isPericardialEffusion: boolean;
  pericardialEffusionType: PericardialPleuralEffusionTypeEnum;
  isPleuralEffusion: boolean;
  pleuralEffusionType: PericardialPleuralEffusionTypeEnum;
  isRightCoronaryArtery: boolean;
  isLeftCoronaryArtery: boolean;
  isBrachiocephalicTrunk: boolean;
  isRightSubclavianArtery: boolean;
  isRightCommonCarotidArtery: boolean;
  isLeftCommonCarotidArtery: boolean;
  isLeftSubclavianArtery: boolean;
  isCoeliacTrunk: boolean;
  isSuperiorMesentericArterySma: boolean;
  isRightRenalArtery: boolean;
  isLeftRenalArtery: boolean;
  stanfordType: StanfordTypeEnum;
  debakeyType: DebakeyTypeEnum;
  svenssonType: SvenssonTypeEnum;
  beginningType: BeginningTypeEnum;
  isEccentric: boolean;
  densityType: DensityTypeEnum;
  isRupture: boolean;
  isCmExtravasation: boolean;
  isAortitis: boolean;
  depthInMm: number;
  isMushroomShaped: boolean;
  isIntramuralAorticHematoma: boolean;

  // Endoleak
  endoleakClassificationType: EndoleakClassificationTypeEnum;
  isAProximal: boolean;
  isBDistal: boolean;
  isLumbarArteries: boolean;

  // PreoperativeMeasurements
  secondPlaneInMm: number;
  distanceCoronaryOstiaValvePlaneInMm: number;

  // Aortitis
  isConcentric: boolean;
  aortitisWallThicknessInMm: number;
  isContrastEnhancementOfTheArterialWall: boolean;
  isPeriaorticEdema: boolean;
  isPeriaortitis: boolean;
  quantificationAortitisType: QuantificationAortitisTypeEnum;
  aortitisMaxWidthInMm: number;
  isStenosisOcclusion: boolean;
  severityType: SeverityTypeEnum;
  aortitisDiameterStenosisInMm: number;
  aortitisDiameterNormalPoststenoticSegmentInMm: number;
  aortitisNASCETInPercent: number;
  aortitisLengthInMm: number;
  isVascularDilatation: boolean;
  aortitisMaxAxialDiameterInMm: number;
  aortitisVascularLengthInMm: number;
  isMycoticAneurysm: boolean;
  isUlcer: boolean;
  isEctasiaAnnulusAortaeAndAscendingAorta: boolean;
  aortitisDifferentialDiagnosisType: AortitisDifferentialDiagnosisTypeEnum;

  constructor() {
    super();
    this.findingType = AortaFindingTypeEnum.None;
    this.characterizationType = AortaCharacterizationTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.typeType = TypeTypeEnum.None;
    this.aortaLocations1 = new AorticArch();
    this.aortaLocations2 = new AorticArch();
    this.isWallCalcifications = false;
    this.isSuspicionOf = false;
    this.isHemodynamicallyRelevant = false;
    this.isShortLengthStenosis = false;
    this.isThrombus = false;
    this.isFreeFloating = false;
    this.isWallAdherent = false;
    this.isIrregularContour = false;
    this.isInferiorMesentericArteryIma = false;
    this.isAcuteExtravascularHematoma = false;
    this.isWallThickening = false;
    this.maxAxialDiameterInMm = null;
    this.maxDiameterInMm = null;
    this.diameterNormalPoststenoticSegmentInMm = null;
    this.degreeOfStenosisNASCETInPercent = null;
    this.craniodualLengthInMm = null;
    this.proximalNeckLengthInMm = null;
    this.proximalAneurysmaticNeckDiameterInMm = null;
    this.maxDiameterPreviousExaminationInMm = null;
    this.lengthInMm = null;
    this.wallThicknessInMm = null;
    this.pathologyType = PathologyTypeEnum.None;

    // AorticAbnormalities
    this.anomaliesType = AnomaliesTypeEnum.None;
    this.isHypoplasticAorticArch = false;
    this.isPoststenoticDilatation = false;
    this.isResidualStenosisAfterSurgery = false;
    this.detailsAorticArchKinkingPseudocoarctationType = DetailsAorticArchKinkingPseudocoarctationTypeEnum.None;
    this.detailsCongenitalVascularRingsType = DetailsCongenitalVascularRingsTypeEnum.None;
    this.isLusoriaKommerellDiverticulum = false;
    this.isSubclavianArteryKommerellDiverticulum = false;

    // DilatationAorta
    this.isEccentricPartialThrombus = false;
    this.followUpType = FollowUpTypeEnum.None;
    this.dilatationDifferentialDiagnosisType = DilatationDifferentialDiagnosisTypeEnum.None;

    // /ArterioscleroticChanges
    this.isStenosis = false;
    this.isLongIntermittent = false;
    this.sizeInAxialPlaneInMm = null;
    this.isPorcelainAorta = false;

    // AcuteAortalSyndromeAas
    this.acuteAortalSyndromeAasType = AcuteAortalSyndromeAasTypeEnum.None;
    this.maxDiameterAortaInMm = null;
    this.localizationOfTheMeasurementType = LocalizationOfTheMeasurementTypeEnum.None;
    this.craniocaudalLengthInMm = null;
    this.isThrombosisFalseLumen = false;
    this.isPericardialEffusion = false;
    this.pericardialEffusionType = PericardialPleuralEffusionTypeEnum.None;
    this.isPleuralEffusion = false;
    this.pleuralEffusionType = PericardialPleuralEffusionTypeEnum.None;
    this.isRightCoronaryArtery = false;
    this.isLeftCoronaryArtery = false;
    this.isBrachiocephalicTrunk = false;
    this.isRightSubclavianArtery = false;
    this.isRightCommonCarotidArtery = false;
    this.isLeftCommonCarotidArtery = false;
    this.isLeftSubclavianArtery = false;
    this.isCoeliacTrunk = false;
    this.isSuperiorMesentericArterySma = false;
    this.isRightRenalArtery = false;
    this.isLeftRenalArtery = false;
    this.stanfordType = StanfordTypeEnum.None;
    this.debakeyType = DebakeyTypeEnum.None;
    this.svenssonType = SvenssonTypeEnum.None;
    this.beginningType = BeginningTypeEnum.None;
    this.isEccentric = false;
    this.densityType = DensityTypeEnum.None;
    this.isRupture = false;
    this.isCmExtravasation = false;
    this.isAortitis = false;
    this.depthInMm = null;
    this.isMushroomShaped = false;
    this.isIntramuralAorticHematoma = false;

    // Endoleak
    this.endoleakClassificationType = EndoleakClassificationTypeEnum.None;
    this.isAProximal = false;
    this.isBDistal = false;
    this.isLumbarArteries = false;

    // PreoperativeMeasurements
    this.secondPlaneInMm = null;
    this.distanceCoronaryOstiaValvePlaneInMm = null;

    // Aortitis
    this.isConcentric = false;
    this.aortitisWallThicknessInMm = null;
    this.isContrastEnhancementOfTheArterialWall = false;
    this.isPeriaorticEdema = false;
    this.isPeriaortitis = false;
    this.quantificationAortitisType = QuantificationAortitisTypeEnum.None;
    this.aortitisMaxWidthInMm = null;
    this.isStenosisOcclusion = false;
    this.severityType = SeverityTypeEnum.None;
    this.aortitisDiameterStenosisInMm = null;
    this.aortitisDiameterNormalPoststenoticSegmentInMm = null;
    this.aortitisNASCETInPercent = null;
    this.aortitisLengthInMm = null;
    this.isVascularDilatation = false;
    this.aortitisMaxAxialDiameterInMm = null;
    this.aortitisVascularLengthInMm = null;
    this.isMycoticAneurysm = false;
    this.isUlcer = false;
    this.isEctasiaAnnulusAortaeAndAscendingAorta = false;
    this.aortitisDifferentialDiagnosisType = AortitisDifferentialDiagnosisTypeEnum.None;
  }
}
