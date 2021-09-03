import { Component, OnInit, Input } from '@angular/core';

import { NgModelAccessorBase, MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-slider-number-input',
  templateUrl: './slider-number-input.component.html',
  styleUrls: ['./slider-number-input.component.scss'],
  providers: [MakeProvider(SliderNumberInputComponent)]
})
export class SliderNumberInputComponent extends NgModelAccessorBase<number> implements OnInit {
  public tempVal: number;

  @Input() label: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() isNullable = false;
  @Input() customSliderLabels: string[];
  @Input() isNewLabels = false;
  @Input() isTechnologyLabels = false;

  get maxNumberInSlider(): number {
    return this.nullableValue ? this.max + this.step : this.max;
  }

  get fakeMaxArrayInSlider(): number[] {
    return new Array(Math.round((this.max - this.min + this.step) / this.step));
  }

  ngOnInit(): void {
    this.nullableValue = this.isNullable;
    this.assignWriteCallback((val: number) => {
      this.tempVal = this.nullableValue ? this.convertNullableValueForInput(val) : val;
    });
  }

  convertNullableValueForInput(val: number): number {
    return val === null ? 0 : val + this.step;
  }

  changeState(): void {
    this.writeValue(this.nullableValue ? (this.tempVal === this.min ? null : this.tempVal - this.step) : this.tempVal);
  }

  select(val: number): void {
    this.ngValue = val;
    this.writeValue(this.ngValue);
  }
}
