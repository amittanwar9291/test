import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { compact } from 'lodash';
import { CortexLocalizerModel } from '@models/headMRT/ui/cortex-localizer.model';
import { CortexLocationsEnum } from '@enums/shared/cortex-locations.enum';
import { MultiElementLocalizer } from '@interfaces/multi-element-localizer.interface';

@Component({
  selector: 'rr-cortex-localizer-complex',
  templateUrl: './cortex-localizer-complex.component.html',
  styleUrls: ['./cortex-localizer-complex.component.scss'],
  providers: [MakeProvider(CortexLocalizerComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CortexLocalizerComplexComponent extends LocalizerBase<CortexLocalizerModel> {
  @Output() close = new EventEmitter();

  @Input() localizerTitle = 'head.localizers.cortexLocalizer.title.ischemicRegion';

  cortexLocationsEnum = CortexLocationsEnum;

  hoveredGroupedElements: CortexLocationsEnum[] = [];

  multiElements: MultiElementLocalizer[] = [
    {
      name: CortexLocationsEnum.Cerebellum,
      children: [
        CortexLocationsEnum.CerebellarHemisphereRight,
        CortexLocationsEnum.CerebellarTonsilRight,
        CortexLocationsEnum.CerebellarVermis,
        CortexLocationsEnum.CerebellarHemisphereLeft,
        CortexLocationsEnum.CerebellarTonsilLeft
      ]
    },
    { name: CortexLocationsEnum.ParietalLobeRight, children: [CortexLocationsEnum.PostcentralLobeRight] },
    {
      name: CortexLocationsEnum.FrontalLobeRight,
      children: [
        CortexLocationsEnum.SuperiorFrontalGyrusRight,
        CortexLocationsEnum.MiddleFrontalGyrusRight,
        CortexLocationsEnum.PrecentralGyrusRight
      ]
    },
    { name: CortexLocationsEnum.ParietalLobeLeft, children: [CortexLocationsEnum.PostcentralLobeLeft] },
    {
      name: CortexLocationsEnum.FrontalLobeLeft,
      children: [
        CortexLocationsEnum.SuperiorFrontalGyrusLeft,
        CortexLocationsEnum.MiddleFrontalGyrusLeft,
        CortexLocationsEnum.PrecentralGyrusLeft
      ]
    }
  ];

  constructor() {
    super(CortexLocalizerModel);
  }

  closeLocalizer() {
    this.close.emit();
  }

  private getElementChildren(elementName: CortexLocationsEnum): CortexLocationsEnum[] {
    return this.multiElements.find((item: MultiElementLocalizer) => item.name === elementName)?.children;
  }

  private getElementParent(elementName: CortexLocationsEnum): CortexLocationsEnum {
    return this.multiElements.find((item: MultiElementLocalizer) => item.children.includes(elementName))?.name;
  }

  onElementClicked(selectedElement: CortexLocationsEnum): void {
    this.selectElement(selectedElement);
    const elementChildren = this.getElementChildren(selectedElement);
    const elementParent = this.getElementParent(selectedElement);

    // on parent selection
    if (elementChildren) {
      elementChildren.forEach(item => (this.ngValue[item] = this.ngValue[selectedElement]));
    }

    // on child selection
    if (elementParent) {
      const allChildren = this.getElementChildren(elementParent);
      const areAllChildrenSelected = compact(allChildren.map(item => this.ngValue[item])).length === allChildren.length;
      if (!areAllChildrenSelected) {
        this.ngValue[elementParent] = false;
      }
    }
  }

  onElementMouseOver(selectedElement: CortexLocationsEnum): void {
    this.hoveredGroupedElements.push(selectedElement);
    this.hoveredGroupedElements = this.hoveredGroupedElements.concat(this.getElementChildren(selectedElement));
  }

  onElementMouseOut(): void {
    this.hoveredGroupedElements = [];
  }

  isElementHighlighted(selectedElement: CortexLocationsEnum): boolean {
    return this.hoveredGroupedElements.includes(selectedElement);
  }
}
