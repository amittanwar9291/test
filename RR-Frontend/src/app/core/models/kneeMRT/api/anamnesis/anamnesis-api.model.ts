import { ReportModelBase } from '@models/report-model-base';

import {
  TraumaTypeEnum,
  TraumaVelocityTypeEnum,
  CartilageTransplantationTypeEnum,
  InstabilityLocalizationTypeEnum,
  KneePainLocalizationTypeEnum
} from '@enums/kneeMRT/anamnesis/';

export class AnamnesisApiModel extends ReportModelBase {
  isTrauma: boolean;
  traumaType: TraumaTypeEnum;
  traumaVelocityType: TraumaVelocityTypeEnum;
  monthOfPeriodTrauma: number;
  yearOfPeriodTrauma: number;

  isLuxationPatella: boolean;
  monthOfLuxation: number;
  yearOfLuxation: number;
  isFracture: boolean;
  isFemur: boolean;
  isTibia: boolean;
  isFibula: boolean;
  isPatella: boolean;

  isLigamentReconstruction: boolean;
  isAnteriorCruciateLigament: boolean;
  isMedialCollateralLigament: boolean;
  isLateralCollateralLigament: boolean;
  isPosteriorCruciateLigament: boolean;
  isOsteosynthesis: boolean;
  isIntramedullaryNailingOsteosynthesis: boolean;
  isEndoprosthesis: boolean;
  isCartilageTransplantation: boolean;
  cartilageTransplantationType: CartilageTransplantationTypeEnum;
  isSubchondralDrilling: boolean;
  isLateralRetinacularRelease: boolean;
  isOther: boolean;

  isMeniscusSurgery: boolean;
  isResection: boolean;
  resectionLocation: string;
  isSuture: boolean;
  sutureLocation: string;

  isInstability: boolean;
  instabilityLocalizationType: InstabilityLocalizationTypeEnum;
  isKneePain: boolean;
  kneePainLocalizationType: KneePainLocalizationTypeEnum;
  monthOfMRIPreliminaryExamination: number;
  yearOfMRIPreliminaryExamination: number;

  constructor() {
    super();

    this.isTrauma = false;
    this.traumaType = TraumaTypeEnum.None;
    this.traumaVelocityType = TraumaVelocityTypeEnum.None;
    this.monthOfPeriodTrauma = 0;
    this.yearOfPeriodTrauma = 0;

    this.isLuxationPatella = false;
    this.monthOfLuxation = 0;
    this.yearOfLuxation = 0;
    this.isFracture = false;
    this.isFemur = false;
    this.isTibia = false;
    this.isFibula = false;
    this.isPatella = false;

    this.isLigamentReconstruction = false;
    this.isAnteriorCruciateLigament = false;
    this.isMedialCollateralLigament = false;
    this.isLateralCollateralLigament = false;
    this.isPosteriorCruciateLigament = false;
    this.isOsteosynthesis = false;
    this.isIntramedullaryNailingOsteosynthesis = false;
    this.isEndoprosthesis = false;
    this.isCartilageTransplantation = false;
    this.cartilageTransplantationType = CartilageTransplantationTypeEnum.None;
    this.isSubchondralDrilling = false;
    this.isLateralRetinacularRelease = false;
    this.isOther = false;

    this.isMeniscusSurgery = false;
    this.isResection = false;
    this.resectionLocation = 'None';
    this.isSuture = false;
    this.sutureLocation = 'None';

    this.isInstability = false;
    this.instabilityLocalizationType = InstabilityLocalizationTypeEnum.None;
    this.isKneePain = false;
    this.kneePainLocalizationType = KneePainLocalizationTypeEnum.None;
    this.monthOfMRIPreliminaryExamination = 0;
    this.yearOfMRIPreliminaryExamination = 0;
  }
}
