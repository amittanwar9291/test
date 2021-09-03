import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { CerebrospinalAreFindings } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-are-findings.enum';
import { CerebrospinalFluidSpaceFindingTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { CerebrospinalFluidSpaceUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { CerebrospinalFluidSpaceValidationModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-validation.model';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { nameof } from 'ts-simple-nameof';
import { CerebrospinalFluidSpaceHelperService } from './cerebrospinal-fluid-space-helper.service';

@Component({
  selector: 'rr-cerebrospinal-fluid-space',
  templateUrl: './cerebrospinal-fluid-space.component.html',
  styleUrls: ['./cerebrospinal-fluid-space.component.scss']
})
export class CerebrospinalFluidSpaceComponent extends SlideBaseComponent<CerebrospinalFluidSpaceUiModel> {
  areFindingsEnum = CerebrospinalAreFindings;
  cerebrospinalFluidSpaceFindingTypeEnum = CerebrospinalFluidSpaceFindingTypeEnum;
  findingHandler: DynamicComponentHandler<CerebrospinalFluidSpaceFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private cerebrospinalFluidSpaceHelperService: CerebrospinalFluidSpaceHelperService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      CerebrospinalFluidSpaceUiModel,
      commonServices,
      CerebrospinalFluidSpaceValidationModel
    );
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CerebrospinalFluidSpaceFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.True;
  }

  isFindingType(type: CerebrospinalFluidSpaceFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.cerebrospinalFluidSpaceHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
      this.cerebrospinalFluidSpaceHelperService.isWeightingTypeDWI.next(
        technologyModel.sequences[0].weightingType === WeightingTypeEnum.DWI
      );
      let isWeightingTypeDWI = false;
      technologyModel.sequences.forEach(sequence => {
        if (sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted) {
          isWeightingTypeDWI = true;
        }
      });
      this.cerebrospinalFluidSpaceHelperService.isWeightingTypeDWI.next(isWeightingTypeDWI);
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: CerebrospinalFluidSpaceUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: CerebrospinalFluidSpaceUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.cerebrospinalFluid.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.cerebrospinalFluid.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 3;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hea_m_090106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hea_m_090107';
  }

  isFindingWithTabs(): boolean {
    return [
      CerebrospinalFluidSpaceFindingTypeEnum.SubarachnoidHemorrhage,
      CerebrospinalFluidSpaceFindingTypeEnum.VentricleConfiguration,
      CerebrospinalFluidSpaceFindingTypeEnum.Mass
    ].includes(this.findingHandler.currentItem.findingType);
  }
}
