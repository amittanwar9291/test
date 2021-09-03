import { Component } from '@angular/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';
import { PericardiumVesselsUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-ui.model';
import { PVTranslations } from '@models/cardioMRT/ui/pericardium-vessels/pv-translations';
import { PericardiumVesselsValidationModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-validation.model';

import { AreFindingsEnum, FindingTypeEnum } from '@enums/cardioMRT/pericardium-vessels';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-pericardium-vessels',
  templateUrl: './pericardium-vessels.component.html',
  styleUrls: ['./pericardium-vessels.component.scss']
})
export class PericardiumVesselsComponent extends SlideBaseComponent<PericardiumVesselsUiModel> {
  findingTypes: DropdownModel[];
  findingHandler: DynamicComponentHandler<PericardiumVesselsFindingUiModel>;
  findingColumnConfig: FindingColumnConfig;
  isLargeLocalizerOpened: boolean;

  technologyModel: TechnologyUiModel;

  areFindingsType: typeof AreFindingsEnum;
  findingType: typeof FindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      PericardiumVesselsUiModel,
      commonServices,
      PericardiumVesselsValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(commonServices.logger, this.model.findings, PericardiumVesselsFindingUiModel);

    this.registerCallbacks();

    this.findingsConfiguration();

    this.isLargeLocalizerOpened = false;
    this.areFindingsType = AreFindingsEnum;
    this.findingType = FindingTypeEnum;

    this.registerConnection();
  }

  registerCallbacks(): void {
    this.registerGetCallback((outModel: PericardiumVesselsUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: PericardiumVesselsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  findingsConfiguration(): void {
    this.findingColumnConfig = new FindingColumnConfig();
    this.findingColumnConfig.itemCount = 7;
    this.findingColumnConfig.translationBits = new PVTranslations();
    this.findingColumnConfig.findingColumnIds.findingRRId = 'car_m_090107';
    this.findingColumnConfig.findingColumnIds.buttonRRId = 'car_m_090108';
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (model: TechnologyUiModel) => {
      this.technologyModel = model;
    });
  }

  getCustomLabel(
    index: number,
    sequenceHandler: DynamicComponentHandler<PericardiumVesselsFindingUiModel>,
    translationBits: PVTranslations
  ): string {
    const currSelected = sequenceHandler.collection[index].findingType;
    const keys = Object.keys(translationBits);
    let key = '';
    if (sequenceHandler.collection[index].findingType) {
      key = keys.find(x => x.toUpperCase() === currSelected.toUpperCase());
    }
    return translationBits[key];
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('cardioMRT.pericardiumVessels.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingColumnConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingColumnConfig.placeholder = out;
      }),
      this.translate.stream('cardioMRT.pericardiumVessels.addNewFinding.value').subscribe((out: string) => {
        this.findingColumnConfig.buttonText = out;
      }),
      this.translate.stream('cardioMRT.pericardiumVessels.translationBits').subscribe((out: PVTranslations) => {
        this.findingColumnConfig.translationBits = out;
      })
    );
  }

  get findingMargin(): string {
    switch (this.findingHandler.currentItem.findingType) {
      case FindingTypeEnum.None:
        return 'm-b-114';
      case FindingTypeEnum.MediastinumMass:
        return 'm-b-23';
      case FindingTypeEnum.Neck:
        return 'm-b-90';
      case FindingTypeEnum.Lung:
        return 'm-b-90';
      case FindingTypeEnum.UpperAbdomen:
        return 'm-b-90';
      case FindingTypeEnum.OsseousLesion:
        return 'm-b-120';
      default:
        return 'm-b-89';
    }
  }

  closeLocalizer(): void {
    this.isLargeLocalizerOpened = false;
  }

  openLocalizer(): void {
    this.isLargeLocalizerOpened = true;
  }
}
