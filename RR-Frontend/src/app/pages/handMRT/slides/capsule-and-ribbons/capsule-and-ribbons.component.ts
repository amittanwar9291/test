import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CapsuleAndRibbonsUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-ui.model';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { CapsuleAndRibbonsModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-validation.model';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';

import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

@Component({
  selector: 'rr-capsule-and-ribbons',
  templateUrl: './capsule-and-ribbons.component.html',
  styleUrls: ['./capsule-and-ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CapsuleAndRibbonsComponent extends SlideBaseComponent<CapsuleAndRibbonsUiModel> {
  findingHandler: DynamicComponentHandler<CapsuleAndRibbonsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, CapsuleAndRibbonsUiModel, commonServices, CapsuleAndRibbonsModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CapsuleAndRibbonsFindingUiModel);

    this.registerSaveCallback((model: CapsuleAndRibbonsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerGetCallback((model: CapsuleAndRibbonsUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.findingsConfiguration();
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 9;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'han_m_050107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'han_m_050106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('handMRT.capsuleAndRibbons.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('handMRT.capsuleAndRibbons.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('handMRT.capsuleAndRibbons.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  isFindingType(type: string): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }
}
