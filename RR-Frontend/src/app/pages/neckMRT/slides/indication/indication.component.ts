import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { IndicationTypeEnum } from '@enums/neckMRT/indication';
import { IndicationFindingUiModel } from '@models/neckMRT/ui/indication/indication-finding-ui.model';
import { IndicationUiModel } from '@models/neckMRT/ui/indication/indication-ui.model';
import { PreviousTherapyUiModel } from '@models/neckMRT/ui/indication/previous-therapy-ui.model';
import { IndicationValidationModel } from '@models/neckMRT/ui/indication/indication-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { values } from 'lodash';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-indication',
  templateUrl: './indication.component.html',
  styleUrls: ['./indication.component.scss']
})
export class IndicationComponent extends SlideBaseComponent<IndicationUiModel> {
  subscriptions: Subscription[] = [];

  indicationFindingHandler: DynamicComponentHandler<IndicationFindingUiModel>;
  indicationFindingDropdownConfig: FindingColumnConfig;

  previousTherapyHandler: DynamicComponentHandler<PreviousTherapyUiModel>;
  previousTherapyDropdownConfig: FindingColumnConfig;

  indicationType = IndicationTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, IndicationUiModel, commonServices, IndicationValidationModel);
    this.registerCallbacks();
    this.indicationFindingHandler = new DynamicComponentHandler(this.logger, this.model.indications, IndicationFindingUiModel);
    this.previousTherapyHandler = new DynamicComponentHandler(this.logger, this.model.previousTherapies, PreviousTherapyUiModel);
    this.initDynamicComponentConfig();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: IndicationUiModel) => {
      this.indicationFindingHandler.reinitializeCollection(outModel.indications);
      this.previousTherapyHandler.reinitializeCollection(outModel.previousTherapies);
    });
    this.registerSaveCallback((outModel: IndicationUiModel) => {
      this.indicationFindingHandler.collectionPostSaveCleanup(outModel.indications);
      this.previousTherapyHandler.collectionPostSaveCleanup(outModel.previousTherapies);
    });
    this.registerPreSaveCallback(() => {
      this.indicationFindingHandler.collectionPreSaveCleanup();
      this.previousTherapyHandler.collectionPreSaveCleanup();
    });
  }

  private initDynamicComponentConfig(): void {
    this.indicationFindingDropdownConfig = new FindingColumnConfig();
    this.indicationFindingDropdownConfig.findingType = nameof<IndicationFindingUiModel>(m => m.indicationType);
    this.indicationFindingDropdownConfig.findingColumnIds.findingRRId = 'nec_m_020105';
    this.indicationFindingDropdownConfig.findingColumnIds.buttonRRId = 'nec_m_020106';
    this.indicationFindingDropdownConfig.itemCount = 9;

    this.previousTherapyDropdownConfig = new FindingColumnConfig();
    this.previousTherapyDropdownConfig.findingType = nameof<PreviousTherapyUiModel>(m => m.previousTherapyType);
    this.previousTherapyDropdownConfig.findingColumnIds.findingRRId = 'nec_m_020303';
    this.previousTherapyDropdownConfig.findingColumnIds.buttonRRId = 'nec_m_020304';
    this.previousTherapyDropdownConfig.itemCount = 9;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.indication.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.indicationFindingDropdownConfig.dropdownValues = values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('neckMRT.indication.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.previousTherapyDropdownConfig.dropdownValues = values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('neckMRT.indication.addAnamnesisindication.value').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.buttonText = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('neckMRT.indication.addProceduretherapy.value').subscribe((out: string) => {
        this.previousTherapyDropdownConfig.buttonText = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.placeholder = out;
        this.previousTherapyDropdownConfig.placeholder = out;
      })
    );
  }

  get selectedIndicationFindingName(): string {
    if (!this.indicationFindingDropdownConfig.dropdownValues) {
      return '';
    }

    const finding = this.indicationFindingDropdownConfig.dropdownValues.find(
      x => x.value === this.indicationFindingHandler.currentItem.indicationType
    );
    return finding ? finding.label : '';
  }

  get selectedPreviousTherapyName(): string {
    if (!this.previousTherapyDropdownConfig.dropdownValues) {
      return '';
    }

    const finding = this.previousTherapyDropdownConfig.dropdownValues.find(
      x => x.value === this.previousTherapyHandler.currentItem.previousTherapyType
    );
    return finding ? finding.label : '';
  }

  clearMRIDate(): void {
    this.model.dateOfMRI = new MonthYearModel();
  }

  clearCTDate(): void {
    this.model.dateOfCT = new MonthYearModel();
  }

  clearSonographyDate(): void {
    this.model.dateOfSonography = new MonthYearModel();
  }
}
