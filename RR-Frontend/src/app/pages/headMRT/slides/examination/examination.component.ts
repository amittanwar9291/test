import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ExaminationUiModel } from '@models/headMRT/ui/examination/examination-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { ExaminationIndicationUiModel } from '@models/headMRT/ui/examination/examination-indication-ui.model';
import { ExaminationIndicationFindingTypeEnum } from '@enums/headMRT/examination/examination-indication-finding-type.enum';
import { IschemiaIntracranialHemorrhageTypeEnum } from '@enums/headMRT/examination/ischemia-intracranial-hemorrhage-type.enum';
import { DetailsTypeEnum } from '@enums/headMRT/examination/details-type.enum';
import { IntracranialHemorrhageTypeEnum } from '@enums/headMRT/examination/intracranial-hemorrhage-type.enum';
import { HuntHessScaleTypeEnum } from '@enums/headMRT/examination/hunt-hess-scale-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Component({
  selector: 'rr-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent extends SlideBaseComponent<ExaminationUiModel> {
  findingHandler: DynamicComponentHandler<ExaminationIndicationUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  dropdownW005: DropdownModel[] = [];

  examinationIndicationFindingTypeEnum = ExaminationIndicationFindingTypeEnum;
  ischemiaIntracranialHemorrhageTypeEnum = IschemiaIntracranialHemorrhageTypeEnum;
  detailsTypeEnum = DetailsTypeEnum;
  intracranialHemorrhageTypeEnum = IntracranialHemorrhageTypeEnum;
  huntHessScaleTypeEnum = HuntHessScaleTypeEnum;

  multiFindingsElementsRRIds = {
    indicationFindingHeader: {
      Ischemia: 'hea_m_010501',
      IntracranialHemorrhage: 'hea_m_010506',
      Infection: 'hea_m_010524',
      Inflammation: 'hea_m_010528',
      AutoimmuneDisease: 'hea_m_010528',
      Demyelination: 'hea_m_010528',
      Neoplasia: 'hea_m_010535',
      Neurodegeneration: 'hea_m_010524',
      Seizure: 'hea_m_010542',
      Trauma: 'hea_m_010554',
      CongenitalAnomaly: 'hea_m_010524',
      Intoxication: 'hea_m_010524',
      EndocrineMetabolicEncephalopathy: 'hea_m_010524',
      OtherIndications: 'hea_m_010567'
    },
    suspected: {
      Ischemia: 'hea_m_010502',
      IntracranialHemorrhage: 'hea_m_010502',
      Infection: 'hea_m_010525',
      Inflammation: 'hea_m_010529',
      AutoimmuneDisease: 'hea_m_010529',
      Demyelination: 'hea_m_010529',
      Neoplasia: 'hea_m_010536',
      Neurodegeneration: 'hea_m_010525',
      Seizure: 'hea_m_010543',
      Trauma: 'hea_m_010555',
      CongenitalAnomaly: 'hea_m_010525',
      Intoxication: 'hea_m_010525',
      EndocrineMetabolicEncephalopathy: 'hea_m_010525',
      OtherIndications: 'hea_m_010568'
    },
    exclusion: {
      Ischemia: 'hea_m_010503',
      IntracranialHemorrhage: 'hea_m_010503',
      Infection: 'hea_m_010526',
      Inflammation: 'hea_m_010530',
      AutoimmuneDisease: 'hea_m_010530',
      Demyelination: 'hea_m_010530',
      Neoplasia: 'hea_m_010537',
      Neurodegeneration: 'hea_m_010526',
      Seizure: 'hea_m_010544',
      Trauma: 'hea_m_010556',
      CongenitalAnomaly: 'hea_m_010526',
      Intoxication: 'hea_m_010526',
      EndocrineMetabolicEncephalopathy: 'hea_m_010526',
      OtherIndications: 'hea_m_010569'
    },
    followUpExamination: {
      Ischemia: 'hea_m_010504',
      IntracranialHemorrhage: 'hea_m_010504',
      Infection: 'hea_m_010527',
      Inflammation: 'hea_m_010531',
      AutoimmuneDisease: 'hea_m_010531',
      Demyelination: 'hea_m_010531',
      Neoplasia: 'hea_m_010538',
      Neurodegeneration: 'hea_m_010527',
      Seizure: 'hea_m_010545',
      Trauma: 'hea_m_010557',
      CongenitalAnomaly: 'hea_m_010527',
      Intoxication: 'hea_m_010527',
      EndocrineMetabolicEncephalopathy: 'hea_m_010527',
      OtherIndications: 'hea_m_010570'
    },
    details: {
      Ischemia: 'hea_m_010505',
      IntracranialHemorrhage: 'hea_m_010505',
      Inflammation: 'hea_m_010532',
      AutoimmuneDisease: 'hea_m_010532',
      Demyelination: 'hea_m_010532',
      Neoplasia: 'hea_m_010539',
      Seizure: 'hea_m_010546',
      Trauma: 'hea_m_010558',
      OtherIndications: 'hea_m_010571'
    }
  };

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

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('headMRT.examination.dropdownW005').subscribe((out: DropdownModel[]) => {
        this.dropdownW005 = out;
      }),
      this.translate.stream('headMRT.examination.indicationTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('headMRT.examination.addIndication.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<ExaminationIndicationUiModel>(m => m.findingType);
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hea_m_010402';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hea_m_010403';
    this.findingDropdownConfig.itemCount = 11;
  }

  isFindingType(type: ExaminationIndicationFindingTypeEnum[]): boolean {
    return type.includes(this.findingHandler.currentItem.findingType);
  }

  isDetailsHeaderShown(): boolean {
    return !this.isFindingType([
      ExaminationIndicationFindingTypeEnum.Infection,
      ExaminationIndicationFindingTypeEnum.Neurodegeneration,
      ExaminationIndicationFindingTypeEnum.CongenitalAnomaly,
      ExaminationIndicationFindingTypeEnum.Intoxication,
      ExaminationIndicationFindingTypeEnum.EndocrineMetabolicEncephalopathy
    ]);
  }

  getRRId(elem: string) {
    return this.multiFindingsElementsRRIds[elem][this.findingHandler.currentItem.findingType];
  }

  getIndicationFindingHeaderLabel(): string {
    return this.findingDropdownConfig.dropdownValues.find(item => item.value === this.findingHandler.currentItem.findingType)?.label;
  }

  clearGlasgowComaScale() {
    if (!this.findingHandler.currentItem.isHighVelocityTrauma && !this.findingHandler.currentItem.isPolytrauma) {
      this.findingHandler.currentItem.glasgowComaScale = null;
    }
  }

  clearDate() {
    this.findingHandler.currentItem.date = new MonthYearModel();
  }
}
