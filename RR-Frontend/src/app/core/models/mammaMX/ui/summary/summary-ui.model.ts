import { ReportModelBase } from '@models/report-model-base';
import { CorrelationUiModel } from '@models/shared/page-correlation/ui/correlation-ui.model';

import { BiopsyLocalizationType, BiopsyModalityType, BiRadsLevel4TypeEnum, CourseOfDiseaseType } from '@enums/mammaMX/summary';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class SummaryUiModel extends ReportModelBase {
  // Bi-rads
  parenchymaDensityRight: string;
  parenchymaDensityLeft: string;
  leftBiRads: number;
  leftBiRadsMultifocalType: SimpleAnswerEnum;
  leftBiRadsMulticentricType: SimpleAnswerEnum;
  leftBiRadsLevel4Type: BiRadsLevel4TypeEnum;
  rightBiRads: number;
  rightBiRadsMultifocalType: SimpleAnswerEnum;
  rightBiRadsMulticentricType: SimpleAnswerEnum;
  rightBiRadsLevel4Type: BiRadsLevel4TypeEnum;

  findingRelations: CorrelationUiModel[];

  // Dynamics of findings & Procedure column
  courseOfDiseaseType: CourseOfDiseaseType;
  procedureFindingType: string;
  biopsyLocalizationType: BiopsyLocalizationType;
  biopsyModalityType: BiopsyModalityType;
  isStereotactic: boolean;
  isVacuumPunchBiopsy: boolean;
  isUltrasound: boolean;
  ultrasoundDate: string;
  ultrasoundStrategy: string;
  isMammography: boolean;
  mammographyDate: string;
  mammographyStrategy: string;
  isMRI: boolean;
  mriDate: string;

  constructor() {
    super();

    // Bi-rads
    this.parenchymaDensityRight = null;
    this.parenchymaDensityLeft = null;
    this.leftBiRads = null;
    this.leftBiRadsMultifocalType = SimpleAnswerEnum.None;
    this.leftBiRadsMulticentricType = SimpleAnswerEnum.None;
    this.leftBiRadsLevel4Type = BiRadsLevel4TypeEnum.None;
    this.rightBiRads = null;
    this.rightBiRadsMultifocalType = SimpleAnswerEnum.None;
    this.rightBiRadsMulticentricType = SimpleAnswerEnum.None;
    this.rightBiRadsLevel4Type = BiRadsLevel4TypeEnum.None;

    this.findingRelations = [];

    // Dynamics of findings & Procedure column
    this.courseOfDiseaseType = CourseOfDiseaseType.None;
    this.procedureFindingType = 'None';
    this.biopsyLocalizationType = BiopsyLocalizationType.None;
    this.biopsyModalityType = BiopsyModalityType.None;
    this.isStereotactic = false;
    this.isVacuumPunchBiopsy = false;
    this.isUltrasound = false;
    this.ultrasoundDate = 'None';
    this.ultrasoundStrategy = 'None';
    this.isMammography = false;
    this.mammographyDate = 'None';
    this.mammographyStrategy = 'None';
    this.isMRI = false;
    this.mriDate = 'None';
  }
}
