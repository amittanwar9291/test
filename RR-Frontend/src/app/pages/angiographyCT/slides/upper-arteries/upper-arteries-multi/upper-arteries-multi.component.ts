import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { UpperArteriesFindingUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-finding-ui.model';

import {
  PathologyTypeEnum,
  UpperArteriesFindingTypeEnum,
  SeverityTypeEnum,
  ShapeTypeEnum,
  FormTypeEnum,
  CharacterizationTypeEnum,
  DetailsVascularMalformationTypeEnum,
  ArteriovenousMalformationTypeEnum,
  HemodialysisShuntTypeEnum,
  ImpressionTypeEnum
} from '@enums/angiographyCT/upper-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { nameof } from 'ts-simple-nameof';
import { UpperArteriesUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-ui.model';

@Component({
  selector: 'rr-upper-arteries-multi',
  templateUrl: './upper-arteries-multi.component.html',
  styleUrls: ['./upper-arteries-multi.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UpperArteriesMultiComponent {
  @Input() model: UpperArteriesFindingUiModel;

  upperArteriesFindingTypeEnum = UpperArteriesFindingTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  severityTypeEnum = SeverityTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  formTypeEnum = FormTypeEnum;
  characterizationTypeEnum = CharacterizationTypeEnum;
  detailsVascularMalformationTypeEnum = DetailsVascularMalformationTypeEnum;
  arteriovenousMalformationTypeEnum = ArteriovenousMalformationTypeEnum;
  hemodialysisShuntTypeEnum = HemodialysisShuntTypeEnum;
  impressionTypeEnum = ImpressionTypeEnum;

  constructor(private validationHelperService: ValidationHelperService, private toastMessageService: ToastMessageService) {}

  clearPathologyDetails(value: PathologyTypeEnum, isBrachiocephalicTrunk = false): string {
    return value === this.model.pathologyType ? '' : isBrachiocephalicTrunk ? 'thirdCol fourthCol fifthCol' : 'fourthCol fifthCol';
  }

  clearIsHemodynamicallyRelevant(value: SeverityTypeEnum, blockID: string): string {
    return value === this.model.severityType ? '' : blockID;
  }

  calculate() {
    const A = this.model.diameterDiseaseFreePoststenoticSegment;
    const B = this.model.diameterStenosis;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisAccordingToNASCET = baseCalculation;
        this.validationHelperService.removeError(nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET));
      } else {
        this.model.degreeOfStenosisAccordingToNASCET = null;
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCET = null;
      this.validationHelperService.removeError(nameof<UpperArteriesFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCET));
    }
  }

  isHemodialysisShuntActive(): boolean {
    return [
      this.upperArteriesFindingTypeEnum.BrachialArtery,
      this.upperArteriesFindingTypeEnum.UlnarArtery,
      this.upperArteriesFindingTypeEnum.RadialArtery
    ].includes(this.model.findingType);
  }

  isOther2LogicFallowed(): boolean {
    return [
      this.upperArteriesFindingTypeEnum.DeepPalmarArch,
      this.upperArteriesFindingTypeEnum.SuperficialPalmarArch,
      this.upperArteriesFindingTypeEnum.CommonPalmarDigitalArteries,
      this.upperArteriesFindingTypeEnum.ProperPalmarDigitalArteries
    ].includes(this.model.findingType);
  }
}
