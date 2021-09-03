import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { ILymphNodesTranslationsBits } from '@interfaces/pages/mammaMX/lymph-nodes/lymph-nodes-translations-bits.interface';

import { LymphNodesUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-ui.model';
import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LymphNodesFindingTypeEnum } from '@enums/mammaMX/lymph-nodes';

import { values } from 'lodash';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss']
})
export class LymphNodesComponent extends SlideBaseComponent<LymphNodesUiModel> {
  areFindings = AreFindingsEnum;
  findingHandler: DynamicComponentHandler<LymphNodesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  findingType = LymphNodesFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LymphNodesUiModel, commonServices, {});

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LymphNodesFindingUiModel);
    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: LymphNodesUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });
    this.registerSaveCallback((outModel: LymphNodesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'mam_mx_080106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'mam_mx_080107';
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.subFindings = ['leftLymphNodeDetails', 'rightLymphNodeDetails'];
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<LymphNodesFindingUiModel>,
    translationBits: ILymphNodesTranslationsBits
  ): string {
    let result = '';
    const { findingType } = findingHandler.collection[index];

    if (findingHandler) {
      switch (findingType) {
        case LymphNodesFindingTypeEnum.AxillaryLymphNode:
          result += translationBits.axillary;
          break;
        case LymphNodesFindingTypeEnum.IntramammaryLymphNode:
          result += translationBits.intramammary;
          break;
        case LymphNodesFindingTypeEnum.CervicalLymphNode:
          result += translationBits.cervical;
          break;
        case LymphNodesFindingTypeEnum.ParasternalLymphNode:
          result += translationBits.parasternal;
          break;
        case LymphNodesFindingTypeEnum.SupraclavicularLymphNode:
          result += translationBits.supraclavicular;
          break;
      }
    }
    return result;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('mammaMX.lymphNodes.findingTypes.options').subscribe((out: FindingDropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('mammaMX.lymphNodes.translationBits').subscribe((out: ILymphNodesTranslationsBits) => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('mammaMX.lymphNodes.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
}
