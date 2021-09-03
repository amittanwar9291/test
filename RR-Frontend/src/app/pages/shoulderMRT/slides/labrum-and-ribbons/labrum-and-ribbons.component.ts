import { Component, DoCheck } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LabrumAndRibbonsUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-ui.model';
import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';
import { LabrumAndRibbonsDiagnosisUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-diagnosis-ui.model';
import { LabrumAndRibbonsValidation } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-validation.model';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LabrumAndRibbonsFindingType } from '@enums/shoulderMRT/labrum-and-ribbons';

import { DiagnosisListService } from './diagnosis-lists.service';
import { LabrumAndRibbonsCommunicationService } from '@services/shoulderMRT/labrum-and-ribbons-communication.service';

@Component({
  selector: 'rr-labrum-and-ribbons',
  templateUrl: './labrum-and-ribbons.component.html',
  styleUrls: ['./labrum-and-ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LabrumAndRibbonsComponent extends SlideBaseComponent<LabrumAndRibbonsUiModel> implements DoCheck {
  findingTypes: DropdownModel[];
  placeholder: string;
  differentialDiagnosisList: LabrumAndRibbonsDiagnosisUiModel[];

  findingType: typeof LabrumAndRibbonsFindingType;
  areFindings: typeof AreFindingsEnum;

  findingHandler: DynamicComponentHandler<LabrumAndRibbonsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private diagnosisListService: DiagnosisListService,
    public labrumAndRibbonsCommunicationService: LabrumAndRibbonsCommunicationService
  ) {
    super(navService, slideRequestService, changeDetectionService, LabrumAndRibbonsUiModel, commonServices, LabrumAndRibbonsValidation);

    this.differentialDiagnosisList = [];
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LabrumAndRibbonsFindingUiModel);

    this.findingDropdownConfig = new FindingColumnConfig();
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'sho_m_060106';
    columnIds.iDescribeLabelRRId = 'sho_m_060108';
    columnIds.iKnowLabelRRId = 'sho_m_060109';
    columnIds.iDescribeRadioRRId = 'sho_m_060110';
    columnIds.iKnowRadioRRId = 'sho_m_060111';
    columnIds.buttonRRId = 'sho_m_060107';
    this.findingDropdownConfig.itemCount = 4;

    this.findingType = LabrumAndRibbonsFindingType;
    this.areFindings = AreFindingsEnum;

    this.registerCallbacks();
    this.labrumAndRibbonsCommunicationService.setFindingHandler(this.findingHandler);
  }

  private registerCallbacks() {
    this.registerGetCallback((model: LabrumAndRibbonsUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((outModel: LabrumAndRibbonsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  handleDescriptionTypeChange(): void {
    this.diagnosisListService.getDescriptionTypeChange().next();
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shoulderMRT.labrumAndRibbons.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('shoulderMRT.labrumAndRibbons.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate
        .stream('shoulderMRT.labrumAndRibbons.differentialDiagnosisOptions.options')
        .subscribe((out: LabrumAndRibbonsDiagnosisUiModel[]) => {
          this.differentialDiagnosisList = out;
        })
    );
  }

  handleLigGlenohumeraleMediumSelection() {
    this.labrumAndRibbonsCommunicationService.handleLigGlenohumeraleMediumSelection();
  }
}
