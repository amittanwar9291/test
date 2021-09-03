import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rr-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.css']
})
export class SliderInputComponent {
  @Input() step: number;
  @Input() max: number;
  @Input() min: number;
  @Input() set initValue(value: number) {
    this.ngValue = value;
  }

  ngValue = 0;
}
