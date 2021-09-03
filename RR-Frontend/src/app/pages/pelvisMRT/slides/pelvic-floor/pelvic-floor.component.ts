import { Component } from '@angular/core';

import { PelvicFloorUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-ui.model';
import { PelvicFloorValidationModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-validation.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { PelvicFloorAreFindingsEnum } from '@enums/pelvisMRT/pelvic-floor/pelvic-floor-are-findings.enum';
import { MPLGrading } from '@interfaces/mpl-garding.interface';
import { PCLGrading } from '@interfaces/pcl-garding.interface';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { MlpPositionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/mlp-position-type.enum';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { PelvicFloorFindingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/pelvic-floor-finding-type.enum';
import { PelvicFloorHelperService } from './pelvic-floor-helper.service';

@Component({
  selector: 'rr-pelvic-floor',
  templateUrl: './pelvic-floor.component.html',
  styleUrls: ['./pelvic-floor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PelvicFloorComponent extends SlideBaseComponent<PelvicFloorUiModel> {
  findingHandler: DynamicComponentHandler<PelvicFloorFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsEnum = PelvicFloorAreFindingsEnum;
  pelvicFloorFindingTypeEnum = PelvicFloorFindingTypeEnum;

  PCLGrading: PCLGrading;
  MPLGrading: MPLGrading;
  activeTabIndex = 0;

  lesionType: DropdownModel[];
  dropdownValuesDefaeecography: FindingDropdownModel[];
  dropdownValuesNoDefaeecography: FindingDropdownModel[];

  isDynamicOnLocalization: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private pelvicFloorHelperService: PelvicFloorHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, PelvicFloorUiModel, commonServices, PelvicFloorValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PelvicFloorFindingUiModel);

    this.registerGetCallback((model: PelvicFloorUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: PelvicFloorUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.findingsConfiguration();
    this.registerConnections();
  }

  private registerConnections() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.isDynamicOnLocalization = localizationModel.isDynamic;
      this.pelvicFloorHelperService.updateValidationModel(this.isDynamicOnLocalization);
      this.updateFindingsList();
    });
  }

  private updateFindingsList(): void {
    if (!this.isDynamicOnLocalization) {
      this.findingDropdownConfig.dropdownValues = this.dropdownValuesNoDefaeecography;
      if (this.findingHandler.currentItem.findingType === PelvicFloorFindingTypeEnum.DyssynergicDefecationAnism) {
        this.findingHandler.currentItem.findingType = PelvicFloorFindingTypeEnum.None;
      }
    } else {
      this.findingDropdownConfig.dropdownValues = this.dropdownValuesDefaeecography;
    }
  }

  anteriorCompartmentCustomValidation(model: PelvicFloorFindingUiModel): boolean {
    return (
      model.craniocaudalExtensionInReferenceToMplType === MlpPositionTypeEnum.AboveTheMPL ||
      model.craniocaudalExtensionInReferenceToMplType === MlpPositionTypeEnum.BelowTheMPL
    );
  }

  middleCompartmentCustomValidation(model: PelvicFloorFindingUiModel): boolean {
    return (
      model.middleCraniocoudalExtensionMlpPositionType === MlpPositionTypeEnum.AboveTheMPL ||
      model.middleCraniocoudalExtensionMlpPositionType === MlpPositionTypeEnum.BelowTheMPL
    );
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== PelvicFloorAreFindingsEnum.Finding;
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 7;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'pel_m_070108';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'pel_m_070107';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.pelvicFloor.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.dropdownValuesDefaeecography = Object.keys(out).map(e => out[e]);
        this.dropdownValuesNoDefaeecography = this.dropdownValuesDefaeecography.filter(
          finding => finding.value !== PelvicFloorFindingTypeEnum.DyssynergicDefecationAnism
        );
        this.updateFindingsList();
      }),
      this.translate.stream('pelvisMRT.pelvicFloor.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),

      this.translate.stream('pelvisMRT.pelvicFloor.aGrading').subscribe((out: PCLGrading) => {
        this.PCLGrading = out;
      }),
      this.translate.stream('pelvisMRT.pelvicFloor.mGrading').subscribe((out: MPLGrading) => {
        this.MPLGrading = out;
      })
    );
  }

  ifFindingType(findingType: PelvicFloorFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === findingType;
  }

  resetTabIndex() {
    this.activeTabIndex = 0;
  }

  setActiveTabIndex(activeIndex: number) {
    this.activeTabIndex = activeIndex;
  }
}
