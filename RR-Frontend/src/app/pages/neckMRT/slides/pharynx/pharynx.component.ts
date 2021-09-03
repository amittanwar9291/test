import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { PharynxFindingTypeEnum } from '@enums/neckMRT/pharynx';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { TechnologyUiModel } from '@models/kneeMRT/ui/technology/technology-ui.model';
import { PharynxValidationModel } from '@models/neckMRT/ui/pharynx/pharynx-validation.model';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { PharynxUiModel } from '@models/neckMRT/ui/pharynx/pharynx-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

@Component({
  selector: 'rr-pharynx',
  templateUrl: './pharynx.component.html',
  styleUrls: ['./pharynx.component.scss']
})
export class PharynxComponent extends SlideBaseComponent<PharynxUiModel> {
  findingHandler: DynamicComponentHandler<PharynxFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindings: typeof AreFindingsEnum;
  findingType: typeof PharynxFindingTypeEnum;

  isContrastEnhanced: boolean;
  isDWI: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, PharynxUiModel, commonServices, PharynxValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PharynxFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnections();

    this.areFindings = AreFindingsEnum;
    this.findingType = PharynxFindingTypeEnum;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: PharynxUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: PharynxUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted);
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.pharynx.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('neckMRT.pharynx.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'nec_m_040106';
  }

  get isFindingWithTabs(): boolean {
    return this.findingHandler.currentItem.findingType === PharynxFindingTypeEnum.Mass;
  }
}
