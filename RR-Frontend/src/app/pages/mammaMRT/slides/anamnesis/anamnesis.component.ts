import { Component, OnDestroy, OnInit } from '@angular/core';

import { AnamnesisUi } from '@models/mammaMRT/ui/anamnesis/anamnesis-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FamilyPersonUi } from '@models/mammaMRT/ui/anamnesis/family-person-ui.model';
import { PreviousTherapiesUi } from '@models/mammaMRT/ui/anamnesis/previous-therapies-ui.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { DropdownNumberModel } from '@models/shared/dropdown/dropdown-number.model';
import { FPTranslations } from '@models/shared/mamma/anamnesis-medical-history/fp-translations';
import { AnamnesisValidation } from '@models/mammaMRT/ui/anamnesis/anamnesis-validation.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';

import { OwnFamilyAnamnesisPresentType, OwnFamilyAnamnesisType } from '@enums/shared/mamma/anamnesis-medical-history';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { MenstruationTypeEnum } from '@enums/mammaMRT';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { flatten } from 'lodash';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUi> implements OnInit, OnDestroy {
  previousTherapies: FindingDropdownModel[];
  persons: FindingDropdownModel[];

  sides: DropdownModel[];
  pregnancies: DropdownNumberModel[];

  ownFamilyAnamnesisPresentType = OwnFamilyAnamnesisPresentType;
  arePrevousTherapies = SimpleAnswerEnum;
  menstruationType = MenstruationTypeEnum;

  familyPersonHandler: DynamicComponentHandler<FamilyPersonUi>;
  previousTherapieHandler: DynamicComponentHandler<PreviousTherapiesUi>;

  familyPersonConfig: FindingColumnConfig;
  previousTherapieConfig: FindingColumnConfig;

  familyPersons = [
    OwnFamilyAnamnesisType.Mother,
    OwnFamilyAnamnesisType.Sister,
    OwnFamilyAnamnesisType.Daughter,
    OwnFamilyAnamnesisType.Grandmother,
    OwnFamilyAnamnesisType.MaternalAunt,
    OwnFamilyAnamnesisType.PaternalAunt
  ];

  ownAnamnesis = [OwnFamilyAnamnesisType.BenignMammaryLesion, OwnFamilyAnamnesisType.BreastCarcinoma];

  shouldBeCleared: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUi, commonServices, AnamnesisValidation);
    this.familyPersonHandler = new DynamicComponentHandler(this.logger, this.model.ownFamilyAnamnesisFindings, FamilyPersonUi);
    this.previousTherapieHandler = new DynamicComponentHandler(this.logger, this.model.previousTherapiesFindings, PreviousTherapiesUi);
    this.previousTherapies = [];
    this.pregnancies = [];
    this.persons = [];
    this.configureDropdowns();
    this.registerCallbacks();
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPregnancies();
  }

  getSelectedOptionName(): string {
    if (this.familyPersonConfig.dropdownValues) {
      const finding = this.persons.find(x => x.value === this.familyPersonHandler.currentItem.findingType);
      if (finding) {
        return finding.label;
      }
    }
    return '';
  }

  getCustomLabel(index: number, familyPersonHandler: DynamicComponentHandler<FamilyPersonUi>, translationBits: FPTranslations): string {
    const currSelected = familyPersonHandler.collection[index].findingType;
    let result = '';
    if (familyPersonHandler.collection[index].findingType) {
      if (this.familyPersons.indexOf(currSelected) > -1) {
        result = translationBits.familyHistoryShort + ' • ' + this.persons.find(x => x.value === currSelected).label;
      } else if (this.ownAnamnesis.indexOf(currSelected) > -1) {
        result = translationBits.medicalHistoryShort + ' • ' + this.persons.find(x => x.value === currSelected).label;
      }
    }
    return result;
  }

  getPregnancies(): void {
    const pregnancyLimit = 10;
    for (let i = 0; i <= pregnancyLimit; i++) {
      this.pregnancies.push(new DropdownNumberModel(i.toString(), i));
    }
    this.pregnancies.push(new DropdownNumberModel('> ' + pregnancyLimit.toString(), pregnancyLimit + 1));
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: AnamnesisUi) => {
      this.familyPersonHandler.reinitializeCollection(outModel.ownFamilyAnamnesisFindings);
      this.previousTherapieHandler.reinitializeCollection(outModel.previousTherapiesFindings);
    });
    this.registerSaveCallback((outModel: AnamnesisUi) => {
      this.familyPersonHandler.collectionPostSaveCleanup(outModel.ownFamilyAnamnesisFindings);
      this.previousTherapieHandler.collectionPostSaveCleanup(outModel.previousTherapiesFindings);
    });
    this.registerPreSaveCallback(() => {
      this.familyPersonHandler.collectionPreSaveCleanup();
      this.previousTherapieHandler.collectionPreSaveCleanup();
    });
  }

  private configureDropdowns() {
    this.familyPersonConfig = new FindingColumnConfig();
    this.familyPersonConfig.findingColumnIds.buttonRRId = 'mam_m_020107';
    this.familyPersonConfig.itemCount = 8;
    this.familyPersonConfig.groupedOptions = true;
    this.previousTherapieConfig = new FindingColumnConfig();
    this.previousTherapieConfig.dropdownValues = this.previousTherapies;
    this.previousTherapieConfig.findingColumnIds.buttonRRId = 'mam_m_020405';
    this.previousTherapieConfig.itemCount = 8;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('mammaMRT.anamnesis.findingTypes1.options').subscribe((out: any[]) => {
        this.familyPersonConfig.dropdownValues = out;
        this.persons = flatten(out.map(item => item.items));
      })
    );

    this.subscriptions.push(
      this.translate.stream('mammaMRT.anamnesis.findingTypes2.options').subscribe((out: FindingDropdownModel[]) => {
        this.previousTherapieConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('mammaMRT.anamnesis.sides.options').subscribe((out: DropdownModel[]) => {
        this.sides = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.previousTherapieConfig.placeholder = out;
        this.familyPersonConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('mammaMRT.anamnesis.addNewFindings.value').subscribe((out: string) => {
        this.previousTherapieConfig.buttonText = out;
        this.familyPersonConfig.buttonText = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('mammaMRT.anamnesis.translationBits').subscribe((out: FPTranslations) => {
        this.familyPersonConfig.translationBits = out;
      })
    );
  }

  anyPersonSelected() {
    return this.familyPersons.indexOf(this.familyPersonHandler.currentItem.findingType) > -1;
  }

  resetOwnAnamnesisDate() {
    this.model.ownFamilyAnamnesisFindings.map((familyPerson: FamilyPersonUi) => {
      if (familyPerson.ownAnamnesisDate.year === 0) {
        familyPerson.ownAnamnesisDate.month = 0;
      }
      return;
    });
  }

  resetPreviousTherapiesDate() {
    this.model.previousTherapiesFindings.map((previousTherapies: PreviousTherapiesUi) => {
      if (previousTherapies.monthyear.year === 0) {
        previousTherapies.monthyear.month = 0;
      }
      return;
    });
  }

  resetCalendar() {
    this.model.calendar = null;
    this.shouldBeCleared = true;

    this.asynchronouslyResetShouldBeCleared();
  }

  asynchronouslyResetShouldBeCleared() {
    setTimeout(() => {
      this.shouldBeCleared = false;
    }, 0);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.resetOwnAnamnesisDate();
    this.resetPreviousTherapiesDate();
  }
}
