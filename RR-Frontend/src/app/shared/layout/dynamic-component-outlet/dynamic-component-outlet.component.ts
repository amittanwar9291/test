import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { DynamicComponentOutletDirective } from '@directives/dynamic-component-outlet.directive';
import { DynamicComponentOutletService } from '@services/shared/dynamic-component/dynamic-component-outlet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-dynamic-component-outlet',
  templateUrl: './dynamic-component-outlet.component.html',
  styleUrls: ['./dynamic-component-outlet.component.css']
})
export class DynamicComponentOutletComponent implements OnInit, OnDestroy {
  component: Type<any>;
  subscription: Subscription;
  @ViewChild(DynamicComponentOutletDirective, { static: true }) dynamicComponentHost: DynamicComponentOutletDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dynamicComponentService: DynamicComponentOutletService) {}

  ngOnInit() {
    this.getComponent();
  }

  getComponent() {
    this.subscription = this.dynamicComponentService.componentSource.subscribe(cmp => {
      if (cmp) {
        this.component = cmp;
        this.loadComponent();
      } else {
        this.clearComponent();
      }
    });
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const viewContainerRef = this.dynamicComponentHost.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  clearComponent() {
    this.dynamicComponentHost.viewContainerRef.clear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
