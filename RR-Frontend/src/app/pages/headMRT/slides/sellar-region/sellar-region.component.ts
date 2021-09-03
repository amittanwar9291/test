import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';

import { SellarRegionUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SellarRegionFindingTypeEnum } from '@enums/headMRT/sellar-region/sellar-region-finding-type.enum';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SellarRegionValidationModel } from '@models/headMRT/ui/sellar-region/sellar-region-validation.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/headMRT/ui/technology/sequence-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { SellarRegionAreFindingsEnum } from '@enums/headMRT/sellar-region/sellar-region-are-findings.enum';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SellarRegionPresetsHttpService } from '@services/headMRT/http/sellar-region/sellar-region-presets-http.service.service';

@Component({
  selector: 'rr-sellar-region',
  templateUrl: './sellar-region.component.html',
  styleUrls: ['./sellar-region.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SellarRegionPresetsHttpService
    }
  ]
})
export class SellarRegionComponent extends SlideBaseComponent<SellarRegionUiModel> {
  sellarRegionAreFindingsEnum = SellarRegionAreFindingsEnum;
  sellarRegionFindingTypeEnum = SellarRegionFindingTypeEnum;
  findingHandler: DynamicComponentHandler<SellarRegionFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  differentialDiagnoseW38: DropdownGroupedModel[];
  differentialDiagnoseW39: DropdownGroupedModel[];

  isCMYes: boolean;
  isDWIInAnySequence: boolean;

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
      this.isDWIInAnySequence =
        technologyUiModel && technologyUiModel.sequences.some((model: SequenceUiModel) => model.weightingType === WeightingTypeEnum.DWI);
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('headMRT.sellarRegion.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('headMRT.sellarRegion.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('headMRT.sellarRegion.differentialDiagnoseW38.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnoseW38 = out;
      }),
      this.translate.stream('headMRT.sellarRegion.differentialDiagnoseW39.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnoseW39 = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<SellarRegionFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hea_m_100106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hea_m_100107';
  }
}
