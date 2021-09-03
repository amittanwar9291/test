import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LiverPathologyLocationsEnum } from '@enums/abdomenMRT/liver/';
import { LiverPathologyUiModel } from '@models/abdomenMRT/ui/shared/liver-pathology-ui-model';
import { compact } from 'lodash';
import { ILiverPathologyBigLocalizerMultiElement } from '@interfaces/liver-pathology-big-localizer-multi-elements';

@Component({
  selector: 'rr-liver-pathology-big-localizer',
  templateUrl: './liver-pathology-big-localizer.component.html',
  styleUrls: ['./liver-pathology-big-localizer.component.scss'],
  providers: [MakeProvider(LiverPathologyBigLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LiverPathologyBigLocalizerComponent extends LocalizerBase<LiverPathologyUiModel> {
  @Output() close = new EventEmitter();

  liverPathologyLocations = LiverPathologyLocationsEnum;

  hoveredGroupedElements: string[] = [];

  multiElements: ILiverPathologyBigLocalizerMultiElement[] = [
    { name: 'segmentalInRightLiverLobe', children: ['segment5', 'segment6', 'segment7', 'segment8'] },
    { name: 'segmentalInLeftLiverLobe', children: ['segment1', 'segment2', 'segment3', 'segment4a', 'segment4b'] },
    {
      name: 'extrahepatic',
      children: ['commonHepaticDuct', 'cysticDuct', 'ductusCholedochus', 'ductusCholedochusCloseToLiver', 'ductusCholedochusCloseToPapilla']
    },
    {
      name: 'intrahepatic',
      children: [
        'segmentalInLeftLiverLobe',
        'segmentalInRightLiverLobe',
        'rightHepaticDuct',
        'leftHepaticDuct',
        'segment5',
        'segment6',
        'segment7',
        'segment8',
        'segment1',
        'segment2',
        'segment3',
        'segment4a',
        'segment4b'
      ]
    }
  ];

  constructor() {
    super(LiverPathologyUiModel);
  }

  closeLargeLocalizer() {
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
    const parent: ILiverPathologyBigLocalizerMultiElement = this.getMultiElementByParent(parentName);
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
    const parent: ILiverPathologyBigLocalizerMultiElement = this.getMultiElementByChild(childName);
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

  private getMultiElementByParent(parentName: string): ILiverPathologyBigLocalizerMultiElement {
    return this.multiElements.find(e => e.name === parentName);
  }

  private getMultiElementByChild(childName: string): ILiverPathologyBigLocalizerMultiElement {
    return this.multiElements.find(e => e.children.includes(childName));
  }

  segmentsLeftLiverLobe(name) {
    if (!this.isElementSelected(name) && !this.isElementSelected('segmentalInLeftLiverLobe') && this.isElementSelected('intrahepatic')) {
      this.selectElement('intrahepatic');
    } else if (
      this.isElementSelected(name) &&
      !this.isElementSelected('intrahepatic') &&
      this.isElementSelected('segmentalInRightLiverLobe') &&
      this.isElementSelected('segmentalInLeftLiverLobe') &&
      this.isElementSelected('rightHepaticDuct') &&
      this.isElementSelected('leftHepaticDuct')
    ) {
      this.selectElement('intrahepatic');
    }
  }

  segmentsRightLiverLobe(name) {
    if (!this.isElementSelected(name) && !this.isElementSelected('segmentalInRightLiverLobe') && this.isElementSelected('intrahepatic')) {
      this.selectElement('intrahepatic');
    } else if (
      this.isElementSelected(name) &&
      !this.isElementSelected('intrahepatic') &&
      this.isElementSelected('segmentalInRightLiverLobe') &&
      this.isElementSelected('segmentalInLeftLiverLobe') &&
      this.isElementSelected('rightHepaticDuct') &&
      this.isElementSelected('leftHepaticDuct')
    ) {
      this.selectElement('intrahepatic');
    }
  }
}
