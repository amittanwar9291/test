import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { DynamicBaseComponent } from './dynamic-base.component';

@Component({
  selector: 'rr-dynamic-container',
  template: `
    <div #container><ng-content></ng-content></div>
  `
})
export class DynamicContainerBaseComponent {
  private elements: DynamicBaseComponent[] = [];
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  constructor(private compFactoryResolver: ComponentFactoryResolver) {}

  public addComponent(ngItem: Type<DynamicBaseComponent>): DynamicBaseComponent {
    const factory = this.compFactoryResolver.resolveComponentFactory(ngItem);
    const ref = this.container.createComponent(factory);
    const newItem: DynamicBaseComponent = ref.instance;
    this.elements.push(newItem);

    return newItem;
  }
  resetContainer() {
    this.elements = [];
  }
}
