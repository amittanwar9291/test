import { Component, ViewChild } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { LarynxUiModel } from '@models/neckMRT/ui/larynx/larynx-ui.model';
import { LarynxValidationModel } from '@models/neckMRT/ui/larynx/larynx-validation.model';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LarynxFindingTypeEnum } from '@enums/neckMRT/larynx';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { AcuteEpiglottitisComponent } from './acute-epiglottitis/acute-epiglottitis.component';
import { MassComponent } from './mass/mass.component';
import { TraumaComponent } from './trauma/trauma.component';

@Component({
  selector: 'rr-larynx',
  templateUrl: './larynx.component.html',
  styleUrls: ['./larynx.component.scss']
})
export class LarynxComponent extends SlideBaseComponent<LarynxUiModel> {
  @ViewChild(AcuteEpiglottitisComponent) acuteEpiglottitisComponent: AcuteEpiglottitisComponent;
  @ViewChild(MassComponent) massComponent: MassComponent;
  @ViewChild(TraumaComponent) traumaComponent: TraumaComponent;

  findingHandler: DynamicComponentHandler<LarynxFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isContrastEnhanced: boolean;
  isDWI: boolean;

  areFindings: typeof AreFindingsEnum;
  findingType: typeof LarynxFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LarynxUiModel, commonServices, LarynxValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LarynxFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnections();

    this.areFindings = AreFindingsEnum;
    this.findingType = LarynxFindingTypeEnum;
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: LarynxUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: LarynxUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted);
    });
  }

  isFindingWithTabs(): boolean {
    return [LarynxFindingTypeEnum.Mass, LarynxFindingTypeEnum.Trauma].includes(this.findingHandler.currentItem.findingType);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('neckMRT.larynx.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('neckMRT.larynx.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'nec_m_050106';
  }
}
