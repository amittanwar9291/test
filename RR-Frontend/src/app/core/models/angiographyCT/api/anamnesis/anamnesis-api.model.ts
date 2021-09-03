import { ReportModelBase } from '@models/report-model-base';
import { IndicationFindingApiModel } from '@models/angiographyCT/api/anamnesis/indication-finding-api.model';
import { PriorInterventionsFindingApiModel } from '@models/angiographyCT/api/anamnesis/prior-interventions-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  indicationFindings: IndicationFindingApiModel[];
  priorInterventionsFindings: PriorInterventionsFindingApiModel[];
  // Prior

  isMR: boolean;
  isMRAngiography: boolean;
  mrAngiographyMonth: number;
  mrAngiographyYear: number;
  isCT: boolean;
  isCTAngiography: boolean;
  ctAngiographyMonth: number;
  ctAngiographyYear: number;
  isDigitalSubtractionAngiography: boolean;
  digitalSubtractionAngiographyMonth: number;
  digitalSubtractionAngiographyYear: number;
  isUS: boolean;
  isUSDopplerUltrasound: boolean;
  dopplerUltrasoundMonth: number;
  dopplerUltrasoundYear: number;

  constructor() {
    super();
    this.indicationFindings = [new IndicationFindingApiModel()];
    this.priorInterventionsFindings = [new PriorInterventionsFindingApiModel()];

    // Prior

    this.isMR = false;
    this.isMRAngiography = false;
    this.mrAngiographyMonth = null;
    this.mrAngiographyYear = null;
    this.isCT = false;
    this.isCTAngiography = false;
    this.ctAngiographyMonth = null;
    this.ctAngiographyYear = null;
    this.isDigitalSubtractionAngiography = false;
    this.digitalSubtractionAngiographyMonth = null;
    this.digitalSubtractionAngiographyYear = null;
    this.isUS = false;
    this.isUSDopplerUltrasound = false;
    this.dopplerUltrasoundMonth = null;
    this.dopplerUltrasoundYear = null;
  }
}
