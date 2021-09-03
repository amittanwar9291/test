import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ClassificationAccordingToTASCIIDetailsTypeEnum,
  ClassificationAccordingToTASCIISubTypeEnum,
  ExtentTypeEnum,
  VascularPathologyLocalizationTypeEnum
} from '@enums/angiographyMRT/pelvis-leg-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-chronic-femoropopliteal',
  templateUrl: './chronic-femoropopliteal.component.html',
  styleUrls: ['./chronic-femoropopliteal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicFemoropoplitealComponent {
  @Input() model: PelvisLegArteriesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  classificationAccordingToTASCIISubTypeEnum = ClassificationAccordingToTASCIISubTypeEnum;
  classificationAccordingToTASCIIDetailsTypeEnum = ClassificationAccordingToTASCIIDetailsTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  extentTypeEnum = ExtentTypeEnum;
  vascularPathologyLocalizationTypeEnum = VascularPathologyLocalizationTypeEnum;

  constructor(private toastMessageService: ToastMessageService, private validationHelperService: ValidationHelperService) {}

  clearLengthOnFifthCol(value: ClassificationAccordingToTASCIIDetailsTypeEnum, columnToClear: string): string {
    return this.model.classificationAccordingToTASCIIDetailsType !== value ? columnToClear : '';
  }

  calculate() {
    const A = this.model.diameterNormalPoststenoticSegmentInMm;
    const B = this.model.diameterStenosisInMm;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisAccordingToNASCETInPercentage = baseCalculation;
        this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
      } else {
        this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
        this.toastMessageService.showErrorToast('errors.angiographyMRT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }
}
