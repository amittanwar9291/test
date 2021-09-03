import { Component } from '@angular/core';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { CardioScoresService } from '@services/cardioMRT/cardio-scores.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisValidationModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-validation.model';
import { IndicationFindingUiModel } from '@models/cardioMRT/ui/anamnesis/indication-finding-ui.model';
import { InterventionOrPreOpsFindingUiModel } from '@models/cardioMRT/ui/anamnesis/intervention-or-pre-ops-finding-ui.model';
import { AreaOfExaminationUiModel } from '@models/cardioMRT/ui/area-of-examination/area-of-examination-ui.model';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { LeftVentricleHelperService } from '@services/cardioMRT/left-ventricle-helper.service';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  indicationFindingsHandler: DynamicComponentHandler<IndicationFindingUiModel>;
  interventionOrPreOpsFindingsHandler: DynamicComponentHandler<InterventionOrPreOpsFindingUiModel>;
  age: number;
  gender: GenderTypeEnum;
  numberInputValidationModelNames =
    'totalCholesterolAmount hdlCholesterolAmount ldlCholesterolAmount triglyceridesAmount hematocritInPercent';

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private cardioScoresService: CardioScoresService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);

    this.indicationFindingsHandler = new DynamicComponentHandler<IndicationFindingUiModel>(
      this.logger,
      this.model.indicationFindings,
      IndicationFindingUiModel
    );

    this.interventionOrPreOpsFindingsHandler = new DynamicComponentHandler<InterventionOrPreOpsFindingUiModel>(
      this.logger,
      this.model.interventionOrPreOpsFindings,
      InterventionOrPreOpsFindingUiModel
    );

    this.registerCallbacks();
    this.preparePageConnection();
  }

  private preparePageConnection(): void {
    const PC06 = this.preparePage6ConnectionObject();
    this.addPageConnection(PC06.pageNr, LeftVentricleUiModel, PC06.condition, PC06.callback);
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.indicationFindingsHandler.reinitializeCollection(outModel.indicationFindings);
      this.interventionOrPreOpsFindingsHandler.reinitializeCollection(outModel.interventionOrPreOpsFindings);
    });

    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.indicationFindingsHandler.collectionPostSaveCleanup(outModel.indicationFindings);
      this.interventionOrPreOpsFindingsHandler.collectionPostSaveCleanup(outModel.interventionOrPreOpsFindings);
    });

    this.registerPreSaveCallback(() => {
      this.indicationFindingsHandler.collectionPreSaveCleanup();
      this.interventionOrPreOpsFindingsHandler.collectionPreSaveCleanup();
    });

    this.registerConnectionCallback(1, AreaOfExaminationUiModel, (areaOfExamModel: AreaOfExaminationUiModel) => {
      this.age = areaOfExamModel.patientInformation.age;
      this.gender = areaOfExamModel.patientInformation.gender;

      if (this.model.isEscScore) {
        this.model.escScore = this.cardioScoresService.calculateEscScore(this.model, this.age, this.gender);
      }
      if (this.model.isProcamScore) {
        this.model.procamScore = this.cardioScoresService.calculateProcamScore(this.model, this.age);
      }
    });
  }

  private areCalculationComponentsValid(formulaComponents): boolean {
    const areComponentsNotZero = Object.values(formulaComponents).every(val => val > 0);
    const areBloodValuesNotIdentical =
      this.isValidBloodValue(formulaComponents.t1ValueBloodInMs) &&
      this.isValidBloodValue(formulaComponents.t1GdValueBloodInMs) &&
      formulaComponents.t1ValueBloodInMs !== formulaComponents.t1GdValueBloodInMs;

    return areComponentsNotZero ? areBloodValuesNotIdentical : false;
  }

  private isValidBloodValue(val: number): boolean {
    return val !== null && val !== 0;
  }

  // Connection with 6th page
  private preparePage6ConnectionObject(): IPageConnection<LeftVentricleUiModel> {
    const condition = () => true;
    const callback = (model: LeftVentricleUiModel) => {
      const formulaComponents = {
        haematocritValue: this.model.hematocritInPercent / 100, // value that comes from page 2 (car_m_020124 numeric input)
        t1ValueMyocardiumInMs: model.t1Localizer.valueMyocardiumInMs,
        t1ValueBloodInMs: model.t1Localizer.valueBloodInMs,
        t1GdValueMyocardiumInMs: model.t1GdLocalizer.valueMyocardiumInMs,
        t1GdValueBloodInMs: model.t1GdLocalizer.valueBloodInMs
      };

      if (this.areCalculationComponentsValid(formulaComponents)) {
        const calculatedECVValue = LeftVentricleHelperService.calculateECV(formulaComponents);
        model.t1GdLocalizer.ecv = calculatedECVValue >= 0 ? calculatedECVValue : null;
      } else {
        model.t1GdLocalizer.ecv = null;
      }
    };
    return {
      pageNr: 6,
      condition,
      callback
    };
  }
}
