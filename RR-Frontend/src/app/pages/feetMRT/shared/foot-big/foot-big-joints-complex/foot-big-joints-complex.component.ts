import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { mapKeys } from 'lodash';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { FootBigModel } from '@models/feetMRT/ui/localizers/foot-big.model';

@Component({
  selector: 'rr-foot-big-joints-complex',
  templateUrl: './foot-big-joints-complex.component.html',
  styleUrls: ['./foot-big-joints-complex.component.scss'],
  providers: [MakeProvider(FootBigJointsComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FootBigJointsComplexComponent extends LocalizerBase<FootBigModel> implements OnInit {
  @Input() side: 'right' | 'left';
  @Input() selectionMode: 'single' | 'multi';
  @Input() header: string;

  @Output() close = new EventEmitter();
  @Output() selectedElement = new EventEmitter();

  constructor() {
    super(FootBigModel);
    this.side = this.side ? this.side : 'left';
    this.selectionMode = this.selectionMode ? this.selectionMode : 'multi';
  }

  ngOnInit() {
    this.header = this.header ? this.header : 'footBigLocalizer.title';
  }

  closeLargeLocalizer() {
    this.close.emit();
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

  selectNewElement(element: string): void {
    if (this.selectionMode === 'single') {
      let selected = '';
      mapKeys(this.ngValue, (value, key) => {
        if (value) {
          selected = key;
        }
      });
      if (selected) {
        if (selected === element) {
          this.selectElement(element);
        } else {
          this.selectElement(selected);
          this.selectElement(element);
        }
      } else {
        this.selectElement(element);
      }
    } else {
      this.selectElement(element);
    }
    this.selectedElement.emit();
  }
}
