import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ArteriovenousMalformationTypeEnum,
  CharacterizationTypeEnum,
  DetailsVascularMalformationTypeEnum,
  FormTypeEnum,
  HemodialysisShuntTypeEnum,
  PathologyTypeEnum,
  SeverityTypeEnum,
  ShapeTypeEnum,
  UpperArteriesFindingTypeEnum
} from '@enums/angiographyMRT/upper-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { UpperArteriesFindingUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

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

  constructor(private validationHelperService: ValidationHelperService, private toastMessageService: ToastMessageService) {}

  calculate() {
    const A = this.model.diameterDiseaseFreePoststenoticSegment;
    const B = this.model.diameterStenosis;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisAccordingToNASCET = baseCalculation;
        this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
      } else {
        this.model.degreeOfStenosisAccordingToNASCET = null;
        this.toastMessageService.showErrorToast('errors.angiographyMRT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCET = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }

  clearIsHemodynamicallyRelevant(value: SeverityTypeEnum, blockID: string): string {
    return value === this.model.severityType ? '' : blockID;
  }

  isDissectionActive(): boolean {
    return ![
      this.upperArteriesFindingTypeEnum.DeepPalmarArch,
      this.upperArteriesFindingTypeEnum.SuperficialPalmarArch,
      this.upperArteriesFindingTypeEnum.CommonPalmarDigitalArteries,
      this.upperArteriesFindingTypeEnum.ProperPalmarDigitalArteries
    ].includes(this.model.findingType);
  }

  isHemodialysisShuntActive(): boolean {
    return [
      this.upperArteriesFindingTypeEnum.BrachialArtery,
      this.upperArteriesFindingTypeEnum.UlnarArtery,
      this.upperArteriesFindingTypeEnum.RadialArtery
    ].includes(this.model.findingType);
  }

  isSuspiciousForDisabled(): boolean {
    return !this.model.isInfection && !this.model.isStenosis && !this.model.isOcclusion && !this.model.isAneurysm;
  }

  clearSuspiciousFor() {
    if (this.isSuspiciousForDisabled()) {
      this.model.isSuspiciousFor = false;
    }
  }

  clearPathologyDetails(value: PathologyTypeEnum, isBrachiocephalicTrunk = false): string {
    return value === this.model.pathologyType ? '' : isBrachiocephalicTrunk ? 'thirdCol fourthCol fifthCol' : 'fourthCol fifthCol';
  }

  isPathologyOnThirdCol(): boolean {
    return (
      this.model.findingType !== this.upperArteriesFindingTypeEnum.BrachiocephalicTrunk &&
      this.model.pathologyType !== PathologyTypeEnum.None
    );
  }

  is2to6Finding(): boolean {
    return [
      this.upperArteriesFindingTypeEnum.SubclavianArtery,
      this.upperArteriesFindingTypeEnum.AxillarArtery,
      this.upperArteriesFindingTypeEnum.BrachialArtery,
      this.upperArteriesFindingTypeEnum.UlnarArtery,
      this.upperArteriesFindingTypeEnum.RadialArtery
    ].includes(this.model.findingType);
  }
}
