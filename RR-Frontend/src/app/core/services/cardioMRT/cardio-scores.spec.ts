import { TestBed } from '@angular/core/testing';
import { CardioScoresService } from '@services/cardioMRT/cardio-scores.service';
import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';
import { UnitTypeEnum } from '@enums/cardioMRT';

describe('CardioScoresService', () => {
  let service: CardioScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardioScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate 29 Procam Score', () => {
    const model = new AnamnesisUiModel();
    const age = 76;

    model.isLaboratoryParameters = true;
    model.unitType = UnitTypeEnum.Mgdl;

    model.hdlCholesterolAmount = 45;
    model.ldlCholesterolAmount = 110;
    model.triglyceridesAmount = 150;
    model.isNicotineAbuse = true;
    model.isDiabetesMellitus = true;
    model.isPositiveFamilyHistory = true;
    model.systolicbloodpressureInMmHg = 120;

    const result = service.calculateProcamScore(model, age);

    expect(result).toEqual(29.0);
  });

  it('should calculate 3.3 Procam Score', () => {
    const model = new AnamnesisUiModel();
    const age = 35;

    model.isLaboratoryParameters = true;
    model.unitType = UnitTypeEnum.Mgdl;

    model.hdlCholesterolAmount = 32;
    model.ldlCholesterolAmount = 80;
    model.triglyceridesAmount = 120;
    model.isNicotineAbuse = true;
    model.isDiabetesMellitus = false;
    model.isPositiveFamilyHistory = true;
    model.systolicbloodpressureInMmHg = 170;

    const result = service.calculateProcamScore(model, age);

    expect(result).toEqual(3.3);
  });

  it('should calculate 2.8 Procam Score', () => {
    // triglycerides edge case below min value
    const model = new AnamnesisUiModel();
    const age = 35;

    model.isLaboratoryParameters = true;
    model.unitType = UnitTypeEnum.Mgdl;

    model.hdlCholesterolAmount = 32;
    model.ldlCholesterolAmount = 80;
    model.triglyceridesAmount = 99;
    model.isNicotineAbuse = true;
    model.isDiabetesMellitus = false;
    model.isPositiveFamilyHistory = true;
    model.systolicbloodpressureInMmHg = 170;

    const result = service.calculateProcamScore(model, age);

    expect(result).toEqual(2.8);
  });

  it('should calculate 3.5 Procam Score', () => {
    // triglycerides edge case between 149-150
    const model = new AnamnesisUiModel();
    const age = 35;

    model.isLaboratoryParameters = true;
    model.unitType = UnitTypeEnum.Mgdl;

    model.hdlCholesterolAmount = 32;
    model.ldlCholesterolAmount = 80;
    model.triglyceridesAmount = 150;
    model.isNicotineAbuse = true;
    model.isDiabetesMellitus = false;
    model.isPositiveFamilyHistory = true;
    model.systolicbloodpressureInMmHg = 170;

    const result = service.calculateProcamScore(model, age);

    expect(result).toEqual(3.5);
  });

  it('should calculate 4.0 Procam Score', () => {
    // triglycerides edge case over max value
    const model = new AnamnesisUiModel();
    const age = 35;

    model.isLaboratoryParameters = true;
    model.unitType = UnitTypeEnum.Mgdl;

    model.hdlCholesterolAmount = 32;
    model.ldlCholesterolAmount = 80;
    model.triglyceridesAmount = 200;
    model.isNicotineAbuse = true;
    model.isDiabetesMellitus = false;
    model.isPositiveFamilyHistory = true;
    model.systolicbloodpressureInMmHg = 170;

    const result = service.calculateProcamScore(model, age);

    expect(result).toEqual(4.0);
  });
});
