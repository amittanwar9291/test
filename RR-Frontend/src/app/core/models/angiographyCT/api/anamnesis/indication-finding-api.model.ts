import { FindingBase } from '@models/shared/finding/finding.base';
import { IndicationFindingTypeEnum } from '@enums/angiographyCT/anamnesis/';
import { AnginaPectorisTypeEnum, PreviousDiseaseTypeEnum } from '@enums/angiographyCT/anamnesis/coronary-artery-disease';
import { StadiumAccordingToFontaineTypeEnum } from '@enums/angiographyCT/anamnesis/peripheral-artery-disease-pad';

export class IndicationFindingApiModel extends FindingBase {
  indicationFindingType: IndicationFindingTypeEnum;

  // Common

  isSuspiciousFor: boolean;
  onsetOfSymptomsMonth: number;
  onsetOfSymptomsYear: number;

  // PeripheralArteryDiseasePAD

  stadiumAccordingToFontaineType: StadiumAccordingToFontaineTypeEnum;
  isSuspectedVascularStenosis: boolean;
  isAbdominalAorta: boolean;
  isSuprarenal: boolean;
  isInfrarenal: boolean;
  isAorticBifurcation: boolean;

  // Right

  isRightRenalArtery: boolean;
  isRightCommonIliacArtery: boolean;
  isRightExternalIliacArtery: boolean;
  isRightInternalIliacArtery: boolean;
  isRightCommonFemoralArtery: boolean;
  isRightFemoralArteryBifurcation: boolean;
  isRightSuperficialFemoralArtery: boolean;
  isRightProfundaFemorisArtery: boolean;
  isRightPoplitealArtery: boolean;
  isRightAnteriorTibialArtery: boolean;
  isRightTruncusTibiofibularis: boolean;
  isRightPosteriorTibialArtery: boolean;
  isRightFibularArtery: boolean;
  isRightDorsalisPedisArtery: boolean;
  isRightArcusPlantaris: boolean;

  // Left

  isLeftRenalArtery: boolean;
  isLeftCommonIliacArtery: boolean;
  isLeftExternalIliacArtery: boolean;
  isLeftInternalIliacArtery: boolean;
  isLeftCommonFemoralArtery: boolean;
  isLeftFemoralArteryBifurcation: boolean;
  isLeftSuperficialFemoralArtery: boolean;
  isLeftProfundaFemorisArtery: boolean;
  isLeftPoplitealArtery: boolean;
  isLeftAnteriorTibialArtery: boolean;
  isLeftTruncusTibiofibularis: boolean;
  isLeftPosteriorTibialArtery: boolean;
  isLeftFibularArtery: boolean;
  isLeftDorsalisPedisArtery: boolean;
  isLeftArcusPlantaris: boolean;

  // Aneurysm

  isIntracranial: boolean;
  isCervical: boolean;
  isCervicalRight: boolean;
  isCervicalLeft: boolean;
  isUpperLimb: boolean;
  isUpperLimbRight: boolean;
  isUpperLimbLeft: boolean;
  isChest: boolean;
  isAbdomen: boolean;
  isLowerLimb: boolean;
  isLowerLimbRight: boolean;
  isLowerLimbLeft: boolean;

  // CoronaryArteryDisease

  isAnginaPectoris: boolean;
  anginaPectorisType: AnginaPectorisTypeEnum;
  previousDiseaseType: PreviousDiseaseTypeEnum;
  pretestProbabilityCADInPercent: number;
  isStressTestingPerformed: boolean;
  isECG: boolean;
  isEchocardiography: boolean;
  isMyocardialScintigraphySPECT: boolean;
  isPET: boolean;
  isCT: boolean;

  // RiskFactors

  isArterialHypertension: boolean;
  isDiabetesMellitus: boolean;
  isSmoking: boolean;
  cigarettePacksPerDayXSmokerYears: number;
  isHyperlipidemia: boolean;
  isCollagenosis: boolean;
  isBicuspidAorticValve: boolean;
  isCirrhosisOfTheLiver: boolean;
  isCocaineAbuse: boolean;

  constructor() {
    super();
    this.indicationFindingType = IndicationFindingTypeEnum.None;

    // Common

    this.isSuspiciousFor = false;
    this.onsetOfSymptomsMonth = null;
    this.onsetOfSymptomsYear = null;

    // PeripheralArteryDiseasePAD

    this.stadiumAccordingToFontaineType = StadiumAccordingToFontaineTypeEnum.None;
    this.isSuspectedVascularStenosis = false;
    this.isAbdominalAorta = false;
    this.isSuprarenal = false;
    this.isInfrarenal = false;
    this.isAorticBifurcation = false;

    // Right

    this.isRightRenalArtery = false;
    this.isRightCommonIliacArtery = false;
    this.isRightExternalIliacArtery = false;
    this.isRightInternalIliacArtery = false;
    this.isRightCommonFemoralArtery = false;
    this.isRightFemoralArteryBifurcation = false;
    this.isRightSuperficialFemoralArtery = false;
    this.isRightProfundaFemorisArtery = false;
    this.isRightPoplitealArtery = false;
    this.isRightAnteriorTibialArtery = false;
    this.isRightTruncusTibiofibularis = false;
    this.isRightPosteriorTibialArtery = false;
    this.isRightFibularArtery = false;
    this.isRightDorsalisPedisArtery = false;
    this.isRightArcusPlantaris = false;

    // Left

    this.isLeftRenalArtery = false;
    this.isLeftCommonIliacArtery = false;
    this.isLeftExternalIliacArtery = false;
    this.isLeftInternalIliacArtery = false;
    this.isLeftCommonFemoralArtery = false;
    this.isLeftFemoralArteryBifurcation = false;
    this.isLeftSuperficialFemoralArtery = false;
    this.isLeftProfundaFemorisArtery = false;
    this.isLeftPoplitealArtery = false;
    this.isLeftAnteriorTibialArtery = false;
    this.isLeftTruncusTibiofibularis = false;
    this.isLeftPosteriorTibialArtery = false;
    this.isLeftFibularArtery = false;
    this.isLeftDorsalisPedisArtery = false;
    this.isLeftArcusPlantaris = false;

    // Aneurysm

    this.isIntracranial = false;
    this.isCervical = false;
    this.isCervicalRight = false;
    this.isCervicalLeft = false;
    this.isUpperLimb = false;
    this.isUpperLimbRight = false;
    this.isUpperLimbLeft = false;
    this.isChest = false;
    this.isAbdomen = false;
    this.isLowerLimb = false;
    this.isLowerLimbRight = false;
    this.isLowerLimbLeft = false;

    // CoronaryArteryDisease

    this.isAnginaPectoris = false;
    this.anginaPectorisType = AnginaPectorisTypeEnum.None;
    this.previousDiseaseType = PreviousDiseaseTypeEnum.None;
    this.pretestProbabilityCADInPercent = null;
    this.isStressTestingPerformed = false;
    this.isECG = false;
    this.isEchocardiography = false;
    this.isMyocardialScintigraphySPECT = false;
    this.isPET = false;
    this.isCT = false;

    // RiskFactors

    this.isArterialHypertension = false;
    this.isDiabetesMellitus = false;
    this.isSmoking = false;
    this.cigarettePacksPerDayXSmokerYears = null;
    this.isHyperlipidemia = false;
    this.isCollagenosis = false;
    this.isBicuspidAorticValve = false;
    this.isCirrhosisOfTheLiver = false;
    this.isCocaineAbuse = false;
  }
}
