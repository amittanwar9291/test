import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  ChronicLesionsTypeEnum,
  ClassificationAccordingToTASCIITypeEnum,
  TypeBDetailsTypeEnum,
  TypeCDetailsTypeEnum,
  TypeDDetailsTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import {
  FemoropoplitealExtentTypeEnum,
  FemoropoplitealLocalizationTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/chronic-femoropopliteal-lesions';

@Component({
  selector: 'rr-chronic-femoropopliteal',
  templateUrl: './chronic-femoropopliteal.component.html',
  styleUrls: ['./chronic-femoropopliteal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicFemoropoplitealComponent {
  @Input() model: PelvisLegArteriesFindingUiModel;

  sideTypeEnum = SideTypeEnum;
  chronicLesionsTypeEnum = ChronicLesionsTypeEnum;
  femoropoplitealLocalizationTypeEnum = FemoropoplitealLocalizationTypeEnum;
  femoropoplitealExtentTypeEnum = FemoropoplitealExtentTypeEnum;
  typeBDetailsTypeEnum = TypeBDetailsTypeEnum;
  typeCDetailsTypeEnum = TypeCDetailsTypeEnum;
  typeDDetailsTypeEnum = TypeDDetailsTypeEnum;
  classificationAccordingToTASCIITypeEnum = ClassificationAccordingToTASCIITypeEnum;

  constructor(private toastMessageService: ToastMessageService, private validationHelperService: ValidationHelperService) {}

  clearLengthOnFifthCol(value: TypeBDetailsTypeEnum, columnToClear: string): string {
    return this.model.typeBDetailsType !== value ? columnToClear : '';
  }

  clearLengthOnFifthColv2(value: TypeDDetailsTypeEnum, columnToClear: string): string {
    return this.model.typeDDetailsType !== value ? columnToClear : '';
  }

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
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCET = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }
}
