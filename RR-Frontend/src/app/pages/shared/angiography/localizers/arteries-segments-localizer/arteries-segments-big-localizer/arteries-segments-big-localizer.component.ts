import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { TranslateService } from '@ngx-translate/core';
import { compact } from 'lodash';
import { IArteriesSegmentsBigLocalizerMultiElement } from '@interfaces/arteries-segments-big-localizer-multi-element';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { ArteriesSegmentTypeEnum } from '@enums/shared/angiography/arteries-segment-type.enum';

@Component({
  selector: 'rr-arteries-segments-big-localizer',
  templateUrl: './arteries-segments-big-localizer.component.html',
  styleUrls: ['./arteries-segments-big-localizer.component.scss'],
  providers: [MakeProvider(ArteriesSegmentsBigLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ArteriesSegmentsBigLocalizerComponent extends LocalizerBase<ArteriesSegmentsLocalizerModel> {
  @Output() close = new EventEmitter();

  @Input() multipleChoiceDescriptionVer2: boolean;

  arteriesSegmentType = ArteriesSegmentTypeEnum;

  hoveredGroupedElements: string[] = [];

  multiElements: IArteriesSegmentsBigLocalizerMultiElement[] = [
    { name: 'allACARight', children: ['aCAa1Right', 'aCAa2Right'] },
    { name: 'allACALeft', children: ['aCAa1Left', 'aCAa2Left'] },
    { name: 'allMCARight', children: ['mCAm1Right', 'mCAm2Right', 'mCAm3Right'] },
    { name: 'allMCALeft', children: ['mCAm1Left', 'mCAm2Left', 'mCAm3Left'] },
    { name: 'allPCARight', children: ['pCAp1Right', 'pCAp2Right'] },
    { name: 'allPCALeft', children: ['pCAp1Left', 'pCAp2Left'] }
  ];

  constructor(public translate: TranslateService) {
    super(ArteriesSegmentsLocalizerModel);
  }

  closeLocalizer() {
    this.close.emit();
  }

  select(name: string) {
    if (this.singleChoiceMode && this.multiElements.find(m => m.name === name)) {
      return;
    }

    this.selectElement(name);
    this.markChildrenIfParentSelected(name);
    this.markParentIfAllChildrenSelected(name);
  }

  hoverGroupedElements(groupName: string): void {
    if (!this.singleChoiceMode) {
      const { children, name } = this.getMultiElementByParent(groupName);
      const wholeGroup = [];
      wholeGroup.push(name, ...children);
      wholeGroup.forEach(element => this.hoveredGroupedElements.push(element));
    }
  }

  unhoverGroupedElements(): void {
    this.hoveredGroupedElements = [];
  }

  isGroupedElementHovered(element: string): boolean {
    if (this.hoveredGroupedElements.length > 0) {
      return this.hoveredGroupedElements.includes(element);
    } else {
      return this.isElementHovered(element);
    }
  }

  private markChildrenIfParentSelected(parentName: string) {
    const parent: IArteriesSegmentsBigLocalizerMultiElement = this.getMultiElementByParent(parentName);
    if (parent) {
      parent.children.forEach(child => {
        if (this.ngValue[parent.name] && !this.ngValue[child]) {
          this.selectElement(child);
        }
        if (!this.ngValue[parent.name] && this.ngValue[child]) {
          this.selectElement(child);
        }
      });
    }
  }

  private markParentIfAllChildrenSelected(childName: string) {
    const parent: IArteriesSegmentsBigLocalizerMultiElement = this.getMultiElementByChild(childName);
    if (parent) {
      const children: string[] = parent.children;
      const allChildrenSelected: boolean = children.length === compact(children.map(ch => this.ngValue[ch])).length;
      if (allChildrenSelected) {
        this.selectElement(parent.name);
      } else if (this.ngValue[parent.name]) {
        this.selectElement(parent.name);
      }
    }
  }

  private getMultiElementByParent(parentName: string): IArteriesSegmentsBigLocalizerMultiElement {
    return this.multiElements.find(e => e.name === parentName);
  }

  private getMultiElementByChild(childName: string): IArteriesSegmentsBigLocalizerMultiElement {
    return this.multiElements.find(e => e.children.includes(childName));
  }
}
