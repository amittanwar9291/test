import { ReportModelBase } from '@models/report-model-base';

import {
  AxillaryLymphNodesTypeEnum,
  BreastDetailTypeEnum,
  DifferentialDiagnosisTypeEnum,
  FocalLiverLesionTypeEnum,
  LiverLesionBenigneTypeEnum,
  LungDiseaseTypeEnum,
  OtherLymphNodesTypeEnum
} from '@enums/mammaMRT/lymph-node';

export class LymphNodeUiModel extends ReportModelBase {
  axillaryLymphNodesType: AxillaryLymphNodesTypeEnum;
  isRightAxillary: boolean;
  rightAxillaryShortAxis: number;
  isRightAxillaryLevelI: boolean;
  isRightAxillaryLevelII: boolean;
  isRightAxillaryLevelIII: boolean;
  isLeftAxillary: boolean;
  leftAxillaryShortAxis: number;
  isLeftAxillaryLevelI: boolean;
  isLeftAxillaryLevelII: boolean;
  isLeftAxillaryLevelIII: boolean;

  otherLymphNodesType: OtherLymphNodesTypeEnum;
  cervicalMaxShortAxisInMm: number;
  isRightCervical: boolean;
  isLeftCervical: boolean;
  isRightParasternal: boolean;
  isLeftParasternal: boolean;

  isEnlarged: boolean;
  isThyroidNodule: boolean;
  focalLiverLesionType: FocalLiverLesionTypeEnum;
  liverLesionBenigneType: LiverLesionBenigneTypeEnum;
  isOverOneLesionsOfSameEntity: boolean;

  lungDiseaseType: LungDiseaseTypeEnum;
  maxDiameterAxialInMm: number;
  rightBreastDetailType: BreastDetailTypeEnum;
  leftBreastDetailType: BreastDetailTypeEnum;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  isPleura: boolean;
  isPericardium: boolean;
  isBones: boolean;
  isMediastinum: boolean;
  isSuspected: boolean;

  isLocalizationRight: boolean;
  isLocalizationLeft: boolean;

  constructor() {
    super();

    this.axillaryLymphNodesType = AxillaryLymphNodesTypeEnum.None;
    this.isRightAxillary = false;
    this.rightAxillaryShortAxis = null;
    this.isRightAxillaryLevelI = false;
    this.isRightAxillaryLevelII = false;
    this.isRightAxillaryLevelIII = false;
    this.isLeftAxillary = false;
    this.leftAxillaryShortAxis = null;
    this.isLeftAxillaryLevelI = false;
    this.isLeftAxillaryLevelII = false;
    this.isLeftAxillaryLevelIII = false;

    this.otherLymphNodesType = OtherLymphNodesTypeEnum.None;
    this.cervicalMaxShortAxisInMm = null;
    this.isRightCervical = false;
    this.isLeftCervical = false;
    this.isRightParasternal = false;
    this.isLeftParasternal = false;

    this.isEnlarged = false;
    this.isThyroidNodule = false;
    this.focalLiverLesionType = FocalLiverLesionTypeEnum.None;
    this.liverLesionBenigneType = LiverLesionBenigneTypeEnum.None;
    this.isOverOneLesionsOfSameEntity = false;

    this.lungDiseaseType = LungDiseaseTypeEnum.None;
    this.maxDiameterAxialInMm = null;
    this.rightBreastDetailType = BreastDetailTypeEnum.None;
    this.leftBreastDetailType = BreastDetailTypeEnum.None;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.isPleura = false;
    this.isPericardium = false;
    this.isBones = false;
    this.isMediastinum = false;
    this.isSuspected = false;

    this.isLocalizationRight = false;
    this.isLocalizationLeft = false;
  }
}
