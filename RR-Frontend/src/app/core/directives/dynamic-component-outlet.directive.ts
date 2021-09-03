import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rrDynamicComponent]'
})
export class DynamicComponentOutletDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
