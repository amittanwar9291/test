import { ReportModelBase } from '@models/report-model-base';

import {
  BiRadsLevel4TypeEnum,
  FurtherActionTypeEnum,
  BiopsyLocalizationTypeEnum,
  BiopsyModalityTypeEnum,
  DateTypeEnum,
  LocationTypeEnum
} from '@enums/mammaMRT/rating';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class RatingUiModel extends ReportModelBase {
  acrDensityIndex: number;
  leftBiRads: number;
  leftBiRadsMultifocalType: SimpleAnswerEnum;
  leftBiRadsMulticentricType: SimpleAnswerEnum;
  leftBiRadsLevel4Type: BiRadsLevel4TypeEnum;
  rightBiRads: number;
  rightBiRadsMultifocalType: SimpleAnswerEnum;
  rightBiRadsMulticentricType: SimpleAnswerEnum;
  rightBiRadsLevel4Type: BiRadsLevel4TypeEnum;

  furtherActionType: FurtherActionTypeEnum;
  isEvaluationInTumorBoard: boolean;
  isBreastSurgeryConsultation: boolean;
  biopsyLocalizationType: BiopsyLocalizationTypeEnum;
  biopsyModalityType: BiopsyModalityTypeEnum;
  isUltrasound: boolean;
  ultrasoundDateType: DateTypeEnum;
  ultrasoundLocationType: LocationTypeEnum;
  isMammography: boolean;
  mammographyDateType: DateTypeEnum;
  mammographyLocationType: LocationTypeEnum;
  isMRI: boolean;
  mriDateType: DateTypeEnum;

  constructor() {
    super();

    this.acrDensityIndex = 0;
    this.leftBiRads = null;
    this.leftBiRadsMultifocalType = SimpleAnswerEnum.None;
    this.leftBiRadsMulticentricType = SimpleAnswerEnum.None;
    this.leftBiRadsLevel4Type = BiRadsLevel4TypeEnum.None;
    this.rightBiRads = null;
    this.rightBiRadsMultifocalType = SimpleAnswerEnum.None;
    this.rightBiRadsMulticentricType = SimpleAnswerEnum.None;
    this.rightBiRadsLevel4Type = BiRadsLevel4TypeEnum.None;

    this.furtherActionType = FurtherActionTypeEnum.None;
    this.isEvaluationInTumorBoard = false;
    this.isBreastSurgeryConsultation = false;
    this.biopsyLocalizationType = BiopsyLocalizationTypeEnum.None;
    this.biopsyModalityType = BiopsyModalityTypeEnum.None;
    this.isUltrasound = false;
    this.ultrasoundDateType = DateTypeEnum.None;
    this.ultrasoundLocationType = LocationTypeEnum.None;
    this.isMammography = false;
    this.mammographyDateType = DateTypeEnum.None;
    this.mammographyLocationType = LocationTypeEnum.None;
    this.isMRI = false;
    this.mriDateType = DateTypeEnum.None;
  }
}
