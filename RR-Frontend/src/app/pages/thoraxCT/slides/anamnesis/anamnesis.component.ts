import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AnamnesisFindingTypeEnum } from '@enums/thoraxCT/anamnesis/anamnesis-finding-type.enum';
import { IndicationTypeEnum } from '@enums/thoraxCT/anamnesis/indication-type.enum';
import { PcrTestForSarsCov2TypeEnum } from '@enums/thoraxCT/anamnesis/pcr-test-for-sars-cov2-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisFindingUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-finding-ui.model';

import { AnamnesisUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  subscriptions: Subscription[] = [];
  indicationTypeOptions: DropdownModel[];

  findingHandler: DynamicComponentHandler<AnamnesisFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  indicationTypeEnum = IndicationTypeEnum;
  pcrTestForSarsCov2TypeEnum = PcrTestForSarsCov2TypeEnum;
  anamnesisFindingTypeEnum = AnamnesisFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices);

    this.initDynamicComponentConfig();
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AnamnesisFindingUiModel);

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });
    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.anamnesis.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.anamnesis.indicationTypeOptions.options').subscribe((out: DropdownModel[]) => {
        this.indicationTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.anamnesis.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.anamnesis.addAnamnesis.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'tho_c_020303';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'tho_c_020304';
    this.findingDropdownConfig.itemCount = 9;
  }

  isFindingType(type: string): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  clearIndicationDetails() {
    this.model.isSuspected = false;
    this.model.pcrTestForSARSCoV2Type = this.pcrTestForSarsCov2TypeEnum.None;
    this.model.ageOfTestInDays = null;
  }

  getIndicationLabel(): string {
    return this.indicationTypeOptions.filter(option => option.value === this.model.indicationType)[0].label;
  }

  getFindingIndicationLabel(): string {
    const filteredFinding = this.findingDropdownConfig.dropdownValues.filter(
      option => option.value === this.findingHandler.currentItem.findingType
    )[0];
    return filteredFinding ? filteredFinding.label : 'Henlo';
  }

  shortColCondition(): boolean {
    return ![this.indicationTypeEnum.None, this.indicationTypeEnum.Infection].includes(this.model.indicationType);
  }

  shortFindingColCondition(): boolean {
    return [
      this.anamnesisFindingTypeEnum.StatusPostExtraThoracicCancer,
      this.anamnesisFindingTypeEnum.PositiveFamilyHistoryOfLungCancer,
      this.anamnesisFindingTypeEnum.StatusPostThoracotomy
    ].includes(this.findingHandler.currentItem.findingType);
  }

  clearMonthYearInput(monthYearInput: string) {
    this.model[monthYearInput] = new MonthYearModel();
  }
}
