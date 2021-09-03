import { ReportModelBase } from '@models/report-model-base';
import { IndicationFindingUiModel } from '@models/cardioMRT/ui/anamnesis/indication-finding-ui.model';
import { InterventionOrPreOpsFindingUiModel } from '@models/cardioMRT/ui/anamnesis/intervention-or-pre-ops-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

import { EscScoreType, UnitTypeEnum } from '@enums/cardioMRT';

export class AnamnesisUiModel extends ReportModelBase {
  indicationFindings: IndicationFindingUiModel[];
  interventionOrPreOpsFindings: InterventionOrPreOpsFindingUiModel[];
  isMRIPreExamination: boolean;
  dateOfMRIPreExamination: MonthYearModel;

  isLaboratoryParameters: boolean;
  unitType: UnitTypeEnum;
  totalCholesterolAmount: number;
  hdlCholesterolAmount: number;
  ldlCholesterolAmount: number;
  triglyceridesAmount: number;
  hematocritInPercent: number;
  isNicotineAbuse: boolean;
  isDiabetesMellitus: boolean;
  isRenalInsufficiency: boolean;
  egfrInMlMin: number;
  isPositiveFamilyHistory: boolean;
  isArterialHypertension: boolean;
  isCurrentAntihypertensiveTherapy: boolean;
  systolicbloodpressureInMmHg: number;
  isEscScore: boolean;
  escScore: number;
  isProcamScore: boolean;
  procamScore: number;
  escScoreType: EscScoreType;

  constructor() {
    super();

    this.indicationFindings = [new IndicationFindingUiModel()];
    this.interventionOrPreOpsFindings = [new InterventionOrPreOpsFindingUiModel()];
    this.isMRIPreExamination = false;
    this.dateOfMRIPreExamination = new MonthYearModel();

    this.isLaboratoryParameters = false;
    this.unitType = UnitTypeEnum.None;
    this.totalCholesterolAmount = null;
    this.hdlCholesterolAmount = null;
    this.ldlCholesterolAmount = null;
    this.triglyceridesAmount = null;
    this.hematocritInPercent = null;
    this.isNicotineAbuse = false;
    this.isDiabetesMellitus = false;
    this.isRenalInsufficiency = false;
    this.egfrInMlMin = null;
    this.isPositiveFamilyHistory = false;
    this.isArterialHypertension = false;
    this.isCurrentAntihypertensiveTherapy = false;
    this.systolicbloodpressureInMmHg = null;
    this.isEscScore = false;
    this.escScore = null;
    this.isProcamScore = false;
    this.procamScore = null;
    this.escScoreType = EscScoreType.None;
  }
}
