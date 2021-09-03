import { Component } from '@angular/core';
import { AnamnesisUiModel } from '@models/headMRT/ui/anamnesis/anamnesis-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { ClinicFindingUiModel } from '@models/headMRT/ui/anamnesis/clinic-finding-ui.model';
import { PreviousInterventionsTherapiesFindingUiModel } from '@models/headMRT/ui/anamnesis/previous-interventions-therapies-finding-ui.model';
import { PreviousInterventionsTherapiesTypeEnum } from '@enums/headMRT/anamnesis/previous-interventions-therapies-type.enum';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { ClinicTypeEnum } from '@enums/headMRT/anamnesis/clinic-type.enum';
import { CharacterizationTypeEnum } from '@enums/headMRT/anamnesis/characterization-type.enum';
import { VertigoTypeEnum } from '@enums/headMRT/anamnesis/vertigo-type.enum';
import { VisualDisturbanceTypeEnum } from '@enums/headMRT/anamnesis/visual-disturbances-type.enum';
import { CognitiveChangeTypeEnum } from '@enums/headMRT/anamnesis/cognitive-changes-type.enum';
import { DisordersOfConsciousnessTypeEnum } from '@enums/headMRT/anamnesis/disorders-of-consciousness-type.enum';
import { MotorDeficitTypeEnum } from '@enums/headMRT/anamnesis/motor-deficit-type.enum';
import { SideTypeEnum } from '@enums/headMRT/anamnesis/side-type.enum';
import { LocalizationTypeEnum } from '@enums/headMRT/anamnesis/localization-type.enum';
import { CranialNervesTypeEnum } from '@enums/headMRT/anamnesis/cranial-nerves-type.enum';
import { OlfactoryNerveDetailsTypeEnum } from '@enums/headMRT/anamnesis/olfactory-nerve-details-type.enum';
import { FacialNervePalsyDetailsTypeEnum } from '@enums/headMRT/anamnesis/facial-nerve-palsy-details-type.enum';
import { DysesthesiaTypeEnum } from '@enums/headMRT/anamnesis/dysesthesia-type.enum';
import { TremorTypeEnum } from '@enums/headMRT/anamnesis/tremor-type.enum';
import { AtaxiaTypeEnum } from '@enums/headMRT/anamnesis/ataxia-type.enum';
import { SpeechDisorderTypeEnum } from '@enums/headMRT/anamnesis/speech-disorder-type.enum';
import { NystagmusTypeEnum } from '@enums/headMRT/anamnesis/nystagmus-type.enum';
import { EndocrineDisorderTypeEnum } from '@enums/headMRT/anamnesis/endocrine-disorder-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisValidationModel } from '@models/headMRT/ui/anamnesis/anamnesis-validation.model';

import { values } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  clinicDropdownConfig: FindingColumnConfig;
  previousInterventionsTherapiesDropdownConfig: FindingColumnConfig;
  clinicHandler: DynamicComponentHandler<ClinicFindingUiModel>;
  previousInterventionsTherapiesHandler: DynamicComponentHandler<PreviousInterventionsTherapiesFindingUiModel>;
  clinicTypeEnum = ClinicTypeEnum;
  characterizationTypeEnum = CharacterizationTypeEnum;
  vertigoTypeEnum = VertigoTypeEnum;
  visualDisturbanceTypeEnum = VisualDisturbanceTypeEnum;
  cognitiveChangeTypeEnum = CognitiveChangeTypeEnum;
  disorderOfConsciousnessTypeEnum = DisordersOfConsciousnessTypeEnum;
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
  endocrineDisorderTypeEnum = EndocrineDisorderTypeEnum;
  previousInterventionsTherapiesTypeEnum = PreviousInterventionsTherapiesTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);
    this.registerCallbacks();
    this.clinicHandler = new DynamicComponentHandler(this.logger, this.model.clinicalSymptomFindings, ClinicFindingUiModel);
    this.previousInterventionsTherapiesHandler = new DynamicComponentHandler(
      this.logger,
      this.model.previousInterventionsTherapiesFindings,
      PreviousInterventionsTherapiesFindingUiModel
    );
    this.initializeDynamicDropdownConfig();
  }

  private initializeDynamicDropdownConfig(): void {
    this.clinicDropdownConfig = new FindingColumnConfig();
    this.clinicDropdownConfig.findingType = nameof<ClinicFindingUiModel>(m => m.findingType);
    this.clinicDropdownConfig.findingColumnIds.findingRRId = 'hea_m_020105';
    this.clinicDropdownConfig.findingColumnIds.buttonRRId = 'hea_m_020106';
    this.clinicDropdownConfig.itemCount = 9;

    this.previousInterventionsTherapiesDropdownConfig = new FindingColumnConfig();
    this.previousInterventionsTherapiesDropdownConfig.findingType = nameof<PreviousInterventionsTherapiesFindingUiModel>(
      m => m.findingType
    );
    this.previousInterventionsTherapiesDropdownConfig.findingColumnIds.findingRRId = 'hea_m_020303';
    this.previousInterventionsTherapiesDropdownConfig.findingColumnIds.buttonRRId = 'hea_m_020304';
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
      this.translate.stream('headMRT.anamnesis.clinicalSymptomFindings').subscribe((out: FindingDropdownModel[]) => {
        this.clinicDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('headMRT.anamnesis.previousInterventionsTherapiesFindings').subscribe((out: FindingDropdownModel[]) => {
        this.previousInterventionsTherapiesDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.clinicDropdownConfig.placeholder = out;
        this.previousInterventionsTherapiesDropdownConfig.placeholder = out;
      }),
      this.translate.stream('headMRT.anamnesis.addClinic.value').subscribe((out: string) => {
        this.clinicDropdownConfig.buttonText = out;
      }),
      this.translate.stream('headMRT.anamnesis.addProceduretherapy.value').subscribe((out: string) => {
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

  isClinicFindingType(type: ClinicTypeEnum[]): boolean {
    return type.includes(this.clinicHandler.currentItem.findingType);
  }
  /* Clearing section */
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

  clearCalendar() {
    this.previousInterventionsTherapiesHandler.currentItem.date = new MonthYearModel();
  }
}
