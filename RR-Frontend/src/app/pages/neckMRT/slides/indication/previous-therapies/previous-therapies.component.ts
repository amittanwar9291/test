import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PreviousTherapyUiModel } from '@models/neckMRT/ui/indication/previous-therapy-ui.model';
import { PreviousTherapyTypeEnum, ThryoidectomyTypeEnum, SideTypeEnum, NeckDissectionTypeEnum } from '@enums/neckMRT/indication';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-previous-therapies',
  templateUrl: './previous-therapies.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class PreviousTherapiesComponent {
  @Input() model: PreviousTherapyUiModel;
  @Input() header: string;

  previousTherapyType = PreviousTherapyTypeEnum;
  thryoidectomyType = ThryoidectomyTypeEnum;
  sideType = SideTypeEnum;
  neckDissectionType = NeckDissectionTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  get isTonsillectomyOrLaryngectomyOrLaryngostomaOrTracheostomyTube(): boolean {
    return [
      PreviousTherapyTypeEnum.Tonsillectomy,
      PreviousTherapyTypeEnum.Laryngectomy,
      PreviousTherapyTypeEnum.Laryngostoma,
      PreviousTherapyTypeEnum.TracheostomyTube
    ].includes(this.model.previousTherapyType);
  }

  removeSideTypeValidationError(): void {
    this.validationHelperService.removeError(
      nameof<PreviousTherapyUiModel>(m => m.sideType),
      this.model.validationId
    );
  }
}
