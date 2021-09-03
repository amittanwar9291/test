import { Component } from '@angular/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { ThyroidUiModel } from '@models/neckMRT/ui/thyroid/thyroid-ui.model';
import { ThyroidValidationModel } from '@models/neckMRT/ui/thyroid/thyroid-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { ThyroidFindingTypeEnum } from '@enums/neckMRT/thyroid/thyroid-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-thyroid',
  templateUrl: './thyroid.component.html',
  styleUrls: ['./thyroid.component.scss']
})
export class ThyroidComponent extends SlideBaseComponent<ThyroidUiModel> {
  findingHandler: DynamicComponentHandler<ThyroidFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  salivaryGlandsDDOptions: DropdownModel[];
  salivaryGlandsDDOptions2: DropdownModel[];

  areFindings: typeof AreFindingsEnum;
  findingType: typeof ThyroidFindingTypeEnum;

  isContrastEnhanced: boolean;
  isDWI: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, ThyroidUiModel, commonServices, ThyroidValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, ThyroidFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnections();

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });

    this.areFindings = AreFindingsEnum;
    this.findingType = ThyroidFindingTypeEnum;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.thyroid.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('neckMRT.thyroid.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('neckMRT.thyroid.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('neckMRT.thyroid.salivaryGlandsDDOptions.options').subscribe((out: DropdownModel[]) => {
        this.salivaryGlandsDDOptions = Object.values(out);
      }),
      this.translate.stream('neckMRT.thyroid.salivaryGlandsDDOptions2.options').subscribe((out: DropdownModel[]) => {
        this.salivaryGlandsDDOptions2 = Object.values(out);
      })
    );
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted);
    });
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: ThyroidUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: ThyroidUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  getCustomLabel(index: number, findingHandler: DynamicComponentHandler<ThyroidFindingUiModel>, translationBits): string {
    const currentFindingType = findingHandler.collection[index].findingType;
    if (this.findingDropdownConfig.dropdownValues.length && currentFindingType !== ThyroidFindingTypeEnum.None) {
      if (
        [
          ThyroidFindingTypeEnum.ThyroidGoiterMassInflammation,
          ThyroidFindingTypeEnum.ParathyroidGlandMass,
          ThyroidFindingTypeEnum.SalivaryGlandsMassInflammation
        ]
      ) {
        return translationBits[currentFindingType];
      }
    }
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 6;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'nec_m_070107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'nec_m_070106';
  }

  get isFindingWithTabs(): boolean {
    return [
      ThyroidFindingTypeEnum.ThyroidGoiterMassInflammation,
      ThyroidFindingTypeEnum.ParathyroidGlandMass,
      ThyroidFindingTypeEnum.SalivaryGlandsMassInflammation
    ].includes(this.findingHandler.currentItem.findingType);
  }
}
