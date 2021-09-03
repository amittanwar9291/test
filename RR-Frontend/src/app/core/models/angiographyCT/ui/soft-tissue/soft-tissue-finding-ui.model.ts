import { FindingBase } from '@models/shared/finding/finding.base';
import { SoftTissueFindingTypeEnum } from '@enums/angiographyCT/soft-tissue/';

import { AbdominalLocalizationTypeEnum, AbdominalTypeEnum, FractureLocalizationTypeEnum } from '@enums/angiographyCT/soft-tissue/abdominal';

import {
  CompartmentTypeEnum,
  ExtremitiesFractureLocalizationTypeEnum,
  ExtremitiesMassLocalizationTypeEnum,
  ExtremitiesTypeEnum
} from '@enums/angiographyCT/soft-tissue/extremities';

import { MorphologyTypeEnum } from '@enums/angiographyCT/soft-tissue/lymphadenopathy';

import {
  DignityTypeEnum,
  IntracranialTypeEnum,
  NeckSoftTissueMassLocalizationTypeEnum,
  NeckSoftTissuePathologyTypeEnum,
  OrbitaTypeEnum,
  SupraaorticHeadPathologyTypeEnum,
  SupraaorticLocalizationTypeEnum
} from '@enums/angiographyCT/soft-tissue/supraaortal';

import {
  InferiorVenaCavaTypeEnum,
  NormVariantVesselsVariantsTypeEnum,
  PartialAnomalousPulmonaryVenousConnectionTypeEnum,
  SuperiorVenaCavaTypeEnum,
  ThoracicDiagnosisTypeEnum,
  ThoracicLocalizationTypeEnum,
  ThoracicTypeEnum
} from '@enums/angiographyCT/soft-tissue/thoracic';

import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';

export class SoftTissueFindingUiModel extends FindingBase {
  findingType: SoftTissueFindingTypeEnum;

  // Common

  isRight: boolean;
  isLeft: boolean;
  maxDiameter: number;
  secondPlane: number;
  thirdPlane: number;
  dignityType: DignityTypeEnum;
  isAbscess: boolean;
  isSuspicionOf: boolean;
  ribLocations: RibsModel;
  spineLocations: SpineLocation;
  sideType: SideTypeEnum;

  // Supraaortic

  supraaorticLocalizationType: SupraaorticLocalizationTypeEnum;
  supraaorticHeadPathologyType: SupraaorticHeadPathologyTypeEnum;
  isCalvariaBone: boolean;
  isFacialSkull: boolean;
  isOrbita: boolean;
  isIntracranial: boolean;
  orbitaType: OrbitaTypeEnum;
  intracranialType: IntracranialTypeEnum;
  isSAH: boolean;
  isSDH: boolean;
  isEDH: boolean;
  isParenchymalHemorrhage: boolean;
  isMidlineShift: boolean;
  isImpairedVentilation: boolean;
  isInflammation: boolean;
  isGasFluidLevel: boolean;
  isCircular: boolean;
  neckSoftTissuePathologyType: NeckSoftTissuePathologyTypeEnum;
  isMedian: boolean;
  neckSoftTissueMassLocalization: NeckSoftTissueMassLocalizationTypeEnum;
  isWithRetrosternalParts: boolean;

  // Thoracic

  thoracicType: ThoracicTypeEnum;
  maxWidth: number;
  pericardialCalcificationsDetails: boolean;
  isPulmonaryArteryEmbolismCentral: boolean;
  isPulmonaryArteryEmbolismCentralRight: boolean;
  isPulmonaryArteryEmbolismCentralLeft: boolean;
  isPulmonaryArteryEmbolismSegmentalRight: boolean;
  isPulmonaryArteryEmbolismSegmentalLeft: boolean;
  isRidingThrombus: boolean;
  diameterCentralPulmonaryArtery: number;
  thoracicDiagnosisType: ThoracicDiagnosisTypeEnum;
  isNormVariantVesselsPulmonaryVeins: boolean;
  normVariantVesselsVariantsType: NormVariantVesselsVariantsTypeEnum;
  partialAnomalousPulmonaryVenousConnectionType: PartialAnomalousPulmonaryVenousConnectionTypeEnum;
  isSuperiorVenaCava: boolean;
  superiorVenaCavaType: SuperiorVenaCavaTypeEnum;
  isInferiorVenaCava: boolean;
  inferiorVenaCavaType: InferiorVenaCavaTypeEnum;
  isMediastinalShiftToTheOppositeSide: boolean;
  isCompleteAtelectasis: boolean;
  thoracicLocalizationType: ThoracicLocalizationTypeEnum;

  // Abdominal

  abdominalType: AbdominalTypeEnum;
  abdominalLocalizationType: AbdominalLocalizationTypeEnum;
  isAscitesHemoperitoneum: boolean;
  isAscitesSignificant: boolean;
  fractureLocalizationType: FractureLocalizationTypeEnum;
  isStatusPost: boolean;

  // Extremities

  extremitiesType: ExtremitiesTypeEnum;
  extremitiesMassLocalizationType: ExtremitiesMassLocalizationTypeEnum;
  compartmentType: CompartmentTypeEnum;
  extremitiesFractureLocalizationType: ExtremitiesFractureLocalizationTypeEnum;

  // Lymphadenopathy

  isCervical: boolean;
  isCervicalRight: boolean;
  isCervicalLeft: boolean;
  isThoracic: boolean;
  isMediastinal: boolean;
  isThoracicMediastinalRight: boolean;
  isThoracicMediastinalLeft: boolean;
  isPerihilar: boolean;
  isThoracicPerihilarRight: boolean;
  isThoracicPerihilarLeft: boolean;
  isAxillary: boolean;
  isAxillaryRight: boolean;
  isAxillaryLeft: boolean;
  isAbdominal: boolean;
  isRetroperitoneal: boolean;
  isIliac: boolean;
  isIliacRight: boolean;
  isIliacLeft: boolean;
  isInguinal: boolean;
  isInguinalRight: boolean;
  isInguinalLeft: boolean;
  maxDiameterSAD: number;
  morphologyType: MorphologyTypeEnum;
  isPreservedFattyHilum: boolean;
  isConfluent: boolean;
  isIncreasedInNumber: boolean;
  isSuspect: boolean;

  constructor() {
    super();
    this.findingType = SoftTissueFindingTypeEnum.None;

    // Common

    this.isRight = false;
    this.isLeft = false;
    this.maxDiameter = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.dignityType = DignityTypeEnum.None;
    this.isAbscess = false;
    this.isSuspicionOf = false;
    this.ribLocations = new RibsModel();
    this.spineLocations = new SpineLocation();
    this.sideType = SideTypeEnum.None;

    // Supraaortic

    this.supraaorticLocalizationType = SupraaorticLocalizationTypeEnum.None;
    this.supraaorticHeadPathologyType = SupraaorticHeadPathologyTypeEnum.None;
    this.isCalvariaBone = false;
    this.isFacialSkull = false;
    this.isOrbita = false;
    this.isIntracranial = false;
    this.orbitaType = OrbitaTypeEnum.None;
    this.intracranialType = IntracranialTypeEnum.None;
    this.isSAH = false;
    this.isSDH = false;
    this.isEDH = false;
    this.isParenchymalHemorrhage = false;
    this.isMidlineShift = false;
    this.isImpairedVentilation = false;
    this.isInflammation = false;
    this.isGasFluidLevel = false;
    this.isCircular = false;
    this.neckSoftTissuePathologyType = NeckSoftTissuePathologyTypeEnum.None;
    this.isMedian = false;
    this.neckSoftTissueMassLocalization = NeckSoftTissueMassLocalizationTypeEnum.None;
    this.isWithRetrosternalParts = false;

    // Thoracic

    this.thoracicType = ThoracicTypeEnum.None;
    this.maxWidth = null;
    this.pericardialCalcificationsDetails = false;
    this.isPulmonaryArteryEmbolismCentral = false;
    this.isPulmonaryArteryEmbolismCentralRight = false;
    this.isPulmonaryArteryEmbolismCentralLeft = false;
    this.isPulmonaryArteryEmbolismSegmentalRight = false;
    this.isPulmonaryArteryEmbolismSegmentalLeft = false;
    this.isRidingThrombus = false;
    this.diameterCentralPulmonaryArtery = null;
    this.thoracicDiagnosisType = ThoracicDiagnosisTypeEnum.None;
    this.isNormVariantVesselsPulmonaryVeins = false;
    this.normVariantVesselsVariantsType = NormVariantVesselsVariantsTypeEnum.None;
    this.partialAnomalousPulmonaryVenousConnectionType = PartialAnomalousPulmonaryVenousConnectionTypeEnum.None;
    this.isSuperiorVenaCava = false;
    this.superiorVenaCavaType = SuperiorVenaCavaTypeEnum.None;
    this.isInferiorVenaCava = false;
    this.inferiorVenaCavaType = InferiorVenaCavaTypeEnum.None;
    this.isMediastinalShiftToTheOppositeSide = false;
    this.isCompleteAtelectasis = false;
    this.thoracicLocalizationType = ThoracicLocalizationTypeEnum.None;

    // Abdominal

    this.abdominalType = AbdominalTypeEnum.None;
    this.abdominalLocalizationType = AbdominalLocalizationTypeEnum.None;
    this.isAscitesHemoperitoneum = false;
    this.isAscitesSignificant = false;
    this.fractureLocalizationType = FractureLocalizationTypeEnum.None;
    this.isStatusPost = false;

    // Extremities

    this.extremitiesType = ExtremitiesTypeEnum.None;
    this.extremitiesMassLocalizationType = ExtremitiesMassLocalizationTypeEnum.None;
    this.compartmentType = CompartmentTypeEnum.None;
    this.extremitiesFractureLocalizationType = ExtremitiesFractureLocalizationTypeEnum.None;

    // Lymphadenopathy

    this.isCervical = false;
    this.isCervicalRight = false;
    this.isCervicalLeft = false;
    this.isThoracic = false;
    this.isMediastinal = false;
    this.isThoracicMediastinalRight = false;
    this.isThoracicMediastinalLeft = false;
    this.isPerihilar = false;
    this.isThoracicPerihilarRight = false;
    this.isThoracicPerihilarLeft = false;
    this.isAxillary = false;
    this.isAxillaryRight = false;
    this.isAxillaryLeft = false;
    this.isAbdominal = false;
    this.isRetroperitoneal = false;
    this.isIliac = false;
    this.isIliacRight = false;
    this.isIliacLeft = false;
    this.isInguinal = false;
    this.isInguinalRight = false;
    this.isInguinalLeft = false;
    this.maxDiameterSAD = null;
    this.morphologyType = MorphologyTypeEnum.None;
    this.isPreservedFattyHilum = false;
    this.isConfluent = false;
    this.isIncreasedInNumber = false;
    this.isSuspect = false;
  }
}
