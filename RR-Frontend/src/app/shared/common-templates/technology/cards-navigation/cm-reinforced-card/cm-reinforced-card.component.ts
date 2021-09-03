import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-cm-reinforced-card',
  templateUrl: './cm-reinforced-card.component.html',
  providers: [MakeProvider(CmReinforcedCardComponent)]
})
export class CmReinforcedCardComponent extends NgModelAccessorBase<SimpleAnswerEnum> {
  @Input() isDisabled: boolean;
  @Input() validationObjects: string | string[];

  @Output() changeInSubcomponent = new EventEmitter<any>();

  cmReinforcedType: typeof SimpleAnswerEnum;

  constructor() {
    super();

    this.cmReinforcedType = SimpleAnswerEnum;
  }

  onSequenceTypeUpdate(): void {
    this.writeValue(this.ngValue);
    this.changeInSubcomponent.emit();
  }
}
