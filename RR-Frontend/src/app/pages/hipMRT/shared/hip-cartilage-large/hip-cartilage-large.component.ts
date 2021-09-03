import { AfterViewChecked, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { CartilageAndLabrumLocalizerUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-localizer-ui.model';

@Component({
  selector: 'rr-hip-cartilage-large',
  templateUrl: './hip-cartilage-large.component.html',
  styleUrls: ['./hip-cartilage-large.component.scss'],
  providers: [MakeProvider(HipCartilageLargeComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HipCartilageLargeComponent extends LocalizerBase<CartilageAndLabrumLocalizerUiModel> implements AfterViewChecked {
  @Output() close = new EventEmitter();
  @ViewChild('infoIconForeignObject') infoIconForeignObject: ElementRef;

  constructor(private renderer: Renderer2) {
    super(CartilageAndLabrumLocalizerUiModel);
  }

  ngAfterViewChecked(): void {
    const elemWithInfoIcon = 'anterosuperior';
    const xValue = this.isElementSelected(elemWithInfoIcon) || this.isElementHovered(elemWithInfoIcon) ? '362px' : '342px';
    this.renderer.setAttribute(this.infoIconForeignObject.nativeElement, 'x', xValue);
  }

  closeLargeLocalizer(): void {
    this.close.emit();
  }
}
