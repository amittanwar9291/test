import { Component } from '@angular/core';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { PatientIndicationUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-ui.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PatientIndicationValidation } from '@models/mammaMX/ui/patient-indication/patient-indication-validation.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import {
  PatientIndicationFindingTypeEnum,
  MXMammaTypeEnum,
  MammographyDetailsEnum,
  MastodyniaTypeEnum
} from '@enums/mammaMX/patient-indication';
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
  mxMammaType: typeof MXMammaTypeEnum;
  mammographyDetails: typeof MammographyDetailsEnum;
  mastodyniaType: typeof MastodyniaTypeEnum;

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
    this.mxMammaType = MXMammaTypeEnum;
    this.mammographyDetails = MammographyDetailsEnum;
    this.mastodyniaType = MastodyniaTypeEnum;
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
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'mam_mx_010404';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'mam_mx_010403';
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.sinceWhen').subscribe((out: DropdownModel[]) => {
        this.sinceWhen = Object.values(out);
      }),
      this.translate.stream('mammaMX.patientIndication.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('mammaMX.patientIndication.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  get isNoFurtherDetails(): boolean {
    return [
      PatientIndicationFindingTypeEnum.AbnormalScreeningMammogramm,
      PatientIndicationFindingTypeEnum.PreoperativeBreastCancerStaging,
      PatientIndicationFindingTypeEnum.FuCareAfterBreastCancerTreatment,
      PatientIndicationFindingTypeEnum.BrcaMutationHighRisk,
      PatientIndicationFindingTypeEnum.BreastImplants,
      PatientIndicationFindingTypeEnum.MetastasisFromCup,
      PatientIndicationFindingTypeEnum.NewNippleSkinLesions,
      PatientIndicationFindingTypeEnum.ComplementaryExaminationForHighDensityBreast,
      PatientIndicationFindingTypeEnum.MonitoringTheResponseOfNeoadjuvantChemotherapy
    ].includes(this.findingHandler.currentItem.findingType);
  }

  clearMonthYearInput(monthYearModel: string): void {
    this.model[monthYearModel] = new MonthYearModel();
  }
}
