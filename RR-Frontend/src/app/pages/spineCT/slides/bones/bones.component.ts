import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { BonesUiModel, BonesFindingUiModel, LocalizationUiModel, TechnologyUiModel } from '@models/spineCT';
import { ISpineLocationOptions } from '@interfaces/shared/spine/localizers/spine-location-options.interface';
import { BonesLargeLocalizerConfig } from '@models/spineCT/ui/bones/bones-large-localizer-config.model';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesFindingTypeEnum } from '@enums/spineCT/bones/bones-finding-type.enum';
import { BonesValidationModel } from '@models/spineCT/ui/bones/bones-validation.model';
import { nameof } from 'ts-simple-nameof';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { BonesHelperService } from './bones-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> implements OnInit, OnDestroy {
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  spineLocalizerPermittedSelection: SpineLocation;
  localizerOptions: ISpineLocationOptions;
  largeLocalizerConfig: BonesLargeLocalizerConfig;
  findingType = BonesFindingTypeEnum;
  areFindingsEnum = AreFindingsEnum;
  descriptionTypes = [this.findingType.MassSpine];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public spineHelperService: SpineCtHelperService,
    private bonesHelperService: BonesHelperService,
    public validationHelperService: ValidationHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);
    this.localizerOptions = { isOpen: false };
    this.registerCallbacks();
    this.registerConnection();
    this.initializeDynamicDropdownConfig();
  }

  private registerCallbacks() {
    this.registerGetCallback((model: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.bonesHelperService.isCMYes.next(technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<BonesFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.autoConfigFindingRRId = 'spi_c_060106';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.findingTypes.options').subscribe(out => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('spineCT.bones.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('spineCT.bones.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  ngOnInit() {
    super.ngOnInit();
    this.subscriptions.push(
      this.bonesHelperService.largeLocalizerConfig.subscribe((config: BonesLargeLocalizerConfig) => {
        this.largeLocalizerConfig = config;
      })
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.bonesHelperService.isCMYes.next(null);
    this.bonesHelperService.largeLocalizerConfig.next(null);
    this.bonesHelperService.previousSpineLocalizerSelection = null;
  }

  onLargeLocalizerClosed() {
    this.bonesHelperService.largeLocalizerConfig.next(null);
  }
}
