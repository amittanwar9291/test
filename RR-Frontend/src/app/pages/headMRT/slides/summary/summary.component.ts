import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SummaryUiModel } from '@models/headMRT/ui/summary/summary-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { nameof } from 'ts-simple-nameof';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';
import { SummaryValidationModel } from '@models/headMRT/ui/summary/summary-validation.model';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  summaryFindingHandler: DynamicComponentHandler<SummaryFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isContrastEnhanced: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices, SummaryValidationModel);
    this.summaryFindingHandler = new DynamicComponentHandler<SummaryFindingUiModel>(
      this.logger,
      this.model.findings,
      SummaryFindingUiModel
    );
    this.initFindingColumnConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SummaryUiModel) => {
      this.summaryFindingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: SummaryUiModel) => {
      this.summaryFindingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.summaryFindingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }
  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<SummaryFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 9;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hea_m_120105';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hea_m_120106';
  }
}
