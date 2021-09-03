import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { CardioRelaxationTimeUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-relaxation-time-ui.model';
import { CardioSingleColorLocalizer } from '@models/cardioMRT/ui/left-ventricle/cardio-single-color-localizer-ui.model';

import { RelaxationTimeTypeEnum } from '@enums/cardioMRT/left-ventricle/relaxation-time-type.enum';
import { MeasureType } from '@enums/cardioMRT/left-ventricle/measure-type.enum';

import { IRelaxationTimeControlsConfig } from '@interfaces/relaxation-time-controls-config.interface';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { AppConfig } from '../../../../app.config';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { values } from 'lodash';
import { SeverityType } from '@enums/cardioMRT/left-ventricle/severity-type.enum';

@Component({
  selector: 'rr-cardio-relaxation-localizer-controls-group',
  templateUrl: './cardio-relaxation-time-localizer-controls-group.component.html',
  styleUrls: ['./cardio-relaxation-time-localizer-controls-group.component.scss']
})
export class CardioRelaxationTimeLocalizerControlsGroupComponent implements OnInit, OnDestroy {
  @Input() model: CardioRelaxationTimeUiModel;
  @Input() name: string;
  @Input() isT2: boolean;
  @Input() isT1Gd: boolean;
  @Input() isDividingByZeroError: boolean;
  @Input() isNegativeResultError: boolean;
  @Input() controlsConfig: IRelaxationTimeControlsConfig;
  @Input() pageId: string;
  @Input() referencePicture: ReferencePictureUiModel;
  @Input() imageFileType: string;
  @Output() dataUpdated = new EventEmitter<string>();

  relaxationType: typeof RelaxationTimeTypeEnum;
  measureType: typeof MeasureType;
  previousMeasureType: MeasureType;
  storedLocalizerModel: CardioSingleColorLocalizer;

  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;

  severityTypeSub: Subscription;
  severityTypeOptions: DropdownModel[];

  constructor(private validationHelperService: ValidationHelperService, private translate: TranslateService) {
    this.relaxationType = RelaxationTimeTypeEnum;
    this.measureType = MeasureType;
    this.storedLocalizerModel = new CardioSingleColorLocalizer();
    this.severityTypeOptions = [];
  }

  ngOnInit(): void {
    this.initTranslations();
    this.previousMeasureType = this.model.measureType;
  }
  private initTranslations(): void {
    this.severityTypeSub = this.translate
      .stream('cardioMRT.leftVentricle.severityTypeDropdown.options')
      .subscribe((out: DropdownModel[]) => (this.severityTypeOptions = values(out)));
  }
  ngOnDestroy(): void {
    this.severityTypeSub.unsubscribe();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.cardioMRT.leftVentricle.fileUpload;
  }

  update(controlName?: string): void {
    this.dataUpdated.emit(controlName);
  }

  qualitativeGroupReset(): void {
    this.model.qualitativeType = this.relaxationType.None;
    this.model.severityType = SeverityType.None;

    this.conditionallyClearLocalizer();
    this.removeLocalizerError();
    this.removeNumberInputsValidationErrors();
    this.resetControlsValidation();
  }

  quantitativeGroupReset(): void {
    this.model.valueMyocardiumInMs = null;
    this.model.referenceValueMyocardiumInMs = null;
    this.model.valueBloodInMs = null;

    this.conditionallyClearLocalizer();
    this.removeLocalizerError();
    this.removeNumberInputsValidationErrors();
    this.resetControlsValidation();
  }

  conditionallyClearLocalizer() {
    if (this.previousMeasureType !== this.model.measureType) {
      this.model.localizer = new CardioSingleColorLocalizer();
      this.model.isLVTotal = false;
    }
    this.previousMeasureType = this.model.measureType;
  }

  measureGroupReset(): void {
    this.model.isLVTotal = false;
    this.validationHelperService.removeError(`${this.name}.${nameof<CardioRelaxationTimeUiModel>(m => m.qualitativeType)}`);
    this.removeLocalizerError();
  }

  resetControlsValidation(): void {
    this.validationHelperService.removeError(`${this.name}.${nameof<CardioRelaxationTimeUiModel>(m => m.qualitativeType)}`);
    this.validationHelperService.removeError(`${this.name}.${nameof<CardioRelaxationTimeUiModel>(m => m.measureType)}`);
    this.validationHelperService.removeError(`${this.name}.${nameof<CardioRelaxationTimeUiModel>(m => m.severityType)}`);
  }

  removeLocalizerError(): void {
    this.validationHelperService.removeError(`${this.name}.${nameof<CardioRelaxationTimeUiModel>(m => m.localizer)}`);
  }

  removeNumberInputsValidationErrors(): void {
    this.validationHelperService.removeError(`${this.name}.${nameof<CardioRelaxationTimeUiModel>(m => m.valueMyocardiumInMs)}`);
    this.validationHelperService.removeError(`${this.name}.${nameof<CardioRelaxationTimeUiModel>(m => m.valueBloodInMs)}`);
  }

  isMandatory(): boolean {
    return this.controlsConfig.areValueMyocardiumNumberInputsMandatory;
  }

  storeOrRetreivePreviousLocalizerModel(): void {
    if (!this.model.isLVTotal) {
      this.model.localizer = this.storedLocalizerModel;
    } else {
      this.storedLocalizerModel = this.model.localizer;
    }
  }
}
