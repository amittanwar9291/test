import { FindingBase } from '@models/shared/finding/finding.base';
import { GastrointestinaltractFindingTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract';
import {
  ContrastEnhancementQuantitativeTypeEnum,
  FormTypeEnum,
  GastricLocalizationTypeEnum,
  GastrointestinalDifferentialDiagnosisTypeEnum,
  GastrointestinalHomogeneityTypeEnum,
  MarginTypeEnum,
  PerforationTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { HourTypeEnum, IntestinalMassExtensionTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/intestinal-mass';

export class GastrointestinalTractFindingBaseUiModel extends FindingBase {
  // Common

  findingType: GastrointestinaltractFindingTypeEnum;

  differentialDiagnosisType: GastrointestinalDifferentialDiagnosisTypeEnum;
  formType: FormTypeEnum;
  isInvasive: boolean;
  isDisplacing: boolean;
  isOcclusive: boolean;
  isTransmuralSpread: boolean;
  isLymphadenopathy: boolean;
  marginType: MarginTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType: GastrointestinalHomogeneityTypeEnum;
  t1WSignalType: number;
  t2WSignalType: number;

  gastricLocalizationType: GastricLocalizationTypeEnum;
  isExophytic: boolean;
  isEndophytic: boolean;
  isDiffusionRestriction: boolean;
  isArterial: boolean;
  cmEnhancementHomogeneityType: GastrointestinalHomogeneityTypeEnum;
  isDuodenum: boolean;
  isJejunum: boolean;
  isCecum: boolean;
  isVermiformAppendix: boolean;
  isParsDescendens: boolean;
  isParsHorizontalis: boolean;
  isParsAscendens: boolean;
  isCommunicating: boolean;
  isAscendingColon: boolean;
  isHepaticFlexure: boolean;
  isTransverseColon: boolean;
  isSplenicFlexure: boolean;
  isDescendingColon: boolean;
  isSigmoidColon: boolean;
  isAnalCanal: boolean;
  isInvagination: boolean;
  isPerforation: boolean;
  isAscites: boolean;
  isAbscess: boolean;
  isAccentuatedMesentericVesselsCombSign: boolean;
  perforationType: PerforationTypeEnum;
  sadLargestInMm: number;

  // Gastric Mass

  isUlceratingFinding: boolean;
  isLocoregionalLymphadenopathy: boolean;
  isSignalDropInTheOpposedPhaseChemicalShift: boolean;
  isSubmucous: boolean;
  isIntraluminal: boolean;
  isExtraluminal: boolean;
  isIrregularCalcifications: boolean;
  isPunctateCalcifications: boolean;
  isMucosalEnhancement: boolean;
  sadInMm: number;
  isMacroscopicFat: boolean;

  // Intestinal Mass

  intestinalMassExtensionType: IntestinalMassExtensionTypeEnum;
  isAdjacentFatTissue: boolean;

  isIleum: boolean;
  isRectumUpperThird: boolean;
  isRectumMiddleThird: boolean;
  isRectumLowerThird: boolean;
  isPortalVenous: boolean;
  isDesmoplasticReactionOfTheMesentery: boolean;
  isPostoperativePostinterventional: boolean;
  isRadiationInduced: boolean;
  isMesorectalFascia: boolean;
  fromToType: HourTypeEnum;
  untilType: HourTypeEnum;
  isAdjacentIntestine: boolean;
  isPeritonealFolds: boolean;
  isParenchymalOrgan: boolean;
  isLiver: boolean;
  isPancreas: boolean;
  isSpleen: boolean;
  isKidney: boolean;
  isKidneyRight: boolean;
  isKidneyLeft: boolean;
  isAdrenalGland: boolean;
  isAdrenalGlandRight: boolean;
  isAdrenalGlandLeft: boolean;
  isVessels: boolean;
  isBone: boolean;
  isMechanicalIleus: boolean;
  isPeritonealCarcinomatosis: boolean;
  isFistulaFormation: boolean;
  isCloacalFormation: boolean;
  isLocoregional: boolean;
  isDistant: boolean;

  constructor() {
    super();

    // Common

    this.findingType = GastrointestinaltractFindingTypeEnum.None;

    this.differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.isInvasive = false;
    this.isDisplacing = false;
    this.isOcclusive = false;
    this.isTransmuralSpread = false;
    this.isLymphadenopathy = false;
    this.marginType = MarginTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.homogeneityType = GastrointestinalHomogeneityTypeEnum.None;
    this.t1WSignalType = 0;
    this.t2WSignalType = 0;

    this.gastricLocalizationType = GastricLocalizationTypeEnum.None;
    this.perforationType = PerforationTypeEnum.None;
    this.isExophytic = false;
    this.isEndophytic = false;
    this.isDiffusionRestriction = false;
    this.isArterial = false;
    this.cmEnhancementHomogeneityType = GastrointestinalHomogeneityTypeEnum.None;
    this.isDuodenum = false;
    this.isJejunum = false;
    this.isCecum = false;
    this.isVermiformAppendix = false;
    this.isParsDescendens = false;
    this.isParsHorizontalis = false;
    this.isParsAscendens = false;
    this.isAscendingColon = false;
    this.isHepaticFlexure = false;
    this.isTransverseColon = false;
    this.isSplenicFlexure = false;
    this.isDescendingColon = false;
    this.isSigmoidColon = false;
    this.isAnalCanal = false;
    this.isInvagination = false;
    this.isPerforation = false;
    this.isAbscess = false;
    this.isAscites = false;
    this.isAccentuatedMesentericVesselsCombSign = false;
    this.sadLargestInMm = null;

    // Gastric Mass

    this.isUlceratingFinding = false;
    this.isLocoregionalLymphadenopathy = false;

    this.isSignalDropInTheOpposedPhaseChemicalShift = false;
    this.isSubmucous = false;
    this.isIntraluminal = false;
    this.isExtraluminal = false;
    this.isIrregularCalcifications = false;
    this.isPunctateCalcifications = false;
    this.isMucosalEnhancement = false;
    this.sadInMm = null;
    this.isMacroscopicFat = false;

    // Intestinal Mass

    this.intestinalMassExtensionType = IntestinalMassExtensionTypeEnum.None;
    this.isAdjacentFatTissue = false;

    this.isIleum = false;
    this.isRectumUpperThird = false;
    this.isRectumMiddleThird = false;
    this.isRectumLowerThird = false;
    this.isPortalVenous = false;
    this.isDesmoplasticReactionOfTheMesentery = false;
    this.isPostoperativePostinterventional = false;
    this.isRadiationInduced = false;
    this.isMesorectalFascia = false;
    this.fromToType = HourTypeEnum.None;
    this.untilType = HourTypeEnum.None;
    this.isAdjacentIntestine = false;
    this.isPeritonealFolds = false;
    this.isParenchymalOrgan = false;
    this.isLiver = false;
    this.isPancreas = false;
    this.isSpleen = false;
    this.isKidney = false;
    this.isKidneyRight = false;
    this.isKidneyLeft = false;
    this.isAdrenalGland = false;
    this.isAdrenalGlandRight = false;
    this.isAdrenalGlandLeft = false;
    this.isVessels = false;
    this.isBone = false;
    this.isMechanicalIleus = false;
    this.isPeritonealCarcinomatosis = false;
    this.isFistulaFormation = false;
    this.isCloacalFormation = false;
    this.isLocoregional = false;
    this.isDistant = false;
  }
}
