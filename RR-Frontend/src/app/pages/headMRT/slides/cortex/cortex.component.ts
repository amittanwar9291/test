import { Component } from '@angular/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { CortexUiModel } from '@models/headMRT/ui/cortex/cortex-ui.model';
import { CortexFindingTypeEnum } from '@enums/headMRT/cortex/cortex-finding-type.enum';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { CortexValidationModel } from '@models/headMRT/ui/cortex/cortex-valdation-model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CortexHelperService } from './cortex-helper.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { CortexPresetHttpService } from '@services/headMRT/http/cortex/cortex-preset-http.service';

@Component({
  selector: 'rr-cerebral-cortex',
  templateUrl: './cortex.component.html',
  styleUrls: ['./cortex.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: CortexPresetHttpService
    }
  ]
})
export class CortexComponent extends SlideBaseComponent<CortexUiModel> {
  areFindingsEnum = AreFindingsEnum;
  cortexFindingTypeEnum = CortexFindingTypeEnum;
  findingHandler: DynamicComponentHandler<CortexFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isDWI: boolean;
  isContrastEnhanced: boolean;
  largeLocalizerOpen: string;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private cortexHelperService: CortexHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, CortexUiModel, commonServices, CortexValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CortexFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();

    this.subscriptions.push(
      this.cortexHelperService.largeLocalizerOpen.subscribe(value => {
        this.largeLocalizerOpen = value;
      })
    );
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: CortexUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: CortexUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted);
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: CortexFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.cortex.findingTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.cortex.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  onLargeLocalizerClosed() {
    this.cortexHelperService.largeLocalizerOpen.next(null);
    this.resetCortexLocalizationRelatedValues();
  }

  private resetCortexLocalizationRelatedValues() {
    const model = this.findingHandler.currentItem;
    const cortexLocations = model.cortexLocations;
    if (!cortexLocations.parietalLobeRight && !cortexLocations.parietalLobeLeft) {
      model.isPraecuneus = false;
    }
    if (!cortexLocations.occipitalLobeRight && !cortexLocations.occipitalLobeLeft) {
      model.isCuneus = false;
      model.isLingualGyrus = false;
    }
    if (!cortexLocations.temporalLobeRight && !cortexLocations.temporalLobeLeft) {
      model.isGyrusTemporalisTransversus = false;
      model.isLateralOccipitotemporalGyrus = false;
    }
    if (!cortexLocations.cerebellum) {
      model.isParsIntermedia = false;
      model.isSuperiorCerebellarPeduncle = false;
      model.isMiddleCerebellarPeduncle = false;
      model.isInferiorCerebellarPeduncle = false;
    }
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<CortexFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_m_060106';
    this.findingDropdownConfig.itemCount = 4;
  }
}
