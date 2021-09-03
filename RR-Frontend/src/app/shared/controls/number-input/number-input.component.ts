import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { ManualUpdateModel } from '@directives/input-min-max-validation.directive';

export interface INumberInputConfig {
  showLabel?: boolean;
  borderColor?: string;
  placeholder?: number | string;
  min?: number;
  max?: number;
  step?: number;
  inputWidth?: number;
  labelWidth?: number;
  labelBeforeInput?: boolean;
  readonly?: boolean;
  readonlyColor?: string;
  hasInfoIcon?: boolean;
  isPadForIcon?: boolean;
}

@Component({
  selector: 'rr-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [MakeProvider(NumberInputComponent)]
})
export class NumberInputComponent extends NgModelAccessorBase<number> implements OnInit {
  configVal: INumberInputConfig = {
    showLabel: true,
    borderColor: 'brown',
    placeholder: '--',
    min: 0,
    max: 9999,
    step: 1,
    inputWidth: 94,
    labelWidth: 120,
    labelBeforeInput: false,
    readonly: false,
    readonlyColor: 'blue',
    hasInfoIcon: false,
    isPadForIcon: false
  };

  @Input() set config(config: INumberInputConfig) {
    if (config) {
      this.configVal = {
        ...this.configVal,
        ...config
      };
    }
  }
  @Input() labelRrId: string;
  @Input() inputRrId: string;
  @Input() infoIconRrId: string;
  @Input() label = '';
  @Input() labelStyleClass: string;

  @Output() announceModelChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.nullableValue = true;
  }

  onModelUpdate(event: ManualUpdateModel) {
    this.ngValue = event.value;
    this.writeValue(this.ngValue);

    this.announceModelChange.emit(this.ngValue);
  }

  getLabelFirstLine(): string {
    return this.label.split('\n')[0];
  }

  getLabelFromSecondLine(): string {
    const labelElements = this.label.split('\n');
    labelElements.shift();
    return `${labelElements.join('\n')}`;
  }
}
