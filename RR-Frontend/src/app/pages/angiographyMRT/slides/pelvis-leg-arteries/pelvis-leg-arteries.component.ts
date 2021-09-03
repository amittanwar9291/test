import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { PelvisLegArteriesFindingTypeEnum } from '@enums/angiographyMRT/pelvis-leg-arteries';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { PelvisLegArteriesUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';
import { PelvisLegArteriesValidationModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-validation.model';
import { TechnologyUiModel } from '@models/angiographyMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { PelvisLegArteriesHelperService } from './pelvis-leg-arteries-helper.service';

@Component({
  selector: 'rr-pelvis-leg-arteries',
  templateUrl: './pelvis-leg-arteries.component.html',
  styleUrls: ['./pelvis-leg-arteries.component.scss']
})
export class PelvisLegArteriesComponent extends SlideBaseComponent<PelvisLegArteriesUiModel> {
  findingHandler: DynamicComponentHandler<PelvisLegArteriesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsEnum = AreFindingsEnum;
  pelvisLegArteriesFindingTypeEnum = PelvisLegArteriesFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private pelvisLegArteriesHelperService: PelvisLegArteriesHelperService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      PelvisLegArteriesUiModel,
      commonServices,
      PelvisLegArteriesValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PelvisLegArteriesFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: PelvisLegArteriesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: PelvisLegArteriesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.pelvisLegArteriesHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.pelvisLegArteries.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.pelvisLegArteries.translationBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.pelvisLegArteries.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.pelvisLegArteries.addNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingType = 'findingType';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isCurrentItem(item: PelvisLegArteriesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }
}
