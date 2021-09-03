import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisDetailsType, EndoprosthesisType, FrequencyType, InstabilityType, TherapyType } from '@enums/shoulderMRT/anamnesis';

export class AnamnesisApi extends ReportModelBase {
  isLuxation: boolean;
  frequency: FrequencyType;
  details: AnamnesisDetailsType;
  therapy: TherapyType;
  monthOfLuxation: number;
  yearOfLuxation: number;
  isFracture: boolean;
  isLocalizationHumeralHead: boolean;
  isLocalizationScapula: boolean;
  isGlenoid: boolean;
  isLocalizationClavicle: boolean;
  monthOfFracture: number;
  yearOfFracture: number;
  isSupraspinatus: boolean;
  isInfraspinatus: boolean;
  isSubscapularis: boolean;
  isTeresMinor: boolean;
  isBicepsCaputLongum: boolean;
  isAcromioplasty: boolean;
  isBalloonSpacer: boolean;
  isLabralReconstruction: boolean;
  isBicepsTendonReconstruction: boolean;
  isOsteosynthesisHumeralHead: boolean;
  isOsteosynthesisClavicle: boolean;
  isOsteosynthesisScapula: boolean;
  isEndoprosthesis: boolean;
  endoprosthesis: EndoprosthesisType;
  isOther: boolean;
  isInstability: boolean;
  instability: InstabilityType;
  isImpingement: boolean;
  isProfessionalOverheadWork: boolean;
  isPowerSports: boolean;
  areOverheadSports: boolean;
  monthOfMRIPreliminaryExamination: number;
  yearOfMRIPreliminaryExamination: number;

  constructor() {
    super();

    this.isLuxation = false;
    this.frequency = FrequencyType.None;
    this.details = AnamnesisDetailsType.None;
    this.therapy = TherapyType.None;
    this.monthOfLuxation = 0;
    this.yearOfLuxation = 0;
    this.isFracture = false;
    this.isLocalizationHumeralHead = false;
    this.isLocalizationScapula = false;
    this.isGlenoid = false;
    this.isLocalizationClavicle = false;
    this.monthOfFracture = 0;
    this.yearOfFracture = 0;
    this.isSupraspinatus = false;
    this.isInfraspinatus = false;
    this.isSubscapularis = false;
    this.isTeresMinor = false;
    this.isBicepsCaputLongum = false;
    this.isAcromioplasty = false;
    this.isBalloonSpacer = false;
    this.isLabralReconstruction = false;
    this.isBicepsTendonReconstruction = false;
    this.isOsteosynthesisHumeralHead = false;
    this.isOsteosynthesisClavicle = false;
    this.isOsteosynthesisScapula = false;
    this.isEndoprosthesis = false;
    this.endoprosthesis = EndoprosthesisType.None;
    this.isOther = false;
    this.isInstability = false;
    this.instability = InstabilityType.None;
    this.isImpingement = false;
    this.isProfessionalOverheadWork = false;
    this.isPowerSports = false;
    this.areOverheadSports = false;
    this.monthOfMRIPreliminaryExamination = 0;
    this.yearOfMRIPreliminaryExamination = 0;
  }
}