import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisIndicationFindingApiModel } from '@models/angiographyMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { AfterTransplantationTypeEnum } from '@enums/angiographyMRT/anamnesis/after-transplantation-type.enum';

export class AnamnesisApiModel extends ReportModelBase {
  findings: AnamnesisIndicationFindingApiModel[];
  isPTAOrStentImplantation: boolean; // ang_m_020303
  isBypass: boolean; // ang_m_020304
  isLysis: boolean; // ang_m_020305
  isAfterTransplantation: boolean; // ang_m_020306
  afterTransplantationType: AfterTransplantationTypeEnum;
  isValveSurgery: boolean; // ang_m_020309
  isMRAngiography: boolean; // ang_m_020403
  monthMRAngiography: number; // ang_m_020405
  yearMRAngiography: number; // ang_m_020406
  isCTAngiography: boolean; // ang_m_020407
  monthCTAngiography: number; // ang_m_020409
  yearCTAngiography: number; // ang_m_020410
  isDigitalSubtractionAngiography: boolean; // ang_m_020411
  monthDigitalSubtractionAngiography: number; // ang_m_020413
  yearDigitalSubtractionAngiography: number; // ang_m_020414

  constructor() {
    super();
    this.findings = [];
    this.isPTAOrStentImplantation = false;
    this.isBypass = false;
    this.isLysis = false;
    this.isAfterTransplantation = false;
    this.afterTransplantationType = AfterTransplantationTypeEnum.None;
    this.isValveSurgery = false;
    this.isMRAngiography = false;
    this.monthMRAngiography = 0;
    this.yearMRAngiography = 0;
    this.isCTAngiography = false;
    this.monthCTAngiography = 0;
    this.yearCTAngiography = 0;
    this.isDigitalSubtractionAngiography = false;
    this.monthDigitalSubtractionAngiography = 0;
    this.yearDigitalSubtractionAngiography = 0;
  }
}
