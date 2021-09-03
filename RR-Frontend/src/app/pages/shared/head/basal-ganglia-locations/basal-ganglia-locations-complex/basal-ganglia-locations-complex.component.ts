import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { IBasalGangliaLocationsComplexMultiElement } from '@interfaces/basal-ganglia-locations-complex-multi-element';
import { compact } from 'lodash';
import { BasalGangliaTypeEnum } from '@enums/shared/basal-ganglia-type.enum';
import { BasalGangliaLocationsModel } from '@models/shared/head/basal-ganglia-locations.model';

@Component({
  selector: 'rr-basal-ganglia-locations-complex',
  templateUrl: './basal-ganglia-locations-complex.component.html',
  styleUrls: ['./basal-ganglia-locations-complex.component.scss'],
  providers: [MakeProvider(BasalGangliaLocationsComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BasalGangliaLocationsComplexComponent extends LocalizerBase<BasalGangliaLocationsModel> {
  @Output() close = new EventEmitter();

  basalGangliaType = BasalGangliaTypeEnum;

  hoveredGroupedElements: string[] = [];

  multiElements: IBasalGangliaLocationsComplexMultiElement[] = [
    { name: 'caudateNucleusRight', children: ['headCaudateNucleusRight', 'bodyCaudateNucleusRight', 'tailCcaudateNucleusRight'] },
    { name: 'caudateNucleusLeft', children: ['headCaudateNucleusLeft', 'bodyCaudateNucleusLeft', 'tailCcaudateNucleusLeft'] },
    { name: 'globusPallidusRight', children: ['globusPallidusInternalRight', 'globusPallidusExternalRight'] },
    { name: 'globusPallidusLeft', children: ['globusPallidusInternalLeft', 'globusPallidusExternalLeft'] },
    {
      name: 'internalCapsuleRight',
      children: ['anteriorLimbInternalCapsuleRight', 'genuInternalCapsuleRight', 'posteriorLimbInternalCapsuleRight']
    },
    {
      name: 'internalCapsuleLeft',
      children: ['anteriorLimbInternalCapsuleLeft', 'genuInternalCapsuleLeft', 'posteriorLimbInternalCapsuleLeft']
    }
  ];

  constructor() {
    super(BasalGangliaLocationsModel);
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
    const parent: IBasalGangliaLocationsComplexMultiElement = this.getMultiElementByParent(parentName);
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
    const parent: IBasalGangliaLocationsComplexMultiElement = this.getMultiElementByChild(childName);
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

  private getMultiElementByParent(parentName: string): IBasalGangliaLocationsComplexMultiElement {
    return this.multiElements.find(e => e.name === parentName);
  }

  private getMultiElementByChild(childName: string): IBasalGangliaLocationsComplexMultiElement {
    return this.multiElements.find(e => e.children.includes(childName));
  }
}
