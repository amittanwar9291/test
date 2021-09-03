import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { AnamnesisUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisValidationModel } from '@models/handMRT/ui/anamnesis/anamnesis-validation.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { AnamnesisIndicationFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { AnamnesisIndicationFindingTypeEnum } from '@enums/handMRT/anamnesis/anamnesis-indication-finding-type.enum';
import { LesionTypeEnum } from '@enums/handMRT/anamnesis/lesion-type.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { DetailsTypeEnum } from '@enums/handMRT/anamnesis/details-type.enum';
import { AnamnesisPreviousSurgeriesFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-previous-surgeries-finding-ui.model';
import { AnamnesisPreviousSurgeriesFindingTypeEnum } from '@enums/handMRT/anamnesis/anamnesis-previous-surgeries-finding-type.enum';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  indicationsHandler: DynamicComponentHandler<AnamnesisIndicationFindingUiModel>;
  previousSurgeriesHandler: DynamicComponentHandler<AnamnesisPreviousSurgeriesFindingUiModel>;
  indicationTypeFindingDropdownConfig: FindingColumnConfig;
  previousSurgeriesTypeFindingDropdownConfig: FindingColumnConfig;
  anamnesisIndicationFindingType: typeof AnamnesisIndicationFindingTypeEnum;
  previousSurgeriesType: typeof AnamnesisPreviousSurgeriesFindingTypeEnum;
  lesionType: typeof LesionTypeEnum;
  detailsType: typeof DetailsTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);
    this.indicationsHandler = new DynamicComponentHandler(this.logger, this.model.indications, AnamnesisIndicationFindingUiModel);
    this.previousSurgeriesHandler = new DynamicComponentHandler(
      this.logger,
      this.model.previousSurgeries,
      AnamnesisPreviousSurgeriesFindingUiModel
    );

    this.initializeIndicationTypeDynamicDropdownConfig();
    this.initializePreviousSurgeriesTypeDynamicDropdownConfig();

    this.registerCallback();

    this.anamnesisIndicationFindingType = AnamnesisIndicationFindingTypeEnum;
    this.previousSurgeriesType = AnamnesisPreviousSurgeriesFindingTypeEnum;
    this.lesionType = LesionTypeEnum;
    this.detailsType = DetailsTypeEnum;
  }

  private initializePreviousSurgeriesTypeDynamicDropdownConfig(): void {
    this.previousSurgeriesTypeFindingDropdownConfig = new FindingColumnConfig();
    this.previousSurgeriesTypeFindingDropdownConfig.itemCount = 6;
    this.previousSurgeriesTypeFindingDropdownConfig.findingColumnIds.buttonRRId = 'han_m_020304';
    this.previousSurgeriesTypeFindingDropdownConfig.findingColumnIds.findingRRId = 'han_m_020303';
  }

  private initializeIndicationTypeDynamicDropdownConfig(): void {
    this.indicationTypeFindingDropdownConfig = new FindingColumnConfig();
    this.indicationTypeFindingDropdownConfig.itemCount = 11;
    this.indicationTypeFindingDropdownConfig.findingColumnIds.buttonRRId = 'han_m_020106';
    this.indicationTypeFindingDropdownConfig.findingColumnIds.findingRRId = 'han_m_020105';
  }

  private registerCallback(): void {
    this.registerGetCallback((model: AnamnesisUiModel) => {
      this.indicationsHandler.reinitializeCollection(model.indications);
      this.previousSurgeriesHandler.reinitializeCollection(model.previousSurgeries);
    });

    this.registerSaveCallback((model: AnamnesisUiModel) => {
      this.indicationsHandler.collectionPostSaveCleanup(model.indications);
      this.previousSurgeriesHandler.collectionPostSaveCleanup(model.previousSurgeries);
    });

    this.registerPreSaveCallback(() => {
      this.indicationsHandler.collectionPreSaveCleanup();
      this.indicationsHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('handMRT.anamnesis.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.previousSurgeriesTypeFindingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('handMRT.anamnesis.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.indicationTypeFindingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.previousSurgeriesTypeFindingDropdownConfig.placeholder = out;
        this.indicationTypeFindingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('handMRT.anamnesis.addIndication.value').subscribe((out: string) => {
        this.indicationTypeFindingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('handMRT.anamnesis.addPreviousSurgery.value').subscribe((out: string) => {
        this.previousSurgeriesTypeFindingDropdownConfig.buttonText = out;
      })
    );
  }

  resetDate(dateModel: string) {
    this.model[dateModel] = new MonthYearModel();
  }
}
