import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

/**
 * The main goal behind creating this directive was to replace the currently used [class.disabled] class binding
 * The directive takes one boolean parameter by which it decides whether the element and it's descendant children should be disabled or not
 * (disabling means here giving the host element opacity and the 'disabled' attribute to any descendant <input> elements).
 *
 * The main tasks the directive does:
 *
 * 1) It decides whether it should add the 'disabled' class to the host element judging by the condition parameter and by checking
 * if any of it's parents already has the 'disabled' class applied or not. Even if the condition evaluates to true and at the same time
 * any of the host element's parents already has the opacity the directive will not apply the 'disabled' class to the host element.
 *
 * 2) It applies a 'disabled' attribute to all descendant <input> elements if the condition parameter evaluates to true.
 *
 * @example
 * <div class="o-radio-list" rrDisable="!model.isChecked">
 *   <p-radioButton
 *    rr-id="kne_m_11111"
 *    name="someModel"
 *    value="someValue"
 *    [(ngModel)]="model.someModel"
 *   </p-radioButton>
 * </div>
 */

@Directive({
  selector: '[rrDisable]'
})
export class DisableDirective implements AfterViewInit, OnDestroy {
  @Input() set rrDisable(val: boolean) {
    this.condition = val;
    this.checkOpacity();
    this.findChildrenToBeDisabled(this.elementRef.nativeElement);
  }

  @Input() customMaxTraversesNumber: number;

  condition: boolean;
  private observer: MutationObserver;
  readonly MAX_TRAVERSES = 10;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.registerParentsToObserve();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private registerParentsToObserve() {
    this.observer = new MutationObserver(() => {
      this.checkOpacity();
      this.findChildrenToBeDisabled(this.elementRef.nativeElement);
    });

    /**
     * Registers all parent elements upwards the DOM tree to observe for the 'class' attribute value changes
     * (in this case the 'disabled' class)
     */
    let parent = this.elementRef.nativeElement.parentNode;

    let max = this.MAX_TRAVERSES;
    if (this.customMaxTraversesNumber) {
      max = this.customMaxTraversesNumber;
    }

    for (let i = 0; i < max; i++) {
      if (!parent || parent.classList.contains('c-main')) {
        break;
      } else {
        this.observer.observe(parent, {
          attributes: true,
          attributeFilter: ['class']
        });

        // Assigns a parent of the current loop iteration's element to the 'parent' variable in order to go upwards the DOM tree
        parent = parent.parentNode;
      }
    }
  }

  private checkOpacity() {
    if (this.condition && !this.isAnyParentElementAlreadyDisabled()) {
      this.setOpacity();
    } else {
      this.removeOpacity();
    }
  }

  private findChildrenToBeDisabled(element: Element) {
    const children = element.children;

    for (let i = 0; i < children.length; i++) {
      const currentElement = children.item(i);
      const nodeName = currentElement.tagName.toLowerCase();

      if (nodeName !== 'input') {
        this.findChildrenToBeDisabled(currentElement);
      } else {
        this.condition ? this.setDisabledAttribute(currentElement) : this.removeDisabledAttribute(currentElement);
      }
    }
  }

  private isAnyParentElementAlreadyDisabled() {
    let isAnyParentDisabled = false;

    let parent = this.elementRef.nativeElement.parentNode;
    while (parent && !parent.classList.contains('c-main')) {
      if (parent.classList.contains('disabled')) {
        isAnyParentDisabled = true;
        break;
      } else {
        isAnyParentDisabled = false;

        // Assigns a parent of the current loop iteration's element to the 'parent' variable in order to go further upwards the DOM tree
        parent = parent.parentNode;
      }
    }

    return isAnyParentDisabled;
  }

  private setOpacity() {
    const element = this.elementRef.nativeElement;
    this.renderer.addClass(element, 'disabled');
  }

  private removeOpacity() {
    const element = this.elementRef.nativeElement;
    this.renderer.removeClass(element, 'disabled');
  }

  private setDisabledAttribute(element) {
    this.renderer.setAttribute(element, 'disabled', '');

    // prevents from setting the disabled input's background color to a browser-specific default color (e.g. grey in Chrome)
    if (element.type === 'text' || element.type === 'number') {
      this.renderer.addClass(element, element.hasAttribute('readonly') ? 'disabled-readonly-input' : 'disabled-input');
    }
  }

  private removeDisabledAttribute(element) {
    this.renderer.removeAttribute(element, 'disabled');
    if (element.type === 'text' || element.type === 'number') {
      this.renderer.removeClass(element, element.hasAttribute('readonly') ? 'disabled-readonly-input' : 'disabled-input');
    }
  }
}
