import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { LymphNodesUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LymphNodesFindingTypeEnum } from '@enums/neckMRT/lymph-nodes';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { LymphNodesFindingUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LymphNodesValidationModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-validation.model';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss']
})
export class LymphNodesComponent extends SlideBaseComponent<LymphNodesUiModel> {
  findingHandler: DynamicComponentHandler<LymphNodesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindings = AreFindingsEnum;
  findingType = LymphNodesFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LymphNodesUiModel, commonServices, LymphNodesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LymphNodesFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: LymphNodesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: LymphNodesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'nec_m_080107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'nec_m_080106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('neckMRT.lymphNodes.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('neckMRT.lymphNodes.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }
}
