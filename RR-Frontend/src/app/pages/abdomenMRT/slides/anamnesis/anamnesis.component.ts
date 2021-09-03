import { Component } from '@angular/core';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisClinicUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-clinic-ui.model';
import { AnamnesisIndicationUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-indication-ui.model';
import { AnamnesisValidationModel } from '@models/abdomenMRT/ui/anamnesis/indication-validation.model';
import { AnamnesisUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-ui.model';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { nameof } from 'ts-simple-nameof';
import { compact } from 'lodash';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  organRegionOptions1: DropdownModel[];
  organRegionOptions2: DropdownModel[];

  clinicFindingHandler: DynamicComponentHandler<AnamnesisClinicUiModel>;
  clinicFindingDropdownConfig: FindingColumnConfig;

  indicationFindingHandler: DynamicComponentHandler<AnamnesisIndicationUiModel>;
  indicationFindingDropdownConfig: FindingColumnConfig;

  isLargeLocalizerOpened: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);
    this.registerCallbacks();
    this.clinicFindingHandler = new DynamicComponentHandler(this.logger, this.model.clinics, AnamnesisClinicUiModel);
    this.indicationFindingHandler = new DynamicComponentHandler(this.logger, this.model.indications, AnamnesisIndicationUiModel);
    this.initDynamicComponentConfig();

    this.isLargeLocalizerOpened = false;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.clinicFindingHandler.reinitializeCollection(outModel.clinics);
      this.indicationFindingHandler.reinitializeCollection(outModel.indications);
    });
    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.clinicFindingHandler.collectionPostSaveCleanup(outModel.clinics);
      this.indicationFindingHandler.collectionPostSaveCleanup(outModel.indications);
    });
    this.registerPreSaveCallback(() => {
      this.clinicFindingHandler.collectionPreSaveCleanup();
      this.indicationFindingHandler.collectionPreSaveCleanup();
    });
  }

  private initDynamicComponentConfig(): void {
    this.clinicFindingDropdownConfig = new FindingColumnConfig();
    this.clinicFindingDropdownConfig.findingType = nameof<AnamnesisClinicUiModel>(m => m.clinicType);
    this.clinicFindingDropdownConfig.findingColumnIds.findingRRId = 'abd_m_020113';
    this.clinicFindingDropdownConfig.findingColumnIds.buttonRRId = 'abd_m_020114';
    this.clinicFindingDropdownConfig.itemCount = 9;
    this.clinicFindingDropdownConfig.groupedOptions = true;

    this.indicationFindingDropdownConfig = new FindingColumnConfig();
    this.indicationFindingDropdownConfig.findingType = nameof<AnamnesisIndicationUiModel>(m => m.indicationType);
    this.indicationFindingDropdownConfig.findingColumnIds.findingRRId = 'abd_m_020215';
    this.indicationFindingDropdownConfig.findingColumnIds.buttonRRId = 'abd_m_020216';
    this.indicationFindingDropdownConfig.itemCount = 9;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.anamnesis.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.clinicFindingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.anamnesis.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.indicationFindingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.anamnesis.organRegionOptions1.options').subscribe((out: DropdownModel[]) => {
        this.organRegionOptions1 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.anamnesis.organRegionOptions2.options').subscribe((out: DropdownModel[]) => {
        this.organRegionOptions2 = Object.values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.clinicFindingDropdownConfig.placeholder = out;
        this.indicationFindingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('abdomenMRT.anamnesis.addClinic.value').subscribe((out: string) => {
        this.clinicFindingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('abdomenMRT.anamnesis.addIndication.value').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('abdomenMRT.anamnesis.translationBits').subscribe((out: any) => {
        this.clinicFindingDropdownConfig.translationBits = out;
      })
    );
  }

  clearMonthYearInput(monthYearModel: string): void {
    this.model[monthYearModel] = new MonthYearModel();
  }

  closeLocalizer(): void {
    if (compact(Object.values(this.indicationFindingHandler.currentItem.liverSegmentsLocalizationType)).length !== 0) {
      this.validationHelperService.removeError(
        nameof<AnamnesisIndicationUiModel>(m => m.liverSegmentsLocalizationType),
        this.indicationFindingHandler.currentItem.validationId
      );
    }

    this.isLargeLocalizerOpened = false;
  }

  openLocalizer(): void {
    this.isLargeLocalizerOpened = true;
  }

  getCustomLabel(index: number, findingHandler: DynamicComponentHandler<AnamnesisClinicUiModel>, translationBits): string {
    let result = '';
    if (findingHandler) {
      const findingType = findingHandler.collection[index].clinicType;
      if (findingType) {
        result = translationBits[findingType];
      }
    }
    return result;
  }

  get indicationFindingHeaderLabel(): string {
    return this.indicationFindingDropdownConfig.dropdownValues.find(
      item => item.value === this.indicationFindingHandler.currentItem.indicationType
    )?.label;
  }
}
