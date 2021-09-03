import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { FootBigTendonsModel } from '@models/feetMRT/ui/localizers/foot-big-tendons.model';
import { IFootBigTendonsInfoIcons } from '@models/feetMRT/ui/localizers/foot-big-tendons-info-icons.interface';

@Component({
  selector: 'rr-foot-big-tendons-complex',
  templateUrl: './foot-big-tendons-complex.component.html',
  styleUrls: ['./foot-big-tendons-complex.component.scss'],
  providers: [MakeProvider(FootBigTendonsComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FootBigTendonsComplexComponent extends LocalizerBase<FootBigTendonsModel> {
  @Input() side: 'right' | 'left';
  @Input() header: string;
  @Input() isExtended: boolean;
  @Input() singleChoiceMode: boolean;

  @Input() infoIcons: IFootBigTendonsInfoIcons;

  @Output() closed = new EventEmitter();

  constructor() {
    super(FootBigTendonsModel);
    this.side = this.side ? this.side : 'left';
    this.header = this.header ? this.header : 'footBigLocalizer.title';
  }

  close() {
    this.closed.emit();
  }

  getTextClass(elementName: string): string {
    if (this.ngValue[elementName]) {
      return 'text-selected';
    } else if (this.isElementHovered(elementName)) {
      return 'text-hovered';
    } else {
      return '';
    }
  }

  getElementClass(name: string): string {
    if (this.ngValue[name]) {
      return 'selected';
    } else if (this.isElementHovered(name)) {
      return 'hovered';
    } else {
      return '';
    }
  }

  isHoveredOrSelected(elementName: string): boolean {
    return this.isElementHovered(elementName) || this.isElementSelected(elementName);
  }
}
