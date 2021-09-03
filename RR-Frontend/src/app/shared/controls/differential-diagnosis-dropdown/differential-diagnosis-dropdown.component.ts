import { Component, EventEmitter, Input, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DifferentialDiagnosisDropdownService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-dropdown.service';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { omit, compact, filter } from 'lodash';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { FindingBase } from '@models/shared/finding/finding.base';
import { combineLatest, Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { FindingWithDescriptionType } from '@models/shared/differential-diagnosis-dropdown/finding-with-description-type.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DiagnosisUpdateValue } from '@models/shared/differential-diagnosis-dropdown/differential-diagnosis-update-value.model';
import { DiagnosisNumber } from '@enums/shared/diagnosis-number.enum';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { ReportModelBase } from '@models/report-model-base';
import { ReportModelBaseWithDescriptionType } from '@models/shared/differential-diagnosis-dropdown/report-model-ase-with-description-type.model';

@Component({
  selector: 'rr-differential-diagnosis-dropdown',
  templateUrl: './differential-diagnosis-dropdown.component.html',
  providers: [MakeProvider(DifferentialDiagnosisDropdownComponent)]
})
export class DifferentialDiagnosisDropdownComponent extends NgModelAccessorBase<string> implements OnInit, OnDestroy {
  @Input() diagnosisNumber: DiagnosisNumber;
  @Input() isActiveOnIKnow = false;
  @Input() group: boolean;
  @Input() placeholder: string;
  @Input() styleClass: string;
  @Input() rrId: string;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() skipOnExclusion: string[];
  @Input() options: DropdownModel[] | DropdownGroupedModel[];
  @Input() presetHttpParams: HttpParams;
  @Input() rrValidation: string;
  @Input() noAutoModelUpdate: boolean;

  @Input('alwaysExcluded') set setAlwaysExcluded(options: string[]) {
    this.alwaysExcluded = options;
    this.excludedValues = this.excludedValues.concat(this.alwaysExcluded);
  }

  // Some properties are cleared conditionally depending on the logic of finding.
  // Those properties can be passed in this list. See PelvisMRT page 5 finding 'PenisMass' for example
  @Input() propertiesToSkipInPresetsClearing: string[] = [];

  @Input() set parentViewModel(value: FindingBase | ReportModelBase) {
    this.ngValue = value[this.name];
    this.updateServiceValues(this.ngValue, false);
    this.descriptionType = (value as FindingWithDescriptionType | ReportModelBaseWithDescriptionType).descriptionType;
    this.parentModel = value;
    this.ddService.descritionType.next(this.descriptionType);
    this.subscribeForSiblingsChange();
  }

  @Output() selectionChanged = new EventEmitter();
  @Output() presetDataFromBackend = new EventEmitter<FindingBase | FindingBase[]>();

  alwaysExcluded: string[] = [];
  excludedValues: string[] = [];
  parentModel: FindingBase | ReportModelBase;
  presetModel: FindingBase | FindingBase[];
  descriptionType: DescriptionTypeEnum;

  subForDD2IDescribe: Subscription;
  subForDD2IKnow: Subscription;
  subForDD3IDescribe: Subscription;
  subForDD3IKnow: Subscription;
  descriptionTypeSub: Subscription;

  removeNone = (values: string[]): string[] => filter(values, elem => elem !== 'None');

  constructor(
    private ddService: DifferentialDiagnosisDropdownService,
    @Optional() private diagnosisService: DifferentialDiagnosisPresetService,
    private validationHelperService: ValidationHelperService
  ) {
    super();
  }

  ngOnInit() {
    this.checkForRequiredAttrs();
    this.setDefaultValues();
    this.subscribeForSiblingsChange();
    this.descriptionTypeSub = this.ddService.descritionType.subscribe((type: DescriptionTypeEnum) => {
      if (type) {
        this.descriptionType = type;
        this.subscribeForSiblingsChange();
        this.updateServiceValues(this.ngValue, false);
      }
    });
  }

  private setDefaultValues() {
    this.styleClass = this.styleClass ? this.styleClass : 'o-width-100 ui-brown-box';
    this.placeholder = this.placeholder ? this.placeholder : 'shared.pleaseSelect';
    this.excludedValues = this.excludedValues.concat(this.alwaysExcluded);
    this.writeModel(false);
  }

  diagnosis1ChangeCallback(diagnosis1: DiagnosisUpdateValue) {
    if (diagnosis1) {
      this.excludedValues = this.alwaysExcluded.concat(this.removeNone(compact([diagnosis1?.value])));
      if (diagnosis1?.isUserUpdate) {
        this.clearDropdownValue();
      }
    }
  }

  diagnosis1And2ChangesCallback(diagnosis1And2: DiagnosisUpdateValue[]) {
    if (diagnosis1And2 && compact(diagnosis1And2).length === 2) {
      this.excludedValues = this.alwaysExcluded.concat(this.removeNone(compact(diagnosis1And2.map(i => i.value))));
      if (compact(diagnosis1And2?.map(i => i?.isUserUpdate)).length > 0) {
        this.clearDropdownValue();
      }
    }
  }

  private subscribeForSiblingsChange() {
    if (!this.subForDD2IDescribe && this.diagnosisNumber === DiagnosisNumber.Second && !this.isIKnow()) {
      this.subscribeForDiagnosis2IDescribeSiblingsChange();
    }
    if (!this.subForDD2IKnow && this.diagnosisNumber === DiagnosisNumber.Second && this.isIKnow()) {
      this.subscribeForDiagnosis2IKnowSiblingsChange();
    }
    if (!this.subForDD3IDescribe && this.diagnosisNumber === DiagnosisNumber.Third && !this.isIKnow()) {
      this.subscribeForDiagnosis3IDescribeSiblingsChange();
    }
    if (!this.subForDD3IKnow && this.diagnosisNumber === DiagnosisNumber.Third && this.isIKnow()) {
      this.subscribeForDiagnosis3IKnowSiblingsChange();
    }
  }

  subscribeForDiagnosis2IDescribeSiblingsChange() {
    this.subForDD2IDescribe = this.ddService.diagnosis1IDescribe.subscribe(this.diagnosis1ChangeCallback.bind(this));
    if (this.subForDD2IKnow) {
      this.subForDD2IKnow.unsubscribe();
      this.subForDD2IKnow = null;
    }
  }
  subscribeForDiagnosis2IKnowSiblingsChange() {
    this.subForDD2IKnow = this.ddService.diagnosis1IKnow.subscribe(this.diagnosis1ChangeCallback.bind(this));
    if (this.subForDD2IDescribe) {
      this.subForDD2IDescribe.unsubscribe();
      this.subForDD2IDescribe = null;
    }
  }
  subscribeForDiagnosis3IDescribeSiblingsChange() {
    this.subForDD3IDescribe = combineLatest([this.ddService.diagnosis1IDescribe, this.ddService.diagnosis2IDescribe]).subscribe(
      this.diagnosis1And2ChangesCallback.bind(this)
    );
    if (this.subForDD3IKnow) {
      this.subForDD3IKnow.unsubscribe();
      this.subForDD3IKnow = null;
    }
  }
  subscribeForDiagnosis3IKnowSiblingsChange() {
    this.subForDD3IKnow = combineLatest([this.ddService.diagnosis1IKnow, this.ddService.diagnosis2IKnow]).subscribe(
      this.diagnosis1And2ChangesCallback.bind(this)
    );
    if (this.subForDD3IDescribe) {
      this.subForDD3IDescribe.unsubscribe();
      this.subForDD3IDescribe = null;
    }
  }

  onDiagnosisChange(event) {
    this.ngValue = event.value;
    this.writeModel(true);
    if (this.diagnosisNumber === DiagnosisNumber.First && this.isIKnow() && this.isActiveOnIKnow) {
      this.getDiagnosisPresets();
    }
  }

  writeModel(isUserUpdate: boolean) {
    this.updateServiceValues(this.ngValue, isUserUpdate);
    this.writeValue(this.ngValue);
    if (isUserUpdate) {
      this.selectionChanged.emit(this.ngValue);
    }
  }

  private updateServiceValues(value: string, isUserUpdate: boolean) {
    if (!this.isIKnow()) {
      if (this.diagnosisNumber === DiagnosisNumber.First && !this.isActiveOnIKnow) {
        this.ddService.diagnosis1IDescribe.next(new DiagnosisUpdateValue(value, isUserUpdate));
      }
      if (this.diagnosisNumber === DiagnosisNumber.Second) {
        this.ddService.diagnosis2IDescribe.next(new DiagnosisUpdateValue(value, isUserUpdate));
      }
    }
    if (this.isIKnow()) {
      if (this.diagnosisNumber === DiagnosisNumber.First && this.isActiveOnIKnow) {
        this.ddService.diagnosis1IKnow.next(new DiagnosisUpdateValue(value, isUserUpdate));
      }
      if (this.diagnosisNumber === DiagnosisNumber.Second) {
        this.ddService.diagnosis2IKnow.next(new DiagnosisUpdateValue(value, isUserUpdate));
      }
    }
  }

  ngOnDestroy() {
    if (this.subForDD2IDescribe) {
      this.subForDD2IDescribe.unsubscribe();
    }
    if (this.subForDD2IKnow) {
      this.subForDD2IKnow.unsubscribe();
    }
    if (this.subForDD3IDescribe) {
      this.subForDD3IDescribe.unsubscribe();
    }
    if (this.subForDD3IKnow) {
      this.subForDD3IKnow.unsubscribe();
    }
    this.descriptionTypeSub.unsubscribe();
    this.ddService.clear();
  }

  private clearDropdownValue() {
    this.ngValue = 'None';
    this.writeModel(false);
  }

  private getDiagnosisPresets() {
    const params = this.ddService.getPresetRequestHttpParams(this.parentModel, this.presetHttpParams);
    this.diagnosisService?.getPreset(this.ngValue, params).subscribe((model: FindingBase | FindingBase[]) => {
      this.presetModel = model;
      if (this.noAutoModelUpdate) {
        this.presetDataFromBackend.emit(model);
      } else {
        this.updateModelWithoutOmittedProperties(model);
      }
    });
  }

  private updateModelWithoutOmittedProperties(newModel: FindingBase | FindingBase[]): void {
    this.ddService.removePicturesOnPreset(this.parentModel, this.presetModel);
    const omittedProperties = [this.name, ...findingBaseProperties, ...this.propertiesToSkipInPresetsClearing];
    Object.assign(this.parentModel, omit(newModel, omittedProperties));
    Object.keys(newModel).forEach(modelName => this.validationHelperService.removeError(modelName));
  }

  private isIKnow(): boolean {
    return this.descriptionType === DescriptionTypeEnum.IKnow;
  }

  // Just a waring if one of important properties are not set
  private checkForRequiredAttrs() {
    const requiredAttrs = ['diagnosisNumber', 'rrId', 'name', 'parentModel'];
    requiredAttrs.forEach(item => {
      if (!this[item]) {
        console.warn('Differential Diagnosis dropdown: ' + item + ' must be set');
      }
    });
  }
}
