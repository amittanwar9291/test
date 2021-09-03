import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { AnamnesisUiModel, LocalizationUiModel } from '@models/spineCT';

import { NavigationService } from '@services/shared';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AnamnesisIndicationUiModel } from '@models/spineCT/ui/anamnesis/anamnesis-indication-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { PreviousInterventionUiModel } from '@models/spineCT/ui/anamnesis/previous-intervention-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { IntracranialHypotensionSyndromeTypeEnum } from '@enums/spineCT/anamnesis/intracranial-hypotension-syndrome-type.enum';
import { PreviousInterventionTypeEnum } from '@enums/spineCT/anamnesis/previous-intervention-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { compact } from 'lodash';
import { DetailsInterventionTypeEnum } from '@enums/spineCT/anamnesis/details-intervention-type.enum';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> implements OnInit {
  indicationFindingHandler: DynamicComponentHandler<AnamnesisIndicationUiModel>;
  indicationFindingDropdownConfig: FindingColumnConfig;

  interventionFindingHandler: DynamicComponentHandler<PreviousInterventionUiModel>;
  interventionFindingDropdownConfig: FindingColumnConfig;

  spineLocalizerPermittedSelection = new SpineLocation();

  intracranialHypotensionSyndromeType = IntracranialHypotensionSyndromeTypeEnum;
  spineSelectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;

  isDirectionalLocalizerOpen = false;
  isIndicationComplexLocalizerOpen = false;
  isInterventionComplexLocalizerOpen = false;
  selectionAccessibility: SpineSelectionAccessibilityModeEnum;
  logicType: SpineLocationLogicTypeEnum;
  description: string;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineHelperService: SpineCtHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices);

    this.indicationFindingHandler = new DynamicComponentHandler(this.logger, this.model.anamnesisIndications, AnamnesisIndicationUiModel);

    this.interventionFindingHandler = new DynamicComponentHandler(
      this.logger,
      this.model.previousInterventions,
      PreviousInterventionUiModel
    );
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions.push(
      this.spineHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  initDynamicComponentConfig(): void {
    this.indicationFindingDropdownConfig = new FindingColumnConfig();
    this.indicationFindingDropdownConfig.findingType = nameof<AnamnesisIndicationUiModel>(m => m.anamnesisIndicationType);
    this.indicationFindingDropdownConfig.findingColumnIds.findingRRId = 'spi_c_020105';
    this.indicationFindingDropdownConfig.findingColumnIds.buttonRRId = 'spi_c_020106';
    this.indicationFindingDropdownConfig.itemCount = 5;

    this.interventionFindingDropdownConfig = new FindingColumnConfig();
    this.interventionFindingDropdownConfig.findingType = nameof<PreviousInterventionUiModel>(m => m.previousInterventionType);
    this.indicationFindingDropdownConfig.findingColumnIds.findingRRId = 'spi_c_020303';
    this.indicationFindingDropdownConfig.findingColumnIds.buttonRRId = 'spi_c_020304';
    this.interventionFindingDropdownConfig.itemCount = 6;
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: AnamnesisUiModel) => {
      this.indicationFindingHandler.reinitializeCollection(modelOut.anamnesisIndications);
      this.interventionFindingHandler.reinitializeCollection(modelOut.previousInterventions);
    });

    this.registerSaveCallback((modelOut: AnamnesisUiModel) => {
      this.indicationFindingHandler.collectionPostSaveCleanup(modelOut.anamnesisIndications);
      this.interventionFindingHandler.collectionPostSaveCleanup(modelOut.previousInterventions);
    });

    this.registerPreSaveCallback(() => {
      this.indicationFindingHandler.collectionPreSaveCleanup();
      this.interventionFindingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.placeholder = out;
        this.interventionFindingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('spineCT.anamnesis.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.indicationFindingDropdownConfig.dropdownValues = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('spineCT.anamnesis.addAnamnesisIndication.value').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.buttonText = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('spineCT.anamnesis.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.interventionFindingDropdownConfig.dropdownValues = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('spineCT.anamnesis.addIntervention.value').subscribe((out: string) => {
        this.interventionFindingDropdownConfig.buttonText = out;
      })
    );
  }

  isInterventionShown(intervention: PreviousInterventionTypeEnum): boolean {
    return this.interventionFindingHandler?.currentItem?.previousInterventionType === intervention;
  }

  openDirectionalLocalizer(): void {
    this.isDirectionalLocalizerOpen = true;
  }

  openIndicationComplexLocalizer(): void {
    this.isIndicationComplexLocalizerOpen = true;
  }

  openInterventionComplexLocalizer(): void {
    switch (this.interventionFindingHandler.currentItem.previousInterventionType) {
      case PreviousInterventionTypeEnum.Spondylodesis: {
        this.logicType = SpineLocationLogicTypeEnum.VertebreRange;
        this.selectionAccessibility = null;
        this.description = 'spineCT.anamnesis.areaOfFixationPleaseSelect.value';
        break;
      }
      case PreviousInterventionTypeEnum.Laminectomy: {
        this.logicType = SpineLocationLogicTypeEnum.VertebreEach;
        this.selectionAccessibility = SpineSelectionAccessibilityModeEnum.C1toL5;
        this.description = 'spineCT.anamnesis.pleaseSelectVertebralBodyMultipleChoice.value';
        break;
      }
      case PreviousInterventionTypeEnum.IntervertebralDiscReplacement: {
        this.logicType = SpineLocationLogicTypeEnum.DiscEach;
        this.selectionAccessibility = null;
        this.description = 'spineCT.anamnesis.pleaseSelectDiscsMultipleChoice.value';
        break;
      }
      case PreviousInterventionTypeEnum.VertebralBodyReplacement: {
        this.logicType = SpineLocationLogicTypeEnum.VertebreEach;
        this.selectionAccessibility = SpineSelectionAccessibilityModeEnum.C1toL5;
        this.description = 'spineCT.anamnesis.pleaseSelectVertebralBodyMultipleChoice.value';
        break;
      }
      case PreviousInterventionTypeEnum.StatusPostBoneCementImplantation: {
        this.logicType = SpineLocationLogicTypeEnum.VertebreEach;
        this.selectionAccessibility = SpineSelectionAccessibilityModeEnum.C1toL5;
        this.description = 'spineCT.anamnesis.pleaseSelectVertebralBodyMultipleChoice.value';
        break;
      }
      case PreviousInterventionTypeEnum.InterspinousSpacer: {
        this.logicType = SpineLocationLogicTypeEnum.VertebreRange;
        this.selectionAccessibility = null;
        this.description = 'spineCT.anamnesis.areaOfFixationPleaseSelect.value';
        break;
      }
    }

    this.isInterventionComplexLocalizerOpen = true;
  }

  closeLocalizer(): void {
    this.isDirectionalLocalizerOpen = false;
    this.isIndicationComplexLocalizerOpen = false;
    this.isInterventionComplexLocalizerOpen = false;

    const isSingleSelect = compact(Object.values(this.interventionFindingHandler.currentItem.spineLocation)).length === 1;
    if (
      this.interventionFindingHandler.currentItem.previousInterventionType === PreviousInterventionTypeEnum.Laminectomy &&
      !isSingleSelect
    ) {
      this.interventionFindingHandler.currentItem.isRight = false;
      this.interventionFindingHandler.currentItem.isLeft = false;
    }
    if (
      this.interventionFindingHandler.currentItem.previousInterventionType ===
        PreviousInterventionTypeEnum.StatusPostBoneCementImplantation &&
      !isSingleSelect
    ) {
      this.interventionFindingHandler.currentItem.detailsInterventionType = DetailsInterventionTypeEnum.None;
    }
  }

  resetDate(date: MonthYearModel): void {
    date.month = 0;
    date.year = 0;
  }

  get isAnyLocalizerOpen(): boolean {
    return this.isDirectionalLocalizerOpen || this.isIndicationComplexLocalizerOpen || this.isInterventionComplexLocalizerOpen;
  }
}
