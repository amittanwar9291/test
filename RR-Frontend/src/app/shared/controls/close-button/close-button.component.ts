import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rr-close-button',
  template: `
    <img alt="cross-image" class="close-button" src="assets/img/shared/window-close.svg" (click)="click()" />
  `,
  styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent {
  @Output() buttonPressed = new EventEmitter();

  click() {
    this.buttonPressed.emit();
  }
}
