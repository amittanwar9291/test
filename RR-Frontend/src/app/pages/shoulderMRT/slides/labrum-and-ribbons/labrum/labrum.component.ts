import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { AppConfig } from 'app/app.config';

import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';
import { FormErrorFinding } from '@models/shared/validation/form-validation.models';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

import { DetailsType, LabrumMorphologyResultType } from '@enums/shoulderMRT/labrum-and-ribbons';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

import { LabrumAndRibbonsPresetsHttpService } from '@services/shoulderMRT';

import { DiagnosisListService } from '../diagnosis-lists.service';

import { LabrumAndRibbonsDiagnosisUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-diagnosis-ui.model';
import { ValidationDataService } from '@services/shared/validation/validation-data.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

import { without } from 'lodash';
import { HttpParams } from '@angular/common/http';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { LabrumAndRibbonsCommunicationService } from '@services/shoulderMRT/labrum-and-ribbons-communication.service';

@Component({
  selector: 'rr-labrum',
  templateUrl: './labrum.component.html',
  styleUrls: ['../labrum-and-ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: LabrumAndRibbonsPresetsHttpService
    }
  ]
})
export class LabrumComponent implements OnInit, OnDestroy {
  labrumMorphologyResultType: typeof LabrumMorphologyResultType;
  detailsType: typeof DetailsType;
  descriptionType: typeof DescriptionTypeEnum;
  localizerHasAllFalseValues: boolean;

  differentialDiagnosisList: LabrumAndRibbonsDiagnosisUiModel[];
  restrictedDiagnosisList: LabrumAndRibbonsDiagnosisUiModel[];

  subscriptions: Subscription[] = [];

  @Input() model: LabrumAndRibbonsFindingUiModel;
  @Input('differentialDiagnosisList') set _differentialDiagnosisList(val: LabrumAndRibbonsDiagnosisUiModel[]) {
    this.differentialDiagnosisList = val;
    this.diagnosisListService.registerDiagnosisList(this.differentialDiagnosisList);
    this.restrictDiagnosisList();
  }

  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  constructor(
    private diagnosisListService: DiagnosisListService,
    private validationDataService: ValidationDataService,
    private toastMessageService: ToastMessageService,
    private enumMapper: EnumMapper,
    public labrumAndRibbonsCommunicationService: LabrumAndRibbonsCommunicationService
  ) {
    this.labrumMorphologyResultType = LabrumMorphologyResultType;
    this.detailsType = DetailsType;
    this.descriptionType = DescriptionTypeEnum;
  }

  ngOnInit(): void {
    this.diagnosisListService.registerDiagnosisList(this.differentialDiagnosisList);
    this.initSubscriptions();
    if (this.diagnosisListService.completeDiagnosisList) {
      this.restrictDiagnosisList();
    }
    this.checkIfLocalizerHasAllFalseValues();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.labrumAndRibbons.fileUpload;
  }

  initSubscriptions(): void {
    this.subscriptions.push(
      this.diagnosisListService.getDescriptionTypeChange().subscribe(() => {
        this.restrictDiagnosisList();
        this.localizerHasAllFalseValues = true;
      }),
      this.validationDataService.currentPageFinalValidation.subscribe(errors => {
        if (errors) {
          this.onValidationTrigger(errors as FormErrorFinding[]);
        }
      })
    );
  }

  onValidationTrigger(errors: FormErrorFinding[]): void {
    const isExtensionLabrumPathologyDiagnosis1Error = errors.some(finding => {
      return finding.errors.some(error => {
        return error.name === 'extensionLabrumPathologyDiagnosis1';
      });
    });

    const isOnlyInferiorOrPosteroSuperiorSelected = () => {
      const relevantSelections = ['inferior', 'posterosuperior'];

      const allSelectedElements = Object.keys(this.model.labrumLocation).filter(prop => this.model.labrumLocation[prop]);
      const relevantElements = allSelectedElements.filter(prop => relevantSelections.some(item => item === prop));
      const restElements = without(allSelectedElements, ...relevantSelections);
      return restElements.length === 0 && relevantElements.length > 0;
    };

    if (isExtensionLabrumPathologyDiagnosis1Error && isOnlyInferiorOrPosteroSuperiorSelected()) {
      this.toastMessageService.showErrorToast('errors.labrumValidationMessage.value');
    }
  }

  disableAnterosuperiorDependent(): void {
    if (!this.model.labrumLocation.anterosuperior) {
      if (
        this.model.labrumMorphologyResultType === LabrumMorphologyResultType.Absent ||
        this.model.labrumMorphologyResultType === LabrumMorphologyResultType.Foramen
      ) {
        this.model.labrumMorphologyResultType = LabrumMorphologyResultType.None;
      }
    }

    if (!this.model.labrumLocation.superior) {
      this.model.isExtensionToLongBicepsTendon = false;
      this.model.isDislocationIntoJointSpace = false;
      this.model.isLongitudinalSplitting = false;
    }
  }

  emitDiagChangeAndDisableAntsupDependent() {
    if (this.model.descriptionType === DescriptionTypeEnum.IKnow) {
      this.restrictDiagnosisList();
    }
    this.disableAnterosuperiorDependent();
  }

  isNotAnterosuperiorChecked(): boolean {
    return !this.model.labrumLocation.anterosuperior;
  }

  get isSuperior(): boolean {
    return this.model.descriptionType === DescriptionTypeEnum.IDescribe && this.model.labrumLocation.superior;
  }

  getDiagnosisListOptions() {
    return this.model.descriptionType === DescriptionTypeEnum.IDescribe ? this.differentialDiagnosisList : this.restrictedDiagnosisList;
  }

  restrictDiagnosisList() {
    if (this.diagnosisListService) {
      this.restrictedDiagnosisList = this.diagnosisListService.restrictDiagnosisList(this.model.labrumLocation);
    }

    if (this.restrictedDiagnosisList.length === 0) {
      this.model.diagnosis1 = 'None';
      this.model.extensionLabrumPathologyDiagnosis1 = 'None';
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onLocationChange() {
    this.emitDiagChangeAndDisableAntsupDependent();
    this.checkIfLocalizerHasAllFalseValues();
    this.clearIfNeededExtensionLabrum();
    this.labrumAndRibbonsCommunicationService.handleLigGlenohumeraleMediumSelection();
  }

  private checkIfLocalizerHasAllFalseValues() {
    this.localizerHasAllFalseValues = Object.keys(this.model.labrumLocation).every(k => !this.model.labrumLocation[k]);
    if (this.localizerHasAllFalseValues) {
      this.referencePicture?.resetReferencePicture();
    }
  }

  getDiagnosisPresetParams() {
    const paramValue = this.enumMapper
      .mapToString(this.model.labrumLocation)
      .split(', ')
      .toString();
    return new HttpParams().set('labrumLocation', paramValue);
  }

  clearSubordinate() {
    this.model.isSubordinate = false;
  }

  onSelectionChanged() {
    this.clearSubordinate();
    this.labrumAndRibbonsCommunicationService.handleLigGlenohumeraleMediumSelection();
  }

  private clearIfNeededExtensionLabrum() {
    const hasValue = this.restrictedDiagnosisList.some(r => String(r.value) === this.model.extensionLabrumPathologyDiagnosis1);
    if (!hasValue) {
      this.model.extensionLabrumPathologyDiagnosis1 = 'None';
    }
  }
}
