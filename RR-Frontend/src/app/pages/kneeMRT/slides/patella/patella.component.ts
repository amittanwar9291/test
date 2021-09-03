import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PatellaUiModel } from '@models/kneeMRT/ui/patella/patella-ui.model';
import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';
import { PatellaValidationModel } from '@models/kneeMRT/ui/patella/patella-validation-model';

import { PatellaFindingTypeEnum } from '@enums/kneeMRT/patella/patella-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

@Component({
  selector: 'rr-knee-mrt-patella',
  templateUrl: './patella.component.html',
  styleUrls: ['./patella.component.scss']
})
export class PatellaComponent extends SlideBaseComponent<PatellaUiModel> {
  findingHandler: DynamicComponentHandler<PatellaFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  patellaFindingType: typeof PatellaFindingTypeEnum;
  areFindings: typeof AreFindingsEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, PatellaUiModel, commonServices, PatellaValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PatellaFindingUiModel);

    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'kne_m_070106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'kne_m_070107';
    this.findingDropdownConfig.itemCount = 9;

    this.patellaFindingType = PatellaFindingTypeEnum;
    this.areFindings = AreFindingsEnum;

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: PatellaUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: PatellaUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  /****************** Conditions /******************/
  isFindingType(type: PatellaFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  isFindingHeaderDisabled(): boolean {
    return this.isDropdownDisabled() || this.findingHandler.currentItem.findingType === PatellaFindingTypeEnum.None;
  }

  /* Dynamic component methods */
  isDropdownDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('kneeMRT.patella.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('kneeMRT.patella.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
}
