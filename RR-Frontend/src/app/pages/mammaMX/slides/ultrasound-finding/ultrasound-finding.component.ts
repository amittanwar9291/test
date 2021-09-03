import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { UltrasoundFindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-ui.model';
import { UltrasoundFindingValidationModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-validation.model';
import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { UltrasoundFindingTypeEnum } from '@enums/mammaMX/ultrasound-finding';

import { values } from 'lodash';

@Component({
  selector: 'rr-ultrasound-finding',
  templateUrl: './ultrasound-finding.component.html',
  styleUrls: ['./ultrasound-finding.component.scss']
})
export class UltrasoundFindingComponent extends SlideBaseComponent<UltrasoundFindingUiModel> {
  findingHandler: DynamicComponentHandler<UltrasoundFindingSubfindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsType = AreFindingsEnum;
  findingType = UltrasoundFindingTypeEnum;

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
      UltrasoundFindingUiModel,
      commonServices,
      UltrasoundFindingValidationModel
    );

    this.findingHandler = new DynamicComponentHandler<UltrasoundFindingSubfindingUiModel>(
      this.logger,
      this.model.findings,
      UltrasoundFindingSubfindingUiModel
    );
    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: UltrasoundFindingUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: UltrasoundFindingUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'mam_mx_070106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'mam_mx_070107';
    this.findingDropdownConfig.descriptionLabelClass = 'm-b-4';
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('mammaMX.ultrasoundFinding.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('mammaMX.ultrasoundFinding.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = values(out);
      })
    );
  }
}
