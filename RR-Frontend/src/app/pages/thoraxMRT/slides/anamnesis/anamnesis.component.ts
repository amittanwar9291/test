import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { AnamnesisUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AnamnesisFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { AnamnesisFindingTypeEnum } from '@enums/thoraxMRT/anamnesis/anamnesis-finding-type.enum';
import { IndicationTypeEnum } from '@enums/thoraxMRT/anamnesis/indication-type.enum';
import { IndicationFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/indication-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { ChestWallTypeEnum } from '@enums/thoraxMRT/anamnesis/chest-wall-type.enum';
import { DetailsTypeEnum } from '@enums/thoraxMRT/anamnesis/details-type.enum';
import { SideTypeEnum } from '@enums/thoraxMRT/anamnesis/side-type.enum';
import { nameof } from 'ts-simple-nameof';
import { AnamnesisValidaationModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-validation.model';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  subscriptions: Subscription[] = [];

  indicationFindingHandler: DynamicComponentHandler<IndicationFindingUiModel>;
  indicationFindingDropdownConfig: FindingColumnConfig;

  anamnesisFindingHandler: DynamicComponentHandler<AnamnesisFindingUiModel>;
  anamnesisFindingDropdownConfig: FindingColumnConfig;

  indicationTypeEnum = IndicationTypeEnum;
  anamnesisFindingTypeEnum = AnamnesisFindingTypeEnum;
  chestWallTypeEnum = ChestWallTypeEnum;
  detailsTypeEnum = DetailsTypeEnum;
  sideTypeEnum = SideTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidaationModel);
    this.registerCallbacks();
    this.indicationFindingHandler = new DynamicComponentHandler(this.logger, this.model.indicationFindings, IndicationFindingUiModel);
    this.anamnesisFindingHandler = new DynamicComponentHandler(this.logger, this.model.anamnesisFindings, AnamnesisFindingUiModel);
    this.initDynamicComponentConfig();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.indicationFindingHandler.reinitializeCollection(outModel.indicationFindings);
      this.anamnesisFindingHandler.reinitializeCollection(outModel.anamnesisFindings);
    });
    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.indicationFindingHandler.collectionPostSaveCleanup(outModel.indicationFindings);
      this.anamnesisFindingHandler.collectionPostSaveCleanup(outModel.anamnesisFindings);
    });
    this.registerPreSaveCallback(() => {
      this.indicationFindingHandler.collectionPreSaveCleanup();
      this.anamnesisFindingHandler.collectionPreSaveCleanup();
    });
  }

  private initDynamicComponentConfig(): void {
    this.indicationFindingDropdownConfig = new FindingColumnConfig();
    this.indicationFindingDropdownConfig.findingType = nameof<IndicationFindingUiModel>(m => m.indicationFindingType);
    this.indicationFindingDropdownConfig.findingColumnIds.findingRRId = 'tho_m_020105';
    this.indicationFindingDropdownConfig.findingColumnIds.buttonRRId = 'tho_m_020106';
    this.indicationFindingDropdownConfig.itemCount = 9;

    this.anamnesisFindingDropdownConfig = new FindingColumnConfig();
    this.anamnesisFindingDropdownConfig.findingType = nameof<AnamnesisFindingUiModel>(m => m.anamnesisFindingType);
    this.anamnesisFindingDropdownConfig.findingColumnIds.findingRRId = 'tho_m_020303';
    this.anamnesisFindingDropdownConfig.findingColumnIds.buttonRRId = 'tho_m_020304';
    this.anamnesisFindingDropdownConfig.itemCount = 9;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.anamnesis.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.indicationFindingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.anamnesis.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.anamnesisFindingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.anamnesis.addIndication.value').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.buttonText = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.anamnesis.addAnamnesis.value').subscribe((out: string) => {
        this.anamnesisFindingDropdownConfig.buttonText = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.placeholder = out;
        this.anamnesisFindingDropdownConfig.placeholder = out;
      })
    );
  }

  isIndicationFindingType(type: IndicationTypeEnum[]): boolean {
    return type.includes(this.indicationFindingHandler.currentItem.indicationFindingType);
  }

  isAnamnesisFindingType(type: AnamnesisFindingTypeEnum[]): boolean {
    return type.includes(this.anamnesisFindingHandler.currentItem.anamnesisFindingType);
  }

  isAnamnesisFindingWithNoFurtherDetails() {
    return this.isAnamnesisFindingType([
      AnamnesisFindingTypeEnum.PositiveFamilyHistoryForBronchialCarcinoma,
      AnamnesisFindingTypeEnum.HistoryOfExtrathoracicMalignoma,
      AnamnesisFindingTypeEnum.HistoryOfExtrathoracicMalignoma,
      AnamnesisFindingTypeEnum.HistoryOfThoracotomy
    ]);
  }

  clearMRIDate() {
    if (!this.model.isMRIPreliminaryExamination) {
      this.model.mriPreliminaryExaminationDate = new MonthYearModel();
    }
  }

  clearCTDate() {
    if (!this.model.isCTPreliminaryExamination) {
      this.model.ctPreliminaryExaminationDate = new MonthYearModel();
    }
  }
}
