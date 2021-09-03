import { ReportModelBase } from '@models/report-model-base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AfterTransplantationTypeEnum } from '@enums/angiographyMRT/anamnesis/after-transplantation-type.enum';
import { AnamnesisIndicationFindingUiModel } from '@models/angiographyMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';

export class AnamnesisUiModel extends ReportModelBase {
  findings: AnamnesisIndicationFindingUiModel[];
  isPTAOrStentImplantation: boolean; // ang_m_020303
  isBypass: boolean; // ang_m_020304
  isLysis: boolean; // ang_m_020305
  isAfterTransplantation: boolean; // ang_m_020306
  afterTransplantationType: AfterTransplantationTypeEnum;
  isValveSurgery: boolean; // ang_m_020309
  isMRAngiography: boolean; // ang_m_020403
  dateMRAngiography: MonthYearModel; // ang_m_020405
  isCTAngiography: boolean; // ang_m_020407
  dateCTAngiography: MonthYearModel; // ang_m_020409
  isDigitalSubtractionAngiography: boolean; // ang_m_020411
  dateDigitalSubtractionAngiography: MonthYearModel; // ang_m_020413

  constructor() {
    super();
    this.findings = [new AnamnesisIndicationFindingUiModel()];
    this.isPTAOrStentImplantation = false;
    this.isBypass = false;
    this.isLysis = false;
    this.isAfterTransplantation = false;
    this.afterTransplantationType = AfterTransplantationTypeEnum.None;
    this.isValveSurgery = false;
    this.isMRAngiography = false;
    this.dateMRAngiography = new MonthYearModel();
    this.isCTAngiography = false;
    this.dateCTAngiography = new MonthYearModel();
    this.isDigitalSubtractionAngiography = false;
    this.dateDigitalSubtractionAngiography = new MonthYearModel();
  }
}
