import { Component, Input } from '@angular/core';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { VitalityTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/vitality-type.enum';
import { ScaphoidSnacTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-snac-type.enum';
import { ScaphoidClassificationTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-classification-type.enum';
import { ScaphoidCystTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-cyst-type.enum';
import { ScaphoidOsteoarthritisTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-osteoarthritis-type.enum';
import { ScaphoidSclerosisTypeEnum } from '@enums/handMRT/bones/scaphoid-pseudarthrosis/scaphoid-sclerosis-type.enum';

@Component({
  selector: 'rr-scaphoid-pseudarthrosis',
  templateUrl: './scaphoid-pseudarthrosis.component.html',
  styleUrls: ['./scaphoid-pseudarthrosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ScaphoidPseudarthrosisComponent {
  @Input() model: BonesFindingUiModel;

  vitalityType: typeof VitalityTypeEnum;
  snacType: typeof ScaphoidSnacTypeEnum;
  classificationType: typeof ScaphoidClassificationTypeEnum;
  cystType: typeof ScaphoidCystTypeEnum;
  osteoarthritisType: typeof ScaphoidOsteoarthritisTypeEnum;
  sclerosisType: typeof ScaphoidSclerosisTypeEnum;

  constructor() {
    this.vitalityType = VitalityTypeEnum;
    this.classificationType = ScaphoidClassificationTypeEnum;
    this.snacType = ScaphoidSnacTypeEnum;
    this.cystType = ScaphoidCystTypeEnum;
    this.osteoarthritisType = ScaphoidOsteoarthritisTypeEnum;
    this.sclerosisType = ScaphoidSclerosisTypeEnum;
  }
}
