import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { UpperArteriesFindingTypeEnum } from '@enums/angiographyMRT/upper-arteries';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LocalizationUiModel } from '@models/angiographyMRT/ui/localization/localization-ui.model';
import { UpperArteriesFindingUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { UpperArteriesUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-ui.model';
import { UpperArteriesValidationModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { nameof } from 'ts-simple-nameof';
import { TechnologyUiModel } from '@models/angiographyMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-upper-arteries',
  templateUrl: './upper-arteries.component.html',
  styleUrls: ['./upper-arteries.component.scss']
})
export class UpperArteriesComponent extends SlideBaseComponent<UpperArteriesUiModel> {
  areFindingsEnum = AreFindingsEnum;
  upperArteriesFindingTypeEnum = UpperArteriesFindingTypeEnum;
  isCMYes: boolean;

  findingHandler: DynamicComponentHandler<UpperArteriesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, UpperArteriesUiModel, commonServices, UpperArteriesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, UpperArteriesFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerConnection();
    this.registerCallback();
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: UpperArteriesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: UpperArteriesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      const arteriesOfTheRightUpperLimb = localizationUiModel.localization.arteriesOfTheRightUpperLimb;
      if (!arteriesOfTheRightUpperLimb) {
        this.updateFindings();
      }
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.isCMYes = technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  private updateFindings(): void {
    this.findingDropdownConfig.dropdownValues = this.findingDropdownConfig.dropdownValues.filter(
      (finding: FindingDropdownModel) => finding.value !== UpperArteriesFindingTypeEnum.BrachiocephalicTrunk
    );
    this.findingDropdownConfig.translationBits = this.findingDropdownConfig.translationBits.filter(
      (finding: FindingDropdownModel) => finding.value !== UpperArteriesFindingTypeEnum.BrachiocephalicTrunk
    );

    this.findingHandler.removeElementsByFindingType(
      UpperArteriesFindingTypeEnum.BrachiocephalicTrunk,
      nameof<UpperArteriesFindingUiModel>(m => m.findingType)
    );
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.upperArteries.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.upperArteries.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.findingDropdownConfig.translationBits = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.upperArteries.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_m_050106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_m_050107';
    this.findingDropdownConfig.itemCount = 9;
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  isNotDiffuseVascularPathology(): boolean {
    return ![this.upperArteriesFindingTypeEnum.None, this.upperArteriesFindingTypeEnum.DiffuseVascularPathology].includes(
      this.findingHandler.currentItem.findingType
    );
  }

  isFindingType(type: UpperArteriesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem !== undefined && this.findingHandler.currentItem.findingType === type;
  }
}
