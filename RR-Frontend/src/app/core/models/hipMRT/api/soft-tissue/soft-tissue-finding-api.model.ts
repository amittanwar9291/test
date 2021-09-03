import { SoftTissueFindingBaseApiModel } from './soft-tissue-finding-base-api.model';
import {
  ClassificationTypeEnum,
  DifferentialDiagnosisTypeEnum,
  FindingTypeEnum,
  HistologyKnownTypeEnum,
  LocalizationThighTypeEnum,
  PathologyTypeEnum,
  QuantityTypeEnum,
  SideTypeEnum,
  VesselsLocalizationTypeEnum,
  VesselsPathologyTypeEnum
} from '@enums/hipMRT/soft-tissue';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CharacterizationHematomaTypeEnum } from '@enums/hipMRT/soft-tissue/hematoma/characterization-hematoma-type.enum';

export class SoftTissueFindingApiModel extends SoftTissueFindingBaseApiModel {
  descriptionType: DescriptionTypeEnum;

  // Common
  sideType: SideTypeEnum;
  isSuspected: boolean;
  isVentral: boolean;
  isMedial: boolean;
  isLateral: boolean;
  isDorsal: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  // ArticularEffusion
  quantityType: QuantityTypeEnum;
  isHemorrhagic: boolean;
  isSedimentation: boolean;
  isEmpyema: boolean;

  // MorelLavalleeLesion
  localizationThighType: LocalizationThighTypeEnum;
  classificationType: ClassificationTypeEnum;

  // Vessels
  vesselsPathologyType: VesselsPathologyTypeEnum;
  vesselsLocalizationType: VesselsLocalizationTypeEnum;

  // Aneurysm
  maxAxialDiameterInMm: number;
  craniocaudalExtensionInMm: number;

  // Varicosis
  isIliacVeins: boolean;
  isSuperficialLegVeins: boolean;
  isDeepLegVeins: boolean;

  // Hematoma
  characterizationHaematomaType: CharacterizationHematomaTypeEnum;

  // Abscess
  isPelvis: boolean;
  isThigh: boolean;

  // SoftTissueMass
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isSepta: boolean;
  isNecrosis: boolean;
  isSignalVoids: boolean;
  isAlongTheTendonSheath: boolean;
  isInfiltration: boolean;
  isBones: boolean;
  isSkin: boolean;
  isMuscle: boolean;
  isFascia: boolean;
  isVessel: boolean;
  isNerves: boolean;
  isCutisThickening: boolean;
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  isSubordinated: boolean;
  differentialDiagnosis3: DifferentialDiagnosisTypeEnum;
  isMoreThanOneLesionSameEntity: boolean;

  // OtherPathologies
  pathologyType: PathologyTypeEnum;
  isInguinal: boolean;
  inguinalMaxShortAxisDiameterInMm: number;
  inguinalDifferentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  isIliacal: boolean;
  iliacalMaxShortAxisDiameterInMm: number;
  iliacalDifferentialDiagnosisType: DifferentialDiagnosisTypeEnum;

  constructor() {
    super();
    this.findingType = FindingTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;

    // Common
    this.sideType = SideTypeEnum.None;
    this.isSuspected = false;
    this.isVentral = false;
    this.isMedial = false;
    this.isLateral = false;
    this.isDorsal = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;

    // ArticularEffusion
    this.quantityType = QuantityTypeEnum.None;
    this.isHemorrhagic = false;
    this.isSedimentation = false;
    this.isEmpyema = false;

    // MorelLavalleeLesion
    this.localizationThighType = LocalizationThighTypeEnum.None;
    this.classificationType = ClassificationTypeEnum.None;

    // Vessels
    this.vesselsPathologyType = VesselsPathologyTypeEnum.None;
    this.vesselsLocalizationType = VesselsLocalizationTypeEnum.None;

    // Aneurysm
    this.maxAxialDiameterInMm = null;
    this.craniocaudalExtensionInMm = null;

    // Varicosis
    this.isIliacVeins = false;
    this.isSuperficialLegVeins = false;
    this.isDeepLegVeins = false;

    // Hematoma
    this.characterizationHaematomaType = CharacterizationHematomaTypeEnum.None;

    // HematomaAbscess
    this.isPelvis = false;
    this.isThigh = false;

    // SoftTissueMass
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isSepta = false;
    this.isNecrosis = false;
    this.isSignalVoids = false;
    this.isAlongTheTendonSheath = false;
    this.isInfiltration = false;
    this.isBones = false;
    this.isSkin = false;
    this.isMuscle = false;
    this.isFascia = false;
    this.isVessel = false;
    this.isNerves = false;
    this.isCutisThickening = false;
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.differentialDiagnosis3 = DifferentialDiagnosisTypeEnum.None;
    this.isMoreThanOneLesionSameEntity = false;

    // OtherPathologies
    this.pathologyType = PathologyTypeEnum.None;
    this.isInguinal = false;
    this.inguinalMaxShortAxisDiameterInMm = null;
    this.inguinalDifferentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.isIliacal = false;
    this.iliacalMaxShortAxisDiameterInMm = null;
    this.iliacalDifferentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
  }
}
