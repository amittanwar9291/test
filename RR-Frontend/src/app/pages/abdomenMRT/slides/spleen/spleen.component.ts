import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SpleenFindingTypeEnum } from '@enums/abdomenMRT/spleen';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';
import { SpleenUiModel } from '@models/abdomenMRT/ui/spleen/spleen-ui.model';
import { SpleenValidationModel } from '@models/abdomenMRT/ui/spleen/spleen-validation.model';
import { SequenceUiModel } from '@models/abdomenMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

@Component({
  selector: 'rr-spleen',
  templateUrl: './spleen.component.html',
  styleUrls: ['./spleen.component.scss']
})
export class SpleenComponent extends SlideBaseComponent<SpleenUiModel> {
  findingHandler: DynamicComponentHandler<SpleenFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsEnum = AreFindingsEnum;
  spleenFindingTypeEnum = SpleenFindingTypeEnum;

  isContrastEnhanced: boolean;
  isDWIInAnySequence: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SpleenUiModel, commonServices, SpleenValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SpleenFindingUiModel);

    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: SpleenUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: SpleenUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWIInAnySequence =
        technologyModel && technologyModel.sequences.some((model: SequenceUiModel) => model.weightingType === 'DWI');
    });
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.autoConfigFindingRRId = 'abd_m_050106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.spleen.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('abdomenMRT.spleen.addNewFinding.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  isCurrentItem(item: SpleenFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  isFindingWithTabs(): boolean {
    return this.findingHandler.currentItem.findingType === this.spleenFindingTypeEnum.Mass;
  }
}
