import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SellarRegionUiModel } from '@models/headCT/ui/sellar-region/sellar-region-ui.model';
import { SellarRegionFindingTypeEnum } from '@enums/headCT/sellar-region/sellar-region-finding-type.enum';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { nameof } from 'ts-simple-nameof';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/headCT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SellarRegionValidationModel } from '@models/headCT/ui/sellar-region/sellar-region-validation.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

@Component({
  selector: 'rr-sellar-region',
  templateUrl: './sellar-region.component.html',
  styleUrls: ['./sellar-region.component.scss']
})
export class SellarRegionComponent extends SlideBaseComponent<SellarRegionUiModel> {
  sellarRegionAreFindingsEnum = AreFindingsEnum;
  sellarRegionFindingTypeEnum = SellarRegionFindingTypeEnum;
  findingHandler: DynamicComponentHandler<SellarRegionFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  differentialDiagnoseW48: DropdownGroupedModel[];
  differentialDiagnoseW49: DropdownGroupedModel[];

  isCMYes: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SellarRegionUiModel, commonServices, SellarRegionValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SellarRegionFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SellarRegionUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: SellarRegionUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.isCMYes = technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('headCT.sellarRegion.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('headCT.sellarRegion.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('headCT.sellarRegion.differentialDiagnoseW48.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnoseW48 = out;
      }),
      this.translate.stream('headCT.sellarRegion.differentialDiagnoseW49.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnoseW49 = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<SellarRegionFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_c_100106';
  }
}
