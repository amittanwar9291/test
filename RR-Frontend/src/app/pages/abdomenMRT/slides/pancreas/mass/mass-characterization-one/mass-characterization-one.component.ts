import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { PancreasPresetHttpService } from '@services/abdomenMRT/http/pancreas/pancreas-preset-http.service';

import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum, MassDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/pancreas/mass';

import { nameof } from 'ts-simple-nameof';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';

import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

@Component({
  selector: 'rr-mass-characterization-one',
  templateUrl: './mass-characterization-one.component.html',
  styleUrls: ['./mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: PancreasPresetHttpService
    }
  ]
})
export class MassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: PancreasFindingUiModel;
  @Input() mainMassOptions1: DropdownModel[];
  @Input() validationProps: string;
  @Output() resetDetailedDiagnosisEmitter = new EventEmitter(); // TODO rename if it actually only triggers the reference picture to reset

  subscriptions: Subscription[] = [];

  marginTypeOptions: DropdownModel[];
  homogeneityTypeOptions: DropdownModel[];
  formTypeOptions: DropdownModel[];

  histologyKnownType = HistologyKnownTypeEnum;
  descriptionType = DescriptionTypeEnum;
  mainMassDifferentialDiagnosisType1 = MassDifferentialDiagnosisTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    mainHeaderTranslationKey: 'abdomenMRT.pancreas.expansion.value',
    mainHeaderRrId: 'abd_m_060345',
    size: {
      modelName: nameof<PancreasFindingUiModel>(m => m.size),
      headerTranslationKey: 'abdomenMRT.pancreas.size.value',
      headerRrId: 'abd_m_060346',
      inputRrId: 'abd_m_060347',
      labelTranslationKey: 'abdomenMRT.pancreas.inMm.value',
      labelRrId: 'abd_m_060348',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    secondPlane: {
      modelName: nameof<PancreasFindingUiModel>(m => m.secondPlane),
      headerTranslationKey: 'abdomenMRT.pancreas.2ndPlane.value',
      headerRrId: 'abd_m_060349',
      inputRrId: 'abd_m_060350',
      labelTranslationKey: 'abdomenMRT.pancreas.inMm.value',
      labelRrId: 'abd_m_060351',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    thirdPlane: {
      modelName: nameof<PancreasFindingUiModel>(m => m.thirdPlane),
      headerTranslationKey: 'abdomenMRT.pancreas.3rdPlane.value',
      headerRrId: 'abd_m_060352',
      inputRrId: 'abd_m_060353',
      labelTranslationKey: 'abdomenMRT.pancreas.inMm.value',
      labelRrId: 'abd_m_060354',
      min: 1,
      max: 999,
      placeholder: '---'
    }
  };

  constructor(private validationHelperService: ValidationHelperService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.pancreas.marginTypeOptions.options').subscribe((out: DropdownModel[]) => {
        this.marginTypeOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.homogeneityTypeOptions.options').subscribe((out: DropdownModel[]) => {
        this.homogeneityTypeOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.formTypeOptions.options').subscribe((out: DropdownModel[]) => {
        this.formTypeOptions = Object.values(out);
      })
    );
  }

  showDDDescription(): boolean {
    const allowedValues = [
      MassDifferentialDiagnosisTypeEnum.IntraductalPapillaryMucinousNeoplasia,
      MassDifferentialDiagnosisTypeEnum.BranchDuctIPMN,
      MassDifferentialDiagnosisTypeEnum.MainDuctIPMN,
      MassDifferentialDiagnosisTypeEnum.MixedTypeIPMN,
      MassDifferentialDiagnosisTypeEnum.MucinousCysticNeoplasia
    ];

    return allowedValues.includes(this.model.mainMassDifferentialDiagnosisType1);
  }

  resetDD1Dependent(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSubordinate = false;

    this.validationHelperService.removeError(nameof<PancreasFindingUiModel>(m => m.isHistologyKnown));
  }

  onLocalizationGroupChange(): void {
    const relevantModel = [
      this.model.isUncinateProcess,
      this.model.isPancreaticHead,
      this.model.isPancreaticCorpus,
      this.model.isPancreaticTail,
      this.model.isPancreaticDuct
    ];

    if (relevantModel.filter(item => item).length !== 1) {
      this.resetDetailedDiagnosisEmitter.emit();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }
}
