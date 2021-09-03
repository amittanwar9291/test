import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { AnamnesisUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisFindingUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';

import { AnamnesisFindingTypeEnum } from '@enums/elbowMRT/anamnesis';

import { values } from 'lodash';

@Component({
  selector: 'rr-elbow-mrt-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  findingHandler: DynamicComponentHandler<AnamnesisFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  findingType = AnamnesisFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AnamnesisFindingUiModel);
    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'elb_m_0201100';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'elb_m_0201101';
    this.findingDropdownConfig.itemCount = 9;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });
    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  get selectedFindingName(): string {
    if (!this.findingDropdownConfig.dropdownValues) {
      return '';
    }

    const finding = this.findingDropdownConfig.dropdownValues.find(x => x.value === this.findingHandler.currentItem.findingType);
    return finding ? finding.label : '';
  }

  resetXRayDate(): void {
    this.model.xRayDate = new MonthYearModel();
  }

  resetCTDate(): void {
    this.model.ctDate = new MonthYearModel();
  }

  resetMRIDate(): void {
    this.model.mriDate = new MonthYearModel();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('elbowMRT.anamnesis.findingTypes.options').subscribe((out: FindingDropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('elbowMRT.anamnesis.addIndication.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
}
