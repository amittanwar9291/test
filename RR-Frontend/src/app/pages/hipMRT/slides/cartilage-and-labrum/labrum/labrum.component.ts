import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

import { nameof } from 'ts-simple-nameof';

import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';
import { CartilageAndLabrumLocalizerUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-localizer-ui.model';

import { DegenerationTypeEnum, DifferentialDiagnosisEnum, FormTypeEnum } from '@enums/hipMRT/cartilage-and-labrum';

@Component({
  selector: 'rr-labrum',
  templateUrl: './labrum.component.html',
  styleUrls: ['./labrum.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class LabrumComponent {
  @Input() model: CartilageAndLabrumFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  formType = FormTypeEnum;
  degenerationType = DegenerationTypeEnum;
  differentialDiagnosis = DifferentialDiagnosisEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }

  clearCartilageLocalizer(): void {
    this.model.cartilageLocalizer = new CartilageAndLabrumLocalizerUiModel();
    this.validationHelperService.removeError(
      nameof<CartilageAndLabrumFindingUiModel>(m => m.cartilageLocalizer),
      this.model.validationId
    );
  }
}
