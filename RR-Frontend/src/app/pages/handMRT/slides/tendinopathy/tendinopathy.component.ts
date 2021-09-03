import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { TendinopathyUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-ui.model';
import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';
import { TendinopathyValidationModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-validation.model';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

@Component({
  selector: 'rr-tendinopathy',
  templateUrl: './tendinopathy.component.html',
  styleUrls: ['./tendinopathy.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendinopathyComponent extends SlideBaseComponent<TendinopathyUiModel> {
  findingHandler: DynamicComponentHandler<TendinopathyFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  differentialDiagnoseFlexorTendon: DropdownModel[];
  differentialDiagnoseExtensorTendon: DropdownModel[];
  extensorTypes: DropdownModel[];
  flexorTypes: DropdownModel[];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, TendinopathyUiModel, commonServices, TendinopathyValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, TendinopathyFindingUiModel);

    this.registerSaveCallback((model: TendinopathyUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerGetCallback((model: TendinopathyUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.findingsConfiguration();
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'han_m_060107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'han_m_060106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('handMRT.tendinopathy.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('handMRT.tendinopathy.addNewFindings').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('handMRT.tendinopathy.differentialDiagnoseFlexorTendon.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnoseFlexorTendon = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('handMRT.tendinopathy.differentialDiagnoseExtensorTendon.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnoseExtensorTendon = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('handMRT.tendinopathy.flexorTypes.options').subscribe((out: DropdownModel[]) => {
        this.flexorTypes = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('handMRT.tendinopathy.extensorTypes.options').subscribe((out: DropdownModel[]) => {
        this.extensorTypes = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
