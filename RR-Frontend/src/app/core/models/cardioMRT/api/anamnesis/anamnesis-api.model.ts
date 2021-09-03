import { ReportModelBase } from '@models/report-model-base';
import { IndicationFindingApiModel } from '@models/cardioMRT/api/anamnesis/indication-finding.api.model';
import { InterventionOrPreOpsFindingApiModel } from '@models/cardioMRT/api/anamnesis/intervention-or-pre-ops-finding-api.model';

import { EscScoreType, UnitTypeEnum } from '@enums/cardioMRT';

export class AnamnesisApiModel extends ReportModelBase {
  indicationFindings: IndicationFindingApiModel[];
  interventionOrPreOpsFindings: InterventionOrPreOpsFindingApiModel[];
  isMRIPreExamination: boolean;
  monthOfMRIPreExamination: number;
  yearOfMRIPreExamination: number;

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

    this.indicationFindings = [new IndicationFindingApiModel()];
    this.interventionOrPreOpsFindings = [new InterventionOrPreOpsFindingApiModel()];
    this.isMRIPreExamination = false;
    this.monthOfMRIPreExamination = 0;
    this.yearOfMRIPreExamination = 0;

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
