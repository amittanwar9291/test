import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BrainstemCranialNervesUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-ui.model';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';

import { BrainstemCranialNervesFindingTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-type.enum';

import { nameof } from 'ts-simple-nameof';
import { BrainstemCranialNervesValidationModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-validation.model';
import { BrainstemCranialNervesAreFindingsTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves-are-findings-type.enum';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { BrainstemCranialNervesHelperService } from './brainstem-cranial-nerves-helper.service';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BrainstemCranialNervesPresetHttpService } from '@services/headMRT/http/brainstem-cranial-nerves/brainstem-cranial-nerves-preset-http.service';

@Component({
  selector: 'rr-brainstem-cranial-nerves',
  templateUrl: './brainstem-cranial-nerves.component.html',
  styleUrls: ['./brainstem-cranial-nerves.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BrainstemCranialNervesPresetHttpService
    }
  ]
})
export class BrainstemCranialNervesComponent extends SlideBaseComponent<BrainstemCranialNervesUiModel> {
  areFindingsEnum = BrainstemCranialNervesAreFindingsTypeEnum;
  brainstemCranialNervesFindingTypeEnum = BrainstemCranialNervesFindingTypeEnum;
  findingHandler: DynamicComponentHandler<BrainstemCranialNervesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private brainstemCranialNervesHelperService: BrainstemCranialNervesHelperService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      BrainstemCranialNervesUiModel,
      commonServices,
      BrainstemCranialNervesValidationModel
    );
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BrainstemCranialNervesFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.brainstemCranialNervesHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
      this.brainstemCranialNervesHelperService.isWeightingTypeDWI.next(
        technologyModel.sequences[0].weightingType === WeightingTypeEnum.DWI
      );
      let isWeightingTypeDWI = false;
      technologyModel.sequences.forEach(sequence => {
        if (sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted) {
          isWeightingTypeDWI = true;
        }
      });
      this.brainstemCranialNervesHelperService.isWeightingTypeDWI.next(isWeightingTypeDWI);
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: BrainstemCranialNervesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: BrainstemCranialNervesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.True;
  }

  isFindingType(type: BrainstemCranialNervesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.brainstemCranialNerves.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.brainstemCranialNerves.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<BrainstemCranialNervesFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 2;
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_m_080107';
  }
}
