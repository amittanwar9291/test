import { ReportModelBase } from '@models/report-model-base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { KneeCross } from '@models/kneeMRT/ui/knee/knee-cross.model';

import {
  TraumaTypeEnum,
  TraumaVelocityTypeEnum,
  CartilageTransplantationTypeEnum,
  InstabilityLocalizationTypeEnum,
  KneePainLocalizationTypeEnum
} from '@enums/kneeMRT/anamnesis/';

export class AnamnesisUiModel extends ReportModelBase {
  isTrauma: boolean;
  traumaType: TraumaTypeEnum;
  traumaVelocityType: TraumaVelocityTypeEnum;
  dateOfTrauma: MonthYearModel;

  isLuxationPatella: boolean;
  dateOfLuxation: MonthYearModel;
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
  resectionLocation: KneeCross;
  isSuture: boolean;
  sutureLocation: KneeCross;

  isInstability: boolean;
  instabilityLocalizationType: InstabilityLocalizationTypeEnum;
  isKneePain: boolean;
  kneePainLocalizationType: KneePainLocalizationTypeEnum;
  dateOfMRIPreliminaryExamination: MonthYearModel;

  constructor() {
    super();

    this.isTrauma = false;
    this.traumaType = TraumaTypeEnum.None;
    this.traumaVelocityType = TraumaVelocityTypeEnum.None;
    this.dateOfTrauma = new MonthYearModel();

    this.isLuxationPatella = false;
    this.dateOfLuxation = new MonthYearModel();
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
    this.resectionLocation = new KneeCross();
    this.isSuture = false;
    this.sutureLocation = new KneeCross();

    this.isInstability = false;
    this.instabilityLocalizationType = InstabilityLocalizationTypeEnum.None;
    this.isKneePain = false;
    this.kneePainLocalizationType = KneePainLocalizationTypeEnum.None;
    this.dateOfMRIPreliminaryExamination = new MonthYearModel();
  }
}
