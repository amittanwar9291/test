import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { TendonsAndMusclesUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-ui.model';
import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TendonsAndMusclesValidation } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-validation.model';

import { MusclesAndTendonsFindingTypeEnum } from '@enums/elbowMRT/musles-and-tendons/muscles-and-tendons-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

@Component({
  selector: 'rr-tendons-and-muscles',
  templateUrl: './tendons-and-muscles.component.html',
  styleUrls: ['./tendons-and-muscles.component.scss']
})
export class TendonsAndMusclesComponent extends SlideBaseComponent<TendonsAndMusclesUiModel> {
  findingHandler: DynamicComponentHandler<TendonsAndMusclesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsType: typeof AreFindingsEnum;
  findingType: typeof MusclesAndTendonsFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, TendonsAndMusclesUiModel, commonServices, TendonsAndMusclesValidation);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, TendonsAndMusclesFindingUiModel);
    this.initializeDynamicDropdownConfig();
    this.registerCallback();

    this.areFindingsType = AreFindingsEnum;
    this.findingType = MusclesAndTendonsFindingTypeEnum;
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: TendonsAndMusclesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: TendonsAndMusclesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  isFindingHeaderDisabled(): boolean {
    return (
      this.model.areFindings !== AreFindingsEnum.Yes ||
      this.findingHandler.currentItem.findingType === MusclesAndTendonsFindingTypeEnum.None
    );
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('elbowMRT.tendonsAndMuscles.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('elbowMRT.tendonsAndMuscles.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('elbowMRT.tendonsAndMuscles.addNewFinding.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 7;
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'elb_m_060106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'elb_m_060107';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  getCustomLabel(index: number, handler: DynamicComponentHandler<TendonsAndMusclesFindingUiModel>, translationBits): string {
    let base = '';
    const currentFinding = handler.collection[index];
    if (currentFinding.findingType !== 'None') {
      base = translationBits[currentFinding.findingType];
    }
    return base;
  }
}
