import { Component, Input } from '@angular/core';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { NgForm, ControlContainer } from '@angular/forms';
import { ClassificationPalmerTypeEnum } from '@enums/handMRT/capsule-and-ribbons/classification-palmer-type.enum';
import { TraumaticTypeEnum } from '@enums/handMRT/capsule-and-ribbons/traumatic-type.enum';
import { DegenerativeTypeEnum } from '@enums/handMRT/capsule-and-ribbons/degenerative-type.enum';

@Component({
  selector: 'rr-tfcc-lesion',
  templateUrl: './TFCC-lesion.component.html',
  styleUrls: ['./TFCC-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TFCCLesionComponent {
  @Input() model: CapsuleAndRibbonsFindingUiModel;
  classificationPalmerType: typeof ClassificationPalmerTypeEnum;
  traumaticType: typeof TraumaticTypeEnum;
  degenerativeType: typeof DegenerativeTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.classificationPalmerType = ClassificationPalmerTypeEnum;
    this.traumaticType = TraumaticTypeEnum;
    this.degenerativeType = DegenerativeTypeEnum;
  }
}
