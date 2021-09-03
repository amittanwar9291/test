import { FindingBase } from '@models/shared/finding/finding.base';
import { ClinicalSymptomType } from '@enums/headCT/anamnesis/clinical-symptom-type.enum';
import { CharacterizationTypeEnum } from '@enums/headCT/anamnesis/characterization-type.enum';
import { VertigoTypeEnum } from '@enums/headCT/anamnesis/vertigo-type.enum';
import { VisualDisturbanceTypeEnum } from '@enums/headCT/anamnesis/visual-disturbances-type.enum';
import { CognitiveChangeTypeEnum } from '@enums/headCT/anamnesis/cognitive-changes-type.enum';
import { AlteredStateOfConsciousnessTypeEnum } from '@enums/headCT/anamnesis/disorders-of-consciousness-type.enum';
import { MotorDeficitTypeEnum } from '@enums/headCT/anamnesis/motor-deficit-type.enum';
import { LocalizationTypeEnum } from '@enums/headCT/anamnesis/localization-type.enum';
import { CranialNervesTypeEnum } from '@enums/headCT/anamnesis/cranial-nerves-type.enum';
import { OlfactoryNerveDetailsTypeEnum } from '@enums/headCT/anamnesis/olfactory-nerve-details-type.enum';
import { FacialNervePalsyDetailsTypeEnum } from '@enums/headCT/anamnesis/facial-nerve-palsy-details-type.enum';
import { DysesthesiaTypeEnum } from '@enums/headCT/anamnesis/dysesthesia-type.enum';
import { TremorTypeEnum } from '@enums/headCT/anamnesis/tremor-type.enum';
import { AtaxiaTypeEnum } from '@enums/headCT/anamnesis/ataxia-type.enum';
import { SpeechDisorderTypeEnum } from '@enums/headCT/anamnesis/speech-disorder-type.enum';
import { NystagmusTypeEnum } from '@enums/headCT/anamnesis/nystagmus-type.enum';
import { CentralEndocrineDisorderTypeEnum } from '@enums/headCT/anamnesis/central-endocrine-cisorder-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

export class ClinicSymptomsFindingUiModel extends FindingBase {
  findingType: ClinicalSymptomType;

  isRight: boolean;
  isLeft: boolean;
  sideType: SideTypeEnum;
  characterizationType: CharacterizationTypeEnum;
  isThunderclapHeadache: boolean;
  vertigoType: VertigoTypeEnum;
  visualDisturbanceType: VisualDisturbanceTypeEnum;
  cognitiveChangeType: CognitiveChangeTypeEnum;
  alteredStateOfConsciousnessType: AlteredStateOfConsciousnessTypeEnum;
  isHeadache: boolean;
  isNauseaVomiting: boolean;
  isDisorderOfConsciousnessComa: boolean;
  isPapilledema: boolean;
  isMeningism: boolean;
  isFever: boolean;
  isPhotophobia: boolean;
  isNausea: boolean;
  motorDeficitType: MotorDeficitTypeEnum;
  localizationType: LocalizationTypeEnum;
  cranialNervesType: CranialNervesTypeEnum;
  olfactoryNerveDetailsType: OlfactoryNerveDetailsTypeEnum;
  facialNervePalsyDetailsType: FacialNervePalsyDetailsTypeEnum;
  dysesthesiaType: DysesthesiaTypeEnum;
  tremorType: TremorTypeEnum;
  ataxiaType: AtaxiaTypeEnum;
  speechDisorderType: SpeechDisorderTypeEnum;
  isHearingLoss: boolean;
  isHyperacusis: boolean;
  isHypoacusis: boolean;
  isConductiveHearingLoss: boolean;
  isHypoakusisSensorineuralHearingLoss: boolean;
  isTinnitus: boolean;
  isPulsatile: boolean;
  isSensorineuralHearingLoss: boolean;
  isAnisocoria: boolean;
  isMydriasis: boolean;
  isMyosis: boolean;
  isPtosis: boolean;
  isEnophthalmos: boolean;
  isExophthalmos: boolean;
  nystagmusType: NystagmusTypeEnum;
  centralEndocrineDisorderType: CentralEndocrineDisorderTypeEnum;
  isPersonalityChanges: boolean;

  constructor() {
    super();
    this.findingType = ClinicalSymptomType.None;
    this.isRight = false;
    this.isLeft = false;
    this.sideType = SideTypeEnum.None;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.isThunderclapHeadache = false;
    this.vertigoType = VertigoTypeEnum.None;
    this.visualDisturbanceType = VisualDisturbanceTypeEnum.None;
    this.cognitiveChangeType = CognitiveChangeTypeEnum.None;
    this.alteredStateOfConsciousnessType = AlteredStateOfConsciousnessTypeEnum.None;
    this.isHeadache = false;
    this.isNauseaVomiting = false;
    this.isDisorderOfConsciousnessComa = false;
    this.isPapilledema = false;
    this.isMeningism = false;
    this.isFever = false;
    this.isPhotophobia = false;
    this.isNausea = false;
    this.motorDeficitType = MotorDeficitTypeEnum.None;
    this.localizationType = LocalizationTypeEnum.None;
    this.cranialNervesType = CranialNervesTypeEnum.None;
    this.olfactoryNerveDetailsType = OlfactoryNerveDetailsTypeEnum.None;
    this.facialNervePalsyDetailsType = FacialNervePalsyDetailsTypeEnum.None;
    this.dysesthesiaType = DysesthesiaTypeEnum.None;
    this.tremorType = TremorTypeEnum.None;
    this.ataxiaType = AtaxiaTypeEnum.None;
    this.speechDisorderType = SpeechDisorderTypeEnum.None;
    this.isHearingLoss = false;
    this.isHyperacusis = false;
    this.isHypoacusis = false;
    this.isConductiveHearingLoss = false;
    this.isHypoakusisSensorineuralHearingLoss = false;
    this.isTinnitus = false;
    this.isPulsatile = false;
    this.isSensorineuralHearingLoss = false;
    this.isAnisocoria = false;
    this.isMydriasis = false;
    this.isMyosis = false;
    this.isPtosis = false;
    this.isEnophthalmos = false;
    this.isExophthalmos = false;
    this.nystagmusType = NystagmusTypeEnum.None;
    this.centralEndocrineDisorderType = CentralEndocrineDisorderTypeEnum.None;
    this.isPersonalityChanges = false;
  }
}