import { Component, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueValidationModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-validation.model';
import { LocalizationUiModel } from '@models/handMRT/ui/localization/localization-ui.model';
import { TechnologyUiModel } from '@models/handMRT/ui/technology/technology-ui.model';
import { filter } from 'lodash';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { HandJointsPageTypeEnum } from '../../shared/hand-joints/large/hand-joints-page-type.enum';
import { SoftTissueFindingTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-finding-type.enum';
import { HandSoftTissueHandDetailsLocalizerConfig, SoftTissueHelperService } from './soft-tissue-helper.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SoftTissuePresetHttpService } from '@services/handMRT/http/soft-tissue/soft-tissue-preset-http.service';

@Component({
  selector: 'rr-soft-tissue',
  templateUrl: './soft-tissue.component.html',
  styleUrls: ['./soft-tissue.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftTissuePresetHttpService
    }
  ]
})
export class SoftTissueComponent extends SlideBaseComponent<SoftTissueUiModel> implements OnDestroy {
  findingHandler: DynamicComponentHandler<SoftTissueFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  w018: DropdownModel[];
  w019: DropdownModel[];
  isLargeLocalizerOpened = false;
  isLargeJointLocalizerOpened = false;
  activeTabIndex = 0;

  handDetailslocalizerConfig: HandSoftTissueHandDetailsLocalizerConfig;

  public localizerSide: LocationTypeEnum;
  public technologyModel: TechnologyUiModel;
  locationType = LocationTypeEnum;
  handJointsPageTypeEnum = HandJointsPageTypeEnum;
  softTissueFindingTypeEnum = SoftTissueFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private softTissueHelperService: SoftTissueHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissueUiModel, commonServices, SoftTissueValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftTissueFindingUiModel);

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      if (localizationModel?.localization) {
        this.localizerSide = localizationModel.localization.right ? LocationTypeEnum.Right : LocationTypeEnum.Left;
      }
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      if (technologyModel) {
        this.technologyModel = technologyModel;
      }
    });

    this.registerSaveCallback((model: SoftTissueUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerGetCallback((model: SoftTissueUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.findingsConfiguration();

    this.subscriptions.push(
      this.softTissueHelperService.handDetailslocalizerConfig.subscribe(value => (this.handDetailslocalizerConfig = value))
    );
  }

  resetTabIndex() {
    this.activeTabIndex = 0;
  }

  setActiveTabIndex(activeIndex: number) {
    this.activeTabIndex = activeIndex;
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'han_m_080106';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  toggleLocalizer() {
    this.softTissueHelperService.handDetailslocalizerConfig.next(null);
  }

  toggleJointLocalizer() {
    this.isLargeJointLocalizerOpened = !this.isLargeJointLocalizerOpened;
  }

  removeValidationError(): void {
    const selectedBones = filter(this.findingHandler.currentItem.handLocationsLocalizer, handBone => {
      return handBone === true;
    });
    if (selectedBones.length) {
      this.validationHelperService.removeError('handLocationsLocalizer');
    }
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('handMRT.softTissue.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('handMRT.softTissue.addNewFinding.value').subscribe(out => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('handMRT.softTissue.w018.options').subscribe(out => {
        this.w018 = out;
      }),
      this.translate.stream('handMRT.softTissue.w019.options').subscribe(out => {
        this.w019 = out;
      })
    );
  }
}
