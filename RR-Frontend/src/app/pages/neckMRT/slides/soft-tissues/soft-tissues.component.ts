import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { SoftTissuesUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-ui.model';
import { SoftTissuesValidationModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-validation.model';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';

import { SoftTissuesFindingTypeEnum } from '@enums/neckMRT/soft-tissues';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

import { compact, values } from 'lodash';

import { SoftTissuesHelperService } from './soft-tissues-helper.service';

import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-soft-tissues',
  templateUrl: './soft-tissues.component.html',
  styleUrls: ['./soft-tissues.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissuesComponent extends SlideBaseComponent<SoftTissuesUiModel> {
  findingHandler: DynamicComponentHandler<SoftTissuesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isCMReinforced: boolean;
  isDWI: boolean;
  isLargeLocalizerOpen = false;
  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;
  spineLocationAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  lNCDifferentialDiagnosisOptions: DropdownModel[];
  tCDifferentialDiagnosisOptions: DropdownModel[];
  differentialDiagnosis1Options: DropdownModel[];
  differentialDiagnosis2Options: DropdownModel[];
  orientationAxialOptions: DropdownModel[];
  shapeDifferentialDiagnosisOptions: DropdownModel[];
  contrastEnhancementDistributionOptions: DropdownModel[];

  areFindings: typeof AreFindingsEnum;
  findingType: typeof SoftTissuesFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private helperService: SoftTissuesHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissuesUiModel, commonServices, SoftTissuesValidationModel);

    this.findingHandler = new DynamicComponentHandler<SoftTissuesFindingUiModel>(
      this.logger,
      this.model.findings,
      SoftTissuesFindingUiModel
    );
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnections();

    this.areFindings = AreFindingsEnum;
    this.findingType = SoftTissuesFindingTypeEnum;

    this.helperService.isLargeLocalizerOpen.subscribe(val => {
      this.isLargeLocalizerOpen = val;
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SoftTissuesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: SoftTissuesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMReinforced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI);
    });
  }

  isFindingWithTabs(): boolean {
    return [SoftTissuesFindingTypeEnum.MassInflammation].includes(this.findingHandler.currentItem.findingType);
  }

  onLocalizerClose(): void {
    this.helperService.isLargeLocalizerOpen.next(false);
    if (compact(Object.values(this.findingHandler.currentItem.localizationReferenceVertebra)).length !== 0) {
      this.validationHelperService.removeError(nameof<SoftTissuesFindingUiModel>(m => m.localizationReferenceVertebra));
    }
  }

  getCustomLabel(index: number, findingHandler: DynamicComponentHandler<SoftTissuesFindingUiModel>, translationBits): string {
    const currentFindingType = findingHandler.collection[index].findingType;
    if (this.findingDropdownConfig.dropdownValues.length && currentFindingType !== SoftTissuesFindingTypeEnum.None) {
      const findingType = this.findingDropdownConfig.dropdownValues.find(item => item.value === currentFindingType);
      let findingNameSegment;
      findingNameSegment = findingType.dropdownClosedLabel ? findingType.dropdownClosedLabel : findingType.label;

      const customValue = findingHandler.collection[index].characterizationCystType;
      const customSegmentKey = Object.keys(translationBits).find(key => key.toLowerCase() === customValue.toLowerCase());
      const customNameSegment = customSegmentKey ? translationBits[customSegmentKey] : '';

      const result = `${findingNameSegment} ${customNameSegment}`;

      return result;
    }
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('neckMRT.softTissues.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('neckMRT.softTissues.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('neckMRT.softTissues.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('neckMRT.softTissues.lNCDifferentialDiagnosisOptions.options').subscribe((out: string) => {
        this.lNCDifferentialDiagnosisOptions = values(out);
      }),
      this.translate.stream('neckMRT.softTissues.tCDifferentialDiagnosisOptions.options').subscribe((out: string) => {
        this.tCDifferentialDiagnosisOptions = values(out);
      }),
      this.translate.stream('neckMRT.softTissues.differentialDiagnosis1Options.options').subscribe((out: string) => {
        this.differentialDiagnosis1Options = values(out);
      }),
      this.translate.stream('neckMRT.softTissues.differentialDiagnosis2Options.options').subscribe((out: string) => {
        this.differentialDiagnosis2Options = values(out);
      }),
      this.translate.stream('neckMRT.softTissues.activeSubstanceOptions.options').subscribe((out: string) => {
        this.orientationAxialOptions = values(out);
      }),

      this.translate.stream('neckMRT.softTissues.shapeDifferentialDiagnosisOptions.options').subscribe((out: string) => {
        this.shapeDifferentialDiagnosisOptions = values(out);
      }),
      this.translate.stream('neckMRT.softTissues.contrastEnhancementDistributionOptions.options').subscribe((out: string) => {
        this.contrastEnhancementDistributionOptions = values(out);
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'nec_m_060106';
  }
}
