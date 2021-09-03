import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LungParenchymaDiagnosisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-diagnosis-type.enum';
import { HistologyKnownTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/histology-known-type.enum';
import { LungParenchymaLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-localization-type.enum';
import { LungSectionTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-section-type.enum';
import { LungParenchymaFormTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-form-type.enum';
import { PerifissuralNodulusTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/perifissural-nodulus-type.enum';
import { WellDefinedTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/well-defined-type.num';
import { PeculiaritySegmentatelectasisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/peculiarity-segmentatelectasis-type.enum';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PulmonaryInfarctionTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/pulmonary-infarction-type.enum';
import { LungParenchymaFindingBaseApiModel } from '@models/thoraxCT/api/lung-parenchyma/lung-parenchyma-finding-base-api.model';

export class LungParenchymaFindingApiModel extends LungParenchymaFindingBaseApiModel {
  // Common
  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  mainCharacteristicsLocalizationType: LungParenchymaLocalizationTypeEnum;
  measuredValuesMaxDiameterAxialInMm: number;
  measuredValuesVolumeInMm3: number;
  averageDensityInHU: number;

  mainCharacteristicsLungsSegmentsLocation: string; // localizer LungsModel
  isRiglerNotchSign: boolean;
  isCentralNecrosis: boolean;

  differentialDiagnosis01: LungParenchymaDiagnosisTypeEnum;
  isSuspected: boolean;
  differentialDiagnosis02: LungParenchymaDiagnosisTypeEnum;
  isSubordinated: boolean;
  differentialDiagnosis03: LungParenchymaDiagnosisTypeEnum;
  isMoreThanOneLesionSamePathology;
  differentialDiagnosisLocalizationType: LungParenchymaLocalizationTypeEnum;
  differentialDiagnosisLungsSegmentsLocation: string; // localizer LungsModel
  differentialDiagnosisLungsFlapsLocation: string; // localizer LungsFlapsModel

  // RoundStove
  perifissuralNodulusType: PerifissuralNodulusTypeEnum;
  distanceToInterlobularSeptumInMm: number;

  // Mass
  isPleura: boolean;
  isPericardium: boolean;
  isRib: boolean;
  isSternum: boolean;
  isClavicule: boolean;
  isVertebralBody: boolean;
  isAPulmonalis: boolean;
  isAPulmonalisRight: boolean;
  isAPulmonalisLeft: boolean;
  isVvPulmonary: boolean;
  isVvPulmonaryRight: boolean;
  isVvPulmonaryLeft: boolean;
  isASubclavia: boolean;
  isASubclaviaRight: boolean;
  isASubclaviaLeft: boolean;
  isVSubclavia: boolean;
  isVSubclaviaRight: boolean;
  isVSubclaviaLeft: boolean;
  isTrachea: boolean;
  isBifurcation: boolean;
  isMainBronchus: boolean;
  isMainBronchusRight: boolean;
  isMainBronchusLeft: boolean;
  isPlexusCervicalis: boolean;
  isPlexusCervicalisRight: boolean;
  isPlexusCervicalisLeft: boolean;
  isPlexusBrachialis: boolean;
  isPlexusBrachialisRight: boolean;
  isPlexusBrachialisLeft: boolean;

  // Atelectasis
  lungSectionType: LungSectionTypeEnum;
  peculiaritySegmentatelectasisType: PeculiaritySegmentatelectasisTypeEnum;
  sideType: LocationTypeEnum;
  formType: LungParenchymaFormTypeEnum;

  // Consolidation
  isMosaicPattern: boolean;
  wellDefinedType: WellDefinedTypeEnum;
  isAbscess: boolean;
  isPneumatocele: boolean;
  accompanyingEffusionMaxWidthInMm: number;

  // PulmonaryInfarction
  pulmonaryInfarctionType: PulmonaryInfarctionTypeEnum;
  isAbsentBronchopneumogram: boolean;
  isBubblyConsolidation: boolean;
  isDrecreased: boolean;

  uploadedImageFile: FileApiModel;
  imageFileId: string;
  pictureNumber: string;
  serialNumber: string;

  constructor() {
    super();

    // Common
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.mainCharacteristicsLocalizationType = LungParenchymaLocalizationTypeEnum.None;
    this.measuredValuesMaxDiameterAxialInMm = null;
    this.measuredValuesVolumeInMm3 = null;
    this.averageDensityInHU = null;
    this.mainCharacteristicsLungsSegmentsLocation = 'None'; // localizer LungsModel
    this.isRiglerNotchSign = false;
    this.isCentralNecrosis = false;
    this.differentialDiagnosis01 = LungParenchymaDiagnosisTypeEnum.None;
    this.isSuspected = false;
    this.differentialDiagnosis02 = LungParenchymaDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.differentialDiagnosis03 = LungParenchymaDiagnosisTypeEnum.None;
    this.isMoreThanOneLesionSamePathology = false;
    this.differentialDiagnosisLocalizationType = LungParenchymaLocalizationTypeEnum.None;
    this.differentialDiagnosisLungsSegmentsLocation = 'None'; // localizer LungsModel
    this.differentialDiagnosisLungsFlapsLocation = 'None'; // localizer LungsFlapsModel

    // Nodule
    this.perifissuralNodulusType = PerifissuralNodulusTypeEnum.None;
    this.distanceToInterlobularSeptumInMm = null;

    // SpaceRequirement
    this.isPleura = false;
    this.isPericardium = false;
    this.isRib = false;
    this.isSternum = false;
    this.isClavicule = false;
    this.isVertebralBody = false;
    this.isAPulmonalis = false;
    this.isAPulmonalisRight = false;
    this.isAPulmonalisLeft = false;
    this.isVvPulmonary = false;
    this.isVvPulmonaryRight = false;
    this.isVvPulmonaryLeft = false;
    this.isASubclavia = false;
    this.isASubclaviaRight = false;
    this.isASubclaviaLeft = false;
    this.isVSubclavia = false;
    this.isVSubclaviaRight = false;
    this.isVSubclaviaLeft = false;
    this.isTrachea = false;
    this.isBifurcation = false;
    this.isMainBronchus = false;
    this.isMainBronchusRight = false;
    this.isMainBronchusLeft = false;
    this.isPlexusCervicalis = false;
    this.isPlexusCervicalisRight = false;
    this.isPlexusCervicalisLeft = false;
    this.isPlexusBrachialis = false;
    this.isPlexusBrachialisRight = false;
    this.isPlexusBrachialisLeft = false;

    // Atelectasis
    this.lungSectionType = LungSectionTypeEnum.None;
    this.peculiaritySegmentatelectasisType = PeculiaritySegmentatelectasisTypeEnum.None;
    this.sideType = LocationTypeEnum.None;
    this.formType = LungParenchymaFormTypeEnum.None;

    // Consolidation
    this.isMosaicPattern = false;
    this.wellDefinedType = WellDefinedTypeEnum.None;
    this.isAbscess = false;
    this.isPneumatocele = false;
    this.accompanyingEffusionMaxWidthInMm = null;

    // PulmonaryInfarction
    this.pulmonaryInfarctionType = PulmonaryInfarctionTypeEnum.None;
    this.isAbsentBronchopneumogram = false;
    this.isBubblyConsolidation = false;
    this.isDrecreased = false;

    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
