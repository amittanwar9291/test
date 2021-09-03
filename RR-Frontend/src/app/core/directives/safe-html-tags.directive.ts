import { Directive, ElementRef, Renderer2, Input, OnDestroy, AfterViewInit } from '@angular/core';

/**
 * Directive for using html tags in label of element.
 * Directive is inserting label value of targeted element to innerHTML part of this element.
 * Directive can be used with p-radioButton and p-checkbox
 * Usage:
 * @example
 * <p-checkbox
 *  rr-id="uni_x_030517"
 *  label="{{
 *    'shared-templates.technology.o2Administration.value' | translate
 *  }}"
 *  binary="true"
 *  name="isO2Administration"
 *  [(ngModel)]="model.isO2Administration"
 *  rrSafeHtmlTags
 * >
 * </p-checkbox>
 * *.json file
 * "o2Administration": {
 *  "rr-id": ["uni_x_030517"],
 *  "value": "O<sub>2</sub>-Gabe"
 * }
 */

@Directive({
  selector: '[rrSafeHtmlTags]'
})
export class SafeHtmlTagsDirective implements AfterViewInit {
  customLabel: string;

  @Input() set label(val: string) {
    this.customLabel = val;

    setTimeout(() => {
      this.applyLabelToHTMLElement();
    });
  }

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.applyLabelToHTMLElement();
  }

  applyLabelToHTMLElement() {
    const item = this.getElementParentNode();
    this.insertTextToHTML(item, this.customLabel);
  }

  private insertTextToHTML(item: Element, text: string) {
    let child: ChildNode = null;
    const isNotText = item.lastChild.nodeType !== Node.TEXT_NODE;
    // taking last child for saving reference because of setTimeout function in infoicon directive
    if (isNotText) {
      child = item.removeChild(item.lastChild);
    }

    item.innerHTML = text;

    if (isNotText) {
      this.renderer2.appendChild(item, child);
    }
    return item;
  }

  /**
   * getting parent node (label for p-radiobutton, p-checkbox and rr-number-input)
   */
  private getElementParentNode(): HTMLElement {
    if (this.isRadioOrCheckbox()) {
      return this.elementRef.nativeElement.lastElementChild;
    } else if (this.isRadioRrNumberInput()) {
      return this.elementRef.nativeElement.lastElementChild.lastElementChild;
    } else {
      return this.elementRef.nativeElement;
    }
  }

  private isRadioOrCheckbox(): boolean {
    return this.elementRef.nativeElement.localName === 'p-radiobutton' || this.elementRef.nativeElement.localName === 'p-checkbox';
  }

  private isRadioRrNumberInput(): boolean {
    return this.elementRef.nativeElement.localName === 'rr-number-input';
  }
}
