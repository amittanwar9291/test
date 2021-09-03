import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { PelvisLegArteriesUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { PelvisLegArteriesFindingTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PelvisLegArteriesValidationModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-validation.model';
import { PelvisLegArteriesHelperService } from './pelvis-leg-arteries-helper.service';

@Component({
  selector: 'rr-pelvis-leg-arteries',
  templateUrl: './pelvis-leg-arteries.component.html',
  styleUrls: ['./pelvis-leg-arteries.component.scss']
})
export class PelvisLegArteriesComponent extends SlideBaseComponent<PelvisLegArteriesUiModel> {
  areFindingsEnum = AreFindingsEnum;
  findingHandler: DynamicComponentHandler<PelvisLegArteriesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
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
      this.translate.stream('angiographyCT.pelvisLegArteries.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.pelvisLegArteries.translationBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.pelvisLegArteries.w027PlaceholderPleaseSelect.value').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyCT.pelvisLegArteries.addNewFinding.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 7;
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_090106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_090107';
  }

  isCurrentItem(item: PelvisLegArteriesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  resetNoMorePathologies(): void {
    if (this.findingHandler.collection.filter(finding => !finding.isDeleted).length === 1) {
      this.model.isNoMorePathologies = false;
    }
  }

  getCustomLabel(index: number, findingHandler: DynamicComponentHandler<PelvisLegArteriesFindingUiModel>, translationBits): string {
    let result = '';
    if (findingHandler) {
      const findingType = findingHandler.collection[index].findingType;
      if (findingType) {
        result = translationBits[findingType];
      }
    }
    return result;
  }
}
