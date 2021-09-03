import { Component } from '@angular/core';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { PatientIndicationUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-ui.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PatientIndicationValidation } from '@models/mammaMRT/ui/patient-indication/patient-indication-validation.model';

import {
  PatientIndicationFindingTypeEnum,
  MammaMRITypeEnum,
  MammographyDetailsEnum,
  ChestPainTypeEnum
} from '@enums/mammaMRT/patient-indication';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Component({
  selector: 'rr-patient-indication',
  templateUrl: './patient-indication.component.html',
  styleUrls: ['./patient-indication.component.scss']
})
export class PatientIndicationComponent extends SlideBaseComponent<PatientIndicationUiModel> {
  findingHandler: DynamicComponentHandler<PatientIndicationFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  sinceWhen: DropdownModel[];
  patientIndicationFindingType: typeof PatientIndicationFindingTypeEnum;
  mammaMRIType: typeof MammaMRITypeEnum;
  mammographyDetails: typeof MammographyDetailsEnum;
  chestPainType: typeof ChestPainTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, PatientIndicationUiModel, commonServices, PatientIndicationValidation);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PatientIndicationFindingUiModel);
    this.registerCallbacks();
    this.initializeDynamicDropdownConfig();

    this.patientIndicationFindingType = PatientIndicationFindingTypeEnum;
    this.mammaMRIType = MammaMRITypeEnum;
    this.mammographyDetails = MammographyDetailsEnum;
    this.chestPainType = ChestPainTypeEnum;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((model: PatientIndicationUiModel) => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: PatientIndicationUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
      // this.commonServices.formValidationService.findingChange.next([this.findingHandler.currentItem.id]);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'mam_m_010404';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'mam_m_010403';
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.sinceWhen').subscribe((out: DropdownModel[]) => {
        this.sinceWhen = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('mammaMRT.patientIndication.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('mammaMRT.patientIndication.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  get isNoFurtherDetails(): boolean {
    return [
      PatientIndicationFindingTypeEnum.AbnormalScreeningMammography,
      PatientIndicationFindingTypeEnum.PreoperativeStageClassification,
      PatientIndicationFindingTypeEnum.PostTherapeuticAftercare,
      PatientIndicationFindingTypeEnum.BRCACarrier,
      PatientIndicationFindingTypeEnum.BreastImplants,
      PatientIndicationFindingTypeEnum.CUP,
      PatientIndicationFindingTypeEnum.AdditionalExaminationVeryDenseParenchyma,
      PatientIndicationFindingTypeEnum.MonitoringNeoadjuvantChemotherapy
    ].includes(this.findingHandler.currentItem.findingType);
  }

  clearMonthYearInput(monthYearModel: string): void {
    this.model[monthYearModel] = new MonthYearModel();
  }
}
