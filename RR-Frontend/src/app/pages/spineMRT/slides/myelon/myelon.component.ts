import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { MyelonSpineDirectionalLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-directional-localizer-options.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';

import { MyelonUIModel } from '@models/spineMRT/ui/myelon/myelon-ui.model';
import { MyelonValidationModel } from '@models/spineMRT/ui/myelon/myelon-validation.model';
import { TechnologyUiModel } from '@models/spineMRT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { MyelonPresetsHttpService } from '@services/spineMRT/http/myelon/myelon-presets-http.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpinalCanalFindingTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-finding-type.enum';
import { SpinalCanalDifferentialDiagnosisTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-differential-diagnosis-type.enum';

@Component({
  selector: 'rr-spine-mrt-myelon',
  templateUrl: './myelon.component.html',
  styleUrls: ['./myelon.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: MyelonPresetsHttpService
    }
  ]
})
export class MyelonComponent extends SlideBaseComponent<MyelonUIModel> {
  findingHandler: DynamicComponentHandler<MyelonFindingUIModel>;
  findingColumnConfig: FindingColumnConfig;
  descriptionTypes = [SpinalCanalFindingTypeEnum.MassEffect, SpinalCanalFindingTypeEnum.NoMassEffect];
  placeholder: string;
  findingTypes: DropdownModel[];
  diffDiagnosisNonSpaceDemandingOptions1: DropdownGroupedModel[];
  diffDiagnosisNonSpaceDemandingOptions2: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingIntramedullaryOptions1: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingIntramedullaryOptions2: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingExtramedullaryOptions1: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingExtramedullaryOptions2: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingEpiduralOptions1: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingEpiduralOptions2: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingExtraduralOptions1: DropdownGroupedModel[];
  differentialDiagnosisSpaceDemandingExtraduralOptions2: DropdownGroupedModel[];

  spineComplexLocalizerLogicType: SpineLocationLogicTypeEnum;
  spineComplexLocalizerLocalizerTitle: string;
  localizationDescription: string;
  isSpineComplexLocalizerNonTarget: boolean;
  isSpineComplexLocalizerOpened = false;

  spineDirectionalLocalizerLocalizationDescription: string;
  isSpineDirectionalLocalizerDiscs = false;
  isSpineDirectionalLocalizerOpened = false;

  areFindingsEnum = AreFindingsEnum;
  spinalCanalFindingTypeEnum = SpinalCanalFindingTypeEnum;

  isCMReinforcedTypeYes: boolean;

  spineLocalizerPermittedSelection: SpineLocation;

  activeTabIndex = 0;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineHelperService: SpineHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, MyelonUIModel, commonServices, MyelonValidationModel);

    this.findingHandler = new DynamicComponentHandler<MyelonFindingUIModel>(this.logger, this.model.findings, MyelonFindingUIModel);

    this.registerCallbacks();
    this.registerConnection();
    this.configureFindingColumn();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: MyelonUIModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: MyelonUIModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.isCMReinforcedTypeYes = technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  private configureFindingColumn() {
    this.findingColumnConfig = new FindingColumnConfig();
    this.findingColumnConfig.itemCount = 4;
    this.findingColumnConfig.autoConfigFindingRRId = 'spi_m_070106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineMRT.spinalCanal.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingColumnConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('spineMRT.spinalCanal.translationBits').subscribe((out: string) => {
        this.findingColumnConfig.translationBits = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingColumnConfig.placeholder = out;
      }),
      this.translate.stream('spineMRT.spinalCanal.addNewFindings.value').subscribe((out: string) => {
        this.findingColumnConfig.buttonText = out;
      }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisNonSpaceDemanding1.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.diffDiagnosisNonSpaceDemandingOptions1 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisNonSpaceDemanding2.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.diffDiagnosisNonSpaceDemandingOptions2 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingIntramedullary1.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingIntramedullaryOptions1 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingIntramedullary2.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingIntramedullaryOptions2 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingExtramedullary1.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingExtramedullaryOptions1 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingExtramedullary2.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingExtramedullaryOptions2 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingEpidural1.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingEpiduralOptions1 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingEpidural2.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingEpiduralOptions2 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingExtradural1.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingExtraduralOptions1 = out;
        }),
      this.translate
        .stream('spineMRT.spinalCanal.differentialDiagnosisSpaceDemandingExtradural2.options')
        .subscribe((out: DropdownGroupedModel[]) => {
          this.differentialDiagnosisSpaceDemandingExtraduralOptions2 = out;
        })
    );
  }

  getCustomLabel(index: number, findingHandler: DynamicComponentHandler<MyelonFindingUIModel>, translationBits): string {
    let customLabel = '';
    const currentFinding = findingHandler.collection[index];

    if (currentFinding.findingType === SpinalCanalFindingTypeEnum.MassEffect) {
      Object.keys(currentFinding.spinalCanalLocation).forEach(key => {
        if (currentFinding.spinalCanalLocation[key]) {
          customLabel = translationBits[key];
        }
      });
    }

    return customLabel;
  }

  setSpineComplexLocalizerOpened(localizerOptions: MyelonSpineComplexLocalizerOptions) {
    this.spineComplexLocalizerLogicType = localizerOptions.logicType;
    this.spineComplexLocalizerLocalizerTitle = localizerOptions.localizerTitle;
    this.localizationDescription = localizerOptions.localizationDescription;
    this.isSpineComplexLocalizerNonTarget = localizerOptions.isNonTarget;
    this.isSpineComplexLocalizerOpened = true;
  }

  setSpineDirectionalLocalizerOpened(localizerOptions: MyelonSpineDirectionalLocalizerOptions) {
    this.spineDirectionalLocalizerLocalizationDescription = localizerOptions.localizationDescription;
    this.isSpineDirectionalLocalizerDiscs = localizerOptions.isDiscs;
    this.isSpineDirectionalLocalizerOpened = true;
  }

  isLargeLocalizerOpened(): boolean {
    return this.isSpineComplexLocalizerOpened || this.isSpineDirectionalLocalizerOpened;
  }

  onLargeLocalizerClosed() {
    if (this.findingHandler.currentItem.findingType === this.spinalCanalFindingTypeEnum.MassEffect) {
      if (this.findingHandler.currentItem.spinalCanalLocation.intramedullary && !this.isLWSSelected()) {
        this.clearExcludedDiagnosis();
      }
    }
    if (this.findingHandler.currentItem.findingType === this.spinalCanalFindingTypeEnum.NoMassEffect) {
      if (!this.isLWSSelected()) {
        this.clearExcludedDiagnosis();
      }
      if (!this.isLWSSelected(true)) {
        this.findingHandler.currentItem.isCaudaEquina = false;
        this.findingHandler.currentItem.isMedullaryCone = false;
      }
    }
    if (this.isSpineComplexLocalizerOpened) {
      this.isSpineComplexLocalizerOpened = false;
    }
  }

  onLargeDirectionalLocalizerClosed() {
    if (this.isSpineDirectionalLocalizerOpened) {
      this.isSpineDirectionalLocalizerOpened = false;
    }
  }

  isLWSSelected(toOsSacrum?: boolean): boolean {
    const { l1, l2, l3, l4, l5, osSacrum, osCoccygis } = this.findingHandler.currentItem.spineLocation;
    const isL1toOsSacrum = l1 || l2 || l3 || l4 || l5 || osSacrum;
    return toOsSacrum ? isL1toOsSacrum : isL1toOsSacrum || osCoccygis;
  }

  clearExcludedDiagnosis() {
    if (
      this.findingHandler.currentItem.spinalCanalDifferentialDiagnosisType ===
      SpinalCanalDifferentialDiagnosisTypeEnum.EpendymomaMyxopapillaryType
    ) {
      this.clearDifferentialDiagnosis1(true);
    } else if (
      this.findingHandler.currentItem.differentialDiagnosis01 === SpinalCanalDifferentialDiagnosisTypeEnum.EpendymomaMyxopapillaryType
    ) {
      this.clearDifferentialDiagnosis1();
    } else if (
      this.findingHandler.currentItem.differentialDiagnosis02 === SpinalCanalDifferentialDiagnosisTypeEnum.EpendymomaMyxopapillaryType
    ) {
      this.clearDifferentialDiagnosis2();
    } else if (
      this.findingHandler.currentItem.differentialDiagnosis03 === SpinalCanalDifferentialDiagnosisTypeEnum.EpendymomaMyxopapillaryType
    ) {
      this.clearDifferentialDiagnosis3();
    }
  }

  clearDifferentialDiagnosis1(isSpinalCanal?: boolean) {
    if (isSpinalCanal) {
      this.findingHandler.currentItem.spinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisTypeEnum.None;
    } else {
      this.findingHandler.currentItem.differentialDiagnosis01 = SpinalCanalDifferentialDiagnosisTypeEnum.None;
    }
    this.clearDifferentialDiagnosis2();
  }

  clearDifferentialDiagnosis2() {
    this.findingHandler.currentItem.differentialDiagnosis02 = SpinalCanalDifferentialDiagnosisTypeEnum.None;
    // this.findingHandler.currentItem.isSubordinated = false;
    this.clearDifferentialDiagnosis3();
  }

  clearDifferentialDiagnosis3() {
    this.findingHandler.currentItem.differentialDiagnosis03 = SpinalCanalDifferentialDiagnosisTypeEnum.None;
  }
}
