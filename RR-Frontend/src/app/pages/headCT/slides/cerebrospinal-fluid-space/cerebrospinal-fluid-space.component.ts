import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CerebrospinalFluidSpaceUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { CerebrospinalFluidSpaceFindingTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-type.enum';
import { TechnologyUiModel } from '@models/headCT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { CerebrospinalFluidSpaceHelperService } from './cerebrospinal-fluid-space-helper.service';
import { CerebrospinalFluidSpaceValidationModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-validation.model';

@Component({
  selector: 'rr-cerebrospinal-fluid-space',
  templateUrl: './cerebrospinal-fluid-space.component.html',
  styleUrls: ['./cerebrospinal-fluid-space.component.scss']
})
export class CerebrospinalFluidSpaceComponent extends SlideBaseComponent<CerebrospinalFluidSpaceUiModel> {
  areFindingsEnum = AreFindingsEnum;
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

  private registerCallbacks(): void {
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

  private registerConnection(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.cerebrospinalFluidSpaceHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: CerebrospinalFluidSpaceFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => (this.findingDropdownConfig.placeholder = out)),
      this.translate
        .stream('headCT.cerebrospinalFluidSpace.findingTypes.options')
        .subscribe((out: DropdownModel[]) => (this.findingDropdownConfig.dropdownValues = out)),
      this.translate
        .stream('headCT.cerebrospinalFluidSpace.addNewFinding.value')
        .subscribe((out: string) => (this.findingDropdownConfig.buttonText = out))
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_c_090106';
    this.findingDropdownConfig.itemCount = 4;
  }
}
