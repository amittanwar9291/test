import { Injectable } from '@angular/core';

import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { EscScoreType, UnitTypeEnum } from '@enums/cardioMRT';

@Injectable({
  providedIn: 'root'
})
export class CardioScoresService {
  // Parameters - Common
  private static CHOLESTEROL_UNIT_CONVERSION_RATE = 38.67;
  private static TRIGLYCERIDES_UNIT_CONVERSION_RATE = 88.57;

  // Parameters - ESC
  private static ESC_MIN_AGE = 40;
  private static ESC_MAX_AGE = 65;

  private static MIN_CHOLESTEROL = 4;
  private static MAX_CHOLESTEROL = 8;

  private static MIN_SYS_BLOOD_PRESSURE = 120;
  private static MAX_SYS_BLOOD_PRESSURE = 180;

  private static FEMALE_ALPHA1 = -29.25;
  private static MALE_ALPHA1 = -21.55;
  private static FEMALE_RO1 = 6.3;
  private static MALE_RO1 = 4.67;
  private static FEMALE_ALPHA2 = -30.5;
  private static MALE_ALPHA2 = -26.2;
  private static FEMALE_RO2 = 6.52;
  private static MALE_RO2 = 5.56;

  // Parameters and mappings - Procam
  private static PROCAM_MIN_AGE = 35;
  private static PROCAM_MAX_AGE = 64;
  private static MIN_HDL_CHOLESTEROL = 99;
  private static MAX_HDL_CHOLESTEROL = 190;
  private static MIN_TRIGLYCERIDES = 100;
  private static MAX_TRIGLYCERIDES = 200;
  private static PROCAM_POINTS_MAP = {
    below21: 0,
    21: 1.1,
    22: 1.2,
    23: 1.3,
    24: 1.4,
    25: 1.6,
    26: 1.7,
    27: 1.8,
    28: 1.9,
    29: 2.3,
    30: 2.4,
    31: 2.8,
    32: 2.9,
    33: 3.3,
    34: 3.5,
    35: 4.0,
    36: 4.2,
    37: 4.8,
    38: 5.1,
    39: 5.7,
    40: 6.1,
    41: 7.0,
    42: 7.4,
    43: 8.0,
    44: 8.8,
    45: 10.2,
    46: 10.5,
    47: 10.7,
    48: 12.8,
    49: 13.2,
    50: 15.5,
    51: 16.8,
    52: 17.5,
    53: 19.6,
    54: 21.7,
    55: 22.2,
    56: 23.8,
    57: 25.1,
    58: 28.0,
    59: 29.0,
    above59: 30
  };

  private static escScore(
    age: number,
    cholesterol: number,
    sbp: number,
    r: number,
    alpha1: number,
    alpha2: number,
    ro1: number,
    ro2: number
  ): number {
    const part1 = this.escScorePart(alpha1, age, ro1, cholesterol, sbp, r);
    const part2 = this.escScorePart(alpha1, age, ro1, cholesterol, sbp, r, 20);
    const part3 = this.escScorePart(alpha2, age, ro2, cholesterol, sbp, r, 10, 0.02, 0.022, 0.63);
    const part4 = this.escScorePart(alpha2, age, ro2, cholesterol, sbp, r, 20, 0.02, 0.022, 0.63);

    return Math.round((1 - part1 / part2 + (1 - part3 / part4)) * 100);
  }

  private static escScorePart(
    alpha: number,
    age: number,
    ro: number,
    cholesterol: number,
    sbp: number,
    r: number,
    minusAge: number = 10,
    cholesterolFactor: number = 0.24,
    sbpFactor: number = 0.018,
    rFactor: number = 0.71
  ): number {
    return Math.pow(
      Math.exp(-Math.exp(alpha) * Math.pow(age - minusAge, ro)),
      Math.exp(cholesterolFactor * (cholesterol - 6) + sbpFactor * (sbp - 120) + rFactor * r)
    );
  }

  private static roundIntegerToRange(value: number, min: number, max: number): number {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    }

    return value;
  }

  private static calculateHdlCholesterolPoints(hdlCholesterolAmount: number, unitType: UnitTypeEnum): number {
    const hdlCholesterol =
      unitType === UnitTypeEnum.Mmoll ? hdlCholesterolAmount * this.CHOLESTEROL_UNIT_CONVERSION_RATE : hdlCholesterolAmount;

    if (hdlCholesterol < 35) {
      return 11;
    } else if (hdlCholesterol < 45) {
      return 8;
    } else if (hdlCholesterol < 55) {
      return 5;
    }
    return 0;
  }

  private static calculateLdlChiolesterolPoints(ldlCholesterolAmount: number, unitType: UnitTypeEnum): number {
    const ldlCholesterol =
      unitType === UnitTypeEnum.Mmoll ? ldlCholesterolAmount * this.CHOLESTEROL_UNIT_CONVERSION_RATE : ldlCholesterolAmount;

    if (ldlCholesterol < 100) {
      return 0;
    } else if (ldlCholesterol < 130) {
      return 5;
    } else if (ldlCholesterol < 160) {
      return 10;
    } else if (ldlCholesterol < 190) {
      return 14;
    }

    return 20;
  }

  private static calculateTriglycerides(triglyceridesAmount: number, unitType: UnitTypeEnum): number {
    const triglycerides =
      unitType === UnitTypeEnum.Mmoll ? triglyceridesAmount * this.TRIGLYCERIDES_UNIT_CONVERSION_RATE : triglyceridesAmount;

    if (triglycerides < 100) {
      return 0;
    }

    return Math.floor(CardioScoresService.roundIntegerToRange(triglycerides, this.MIN_TRIGLYCERIDES, this.MAX_TRIGLYCERIDES) / 50);
  }

  private static calculateSystolicBloodPressure(systolicBloodPressure: number): number {
    if (systolicBloodPressure < 120) {
      return 0;
    } else if (systolicBloodPressure < 130) {
      return 2;
    } else if (systolicBloodPressure < 140) {
      return 3;
    } else if (systolicBloodPressure < 160) {
      return 5;
    }

    return 8;
  }

  calculateEscScore(model: AnamnesisUiModel, age: number, gender: GenderTypeEnum): number {
    if (
      [
        model.isLaboratoryParameters,
        age,
        gender !== GenderTypeEnum.None && model.unitType !== UnitTypeEnum.None,
        Number.isInteger(model.totalCholesterolAmount),
        Number.isInteger(model.systolicbloodpressureInMmHg)
      ].some((requiredElem: number | boolean): boolean => !requiredElem)
    ) {
      return null;
    }

    const cholesterol =
      model.unitType === UnitTypeEnum.Mgdl
        ? model.totalCholesterolAmount / CardioScoresService.CHOLESTEROL_UNIT_CONVERSION_RATE
        : model.totalCholesterolAmount;
    const alpha1 = gender === GenderTypeEnum.Female ? CardioScoresService.FEMALE_ALPHA1 : CardioScoresService.MALE_ALPHA1;
    const ro1 = gender === GenderTypeEnum.Female ? CardioScoresService.FEMALE_RO1 : CardioScoresService.MALE_RO1;
    const alpha2 = gender === GenderTypeEnum.Female ? CardioScoresService.FEMALE_ALPHA2 : CardioScoresService.MALE_ALPHA2;
    const ro2 = gender === GenderTypeEnum.Female ? CardioScoresService.FEMALE_RO2 : CardioScoresService.MALE_RO2;
    const r = model.isNicotineAbuse ? 1 : 0;

    return CardioScoresService.escScore(
      CardioScoresService.roundIntegerToRange(age, CardioScoresService.ESC_MIN_AGE, CardioScoresService.ESC_MAX_AGE),
      CardioScoresService.roundIntegerToRange(cholesterol, CardioScoresService.MIN_CHOLESTEROL, CardioScoresService.MAX_CHOLESTEROL),
      CardioScoresService.roundIntegerToRange(
        model.systolicbloodpressureInMmHg,
        CardioScoresService.MIN_SYS_BLOOD_PRESSURE,
        CardioScoresService.MAX_SYS_BLOOD_PRESSURE
      ),
      r,
      alpha1,
      alpha2,
      ro1,
      ro2
    );
  }

  calculateProcamScore(model: AnamnesisUiModel, age: number): number {
    if (
      [
        model.isLaboratoryParameters,
        age,
        model.unitType !== UnitTypeEnum.None,
        Number.isInteger(model.hdlCholesterolAmount),
        Number.isInteger(model.ldlCholesterolAmount),
        Number.isInteger(model.triglyceridesAmount),
        Number.isInteger(model.systolicbloodpressureInMmHg)
      ].some((requiredElem: number | boolean): boolean => !requiredElem)
    ) {
      return null;
    }

    const roundedAge = CardioScoresService.roundIntegerToRange(age, CardioScoresService.PROCAM_MIN_AGE, CardioScoresService.PROCAM_MAX_AGE);
    const tempAgePoint = (Math.floor(roundedAge / 5) - 7) * 5 + 1;
    const agePoints = tempAgePoint === 1 ? 0 : tempAgePoint;
    const positiveFamilyHistory = model.isPositiveFamilyHistory ? 4 : 0;
    const hdlCholesterolPoints = CardioScoresService.calculateHdlCholesterolPoints(model.hdlCholesterolAmount, model.unitType);
    const ldlCholesterolPoints = CardioScoresService.calculateLdlChiolesterolPoints(model.ldlCholesterolAmount, model.unitType);
    const triglyceridesPoints = CardioScoresService.calculateTriglycerides(model.triglyceridesAmount, model.unitType);
    const nicotyneAbusePoints = model.isNicotineAbuse ? 8 : 0;
    const diabetesMellitusPoints = model.isDiabetesMellitus ? 6 : 0;
    const systolicBloodPressurePoints = CardioScoresService.calculateSystolicBloodPressure(model.systolicbloodpressureInMmHg);

    const procamPoints =
      agePoints +
      positiveFamilyHistory +
      hdlCholesterolPoints +
      ldlCholesterolPoints +
      triglyceridesPoints +
      nicotyneAbusePoints +
      diabetesMellitusPoints +
      systolicBloodPressurePoints;

    if (procamPoints < 21) {
      return CardioScoresService.PROCAM_POINTS_MAP.below21;
    } else if (procamPoints > 59) {
      return CardioScoresService.PROCAM_POINTS_MAP.above59;
    }

    return CardioScoresService.PROCAM_POINTS_MAP[procamPoints];
  }

  setEscScoreType(model: AnamnesisUiModel): void {
    if (model.escScore === null) {
      model.escScoreType = EscScoreType.None;
    } else if (model.escScore < 1) {
      model.escScoreType = EscScoreType.LowRisk;
    } else if (model.escScore < 5) {
      model.escScoreType = EscScoreType.MediumRisk;
    } else if (model.escScore < 10) {
      model.escScoreType = EscScoreType.HighRisk;
    } else {
      model.escScoreType = EscScoreType.VeryHighRisk;
    }
  }
}
