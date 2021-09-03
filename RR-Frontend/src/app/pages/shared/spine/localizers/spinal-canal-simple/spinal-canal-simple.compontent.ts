import { Component, Input } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { SpinalCanalLocation } from '@models/shared/spine/localizers/spinal-canal-location.model';

@Component({
  selector: 'rr-spinal-canal-simple',
  templateUrl: './spinal-canal-simple.component.html',
  styleUrls: ['./spinal-canal-simple.component.scss'],
  providers: [MakeProvider(SpinalCanalSimpleComponent)]
})
export class SpinalCanalSimpleComponent extends LocalizerBase<SpinalCanalLocation> {
  textContent: string;
  @Input() noExtradural: boolean;

  constructor() {
    super(SpinalCanalLocation);
  }

  hoverElement(name: string): void {
    super.hoverElement(name);
    this.changeTextContent(name);
  }

  unHoverElement(): void {
    super.unhoverElement();
    if (!this.isElementSelected()) {
      this.changeTextContent('');
    }
  }

  getCaptionClass() {
    if (this.isHoveredElDifferentFromSelectedEl() && this.hoveredElement !== 'extradural') {
      return 'text--hovered';
    } else if (this.isElementSelected('extradural') || this.isElementHovered('extradural')) {
      return 'text--white';
    } else if (this.isElementSelected()) {
      return 'text--selected';
    }
  }

  private isHoveredElDifferentFromSelectedEl() {
    return this.hoveredElement !== 'None' && !this.ngValue[this.hoveredElement];
  }

  select(name: string): void {
    this.selectElement(name);
    this.changeTextContent(name);
    if (this.ngValue[name]) {
      Object.entries(this.ngValue).forEach(([key]) => (this.ngValue[key] = false));
      this.ngValue[name] = !this.ngValue[name];
    }
  }

  showTextContent(): boolean {
    const spinalCanalElements = ['extradural', 'epidural', 'extramedullary', 'intramedullary'];
    if (this.hoveredElement !== 'None') {
      this.changeTextContent(this.hoveredElement);
      return true;
    }
    spinalCanalElements.forEach(element => {
      if (this.isElementSelected(element)) {
        this.changeTextContent(element);
        return true;
      }
    });
    return false;
  }

  changeTextContent(name?: string): void {
    this.textContent = name ? `shared.spine.localizers.spinalCanalLocalizer.${name}.value` : '';
  }
}
