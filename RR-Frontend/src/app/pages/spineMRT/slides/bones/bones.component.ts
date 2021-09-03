import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { BonesFindingTypeEnum } from '@enums/spineMRT/bones';
import { TechnologyUiModel } from '@models/feetMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

import { BonesUiModel } from '@models/spineMRT/ui/bones/bones-ui.model';
import { BonesValidationModel } from '@models/spineMRT/ui/bones/bones-validation.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BonesPresetsHttpService } from '@services/spineMRT/http/bones/bones-presets-http.service';
import { BonesHelperService } from './bones-helper.service';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';

@Component({
  selector: 'rr-spine-mrt-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetsHttpService
    }
  ]
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> implements OnDestroy {
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  differentialDiagnosisOptions1: DropdownModel[];
  isCMYes: boolean;

  bonesFindingTypeEnum = BonesFindingTypeEnum;
  areFindingsEnum = AreFindingsEnum;

  largeLocalizerConfig: SpineBonesLocalizerConfig;

  spineLocalizerPermittedSelection: SpineLocation;

  activeTabIndex = 0;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private bonesHelperService: BonesHelperService,
    private spineHelperService: SpineHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);

    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();
    this.registerConnection();

    this.subscriptions.push(
      this.bonesHelperService.largeLocalizerOpenConfig.subscribe(
        (config: SpineBonesLocalizerConfig) => (this.largeLocalizerConfig = config)
      )
    );
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.isCMYes = technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isCurrentItem(item: BonesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  onLargeLocalizerClosed() {
    this.bonesHelperService.largeLocalizerOpenConfig.next(null);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.bones.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.bones.differentialDiagnosisOptions1.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions1 = Object.values(out);
      })
    );
  }

  private initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.autoConfigFindingRRId = 'spi_m_060106';
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.bonesHelperService.largeLocalizerOpenConfig.next(null);
    this.bonesHelperService.previousSpineLocalizerSelection = null;
  }
}
