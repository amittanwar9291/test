import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { MusclesAndTendonsUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-ui.model';
import { MusclesAndTendonsFindingUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MusclesAndTendonsValidationModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-validation.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { FindingTypeEnum } from '@enums/hipMRT/muscles-and-tendons';

@Component({
  selector: 'rr-muscles-and-tendons',
  templateUrl: './muscles-and-tendons.component.html',
  styleUrls: ['./muscles-and-tendons.component.scss']
})
export class MusclesAndTendonsComponent extends SlideBaseComponent<MusclesAndTendonsUiModel> {
  findingHandler: DynamicComponentHandler<MusclesAndTendonsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  areFindings = AreFindingsEnum;
  findingType = FindingTypeEnum;

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
      MusclesAndTendonsUiModel,
      commonServices,
      MusclesAndTendonsValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, MusclesAndTendonsFindingUiModel);

    this.findingsConfiguration();
    this.registerCallbacks();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: MusclesAndTendonsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: MusclesAndTendonsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  findingsConfiguration(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hip_m_070106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hip_m_070107';
  }

  get isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('hipMRT.musclesAndTendons.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('hipMRT.musclesAndTendons.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('hipMRT.musclesAndTendons.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  getCustomLabel(index: number, findingHandler: DynamicComponentHandler<MusclesAndTendonsFindingUiModel>, translationBits): string {
    if (findingHandler) {
      const findingType = findingHandler.collection[index].findingType;
      const pageType = findingHandler.collection[index].sideType;

      if (pageType !== DirectionTypeEnum.None) {
        return `${translationBits[findingType.toLowerCase()]}, ${translationBits[pageType.toLowerCase()]}`;
      }
    }
  }
}
