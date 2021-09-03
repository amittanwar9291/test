import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SummaryUiModel } from '@models/neckMRT/ui/summary/summary-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TNMClassificationUiModel } from '@models/neckMRT/ui/summary/tnmclassification-ui.model';

import { BiopsyTypeEnum, DynamicsOfFindingsTypeEnum, TNMClassificationTypeEnum } from '@enums/neckMRT/summary';
import { TnmClassificationConfigInterface } from '@interfaces/pages/neckMRT/summary/tnm-classification-config.interface';
import { tnmClassificationConfigMap } from './tnm-classification/tnm-classification-config-map';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  mriFollowUpOptions: DropdownModel[];
  findingHandler: DynamicComponentHandler<TNMClassificationUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  findingType: typeof TNMClassificationTypeEnum;
  biopsyType: typeof BiopsyTypeEnum;
  dynamicsOfFindingsType: typeof DynamicsOfFindingsTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);

    this.findingHandler = new DynamicComponentHandler<TNMClassificationUiModel>(
      this.logger,
      this.model.tnmClassifications,
      TNMClassificationUiModel
    );

    this.initFindingColumnConfig();
    this.registerCallbacks();

    this.findingType = TNMClassificationTypeEnum;
    this.biopsyType = BiopsyTypeEnum;
    this.dynamicsOfFindingsType = DynamicsOfFindingsTypeEnum;
  }

  get findingConfig(): TnmClassificationConfigInterface {
    const findingTranslationIndex = this.findingDropdownConfig.dropdownValues.findIndex(item => {
      return item.value === this.findingHandler.currentItem.classificationType;
    });
    const headerTranslation = this.findingDropdownConfig.dropdownValues[findingTranslationIndex].label;
    const currentFindingName = this.findingHandler.currentItem.classificationType;
    return {
      label: headerTranslation,
      headerRRID: tnmClassificationConfigMap[currentFindingName].headerRRID,
      tStageRRID: tnmClassificationConfigMap[currentFindingName].tStageRRID,
      nStageRRID: tnmClassificationConfigMap[currentFindingName].nStageRRID,
      mStageRRID: tnmClassificationConfigMap[currentFindingName].mStageRRID,
      infoIconRRID: tnmClassificationConfigMap[currentFindingName].infoIconRRID
    };
  }

  onFindingChange(): void {
    if (this.findingHandler.currentItem.classificationType === TNMClassificationTypeEnum.CervicalLNsInCupSyndrome) {
      this.findingHandler.currentItem.isT0 = true;
    }
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SummaryUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.tnmClassifications);
    });

    this.registerSaveCallback((modelOut: SummaryUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.tnmClassifications);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.summary.mriFollowUpOptions.options').subscribe((out: DropdownModel[]) => {
        this.mriFollowUpOptions = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.addClassification.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('neckMRT.summary.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 11;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'nec_m_110403';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'nec_m_110402';
    this.findingDropdownConfig.findingType = 'classificationType';
  }
}
