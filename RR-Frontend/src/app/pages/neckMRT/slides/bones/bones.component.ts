import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { BonesUiModel } from '@models/neckMRT/ui/bones/bones-ui.model';
import { BonesValidationModel } from '@models/neckMRT/ui/bones/bones-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { BonesFindingTypeEnum } from '@enums/neckMRT/bones';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> {
  isLargeLocalizerOpen = false;
  largeLocalizerConfig: BonesLargeLocalizerConfigModel;
  spineLocalizerPermittedSelection: SpineLocation;

  isCMReinforced: boolean;

  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  differentialDiagnosisOptions: DropdownGroupedModel[];
  differentialDiagnosisRestrictedOptions: DropdownGroupedModel[];
  myelonDifferentialDiagnosisOptions: DropdownModel[];
  osteomyelitisDifferentialDiagnosisOptions: DropdownModel[];

  areFindings: typeof AreFindingsEnum;
  findingType: typeof BonesFindingTypeEnum;
  spineLocationLogicType: typeof SpineLocationLogicTypeEnum;
  spineSelectionAccessibilityMode: typeof SpineSelectionAccessibilityModeEnum;
  activeTabIndex = 0;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler<BonesFindingUiModel>(this.logger, this.model.findings, BonesFindingUiModel);

    this.initFindingColumnConfig();
    this.registerCallbacks();
    this.registerConnections();

    this.areFindings = AreFindingsEnum;
    this.findingType = BonesFindingTypeEnum;
    this.spineLocationLogicType = SpineLocationLogicTypeEnum;
  }

  onLocalizerOpen(localizerConfig: BonesLargeLocalizerConfigModel): void {
    this.isLargeLocalizerOpen = true;
    this.largeLocalizerConfig = localizerConfig;
  }

  onLocalizerClose(): void {
    if (this.largeLocalizerConfig.activeTabIndexOnClose) {
      this.activeTabIndex = this.largeLocalizerConfig.activeTabIndexOnClose;
    } else {
      this.activeTabIndex = 0;
    }
    this.isLargeLocalizerOpen = false;
    this.largeLocalizerConfig = null;
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'nec_m_100106';
  }

  isFindingWithTabs(): boolean {
    return [BonesFindingTypeEnum.SpatialNeoplasm].includes(this.findingHandler.currentItem.findingType);
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMReinforced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('neckMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('neckMRT.bones.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('neckMRT.bones.differentialDiagnosisOptions.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      }),
      this.translate.stream('neckMRT.bones.differentialDiagnosisRestrictedOptions.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisRestrictedOptions = Object.values(out);
      }),
      this.translate.stream('neckMRT.bones.myelonDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.myelonDifferentialDiagnosisOptions = Object.values(out);
      }),
      this.translate.stream('neckMRT.bones.osteomyelitisDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.osteomyelitisDifferentialDiagnosisOptions = Object.values(out);
      })
    );
  }
}
