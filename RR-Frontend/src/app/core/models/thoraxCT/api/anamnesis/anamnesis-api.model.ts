import { IndicationTypeEnum } from '@enums/thoraxCT/anamnesis/indication-type.enum';
import { PcrTestForSarsCov2TypeEnum } from '@enums/thoraxCT/anamnesis/pcr-test-for-sars-cov2-type.enum';
import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisFindingApiModel } from '@models/thoraxCT/api/anamnesis/anamnesis-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  indicationType: IndicationTypeEnum;
  isSuspected: boolean;
  pcrTestForSARSCoV2Type: PcrTestForSarsCov2TypeEnum;
  ageOfTestInDays: number;
  isCTPreliminaryExamination: boolean;
  ctPreliminaryExaminationMonth: number;
  ctPreliminaryExaminationYear: number;
  isMRIPreliminaryExamination: boolean;
  mriPreliminaryExaminationMonth: number;
  mriPreliminaryExaminationYear: number;
  findings: AnamnesisFindingApiModel[];

  constructor() {
    super();
    this.indicationType = IndicationTypeEnum.None;
    this.isSuspected = false;
    this.pcrTestForSARSCoV2Type = PcrTestForSarsCov2TypeEnum.None;
    this.ageOfTestInDays = null;
    this.isCTPreliminaryExamination = false;
    this.ctPreliminaryExaminationMonth = null;
    this.ctPreliminaryExaminationYear = null;
    this.isMRIPreliminaryExamination = false;
    this.mriPreliminaryExaminationMonth = null;
    this.mriPreliminaryExaminationYear = null;
    this.findings = [];
  }
}
