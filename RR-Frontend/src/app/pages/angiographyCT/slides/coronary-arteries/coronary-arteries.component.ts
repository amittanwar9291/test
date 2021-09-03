import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { CoronaryArteriesUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-ui.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { FindingTypeEnum } from '@enums/angiographyCT/coronary-arteries/finding-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CoronaryArteriesValidationModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-validation.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-coronary-arteries',
  templateUrl: './coronary-arteries.component.html',
  styleUrls: ['./coronary-arteries.component.scss']
})
export class CoronaryArteriesComponent extends SlideBaseComponent<CoronaryArteriesUiModel> {
  findingHandler: DynamicComponentHandler<CoronaryArteriesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  coronaryArteriesFindingTypeEnum = FindingTypeEnum;
  areFindingsEnum = AreFindingsEnum;

  isCMYes: boolean;

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
      CoronaryArteriesUiModel,
      commonServices,
      CoronaryArteriesValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CoronaryArteriesFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallback();
    this.registerConnection();
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: CoronaryArteriesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: CoronaryArteriesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyCT.coronaryArteries.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.coronaryArteries.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
        this.findingDropdownConfig.translationBits = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.coronaryArteries.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_040106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_040107';
    this.findingDropdownConfig.itemCount = 9;
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  isFindingType(type: FindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMYes = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }
}
