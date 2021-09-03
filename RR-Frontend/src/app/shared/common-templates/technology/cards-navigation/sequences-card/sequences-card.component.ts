import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { SequencesTypeEnum } from '@enums/shared/technology/sequences-type.enum';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';

@Component({
  selector: 'rr-sequences-card',
  templateUrl: './sequences-card.component.html',
  providers: [MakeProvider(SequencesCardComponent)]
})
export class SequencesCardComponent extends NgModelAccessorBase<SequencesTypeEnum> {
  @Input() isDisabled: boolean;
  @Input() isMandatory = true;
  @Input() translationModule = 'shared-templates';
  @Input() mode: ModuleTypesEnum;

  @Output() changeInSubcomponent = new EventEmitter<SequencesTypeEnum>();

  sequencesType: typeof SequencesTypeEnum;

  get titleTranslationKey(): string {
    switch (this.mode) {
      case ModuleTypesEnum.MRI:
        return '.technology.sequences.value';
      case ModuleTypesEnum.CT:
        return '.technology.settings.value';
    }
  }

  get centerspecificTranslationKey(): string {
    switch (this.mode) {
      case ModuleTypesEnum.MRI:
        return '.technology.centerSpStandardMRI.value';
      case ModuleTypesEnum.CT:
        return '.technology.centerSpStandardCT.value';
    }
  }

  get afterTitle(): string {
    return this.isMandatory ? '*' : '';
  }

  constructor() {
    super();

    this.sequencesType = SequencesTypeEnum;
  }

  onSequenceTypeUpdate(sequenceType: SequencesTypeEnum): void {
    this.changeInSubcomponent.emit(sequenceType);

    /**
     * This timeout is necessary because the ngValue must be updated AFTER the above event emits so that the 'clearSequences()' method
     * in a TechnologyComponent that handles this event could compare the emitted value to the previous model value.
     * Without setTimeout the emitted value and current model value would always be identical in the 'clearSequences()' method.
     */
    setTimeout(() => {
      this.writeValue(this.ngValue);
    });
  }

  get padlockImageSrc(): string {
    const fileName = this.ngValue === SequencesTypeEnum.Individual ? 'rr-padlock-opened.svg' : 'rr-padlock-locked.svg';
    return `assets/img/technology/${fileName}`;
  }
}
