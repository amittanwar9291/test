import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { AdrenalGlandsUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AdrenalGlandsFindingTypeEnum, AreFindingsExtendedEnum } from '@enums/abdomenMRT/adrenal-glands';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AdrenalGlandsValidation } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-validation.model';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-adrenal-glands',
  templateUrl: './adrenal-glands.component.html',
  styleUrls: ['./adrenal-glands.component.scss']
})
export class AdrenalGlandsComponent extends SlideBaseComponent<AdrenalGlandsUiModel> {
  areFindings = AreFindingsExtendedEnum;
  findingType = AdrenalGlandsFindingTypeEnum;

  findingHandler: DynamicComponentHandler<AdrenalGlandsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isCMReinforced: boolean;
  isDWI: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AdrenalGlandsUiModel, commonServices, AdrenalGlandsValidation);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AdrenalGlandsFindingUiModel);
    this.initFindingColumnConfig();
    this.registerCallbacks();
    this.registerConnections();
  }

  get isFindingWithTabs(): boolean {
    return [AdrenalGlandsFindingTypeEnum.Mass].includes(this.findingHandler.currentItem.findingType);
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'abd_m_080106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'abd_m_080107';
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: AdrenalGlandsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: AdrenalGlandsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMReinforced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted);
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.adrenalGlands.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.adrenalGlands.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }
}
