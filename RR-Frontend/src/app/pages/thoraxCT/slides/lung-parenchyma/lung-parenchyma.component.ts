import { Component, OnDestroy, OnInit } from '@angular/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LungParenchymaUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';

import { NavigationService } from '@services/shared';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { TechnologyUiModel } from '@models/thoraxCT/ui/technology/technology-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-finding-type.enum';
import { nameof } from 'ts-simple-nameof';
import { LungParenchymaHelperService, LungParenchymaLargeLocalizerConfig } from './lung-parenchyma-helper.service';
import { LungPerenchymaValidationModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-perenchyma-validation.model';
import { SummaryUiModel } from '@models/thoraxCT/ui/summary/summary-ui.model';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { LungParenchymaPresetsHttpService } from '@services/thoraxCT/http/lung-parenchyma/lung-parenchyma-presets-http.service';

@Component({
  selector: 'rr-lung-parenchyma',
  templateUrl: './lung-parenchyma.component.html',
  styleUrls: ['./lung-parenchyma.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: LungParenchymaPresetsHttpService
    }
  ]
})
export class LungParenchymaComponent extends SlideBaseComponent<LungParenchymaUiModel> implements OnDestroy {
  findingHandler: DynamicComponentHandler<LungParenchymaFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  descriptionTypes = [
    LungParenchymaFindingTypeEnum.Nodule,
    LungParenchymaFindingTypeEnum.Mass,
    LungParenchymaFindingTypeEnum.Consolidation
  ];
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

    this.subscriptions.push(
      this.lungParenchymaHelperService.largeLocalizerOpen.subscribe((value: LungParenchymaLargeLocalizerConfig) => {
        this.largeLocalizerConfig = value;
      })
    );
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.lungParenchymaHelperService.isCM.next(technologyModel.cmReinforcedType);
    });

    const p5CO = this.preparePage5ConnectionObject();
    this.addPageConnection(p5CO.pageNr, SummaryUiModel, p5CO.condition, p5CO.callback);
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
      this.translate.stream('thoraxCT.lungParenchyma.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<LungParenchymaFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'tho_c_050106';
    this.findingDropdownConfig.itemCount = 5;
  }

  onLargeLocalizerClosed() {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(null);
  }

  onFindingChange() {
    this.lungParenchymaHelperService.currentTabIndex.next(0);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.lungParenchymaHelperService.largeLocalizerOpen.next(null);
  }

  private preparePage5ConnectionObject(): IPageConnection<SummaryUiModel> {
    const callback = (model: SummaryUiModel) => {
      if (!this.model.findings.find(finding => finding.findingType === LungParenchymaFindingTypeEnum.Nodule && !finding.isDeleted)) {
        model.isLungRADS = false;
        model.signalType = null;
        model.scenarioType = null;
        model.isRiskCalculator = false;
        model.numberOfRoundHearths = null;
        model.cancerProbability = null;
      }
    };

    return {
      pageNr: 5,
      condition: () => true,
      callback
    };
  }
}
