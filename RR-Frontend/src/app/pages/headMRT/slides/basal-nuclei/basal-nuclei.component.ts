import { Component, OnDestroy } from '@angular/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { BasalNucleiUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-ui.model';
import { BasalNucleiFindingTypeEnum } from '@enums/headMRT/basal-nuclei/basal-nuclei-finding-type.enum';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { BasalNucleiValidationModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-validation-model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { nameof } from 'ts-simple-nameof';
import { BasalNucleiAreFindingsEnum } from '@enums/headMRT/basal-nuclei/basal-nuclei-are-findings.enum';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { BasalNucleiHelperService } from './basal-nuclei-helper.service';

@Component({
  selector: 'rr-basal-nuclei',
  templateUrl: './basal-nuclei.component.html',
  styleUrls: ['./basal-nuclei.component.scss']
})
export class BasalNucleiComponent extends SlideBaseComponent<BasalNucleiUiModel> implements OnDestroy {
  basalNucleiAreFindingsEnum = BasalNucleiAreFindingsEnum;
  basalNucleiFindingTypeEnum = BasalNucleiFindingTypeEnum;
  findingHandler: DynamicComponentHandler<BasalNucleiFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isLargeLocalizerOpen: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private basalNucleiHelperService: BasalNucleiHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BasalNucleiUiModel, commonServices, BasalNucleiValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BasalNucleiFindingUiModel);
    this.initDynamicComponentConfig();

    this.subscriptions.push(
      this.basalNucleiHelperService.isLargeLocalizerOpen.subscribe(value => {
        this.isLargeLocalizerOpen = value;
      })
    );

    this.registerCallbacks();
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.basalNucleiHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
      this.basalNucleiHelperService.isWeightingTypeDWI.next(technologyModel.sequences[0].weightingType === WeightingTypeEnum.DWI);
      let isWeightingTypeDWI = false;
      technologyModel.sequences.forEach(sequence => {
        if (sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted) {
          isWeightingTypeDWI = true;
        }
      });
      this.basalNucleiHelperService.isWeightingTypeDWI.next(isWeightingTypeDWI);
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: BasalNucleiUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: BasalNucleiUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.basalNucleiAreFindingsEnum.True;
  }

  isFindingType(type: BasalNucleiFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.basalNuclei.findingTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.basalNuclei.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<BasalNucleiFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_m_070106';
    this.findingDropdownConfig.itemCount = 4;
  }

  onLargeLocalizerClosed() {
    this.basalNucleiHelperService.isLargeLocalizerOpen.next(null);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
