import { Component } from '@angular/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { NavigationService } from '@services/shared';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { nameof } from 'ts-simple-nameof';
import { LungParenchymaUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { LungParenchymaFindingUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-finding-type.enum';
import { LungPerenchymaValidationModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-perenchyma-validation.model';
import { LungParenchymaHelperService } from './lung-parenchyma-helper.service';
import { TechnologyUiModel } from '@models/thoraxMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { LungParenchymaLargeLocalizerConfig } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-large-localizer-config.model';
import { SummaryUiModel } from '@models/thoraxMRT/ui/summary/summary-ui.model';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { CysticFibrosisTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/cystic-fibrosis/cystic-fibrosis-type.enum';
import { DynamicFindingsTypeEnum } from '@enums/thoraxMRT/summary/dynamic-findings-type.enum';
@Component({
  selector: 'rr-lung-parenchyma',
  templateUrl: './lung-parenchyma.component.html',
  styleUrls: ['./lung-parenchyma.component.scss']
})
export class LungParenchymaComponent extends SlideBaseComponent<LungParenchymaUiModel> {
  findingHandler: DynamicComponentHandler<LungParenchymaFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  descriptionTypes: string[];
  areFindingsEnum = AreFindingsEnum;
  lungParenchymaFindingTypeEnum = LungParenchymaFindingTypeEnum;
  largeLocalizerConfig: LungParenchymaLargeLocalizerConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private lungParenchymaHelperService: LungParenchymaHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, LungParenchymaUiModel, commonServices, LungPerenchymaValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LungParenchymaFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
    this.initTranslations();

    const page08ConnectionObject = this.preparePage8ConnectionObject();
    this.addPageConnection(
      page08ConnectionObject.pageNr,
      SummaryUiModel,
      page08ConnectionObject.condition,
      page08ConnectionObject.callback
    );

    this.subscriptions.push(
      this.lungParenchymaHelperService.largeLocalizerOpen.subscribe((value: LungParenchymaLargeLocalizerConfig) => {
        this.largeLocalizerConfig = value;
      })
    );
  }
  private registerCallbacks() {
    this.registerGetCallback((outModel: LungParenchymaUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: LungParenchymaUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }
  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.lungParenchymaHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }
  private preparePage8ConnectionObject(): IPageConnection<SummaryUiModel> {
    const condition = () => true;

    const callback = (model: SummaryUiModel) => {
      if (
        !this.model.findings.some(
          (finding: LungParenchymaFindingUiModel) => finding.cysticFibrosisType === CysticFibrosisTypeEnum.QuantitativeEichingerScore
        )
      ) {
        model.isQuantitativeEvaluationCysticFibrosis = false;
        model.scorePreliminaryExaminationPoints = 0;
        model.cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum.None;
      }
    };
    return {
      pageNr: 8,
      condition,
      callback
    };
  }
  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<LungParenchymaFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'tho_m_050106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'tho_m_050107';
    this.findingDropdownConfig.itemCount = 9;
  }
  isDropdownDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }
  isFindingType(type: LungParenchymaFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }
  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.lungParenchyma.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.lungParenchyma.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
  onLargeLocalizerClosed() {
    if (Object.values(this.findingHandler.currentItem[this.largeLocalizerConfig.modelName]).filter(elem => elem).length > 0) {
      this.validationHelperService.removeError(this.largeLocalizerConfig.modelName);
    }
    this.lungParenchymaHelperService.largeLocalizerOpen.next(null);
  }
}
