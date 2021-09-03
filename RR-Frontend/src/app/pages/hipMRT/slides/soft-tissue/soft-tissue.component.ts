import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SoftTissuePresetsHttpService } from '@services/hipMRT/http/soft-tissue/soft-tissue-presets-http.service';

import { SoftTissueUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-ui-model';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftTissueTranslations } from '@models/hipMRT/ui/soft-tissue/soft-tissue.translations';
import { SoftTissuesValidation } from '@models/hipMRT/ui/soft-tissue/soft-tissues-validation.model';
import { TechnologyUiModel } from '@models/hipMRT/ui/technology/technology-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingTypeEnum } from '@enums/hipMRT/soft-tissue/common/finding-type.enum';
import { SideTypeEnum } from '@enums/hipMRT/soft-tissue';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-soft-tissue',
  templateUrl: './soft-tissue.component.html',
  styleUrls: ['./soft-tissue.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftTissuePresetsHttpService
    }
  ]
})
export class SoftTissueComponent extends SlideBaseComponent<SoftTissueUiModel> {
  findingHandler: DynamicComponentHandler<SoftTissueFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isContrastEnhanced: boolean;

  areFindings: typeof AreFindingsEnum;
  findingType: typeof FindingTypeEnum;
  sideType: typeof SideTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissueUiModel, commonServices, SoftTissuesValidation);

    this.areFindings = AreFindingsEnum;
    this.findingType = FindingTypeEnum;
    this.sideType = SideTypeEnum;

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftTissueFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnections();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  isLocalizationBlockDisabled(): boolean {
    const activators = [this.findingHandler.currentItem.isPelvis, this.findingHandler.currentItem.isThigh];
    return !activators.some(item => item);
  }

  resetLocalizationBlock(): void {
    if (this.isLocalizationBlockDisabled()) {
      this.findingHandler.currentItem.isVentral = false;
      this.findingHandler.currentItem.isMedial = false;
      this.findingHandler.currentItem.isLateral = false;
      this.findingHandler.currentItem.isDorsal = false;

      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isVentral));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isMedial));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isLateral));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isDorsal));
    }
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<SoftTissueFindingUiModel>,
    translationBits: SoftTissueTranslations
  ): string {
    let label: string;

    const findingType = findingHandler.collection[index].findingType;

    if (findingType !== FindingTypeEnum.None) {
      label = translationBits.findingType.find(x => x.value === findingType).label;
    }

    const pageType = findingHandler.collection[index].sideType;

    switch (pageType) {
      case 'Right': {
        label += ' ' + translationBits.right;
        break;
      }
      case 'Left': {
        label += ' ' + translationBits.left;
        break;
      }
    }

    return label;
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('hipMRT.softTissue.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
        this.findingDropdownConfig.translationBits.findingType = Object.values(out);
      }),
      this.translate.stream('hipMRT.softTissue.addingANewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('hipMRT.softTissue.translationBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits.right = out.right;
        this.findingDropdownConfig.translationBits.left = out.left;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hip_m_080107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hip_m_080106';
    this.findingDropdownConfig.translationBits = new SoftTissueTranslations();
  }
}
