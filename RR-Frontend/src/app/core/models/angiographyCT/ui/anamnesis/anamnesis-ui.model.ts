import { ReportModelBase } from '@models/report-model-base';

import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class AnamnesisUiModel extends ReportModelBase {
  indicationFindings: IndicationFindingUiModel[];
  priorInterventionsFindings: PriorInterventionsFindingUiModel[];

  // Prior

  isMR: boolean;
  isMRAngiography: boolean;
  dataMRAngiography: MonthYearModel;
  isCT: boolean;
  isCTAngiography: boolean;
  dataCTAngiography: MonthYearModel;
  isDigitalSubtractionAngiography: boolean;
  dataDigitalSubtractionAngiography: MonthYearModel;
  isUS: boolean;
  isUSDopplerUltrasound: boolean;
  dataDopplerUltrasound: MonthYearModel;

  constructor() {
    super();
    this.indicationFindings = [new IndicationFindingUiModel()];
    this.priorInterventionsFindings = [new PriorInterventionsFindingUiModel()];

    // Prior

    this.isMR = false;
    this.isMRAngiography = false;
    this.dataMRAngiography = new MonthYearModel();
    this.isCT = false;
    this.isCTAngiography = false;
    this.dataCTAngiography = new MonthYearModel();
    this.isDigitalSubtractionAngiography = false;
    this.dataDigitalSubtractionAngiography = new MonthYearModel();
    this.isUS = false;
    this.isUSDopplerUltrasound = false;
    this.dataDopplerUltrasound = new MonthYearModel();
  }
}
