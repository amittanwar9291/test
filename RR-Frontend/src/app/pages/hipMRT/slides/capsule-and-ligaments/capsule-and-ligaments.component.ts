import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CapsuleAndLigamentsUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-ui.model';
import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';
import { CapsuleAndLigamentsValidation } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-validation.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/finding-type.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { TechnologyUiModel } from '@models/hipMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-capsule-and-ligaments',
  templateUrl: './capsule-and-ligaments.component.html',
  styleUrls: ['./capsule-and-ligaments.component.scss']
})
export class CapsuleAndLigamentsComponent extends SlideBaseComponent<CapsuleAndLigamentsUiModel> {
  findingHandler: DynamicComponentHandler<CapsuleAndLigamentsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isContrastEnhanced: boolean;

  areFindings: typeof AreFindingsEnum;
  findingType: typeof FindingTypeEnum;
  simpleAnswer: typeof SimpleAnswerEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      CapsuleAndLigamentsUiModel,
      commonServices,
      CapsuleAndLigamentsValidation
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CapsuleAndLigamentsFindingUiModel);
    this.initFindingColumnConfig();

    this.areFindings = AreFindingsEnum;
    this.findingType = FindingTypeEnum;
    this.simpleAnswer = SimpleAnswerEnum;

    this.registerCallbacks();
    this.registerConnections();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: CapsuleAndLigamentsUiModel) => {
      if (modelOut.findings.length === 0) {
        modelOut.findings.push(new CapsuleAndLigamentsFindingUiModel());
      }
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: CapsuleAndLigamentsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'hip_m_060106';
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('hipMRT.capsuleAndLigaments.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('hipMRT.capsuleAndLigaments.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
}
