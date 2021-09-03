import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { SoftTissueUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-ui.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SoftTissueFindingTypeEnum } from '@enums/angiographyCT/soft-tissue/soft-tissue-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissuesValidationModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-validation.model';
import { SoftTissueHelperService } from './soft-tissue-helper.service';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { values } from 'lodash';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

@Component({
  selector: 'rr-soft-tissue',
  templateUrl: './soft-tissue.component.html',
  styleUrls: ['./soft-tissue.component.scss']
})
export class SoftTissueComponent extends SlideBaseComponent<SoftTissueUiModel> {
  largeLocalizerOpen: string;

  findingHandler: DynamicComponentHandler<SoftTissueFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  areFindingsEnum = AreFindingsEnum;
  softTissueFindingTypeEnum = SoftTissueFindingTypeEnum;

  dignityTypeOptions: DropdownModel[];
  localizationMassTypeOptions: DropdownModel[];
  diagnosisTypeOptions: DropdownModel[];
  findingTypeOptions: DropdownModel[];

  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;
  spineLocationDisablePartEnum = SpineSelectionAccessibilityModeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private softTissueHelperService: SoftTissueHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissueUiModel, commonServices, SoftTissuesValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftTissueFindingUiModel);
    this.initDynamicComponentConfig();

    this.subscriptions.push(
      this.softTissueHelperService.largeLocalizerOpen.subscribe(value => {
        this.largeLocalizerOpen = value;
      })
    );

    this.registerCallbacks();
    this.initTranslations();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.softTissue.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('angiographyCT.softTissue.localizationMassTypeOptions.options').subscribe((out: string[]) => {
        this.localizationMassTypeOptions = values(out);
      }),
      this.translate.stream('angiographyCT.softTissue.dignityTypeOptionsW032.options').subscribe((out: DropdownModel[]) => {
        this.dignityTypeOptions = out;
      }),
      this.translate.stream('angiographyCT.softTissue.diagnosisTypeOptionsW033.options').subscribe((out: DropdownModel[]) => {
        this.diagnosisTypeOptions = out;
      }),
      this.translate.stream('angiographyCT.softTissue.findingTypeOptionsW034.options').subscribe((out: DropdownModel[]) => {
        this.findingTypeOptions = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.softTissue.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<SoftTissueFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_100106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_100107';
    this.findingDropdownConfig.itemCount = 8;
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: SoftTissueFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  onLargeLocalizerClosed() {
    this.softTissueHelperService.largeLocalizerOpen.next(null);
  }

  spineLocalizerCondition() {
    if (this.findingHandler.currentItem.findingType === SoftTissueFindingTypeEnum.Supraaortic) {
      return this.spineLocationDisablePartEnum.C0toC7;
    } else if (this.findingHandler.currentItem.findingType === SoftTissueFindingTypeEnum.Thoracic) {
      return this.spineLocationDisablePartEnum.TH1toTH12;
    } else if (this.findingHandler.currentItem.findingType === SoftTissueFindingTypeEnum.Abdominal) {
      return this.spineLocationDisablePartEnum.L1toL5;
    }
  }
}
