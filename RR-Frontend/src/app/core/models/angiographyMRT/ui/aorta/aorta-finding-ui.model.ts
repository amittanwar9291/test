import { AorticArch } from '@models/angiographyMRT/ui/localizers/aortic-arch.model';
import { FindingBase } from '@models/shared/finding/finding.base';
import { AortaFindingTypeEnum } from '@enums/angiographyMRT/aorta/aorta-finding-type.enum';
import { SeverityTypeEnum } from '@enums/angiographyMRT/aorta/severity-type.enum';
import { ShapeTypeEnum } from '@enums/angiographyMRT/aorta/shape-type.enum';
import { AnomaliesTypeEnum } from '@enums/angiographyMRT/aorta/anomalies-type.enum';
import { DetailsCongenitalVascularRingsTypeEnum } from '@enums/angiographyMRT/aorta/details-congenital-vascular-rings-type.enum';
import { FollowUpTypeEnum } from '@enums/angiographyMRT/aorta/follow-up-type.enum';
import { AortitisDifferentialDiagnosisTypeEnum } from '@enums/angiographyMRT/aorta/aortitis-differential-diagnosis-type.enum';
import { PathologyTypeEnum } from '@enums/angiographyMRT/aorta/pathology-type.enum';
import { StanfordClassificationTypeEnum } from '@enums/angiographyMRT/aorta/stanford-classification-type.enum';
import { SvenssonClassificationTypeEnum } from '@enums/angiographyMRT/aorta/svensson-classification-type.enum';
import { BeginTypeEnum } from '@enums/angiographyMRT/aorta/begin-type.enum';
import { QuantificationAortitisTypeEnum } from '@enums/angiographyMRT/aorta/quantification-aortitis-type.enum';
import { VascularDilatationTypeEnum } from '@enums/angiographyMRT/aorta/vascular-dilatation-type.enum';
import { FormTypeEnum } from '@enums/angiographyMRT/aorta/form-type.enum';
import { AorticAneurysmDifferentialDiagnosisTypeEnum } from '@enums/angiographyMRT/aorta/aortic-aneurysm-differential-diagnosis-type.enum';
import { DetailsAorticArchKinkingTypeEnum } from '@enums/angiographyMRT/aorta/details-aortic-arch-kinking-type.enum';

export class AortaFindingUiModel extends FindingBase {
  findingType: AortaFindingTypeEnum;
  aortaLocation: AorticArch;
  lengthInMm: number;
  isWallThickening: boolean;
  wallThicknessInMm: number;
  isThrombus: boolean;
  isFreeFloating: boolean;
  isWallAdherent: boolean;
  isIrregularContour: boolean;
  isStenosis: boolean;
  severityType: SeverityTypeEnum;
  isHemodynamicallyRelevant: boolean;
  diameterStenosisInMm: number;
  diameterNormalPoststenoticSegmentInMm: number;
  degreeOfStenosisAccordingToNASCETInPercentage: number;
  formType: FormTypeEnum;
  isShortLengthStenosis: boolean;
  isSuspiciousOf: boolean;
  maxWidthInMm: number;

  // AorticAbnormalities
  anomaliesType: AnomaliesTypeEnum;
  isHypoplasticAorticArch: boolean;
  isPoststenoticDilatation: boolean;
  isPostoperativeResidualStenosis: boolean;
  detailsAorticArchKinkingType: DetailsAorticArchKinkingTypeEnum;
  detailsCongenitalVascularRingsType: DetailsCongenitalVascularRingsTypeEnum;
  isAberrantArteriaWithKommerellDiverticulum: boolean;
  isRightAorticWithKommerellDiverticulum: boolean;

  // AorticAneurysm
  isAorticEctasia: boolean;
  shapeType: ShapeTypeEnum;
  maxAxialDiameterInMm: number;
  proximalAneuysmaticNeckDiameterInMm: number;
  proximalNeckLengthInMm: number;
  isEccentricPartialThrombus: boolean;
  followUpType: FollowUpTypeEnum;
  maxAxialDiameterPreviousExaminationInMm: number;
  aorticAneurysmDifferentialDiagnosisType: AorticAneurysmDifferentialDiagnosisTypeEnum;

  // AcuteAortalSyndrome
  isAcuteExtravasalHematoma: boolean;
  maxAorticDiameterInMm: number;
  pathologyType: PathologyTypeEnum;
  isSvenssonClassificationOfAorticDissection: boolean;
  svenssonClassificationType: SvenssonClassificationTypeEnum;
  isThrombosisFalseLumen: boolean;
  stanfordClassificationType: StanfordClassificationTypeEnum;
  aortaLocationReentry: AorticArch;
  isRightCoronaryArtery: boolean;
  isLeftCoronaryArtery: boolean;
  isBrachiocephalicTrunk: boolean;
  isLeftCarotidArtery: boolean;
  isLeftSubclavianArtery: boolean;
  isCoeliacTrunk: boolean;
  isSuperiorMesentericArterySMA: boolean;
  isInferiorMesentericArteryIMA: boolean;
  isRightRenalArtery: boolean;
  isLeftRenalArtery: boolean;
  isRightCommonIliacArtery: boolean;
  isLeftCommonIliacArtery: boolean;
  beginningType: BeginTypeEnum;
  isEccentric: boolean;
  isWallHematomaHyperintenseInUnenhancedT1w: boolean;
  isAortitis: boolean;
  craniocaudalLengthInMm: number;
  deepInMm: number;
  isMushroomShaped: boolean;
  isPseudoaneurysm: boolean;

  // Aortitis
  isConcentric: boolean;
  isContrastEnhancementOfTheArterialWall: boolean;
  isT2wHyperintensityOfArterialWallEdema: boolean;
  isPeriaortitis: boolean;
  quantificationAortitisType: QuantificationAortitisTypeEnum;
  isVascularDilatation: boolean;
  vascularDilatationType: VascularDilatationTypeEnum;
  isAnnuloaorticEctasia: boolean;
  aortitisDifferentialDiagnosisType: AortitisDifferentialDiagnosisTypeEnum;

  constructor() {
    super();
    this.findingType = AortaFindingTypeEnum.None;
    this.aortaLocation = new AorticArch();
    this.lengthInMm = null;
    this.isWallThickening = false;
    this.wallThicknessInMm = null;
    this.isThrombus = false;
    this.isFreeFloating = false;
    this.isWallAdherent = false;
    this.isIrregularContour = false;
    this.isStenosis = false;
    this.severityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosisInMm = null;
    this.diameterNormalPoststenoticSegmentInMm = null;
    this.degreeOfStenosisAccordingToNASCETInPercentage = null;
    this.formType = FormTypeEnum.None;
    this.isShortLengthStenosis = false;
    this.isSuspiciousOf = false;
    this.maxWidthInMm = null;

    // AorticAbnormalities
    this.anomaliesType = AnomaliesTypeEnum.None;
    this.isHypoplasticAorticArch = false;
    this.isPoststenoticDilatation = false;
    this.isPostoperativeResidualStenosis = false;
    this.detailsAorticArchKinkingType = DetailsAorticArchKinkingTypeEnum.None;
    this.detailsCongenitalVascularRingsType = DetailsCongenitalVascularRingsTypeEnum.None;
    this.isAberrantArteriaWithKommerellDiverticulum = false;
    this.isRightAorticWithKommerellDiverticulum = false;

    // AorticAneurysm
    this.isAorticEctasia = false;
    this.shapeType = ShapeTypeEnum.None;
    this.maxAxialDiameterInMm = null;
    this.proximalAneuysmaticNeckDiameterInMm = null;
    this.proximalNeckLengthInMm = null;
    this.isEccentricPartialThrombus = false;
    this.followUpType = FollowUpTypeEnum.None;
    this.maxAxialDiameterPreviousExaminationInMm = null;
    this.aorticAneurysmDifferentialDiagnosisType = AorticAneurysmDifferentialDiagnosisTypeEnum.None;

    // AcuteAortalSyndrome
    this.isAcuteExtravasalHematoma = false;
    this.maxAorticDiameterInMm = null;
    this.pathologyType = PathologyTypeEnum.None;
    this.isSvenssonClassificationOfAorticDissection = false;
    this.svenssonClassificationType = SvenssonClassificationTypeEnum.None;
    this.isThrombosisFalseLumen = false;
    this.stanfordClassificationType = StanfordClassificationTypeEnum.None;
    this.aortaLocationReentry = new AorticArch();
    this.isRightCoronaryArtery = false;
    this.isLeftCoronaryArtery = false;
    this.isBrachiocephalicTrunk = false;
    this.isLeftCarotidArtery = false;
    this.isLeftSubclavianArtery = false;
    this.isCoeliacTrunk = false;
    this.isSuperiorMesentericArterySMA = false;
    this.isInferiorMesentericArteryIMA = false;
    this.isRightRenalArtery = false;
    this.isLeftRenalArtery = false;
    this.isRightCommonIliacArtery = false;
    this.isLeftCommonIliacArtery = false;
    this.beginningType = BeginTypeEnum.None;
    this.isEccentric = false;
    this.isWallHematomaHyperintenseInUnenhancedT1w = false;
    this.isAortitis = false;
    this.craniocaudalLengthInMm = null;
    this.deepInMm = null;
    this.isMushroomShaped = false;
    this.isPseudoaneurysm = false;

    // Aortitis
    this.isConcentric = false;
    this.isContrastEnhancementOfTheArterialWall = false;
    this.isT2wHyperintensityOfArterialWallEdema = false;
    this.isPeriaortitis = false;
    this.quantificationAortitisType = QuantificationAortitisTypeEnum.None;
    this.isVascularDilatation = false;
    this.vascularDilatationType = VascularDilatationTypeEnum.None;
    this.isAnnuloaorticEctasia = false;
    this.aortitisDifferentialDiagnosisType = AortitisDifferentialDiagnosisTypeEnum.None;
  }
}
