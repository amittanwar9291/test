import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

export interface ManualUpdateModel {
  value?: number;
  elementReferenceData?: any;
}

/**
 * Directive for input type="number" that verify if input value is in given range.
 * Directive use standard html min and max values or custom minValue and maxValue (if custom values are set, they have priority)
 * Verification is executed only if this values are provided
 * (you can provide only one of this values, then verification is execute only for it)
 *
 * In output event directive returns ManualUpdateModel, which contains:
 * - value (null if validation failed)
 * - elementReferenceData (Your custom data), which You can use ti identify element in Your component
 *
 * Directive also block entering non-number values and, basing on step value, entering comma separated values not matching step value.
 * If no step value is provided will block comma separated values at all.
 *
 * IMPORTANT if You're using <rr-number-input> You don't have to do anything more then this component allow or force You to set
 *
 * Usage:
 * @example
 * <input
 *    rrInputMinMaxValidation
 *    min="1"
 *    max="8"
 *    step="0.1"
 *    [initValue]="model.value"
 *    [elementReferenceData]={reference: myElementData}
 *    (modelUpdate)="onModelUpdate($event)">
 */

@Directive({
  selector: '[rrInputMinMaxValidation]'
})
export class InputMinMaxValidationDirective {
  /**
   * minimum value allow for input - if not set comparision for minimum value isn't perform
   */
  @Input() minValue: number;

  /**
   * maximum value allow for input - if not set comparision for maximum value isn't perform
   */
  @Input() maxValue: number;

  /**
   * element reference information - pass here whatever You want to get back on output to identify validated element in Your component
   */
  @Input() elementReferenceData: any;

  /**
   * event that is returned when error (minimum or maximum) occurred
   */
  @Output() modelUpdate = new EventEmitter<ManualUpdateModel>();

  constructor(private element: ElementRef) {
    this.element.nativeElement.setAttribute('type', 'text');
  }

  /**
   * setting up initial value of element - got form backend
   */
  @Input()
  set initValue(val) {
    this.modelUpdate.emit({ value: val, elementReferenceData: this.elementReferenceData });
    this.element.nativeElement.value = val;
  }

  /**
   * sets event listener - compare current input value with given minimum and maximum (if given)
   * and:
   *
   * a) sets border='3px solid red' for invalid input and border='3px solid #00aec2' (primeNg style) for valid input;
   *
   * b) emits error
   */
  @HostListener('focusout')
  onFocusout(): void {
    if (this.element.nativeElement.value) {
      const currentValue = Number(parseFloat(this.element.nativeElement.value.replace(',', '.')));
      const minValue = this.minValue ? this.minValue : Number(this.element.nativeElement.min);
      const maxValue = this.maxValue ? this.maxValue : Number(this.element.nativeElement.max);

      if (Number.isNaN(currentValue)) {
        this.modelUpdate.emit({ value: null, elementReferenceData: this.elementReferenceData });
        this.element.nativeElement.value = null;
      } else if (minValue.toString() && currentValue < minValue) {
        this.modelUpdate.emit({ value: null, elementReferenceData: this.elementReferenceData });
        this.element.nativeElement.value = null;
      } else if (maxValue.toString() && currentValue > maxValue) {
        this.modelUpdate.emit({ value: null, elementReferenceData: this.elementReferenceData });
        this.element.nativeElement.value = null;
      } else {
        this.modelUpdate.emit({ value: currentValue, elementReferenceData: this.elementReferenceData });
        this.element.nativeElement.value = currentValue;
      }
      return;
    }

    this.modelUpdate.emit({ value: null, elementReferenceData: this.elementReferenceData });
    this.element.nativeElement.value = null;
  }

  @HostListener('keypress', ['$event'])
  onKeypress(event): void {
    const allowNegatives = (this.minValue ? this.minValue : Number(this.element.nativeElement.min)) < 0;
    const allowKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

    if (allowKeys.indexOf(event.key) !== -1) {
      return;
    }

    const noDecimals: RegExp = allowNegatives ? new RegExp(/^-?\d*$/g) : new RegExp(/^\d*$/g);
    const oneDecimals: RegExp = allowNegatives ? new RegExp(/^-?\d*[.,]?\d{0,1}$/g) : new RegExp(/^\d*[.,]?\d{0,1}$/g);
    const twoDecimals: RegExp = allowNegatives ? new RegExp(/^-?\d*[.,]?\d{0,2}$/g) : new RegExp(/^\d*[.,]?\d{0,2}$/g);
    const noStartingWithDotOrComma: RegExp = allowNegatives ? new RegExp(/^-(\.|,).*/) : new RegExp(/^(\.|,).*/);

    const pattern: RegExp =
      this.element.nativeElement.step === '0.01' ? twoDecimals : this.element.nativeElement.step === '0.1' ? oneDecimals : noDecimals;

    const current: string = this.element.nativeElement.value;
    const position = this.element.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key === 'Decimal' ? '.' : event.key, current.slice(position)].join('');

    const isStartingWithDotOrComma = String(next).match(noStartingWithDotOrComma);

    if (next && (!String(next).match(pattern) || isStartingWithDotOrComma)) {
      event.preventDefault();
    }
  }

  @HostListener('input')
  onInput(): void {
    const minValue = this.minValue ? this.minValue : Number(this.element.nativeElement.min);
    const maxValue = this.maxValue ? this.maxValue : Number(this.element.nativeElement.max);
    const allowNegatives = (this.minValue ? this.minValue : Number(this.element.nativeElement.min)) < 0;

    if (this.element.nativeElement.value > maxValue) {
      this.element.nativeElement.value = null;
      this.modelUpdate.emit({ value: this.element.nativeElement.value, elementReferenceData: this.elementReferenceData });
    } else if (allowNegatives && this.element.nativeElement.value < minValue) {
      this.element.nativeElement.value = null;
      this.modelUpdate.emit({ value: this.element.nativeElement.value, elementReferenceData: this.elementReferenceData });
    } else if (this.element.nativeElement.value === '.') {
      return;
    } else if (allowNegatives && this.element.nativeElement.value === '-') {
      /*
        In cases we stared type negative number but provide only "-" sign
        in such cases model will not be updated with 1 therefore will remain valid
      */
      return;
    } else if (!allowNegatives && this.element.nativeElement.value < minValue) {
      /*
        In cases we're starting to type and current value is below min but it is just a part of complete number
        eg. min=2, max=12, we want to keep 1 in case someone tries to type in 12 even if 1 is below min value.
      */
      return;
    } else {
      this.modelUpdate.emit({ value: this.element.nativeElement.value, elementReferenceData: this.elementReferenceData });
    }
  }
}
