import { SideTypeEnum } from '@enums/pelvisMRT/female-sex/side-type.enum';
import { SideSubTypeEnum } from '@enums/pelvisMRT/female-sex/side-sub-type.enum';
import { LocalizationTypeEnum } from '@enums/pelvisMRT/female-sex/localization-type.enum';
import { LocalizationSubTypeEnum } from '@enums/pelvisMRT/female-sex/localization-sub-type.enum';
import { LocalizationOfMassTypeEnum } from '@enums/pelvisMRT/female-sex/localization-of-mass-type.enum';
import { EndometriosisLocalizationTypeEnum } from '@enums/pelvisMRT/female-sex/endometriosis-localization-type.enum';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SurroundingDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/surrounding-details-type.enum';
import { DepthOfInfiltrationTypeEnum } from '@enums/pelvisMRT/female-sex/endometriosis/depth-of-infiltration-type.enum';
import { SubperitonealInfiltrationTypeEnum } from '@enums/pelvisMRT/female-sex/endometriosis/subperitoneal-infiltration-type.enum';
import { FemaleSexFindingBaseUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-base-ui.model';
import { UterusOrientation } from '@models/pelvisMRT/ui/localizers/uterus-orientation';
import { ComplicationsTypeEnum } from '@enums/pelvisMRT/female-sex/endometriosis/complications-type.enum';

export class FemaleSexFindingUiModel extends FemaleSexFindingBaseUiModel {
  labiaMajoraSideType: SideTypeEnum;
  labiaMinoraSideType: SideTypeEnum;
  sideSubType: SideSubTypeEnum;
  localizationType: LocalizationTypeEnum;
  localizationSubType: LocalizationSubTypeEnum;
  localizationOfMassType: LocalizationOfMassTypeEnum;
  endometriosisLocalizationType: EndometriosisLocalizationTypeEnum;
  differentialDiagnosis1: FemaleGenderDiagnosisTypeEnum;
  differentialDiagnosis2: FemaleGenderDiagnosisTypeEnum;
  isSubordinate: boolean;
  additionalT2wSignal: number;
  contrastEnhancementType2: ContrastEnhancementTypeEnum;
  contrastEnhancementHomogenityType2: HomogenityTypeEnum;
  contrastEnhancementType3: ContrastEnhancementTypeEnum;
  descriptionType: DescriptionTypeEnum;
  sizeInMm: number;
  isEnlarged: boolean;
  isTwistedOvarianVessel: boolean;
  isPeripheralFollicularDisplacement: boolean;
  surroundingDetailsType: SurroundingDetailsTypeEnum;
  isOvarianVeinThrombosis: boolean;
  expansionInMm: number;
  isPeritonealContrastEnhancement: boolean;
  isIleus: boolean;
  isPID: boolean;
  isBladder: boolean;
  isWallThickening: boolean;
  isThickenedEndometrium: boolean;
  isThickenedUterosacralLigaments: boolean;
  isContrastEnhancement: boolean;
  isDetailsT2wSignalIncrease: boolean;
  isPolycysticChanges: boolean;
  isCentralStromaEnlargement: boolean;
  isSurroundingT2wSignalIncrease: boolean;
  isEnlargementOfTheCentralAfollicularStromas: boolean;
  isHematoma: boolean;
  isFocalOrParietalT1wSignalIncrease: boolean;
  isEnlargedOvary: boolean;
  isT2wSignalIncrease: boolean;
  isOvarianMass: boolean;
  isHematosalpinx: boolean;
  isIpsilateralUterineDeviation: boolean;

  isDilatedLumen: boolean;
  isIntraluminalFluid: boolean;
  uterusLocation: UterusOrientation;
  sizeUterusAxialInMm: number;
  secondPlaneOrthogonalInMm: number;
  craniocaudalInMm: number;
  diameterOfTheEndometriumInMm: number;
  diameterOfEndometrialMyometrialZoneInMm: number;
  isFocalSignalVoidIntrauterine: boolean;
  isMarkedUterineVessels: boolean;
  isFocalSignalVoidsInTheCervicalCanal: boolean;
  isMarkedCervicalVessels: boolean;
  isFluidDebrisLevel: boolean;
  isVaginalDisplacement: boolean;
  isPerineum: boolean;
  isUrethra: boolean;
  isAnalSphincter: boolean;
  isAnusOrRectum: boolean;
  isUrethralLeiomyoma1: boolean;
  isUrethralLeiomyoma2: boolean;
  isUrethralMetastasis1: boolean;
  isUrethralMetastasis2: boolean;
  isSoftTissueSwelling: boolean;
  isFourniersGangrene: boolean;
  isVenousThrombosis: boolean;
  isT2wSignalIncreasePerivascular: boolean;
  isCystOfSkenesGlands: boolean;
  isUrethralDiverticula: boolean;
  isHypointenseCapsule: boolean;
  isSpicula: boolean;
  isNodular: boolean;
  isLigamentousThickening: boolean;
  isMushroomSign: boolean;
  isShading: boolean;
  isMultifocalSignalIncreaseT1w: boolean;
  isMultifocalSignalIncreaseT2w: boolean;
  isCystic: boolean;
  isComplex: boolean;
  isDetectionOfBloodClots: boolean;
  isInternalBleeding: boolean;
  depthOfInfiltrationType: DepthOfInfiltrationTypeEnum;
  subperitonealInfiltrationType: SubperitonealInfiltrationTypeEnum;
  isPerifocalFatTissueObliteration: boolean;
  isPerifocalTighteningOrShortening: boolean;
  complicationsType: ComplicationsTypeEnum;
  isAtTheLevelOfTheUreterostium: boolean;
  isPrestenoticDilatation: boolean;
  isPoststenoticCollapse: boolean;
  isPosteriorDisplacementOfTheUterus: boolean;
  isPosteriorDisplacementOfTheOvaries: boolean;
  isKissingOvaries: boolean;
  isCranialDisplacementOfThePosteriorFornixVaginae: boolean;
  isDisplacementOfIntestinalLoops: boolean;
  isMoreThan1LesionSamePathology: boolean;

  constructor() {
    super();

    this.labiaMajoraSideType = SideTypeEnum.None;
    this.labiaMinoraSideType = SideTypeEnum.None;
    this.sideSubType = SideSubTypeEnum.None;
    this.localizationType = LocalizationTypeEnum.None;
    this.localizationSubType = LocalizationSubTypeEnum.None;
    this.localizationOfMassType = LocalizationOfMassTypeEnum.None;
    this.endometriosisLocalizationType = EndometriosisLocalizationTypeEnum.None;
    this.differentialDiagnosis1 = FemaleGenderDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = FemaleGenderDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.additionalT2wSignal = 0;
    this.contrastEnhancementType2 = ContrastEnhancementTypeEnum.None;
    this.contrastEnhancementHomogenityType2 = HomogenityTypeEnum.None;
    this.contrastEnhancementType3 = ContrastEnhancementTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.sizeInMm = null;
    this.isEnlarged = false;
    this.isTwistedOvarianVessel = false;
    this.isPeripheralFollicularDisplacement = false;
    this.surroundingDetailsType = SurroundingDetailsTypeEnum.None;
    this.isOvarianVeinThrombosis = false;
    this.expansionInMm = null;
    this.isPeritonealContrastEnhancement = false;
    this.isIleus = false;
    this.isPID = false;
    this.isBladder = false;
    this.isWallThickening = false;
    this.isThickenedEndometrium = false;
    this.isThickenedUterosacralLigaments = false;
    this.isContrastEnhancement = false;
    this.isDetailsT2wSignalIncrease = false;
    this.isPolycysticChanges = false;
    this.isCentralStromaEnlargement = false;
    this.isSurroundingT2wSignalIncrease = false;
    this.isEnlargementOfTheCentralAfollicularStromas = false;
    this.isHematoma = false;
    this.isFocalOrParietalT1wSignalIncrease = false;
    this.isEnlargedOvary = false;
    this.isT2wSignalIncrease = false;
    this.isOvarianMass = false;
    this.isHematosalpinx = false;
    this.isIpsilateralUterineDeviation = false;
    this.isDilatedLumen = false;
    this.isIntraluminalFluid = false;
    this.uterusLocation = new UterusOrientation(); /// localizer
    this.sizeUterusAxialInMm = null;
    this.secondPlaneOrthogonalInMm = null;
    this.craniocaudalInMm = null;
    this.diameterOfTheEndometriumInMm = null;
    this.diameterOfEndometrialMyometrialZoneInMm = null;
    this.isFocalSignalVoidIntrauterine = false;
    this.isMarkedUterineVessels = false;
    this.isFocalSignalVoidsInTheCervicalCanal = false;
    this.isMarkedCervicalVessels = false;
    this.isFluidDebrisLevel = false;
    this.isVaginalDisplacement = false;
    this.isPerineum = false;
    this.isUrethra = false;
    this.isAnalSphincter = false;
    this.isAnusOrRectum = false;
    this.isUrethralLeiomyoma1 = false;
    this.isUrethralLeiomyoma2 = false;
    this.isUrethralMetastasis1 = false;
    this.isUrethralMetastasis2 = false;
    this.isSoftTissueSwelling = false;
    this.isFourniersGangrene = false;
    this.isVenousThrombosis = false;
    this.isT2wSignalIncreasePerivascular = false;
    this.isCystOfSkenesGlands = false;
    this.isUrethralDiverticula = false;
    this.isHypointenseCapsule = false;
    this.isSpicula = false;
    this.isNodular = false;
    this.isLigamentousThickening = false;
    this.isMushroomSign = false;
    this.isShading = false;
    this.isMultifocalSignalIncreaseT1w = false;
    this.isMultifocalSignalIncreaseT2w = false;
    this.isCystic = false;
    this.isComplex = false;
    this.isDetectionOfBloodClots = false;
    this.isInternalBleeding = false;
    this.depthOfInfiltrationType = DepthOfInfiltrationTypeEnum.None;
    this.subperitonealInfiltrationType = SubperitonealInfiltrationTypeEnum.None;
    this.isPerifocalFatTissueObliteration = false;
    this.isPerifocalTighteningOrShortening = false;
    this.complicationsType = ComplicationsTypeEnum.None;
    this.isAtTheLevelOfTheUreterostium = false;
    this.isPrestenoticDilatation = false;
    this.isPoststenoticCollapse = false;
    this.isPosteriorDisplacementOfTheUterus = false;
    this.isPosteriorDisplacementOfTheOvaries = false;
    this.isKissingOvaries = false;
    this.isCranialDisplacementOfThePosteriorFornixVaginae = false;
    this.isDisplacementOfIntestinalLoops = false;
    this.isMoreThan1LesionSamePathology = false;
  }
}
