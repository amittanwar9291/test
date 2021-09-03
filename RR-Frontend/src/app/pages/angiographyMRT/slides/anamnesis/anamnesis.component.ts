import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { AnamnesisUiModel } from '@models/angiographyMRT/ui/anamnesis/anamnesis-ui.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AnamnesisIndicationFindingUiModel } from '@models/angiographyMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AfterTransplantationTypeEnum } from '@enums/angiographyMRT/anamnesis/after-transplantation-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisIndicationFindingTypeEnum } from '@enums/angiographyMRT/anamnesis/anamnesis-indication-finding-type.enum';
import { StadiumAccordingToFontaineTypeEnum } from '@enums/angiographyMRT/anamnesis/stadium-according-to-fontaine-type.enum';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  findingHandler: DynamicComponentHandler<AnamnesisIndicationFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  findingTranslations: DropdownModel[];

  afterTransplantationTypeEnum = AfterTransplantationTypeEnum;
  anamnesisIndicationFindingTypeEnum = AnamnesisIndicationFindingTypeEnum;
  stadiumAccordingToFontaineTypeEnum = StadiumAccordingToFontaineTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AnamnesisIndicationFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallback();
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: AnamnesisUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: AnamnesisUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_m_020105';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_m_020106';
    this.findingDropdownConfig.itemCount = 9;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.anamnesis.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.findingTranslations = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.anamnesis.addAnamnesisIndication.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  isFindingType(type: AnamnesisIndicationFindingTypeEnum): boolean {
    return type.includes(this.findingHandler.currentItem.findingType);
  }

  isOtherFindingType(): boolean {
    const type = this.anamnesisIndicationFindingTypeEnum;
    return ![type.PeripheralArteryDiseasePAD, type.Aneurysm, type.RiskFactors, type.None].includes(
      this.findingHandler.currentItem.findingType
    );
  }

  getFindingHeaderText(): string {
    if (this.isFindingType(this.anamnesisIndicationFindingTypeEnum.PeripheralArteryDiseasePAD)) {
      return 'angiographyMRT.anamnesis.peripheralArteryDiseasePAD.value';
    } else if (this.isFindingType(this.anamnesisIndicationFindingTypeEnum.Aneurysm)) {
      return 'angiographyMRT.anamnesis.aneurysm.value';
    } else if (this.isFindingType(this.anamnesisIndicationFindingTypeEnum.RiskFactors)) {
      return 'angiographyMRT.anamnesis.detailsRiskFactors.value';
    } else {
      return this.findingTranslations?.find(item => item.value === this.findingHandler.currentItem.findingType)?.label;
    }
  }

  getFindingHeaderRrId(): string {
    if (this.isFindingType(this.anamnesisIndicationFindingTypeEnum.PeripheralArteryDiseasePAD)) {
      return 'ang_m_020201';
    } else if (this.isFindingType(this.anamnesisIndicationFindingTypeEnum.Aneurysm)) {
      return 'ang_m_020207';
    } else if (this.isFindingType(this.anamnesisIndicationFindingTypeEnum.RiskFactors)) {
      return 'ang_m_020212';
    } else {
      return 'ang_m_020210';
    }
  }

  clearDateMRAngiography() {
    this.model.dateMRAngiography = new MonthYearModel();
  }

  clearDateCTAngiography() {
    this.model.dateCTAngiography = new MonthYearModel();
  }

  clearDateDigitalSubtractionAngiography() {
    this.model.dateDigitalSubtractionAngiography = new MonthYearModel();
  }
}
