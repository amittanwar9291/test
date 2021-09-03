import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rr-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent {
  @Input() disabled: boolean;
  @Output() reset = new EventEmitter();

  constructor() {}

  onReset() {
    this.reset.emit();
  }
}
