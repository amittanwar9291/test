import { Component } from '@angular/core';
import { AnamnesisUiModel } from '@models/headCT/ui/anamnesis/anamnesis-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { PreviousInterventionsTherapiesFindingUiModel } from '@models/headCT/ui/anamnesis/previous-interventions-therapies-finding-ui.model';
import { PreviousInterventionsTherapiesTypeEnum } from '@enums/headCT/anamnesis/previous-interventions-therapies-type.enum';
import { ClinicalSymptomType } from '@enums/headCT/anamnesis/clinical-symptom-type.enum';
import { CharacterizationTypeEnum } from '@enums/headCT/anamnesis/characterization-type.enum';
import { VertigoTypeEnum } from '@enums/headCT/anamnesis/vertigo-type.enum';
import { VisualDisturbanceTypeEnum } from '@enums/headCT/anamnesis/visual-disturbances-type.enum';
import { CognitiveChangeTypeEnum } from '@enums/headCT/anamnesis/cognitive-changes-type.enum';
import { LocalizationTypeEnum } from '@enums/headCT/anamnesis/localization-type.enum';
import { CranialNervesTypeEnum } from '@enums/headCT/anamnesis/cranial-nerves-type.enum';
import { OlfactoryNerveDetailsTypeEnum } from '@enums/headCT/anamnesis/olfactory-nerve-details-type.enum';
import { FacialNervePalsyDetailsTypeEnum } from '@enums/headCT/anamnesis/facial-nerve-palsy-details-type.enum';
import { DysesthesiaTypeEnum } from '@enums/headCT/anamnesis/dysesthesia-type.enum';
import { TremorTypeEnum } from '@enums/headCT/anamnesis/tremor-type.enum';
import { AtaxiaTypeEnum } from '@enums/headCT/anamnesis/ataxia-type.enum';
import { SpeechDisorderTypeEnum } from '@enums/headCT/anamnesis/speech-disorder-type.enum';
import { NystagmusTypeEnum } from '@enums/headCT/anamnesis/nystagmus-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisValidationModel } from '@models/headCT/ui/anamnesis/anamnesis-validation.model';
import { ClinicSymptomsFindingUiModel } from '@models/headCT/ui/anamnesis/clinic-symptoms-finding-ui.model';
import { CentralEndocrineDisorderTypeEnum } from '@enums/headCT/anamnesis/central-endocrine-cisorder-type.enum';
import { AlteredStateOfConsciousnessTypeEnum } from '@enums/headCT/anamnesis/disorders-of-consciousness-type.enum';
import { MotorDeficitTypeEnum } from '@enums/headCT/anamnesis/motor-deficit-type.enum';
import { nameof } from 'ts-simple-nameof';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  clinicDropdownConfig: FindingColumnConfig;
  previousInterventionsTherapiesDropdownConfig: FindingColumnConfig;
  clinicHandler: DynamicComponentHandler<ClinicSymptomsFindingUiModel>;
  previousInterventionsTherapiesHandler: DynamicComponentHandler<PreviousInterventionsTherapiesFindingUiModel>;
  clinicTypeEnum = ClinicalSymptomType;
  characterizationTypeEnum = CharacterizationTypeEnum;
  vertigoTypeEnum = VertigoTypeEnum;
  visualDisturbanceTypeEnum = VisualDisturbanceTypeEnum;
  cognitiveChangeTypeEnum = CognitiveChangeTypeEnum;
  alteredStateOfConsciousnessTypeEnum = AlteredStateOfConsciousnessTypeEnum;
  motorDeficitTypeEnum = MotorDeficitTypeEnum;
  sideTypeEnum = SideTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;
  cranialNervesTypeEnum = CranialNervesTypeEnum;
  olfactoryNerveDetailsTypeEnum = OlfactoryNerveDetailsTypeEnum;
  facialNervePalsyDetailsTypeEnum = FacialNervePalsyDetailsTypeEnum;
  dysesthesiaTypeEnum = DysesthesiaTypeEnum;
  tremorTypeEnum = TremorTypeEnum;
  ataxiaTypeEnum = AtaxiaTypeEnum;
  speechDisorderTypeEnum = SpeechDisorderTypeEnum;
  nystagmusTypeEnum = NystagmusTypeEnum;
  centralEndocrineDisorderTypeEnum = CentralEndocrineDisorderTypeEnum;
  previousInterventionsTherapiesTypeEnum = PreviousInterventionsTherapiesTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);
    this.registerCallbacks();
    this.clinicHandler = new DynamicComponentHandler(this.logger, this.model.clinicalSymptomFindings, ClinicSymptomsFindingUiModel);
    this.previousInterventionsTherapiesHandler = new DynamicComponentHandler(
      this.logger,
      this.model.previousInterventionsTherapiesFindings,
      PreviousInterventionsTherapiesFindingUiModel
    );
    this.initializeDynamicDropdownConfig();
  }

  private initializeDynamicDropdownConfig(): void {
    this.clinicDropdownConfig = new FindingColumnConfig();
    this.clinicDropdownConfig.findingType = nameof<ClinicSymptomsFindingUiModel>(m => m.findingType);
    this.clinicDropdownConfig.findingColumnIds.findingRRId = 'hea_c_020105';
    this.clinicDropdownConfig.findingColumnIds.buttonRRId = 'hea_c_020106';
    this.clinicDropdownConfig.itemCount = 4;

    this.previousInterventionsTherapiesDropdownConfig = new FindingColumnConfig();
    this.previousInterventionsTherapiesDropdownConfig.findingType = nameof<PreviousInterventionsTherapiesFindingUiModel>(
      m => m.findingType
    );
    this.previousInterventionsTherapiesDropdownConfig.findingColumnIds.findingRRId = 'hea_c_020303';
    this.previousInterventionsTherapiesDropdownConfig.findingColumnIds.buttonRRId = 'hea_c_020304';
    this.previousInterventionsTherapiesDropdownConfig.itemCount = 9;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.clinicHandler.reinitializeCollection(outModel.clinicalSymptomFindings);
      this.previousInterventionsTherapiesHandler.reinitializeCollection(outModel.previousInterventionsTherapiesFindings);
    });
    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.clinicHandler.collectionPostSaveCleanup(outModel.clinicalSymptomFindings);
      this.previousInterventionsTherapiesHandler.collectionPostSaveCleanup(outModel.previousInterventionsTherapiesFindings);
    });

    this.registerPreSaveCallback(() => {
      this.clinicHandler.collectionPreSaveCleanup();
      this.previousInterventionsTherapiesHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headCT.anamnesis.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.clinicDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('headCT.anamnesis.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.previousInterventionsTherapiesDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.clinicDropdownConfig.placeholder = out;
        this.previousInterventionsTherapiesDropdownConfig.placeholder = out;
      }),
      this.translate.stream('headCT.anamnesis.addClinic.value').subscribe((out: string) => {
        this.clinicDropdownConfig.buttonText = out;
      }),
      this.translate.stream('headCT.anamnesis.addProceduretherapy.value').subscribe((out: string) => {
        this.previousInterventionsTherapiesDropdownConfig.buttonText = out;
      })
    );
  }

  disableVisualDisturbancesSideCondition() {
    const referenceList = [
      this.visualDisturbanceTypeEnum.VisualFieldLoss,
      this.visualDisturbanceTypeEnum.HomonymousHemianopsia,
      this.visualDisturbanceTypeEnum.VisualAcuityLoss,
      this.visualDisturbanceTypeEnum.BlurredVision
    ];
    return referenceList.includes(this.clinicHandler.currentItem.visualDisturbanceType);
  }

  isClinicFindingType(type: ClinicalSymptomType[]): boolean {
    return type.includes(this.clinicHandler.currentItem.findingType);
  }

  clearMRICalendar() {
    this.model.dateOfMRI = new MonthYearModel();
  }

  clearCTCalendar() {
    this.model.dateOfCT = new MonthYearModel();
  }

  clearPETCTCalendar() {
    this.model.dateOfPETCT = new MonthYearModel();
  }

  clearDSACalendar() {
    this.model.dateOfDSA = new MonthYearModel();
  }

  resetThunderclapHeadache() {
    if (this.clinicHandler.currentItem.characterizationType !== CharacterizationTypeEnum.Acute) {
      this.clinicHandler.currentItem.isThunderclapHeadache = false;
    }
  }

  anyClinicFindingSelected(): boolean {
    return this.clinicHandler.collection.filter(item => !item.isDeleted && item.findingType !== ClinicalSymptomType.None).length !== 0;
  }

  onClinicFindingRemove(): void {
    if (!this.anyClinicFindingSelected()) {
      this.model.hours = null;
      this.model.days = null;
      this.model.months = null;
      this.model.years = null;
    }
  }
}
