import { FindingBase } from '@models/shared/finding/finding.base';

import { OuterbridgeClassicifationTypeEnum } from '@enums/kneeMRT/outerbridge-classicifation-type.enum';
import {
  AdditionalOssificationTypeEnum,
  InsallSalvatiIndexTypeEnum,
  TrochleaDysplasiaTypeEnum,
  TtTgDistanceTypeEnum,
  VerticalPositionTypeEnum,
  VisualSelectionTypeEnum
} from '@enums/kneeMRT/patella/anatomical-variants';
import { MorphologyTypeEnum } from '@enums/kneeMRT/patella/retropatellar-chondropathy';
import { MedialPatelloFemoralRuptureTypeEnum, PatellaPositionTypeEnum } from '@enums/kneeMRT/patella/rupture-medial-retinaculum';
import {
  ClassificationRegardingJointsTypeEnum,
  PatellaClassificationTypeEnum,
  PatellaDetectionDissekatTypeEnum
} from '@enums/kneeMRT/patella/osteochondrosis-dissecans';
import { PatellaFindingTypeEnum } from '@enums/kneeMRT/patella/patella-finding-type.enum';

export class PatellaFindingUiModel extends FindingBase {
  findingType: PatellaFindingTypeEnum;

  isAccessoryOssificationCenters: boolean;
  additionalOssificationType: AdditionalOssificationTypeEnum;
  isVerticalPosition: boolean;
  verticalPositionType: VerticalPositionTypeEnum;
  visualSelectionType: VisualSelectionTypeEnum;
  largestVerticalExpansionPatella: number;
  lengthPatellae: number;
  insallSalvatiIndex: number;
  insallSalvatiIndexType: InsallSalvatiIndexTypeEnum;
  isSulcusAngleTrochlea: boolean;
  sulcusAngleTrochleaInDegrees: number;
  isTrochleaDysplasia: boolean;
  isTrochleadysplasia: boolean;
  trochleadysplasiaType: TrochleaDysplasiaTypeEnum;
  isTtTgDistance: boolean;
  ttTgDistanceInMm: number;
  ttTgDistanceType: TtTgDistanceTypeEnum;
  isPlicaMediopatellaris: boolean;
  plicaMediopatellarisWidthInMm: number;
  isExtendingIntoThePrecondylarSpace: boolean;
  isMediopatellarisChondropathyMedialPatella: boolean;
  isMediopatellarisChondropathyMedialTrochlearand: boolean;
  isPlicaLateralisPatellae: boolean;
  plicaLateralisPatellaeWidthInMm: number;
  isLateralisReachesToPrekondylar: boolean;
  isLateralisChondropathyMedialPatella: boolean;
  isLateralisChondropathyMedialTrochlearand: boolean;

  isMedialFacet: boolean;
  isPatellaRidge: boolean;
  isLateralFacet: boolean;
  outerbridgeClassificationType: OuterbridgeClassicifationTypeEnum;
  expansivenessMaxDiameterInMm: number;
  morphologyType: MorphologyTypeEnum;
  isChondrocalcinosis: boolean;

  isContusionEdemaMedial: boolean;
  isAvulsionMedialPatella: boolean;
  isContusionEdemaLateral: boolean;
  isSoftPartEdema: boolean;
  isOsteochondralLesionInferomedial: boolean;
  isOsteochondralLesionLateral: boolean;
  isLooseBody: boolean;
  isMedialPatellofemoralRupture: boolean;
  medialPatellofemoralRuptureType: MedialPatelloFemoralRuptureTypeEnum;
  patellaPositionType: PatellaPositionTypeEnum;

  classificationType: PatellaClassificationTypeEnum;
  isBoneMarrowEdema: boolean;
  detectionDissekatType: PatellaDetectionDissekatTypeEnum;
  classificationRegardingJointsType: ClassificationRegardingJointsTypeEnum;
  isLesionDiameter: boolean;
  lesionDiameterInMm: number;
  isOldLesion: boolean;

  constructor() {
    super();

    this.findingType = PatellaFindingTypeEnum.None;

    this.isAccessoryOssificationCenters = false;
    this.additionalOssificationType = AdditionalOssificationTypeEnum.None;
    this.isVerticalPosition = false;
    this.verticalPositionType = VerticalPositionTypeEnum.None;
    this.visualSelectionType = VisualSelectionTypeEnum.None;
    this.largestVerticalExpansionPatella = null;
    this.lengthPatellae = null;
    this.insallSalvatiIndex = null;
    this.insallSalvatiIndexType = InsallSalvatiIndexTypeEnum.None;
    this.isSulcusAngleTrochlea = false;
    this.sulcusAngleTrochleaInDegrees = null;
    this.isTrochleaDysplasia = false;
    this.isTrochleadysplasia = false;
    this.trochleadysplasiaType = TrochleaDysplasiaTypeEnum.None;
    this.isTtTgDistance = false;
    this.ttTgDistanceInMm = null;
    this.ttTgDistanceType = TtTgDistanceTypeEnum.None;
    this.isPlicaMediopatellaris = false;
    this.plicaMediopatellarisWidthInMm = null;
    this.isExtendingIntoThePrecondylarSpace = false;
    this.isMediopatellarisChondropathyMedialPatella = false;
    this.isMediopatellarisChondropathyMedialTrochlearand = false;
    this.isPlicaLateralisPatellae = false;
    this.plicaLateralisPatellaeWidthInMm = null;
    this.isLateralisReachesToPrekondylar = false;
    this.isLateralisChondropathyMedialPatella = false;
    this.isLateralisChondropathyMedialTrochlearand = false;

    this.isMedialFacet = false;
    this.isPatellaRidge = false;
    this.isLateralFacet = false;
    this.outerbridgeClassificationType = OuterbridgeClassicifationTypeEnum.None;
    this.expansivenessMaxDiameterInMm = null;
    this.morphologyType = MorphologyTypeEnum.None;
    this.isChondrocalcinosis = false;

    this.isContusionEdemaMedial = false;
    this.isAvulsionMedialPatella = false;
    this.isContusionEdemaLateral = false;
    this.isSoftPartEdema = false;
    this.isOsteochondralLesionInferomedial = false;
    this.isOsteochondralLesionLateral = false;
    this.isLooseBody = false;
    this.isMedialPatellofemoralRupture = false;
    this.medialPatellofemoralRuptureType = MedialPatelloFemoralRuptureTypeEnum.None;
    this.patellaPositionType = PatellaPositionTypeEnum.None;

    this.classificationType = PatellaClassificationTypeEnum.None;
    this.isBoneMarrowEdema = false;
    this.detectionDissekatType = PatellaDetectionDissekatTypeEnum.None;
    this.classificationRegardingJointsType = ClassificationRegardingJointsTypeEnum.None;
    this.isLesionDiameter = false;
    this.lesionDiameterInMm = null;
    this.isOldLesion = false;
  }
}
