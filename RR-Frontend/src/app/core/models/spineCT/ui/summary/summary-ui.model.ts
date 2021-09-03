import { ReportModelBase } from '@models/report-model-base';
import { PainTherapyInterventionalTypeEnum } from '@enums/spineCT/summary/pain-therapy-interventional-type.enum';
import { FindingsDynamicsTypeEnum } from '@enums/spineCT/summary/findings-dynamics-type.enum';

export class SummaryUiModel extends ReportModelBase {
  isComplementaryImaging: boolean;
  isMRTCervicalSpine: boolean;
  isMRTThoracicSpine: boolean;
  isMRTLumbarSpine: boolean;
  isMRTSacroiliacJoint: boolean;
  isWithIVContrastAgent: boolean;
  isPETCT: boolean;
  isBoneScintigraphy: boolean;
  isConsultationNeurology: boolean;
  isConsultationNeurosurgery: boolean;
  isConsultationOrthopedics: boolean;
  isConsultationPainTherapist: boolean;
  isPainTherapyInterventional: boolean;
  painTherapyInterventionalType: PainTherapyInterventionalTypeEnum;
  isISGInfiltrationRight: boolean;
  isISGInfiltrationLeft: boolean;
  isBiopsyRecommended: boolean;
  findingsDynamicsType: FindingsDynamicsTypeEnum;

  constructor() {
    super();

    this.isComplementaryImaging = false;
    this.isMRTCervicalSpine = false;
    this.isMRTThoracicSpine = false;
    this.isMRTLumbarSpine = false;
    this.isMRTSacroiliacJoint = false;
    this.isWithIVContrastAgent = false;
    this.isPETCT = false;
    this.isBoneScintigraphy = false;
    this.isConsultationNeurology = false;
    this.isConsultationNeurosurgery = false;
    this.isConsultationOrthopedics = false;
    this.isConsultationPainTherapist = false;
    this.isPainTherapyInterventional = false;
    this.painTherapyInterventionalType = PainTherapyInterventionalTypeEnum.None;
    this.isISGInfiltrationRight = false;
    this.isISGInfiltrationLeft = false;
    this.isBiopsyRecommended = false;
    this.findingsDynamicsType = FindingsDynamicsTypeEnum.None;
  }
}
