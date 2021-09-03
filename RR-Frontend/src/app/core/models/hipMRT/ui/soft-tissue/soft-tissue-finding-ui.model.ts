import { SoftTissueFindingBaseUiModel } from './soft-tissue-finding-base-ui.model';
import {
  ClassificationTypeEnum,
  DifferentialDiagnosisTypeEnum,
  FindingTypeEnum,
  LocalizationThighTypeEnum,
  PathologyTypeEnum,
  QuantityTypeEnum,
  SideTypeEnum,
  VesselsLocalizationTypeEnum,
  VesselsPathologyTypeEnum
} from '@enums/hipMRT/soft-tissue';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CharacterizationHematomaTypeEnum } from '@enums/hipMRT/soft-tissue/hematoma/characterization-hematoma-type.enum';

export class SoftTissueFindingUiModel extends SoftTissueFindingBaseUiModel {
  descriptionType: DescriptionTypeEnum;

  // Common
  sideType: SideTypeEnum;
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

    // Abscess
    this.isPelvis = false;
    this.isThigh = false;

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
