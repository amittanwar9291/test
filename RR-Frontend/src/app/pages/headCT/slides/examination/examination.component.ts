import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { ExaminationUiModel } from '@models/headCT/ui/examination/examination-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ExaminationIndicationUiModel } from '@models/headCT/ui/examination/examination-indication-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent extends SlideBaseComponent<ExaminationUiModel> {
  findingHandler: DynamicComponentHandler<ExaminationIndicationUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  dropdownW005: DropdownModel[] = [];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, ExaminationUiModel, commonServices);

    this.initDynamicComponentConfig();
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, ExaminationIndicationUiModel);

    this.registerCallbacks();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('headCT.examination.dropdownW005.options').subscribe((out: DropdownModel[]) => {
        this.dropdownW005 = out;
      }),
      this.translate.stream('headCT.examination.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('headCT.examination.addIndication.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<ExaminationIndicationUiModel>(m => m.findingType);
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hea_c_010402';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hea_c_010403';
    this.findingDropdownConfig.itemCount = 11;
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: ExaminationUiModel) => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }

      this.findingHandler.reinitializeCollection(outModel.findings);
    });
    this.registerSaveCallback((outModel: ExaminationUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }
}
