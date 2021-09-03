import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisIndicationFindingTypeEnum } from '@enums/angiographyMRT/anamnesis/anamnesis-indication-finding-type.enum';
import { StadiumAccordingToFontaineTypeEnum } from '@enums/angiographyMRT/anamnesis/stadium-according-to-fontaine-type.enum';

export class AnamnesisIndicationFindingUiModel extends FindingBase {
  findingType: AnamnesisIndicationFindingTypeEnum;

  // PeripheralArteryDiseasePAD Aneurysm AorticIsthmusStenosis Vasculitis PenetratingAorticUlce IntramuralHematoma AorticDissection
  isSuspiciousFor: boolean;

  // PeripheralArteryDiseasePAD
  stadiumAccordingToFontaineType: StadiumAccordingToFontaineTypeEnum;

  // Aneurysm
  isIntracranial: boolean; // ang_m_020208
  isCervical: boolean; // ang_m_020209
  isCervicalRight: boolean; // ang_m_020225
  isCervicalLeft: boolean; // ang_m_020226
  isUpperLimb: boolean; // ang_m_020227
  isUpperLimbRight: boolean; // ang_m_020228
  isUpperLimbLeft: boolean; // ang_m_020229
  isChest: boolean; // ang_m_020230
  isAbdomen: boolean; // ang_m_020231
  isLowerLimb: boolean; // ang_m_020232
  isLowerLimbRight: boolean; // ang_m_020233
  isLowerLimbLeft: boolean; // ang_m_020234

  // RiskFactors
  isArterialHypertension: boolean; // ang_m_020213
  isDiabetesMellitus: boolean; // ang_m_020214
  isSmoking: boolean; // ang_m_020215
  isHyperlipidemia: boolean; // ang_m_020216
  isCollagenosis: boolean; // ang_m_020217
  isBicuspidAorticValve: boolean; // ang_m_020218
  isKnownLiverCirrhosis: boolean; // ang_m_020219
  isCocaine: boolean; // ang_m_020220

  constructor() {
    super();
    this.findingType = AnamnesisIndicationFindingTypeEnum.None;
    this.isSuspiciousFor = false;
    this.stadiumAccordingToFontaineType = StadiumAccordingToFontaineTypeEnum.None;

    this.isIntracranial = false;
    this.isCervical = false;
    this.isCervicalRight = false;
    this.isCervicalLeft = false;
    this.isUpperLimb = false;
    this.isUpperLimbRight = false;
    this.isUpperLimbLeft = false;
    this.isChest = false;
    this.isAbdomen = false;
    this.isLowerLimb = false;
    this.isLowerLimbRight = false;
    this.isLowerLimbLeft = false;
    this.isArterialHypertension = false;
    this.isDiabetesMellitus = false;
    this.isSmoking = false;
    this.isHyperlipidemia = false;
    this.isCollagenosis = false;
    this.isBicuspidAorticValve = false;
    this.isKnownLiverCirrhosis = false;
    this.isCocaine = false;
  }
}
