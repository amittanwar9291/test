import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'rr-dynamic-base',
  template: ''
})
export class DynamicBaseComponent {
  constructor(protected ngEl: ElementRef) {}
  public get element(): any {
    return this.ngEl.nativeElement;
  }
  removeFromParent() {
    this.ngEl.nativeElement.remove();
  }
}
