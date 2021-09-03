import { ReportModelBase } from '@models/report-model-base';

export class SummaryApiModel extends ReportModelBase {
  differentialDiagnosis01: string;
  isSuspicionOf: boolean;
  isEvaluationARVCAccordingToTaskForceCriteria: boolean;
  isMajorCriteria: boolean;
  isMinorCriteria: boolean;
  isDifferentialDiagnosisTo01: boolean;
  differentialDiagnosisTo01: string;
  isSubordinated: boolean;
  isDifferentialDiagnosis02: boolean;
  differentialDiagnosis02: string;
  isCoronaryCTAngiography: boolean;
  isCTAngiographyThoracicAorta: boolean;
  isCTAngiographyOfThePulmonaryArtery: boolean;
  isCTThorax: boolean;
  isContrastEnhancedThorax: boolean;
  isCTAbdomen: boolean;
  isContrastEnhancedAbdomen: boolean;
  isEchocardiography: boolean;
  isStressCardiacMRI: boolean;
  isMRAngiographyThoracicAorta: boolean;
  isMRAbdomen: boolean;
  isContrastEnhanced: boolean;
  isMyocardialScintigraphyMyocardialSPEC: boolean;
  isUnderStress: boolean;
  isCardailePETCT: boolean;
  isFollowupCardioMRT: boolean;
  followUpTime: string;

  constructor() {
    super();

    this.differentialDiagnosis01 = 'None';
    this.isSuspicionOf = false;
    this.isEvaluationARVCAccordingToTaskForceCriteria = false;
    this.isMajorCriteria = false;
    this.isMinorCriteria = false;
    this.isDifferentialDiagnosisTo01 = false;
    this.differentialDiagnosisTo01 = 'None';
    this.isSubordinated = false;
    this.isDifferentialDiagnosis02 = false;
    this.differentialDiagnosis02 = 'None';
    this.isCoronaryCTAngiography = false;
    this.isCTAngiographyThoracicAorta = false;
    this.isCTAngiographyOfThePulmonaryArtery = false;
    this.isCTThorax = false;
    this.isContrastEnhancedThorax = false;
    this.isCTAbdomen = false;
    this.isContrastEnhancedAbdomen = false;
    this.isEchocardiography = false;
    this.isStressCardiacMRI = false;
    this.isMRAngiographyThoracicAorta = false;
    this.isMRAbdomen = false;
    this.isContrastEnhanced = false;
    this.isMyocardialScintigraphyMyocardialSPEC = false;
    this.isUnderStress = false;
    this.isCardailePETCT = false;
    this.isFollowupCardioMRT = false;
    this.followUpTime = 'None';
  }
}
