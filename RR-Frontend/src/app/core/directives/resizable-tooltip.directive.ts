import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef
} from '@angular/core';
import { ResizableTooltipComponent } from '@controls/resizable-tooltip/resizable-tooltip.component';
import { interval, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Directive({
  selector: '[rrResizableTooltip]'
})
export class ResizableTooltipDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('rrResizableTooltip') toolTipText: string;
  @Input() position: string;

  @Input() showDelay: number;
  @Input() hideDelay: number;

  @Input() set delay(delay: number) {
    if (!this.showDelay) {
      this.showDelay = delay;
    }

    if (!this.hideDelay) {
      this.hideDelay = delay;
    }
  }

  toolTipComponent: ComponentRef<ResizableTooltipComponent>;

  // distance between tooltip and element
  marginPx = 10;

  constructor(
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetector: ChangeDetectorRef
  ) {
    this.initializeInputs();
  }

  mouseEnterSubscription: Subscription;

  @HostListener('mouseenter') onMouseEnter() {
    this.mouseEnterSubscription = interval(this.showDelay)
      .pipe(take(1))
      .subscribe(() => {
        this.show();
      });
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.mouseEnterSubscription.unsubscribe();

    interval(this.hideDelay)
      .pipe(
        take(1),
        filter(() => {
          return !!this.toolTipComponent;
        })
      )
      .subscribe(() => {
        this.hide();
      });
  }

  private initializeInputs() {
    if (!this.position) {
      this.position = 'right';
    }
  }

  show() {
    if (!this.toolTipComponent) {
      this.createHtml();
    }
    this.setPosition();
  }

  hide() {
    this.viewContainer.clear();
    this.toolTipComponent = null;
  }

  createHtml() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ResizableTooltipComponent);
    this.toolTipComponent = this.viewContainer.createComponent(componentFactory);

    this.toolTipComponent.instance.tooltipText = this.toolTipText;

    this.changeDetector.detectChanges();
  }

  setPosition() {
    const hostInfo = this.elementRef.nativeElement.getBoundingClientRect();
    const toolTipInfo = this.toolTipComponent.location.nativeElement.children[0].getBoundingClientRect();

    // distances to left and upper window border
    let pxFromTop = 0;
    let pxFromLeft = 0;

    switch (this.position) {
      case 'top':
        pxFromTop = hostInfo.top - toolTipInfo.height - this.marginPx;
        pxFromLeft = hostInfo.left - (toolTipInfo.width - hostInfo.width) / 2;
        break;
      case 'bottom':
        pxFromTop = hostInfo.top + hostInfo.height + this.marginPx;
        pxFromLeft = hostInfo.left - (toolTipInfo.width - hostInfo.width) / 2;
        break;
      case 'left':
        pxFromTop = hostInfo.top + (hostInfo.height - toolTipInfo.height) / 2;
        pxFromLeft = hostInfo.left - toolTipInfo.width - this.marginPx;
        break;
      case 'right':
        pxFromTop = hostInfo.top + (hostInfo.height - toolTipInfo.height) / 2;
        pxFromLeft = hostInfo.right + this.marginPx;
        break;
    }

    this.toolTipComponent.instance.positionTop = pxFromTop;
    this.toolTipComponent.instance.positionLeft = pxFromLeft;
  }
}
