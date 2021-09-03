import { Component, OnInit } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { MedicalHistoryUiModel } from '@models/mammaMX/ui/medical-history/medical-history-ui.model';
import { DropdownNumberModel } from '@models/shared/dropdown/dropdown-number.model';
import { FamilyPersonUi } from '@models/mammaMX/ui/medical-history/family-person-ui.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { FPTranslations } from '@models/shared/mamma/anamnesis-medical-history/fp-translations';
import { PreviousTherapiesUi } from '@models/mammaMX/ui/medical-history/previous-therapies-ui.model';
import { MedicalHistoryValidation } from '@models/mammaMX/ui/medical-history/medical-history-validation.model';

import { OwnFamilyAnamnesisPresentType } from '@enums/shared/mamma/anamnesis-medical-history';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { range, values, flatten } from 'lodash';
import { OwnFamilyAnamnesisType } from '@enums/mammaMX/medical-history/own-family-anamnesis-type.enum';
import { MenstruationType } from '@enums/mammaMX/medical-history/menstruation-type.enum';

@Component({
  selector: 'rr-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent extends SlideBaseComponent<MedicalHistoryUiModel> implements OnInit {
  ownFamilyAnamnesisPresentType = OwnFamilyAnamnesisPresentType;
  ownFamilyAnamnesisType = OwnFamilyAnamnesisType;
  menstruationType = MenstruationType;
  arePreviousTherapies = SimpleAnswerEnum;
  pregnanciesOptions: DropdownNumberModel[] = [];
  familyPersonHandler: DynamicComponentHandler<FamilyPersonUi>;
  familyPersonConfig: FindingColumnConfig;
  familyPersons = [
    OwnFamilyAnamnesisType.Mother,
    OwnFamilyAnamnesisType.Sister,
    OwnFamilyAnamnesisType.Daughter,
    OwnFamilyAnamnesisType.Grandmother,
    OwnFamilyAnamnesisType.MaternalAunt,
    OwnFamilyAnamnesisType.PaternalAunt
  ];
  ownMedicalHistories = [OwnFamilyAnamnesisType.BenignBreastLesion, OwnFamilyAnamnesisType.BreastCarcinoma];
  previousTherapieHandler: DynamicComponentHandler<PreviousTherapiesUi>;
  previousTherapieConfig: FindingColumnConfig;
  arePrevousTherapies = SimpleAnswerEnum;

  shouldClearCalendar: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, MedicalHistoryUiModel, commonServices, MedicalHistoryValidation);

    this.familyPersonHandler = new DynamicComponentHandler(this.logger, this.model.ownFamilyAnamnesisFindings, FamilyPersonUi);
    this.previousTherapieHandler = new DynamicComponentHandler(this.logger, this.model.previousTherapiesFindings, PreviousTherapiesUi);
    this.configureDropdowns();
    this.registerCallbacks();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPregnanciesOptions();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: MedicalHistoryUiModel) => {
      this.familyPersonHandler.reinitializeCollection(outModel.ownFamilyAnamnesisFindings);
      this.previousTherapieHandler.reinitializeCollection(outModel.previousTherapiesFindings);
    });

    this.registerSaveCallback((outModel: MedicalHistoryUiModel) => {
      this.familyPersonHandler.collectionPostSaveCleanup(outModel.ownFamilyAnamnesisFindings);
      this.previousTherapieHandler.collectionPostSaveCleanup(outModel.previousTherapiesFindings);
    });

    this.registerPreSaveCallback(() => {
      this.familyPersonHandler.collectionPreSaveCleanup();
      this.previousTherapieHandler.collectionPreSaveCleanup();
    });
  }

  private configureDropdowns(): void {
    this.familyPersonConfig = new FindingColumnConfig();
    this.familyPersonConfig.findingColumnIds.findingRRId = 'mam_mx_020106';
    this.familyPersonConfig.findingColumnIds.buttonRRId = 'mam_mx_020107';
    this.familyPersonConfig.itemCount = 8;
    this.familyPersonConfig.groupedOptions = true;

    this.previousTherapieConfig = new FindingColumnConfig();
    this.previousTherapieConfig.findingColumnIds.findingRRId = 'mam_mx_020404';
    this.previousTherapieConfig.findingColumnIds.buttonRRId = 'mam_mx_020405';
    this.previousTherapieConfig.itemCount = 8;
  }

  getCustomLabel(index: number, familyPersonHandler: DynamicComponentHandler<FamilyPersonUi>, translationBits: FPTranslations): string {
    const currSelected = familyPersonHandler.collection[index].findingType;
    let result = '';

    if (familyPersonHandler.collection[index].findingType) {
      const dropdownValues = flatten(this.familyPersonConfig.dropdownValues.map((item: any) => item.items));
      const currPerson = dropdownValues.find(x => x.value === currSelected);

      if (this.familyPersons.indexOf(currSelected) > -1) {
        result = `${translationBits.familyHistoryShort} • ${currPerson.label}`;
      } else if (this.ownMedicalHistories.indexOf(currSelected) > -1) {
        result = `${translationBits.medicalHistoryShort} • ${currPerson.label}`;
      }
    }
    return result;
  }

  getPregnanciesOptions(): void {
    const pregnancyLimit = 10;
    this.pregnanciesOptions = range(pregnancyLimit + 1).map((preg: number) => new DropdownNumberModel(String(preg), preg));
    this.pregnanciesOptions.push(new DropdownNumberModel(`> ${String(pregnancyLimit)}`, pregnancyLimit + 1));
  }

  get isAnyPersonSelected(): boolean {
    return this.familyPersons.indexOf(this.familyPersonHandler.currentItem.findingType) > -1;
  }

  getSelectedOptionName(): string {
    if (!this.familyPersonConfig.dropdownValues) {
      return '';
    }
    const dropdownValues = flatten(this.familyPersonConfig.dropdownValues.map((item: any) => item.items));
    const finding = dropdownValues.find(x => x.value === this.familyPersonHandler.currentItem.findingType);
    return finding ? finding.label : '';
  }

  get isAnyOwnMedicalHistorySelected(): boolean {
    return this.ownMedicalHistories.indexOf(this.familyPersonHandler.currentItem.findingType) > -1;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('mammaMX.medicalHistory.findingTypes1.options').subscribe((out: any[]) => {
        this.familyPersonConfig.dropdownValues = out;
      }),

      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.familyPersonConfig.placeholder = out;
        this.previousTherapieConfig.placeholder = out;
      }),

      this.translate.stream('mammaMX.medicalHistory.addNewFinding.value').subscribe((out: string) => {
        this.familyPersonConfig.buttonText = out;
        this.previousTherapieConfig.buttonText = out;
      }),

      this.translate.stream('mammaMX.medicalHistory.translationBits').subscribe((out: FPTranslations) => {
        this.familyPersonConfig.translationBits = out;
      }),

      this.translate.stream('mammaMX.medicalHistory.findingTypes.options').subscribe((out: FindingDropdownModel[]) => {
        this.previousTherapieConfig.dropdownValues = values(out);
      })
    );
  }

  resetCalendar() {
    this.model.calendar = null;
    this.shouldClearCalendar = true;

    this.asynchronouslyResetShouldBeCleared();
  }

  asynchronouslyResetShouldBeCleared() {
    setTimeout(() => {
      this.shouldClearCalendar = false;
    }, 0);
  }
}
