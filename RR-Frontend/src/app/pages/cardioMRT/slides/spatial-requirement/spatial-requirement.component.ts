import { Component, OnInit } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SpatialRequirementPresetsHttpService } from '@services/cardioMRT/http/spatial-requirement/spatial-requirement-presets-http.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SpatialRequirementUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-ui.model';
import { SpatialRequirementFindingUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';
import { SpatialRequirementValidationModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-validation.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

@Component({
  selector: 'rr-spatial-requirement',
  templateUrl: './spatial-requirement.component.html',
  styleUrls: ['./spatial-requirement.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SpatialRequirementPresetsHttpService
    }
  ]
})
export class SpatialRequirementComponent extends SlideBaseComponent<SpatialRequirementUiModel> implements OnInit {
  findingHandler: DynamicComponentHandler<SpatialRequirementFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindings: typeof AreFindingsEnum;

  areContrastEnhancementGroupsDisabled = false;

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
      SpatialRequirementUiModel,
      commonServices,
      SpatialRequirementValidationModel
    );

    this.prepareConfiguration();

    this.findingHandler = new DynamicComponentHandler<SpatialRequirementFindingUiModel>(
      this.commonServices.logger,
      this.model.findings,
      SpatialRequirementFindingUiModel
    );

    this.registerCallbacks();
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.areContrastEnhancementGroupsDisabled = technologyModel.cmReinforcedType !== SimpleAnswerEnum.Yes;
    });

    this.areFindings = AreFindingsEnum;
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: SpatialRequirementUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: SpatialRequirementUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private prepareConfiguration(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'car_m_080106';
    columnIds.iDescribeLabelRRId = 'car_m_080107';
    columnIds.iKnowLabelRRId = 'car_m_080108';
    columnIds.iDescribeRadioRRId = 'car_m_080111';
    columnIds.iKnowRadioRRId = 'car_m_080112';
    columnIds.buttonRRId = 'car_m_080109';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('cardioMRT.spatialRequirement.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('cardioMRT.spatialRequirement.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
}
