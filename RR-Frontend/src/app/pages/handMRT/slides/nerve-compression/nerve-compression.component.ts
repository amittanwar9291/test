import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NerveCompressionUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-ui.model';
import { NerveCompressionFindingUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-finding-ui.model';
import { NerveCompressionValidationModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-validation.model';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-nerve-compression',
  templateUrl: './nerve-compression.component.html',
  styleUrls: ['./nerve-compression.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NerveCompressionComponent extends SlideBaseComponent<NerveCompressionUiModel> {
  findingHandler: DynamicComponentHandler<NerveCompressionFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      NerveCompressionUiModel,
      commonServices,
      NerveCompressionValidationModel
    );
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, NerveCompressionFindingUiModel);

    this.registerSaveCallback((model: NerveCompressionUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerGetCallback((model: NerveCompressionUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.findingsConfiguration();
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'han_m_070107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'han_m_070106';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('handMRT.nerveCompression.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('handMRT.nerveCompression.addNewFinding.value').subscribe(out => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
}
