import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, Self } from '@angular/core';
import { FormErrorElement, FormErrorFinding } from '@models/shared/validation/form-validation.models';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { isEqual, compact } from 'lodash';
import { ValidationDataService } from '@services/shared/validation/validation-data.service';
import { getAsAnArray } from '@services/shared/validation/validation-utilities';
import { NgModel } from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';

@Directive({
  selector: '[rrValidation]'
})
export class ValidationDirective implements OnInit, OnDestroy {
  @Input() rrValidation: string | Array<string>;
  @Input() notInFinding: boolean;
  @Input() inSecondFinding: boolean;
  @Input() findingHandler: boolean;
  @Input() isLocalizer: boolean;
  @Input() noUpdate: boolean;
  @Input() ifAny: boolean;
  @Input() allFindings: boolean;
  @Input() noClickPrevent: boolean;
  @Input() set elementUpdate(event: EventEmitter<any>) {
    // event on which element error should be update
    this.setCustomEventListener(event);
    this.customEvent = event;
  }

  customEvent: EventEmitter<any>;
  subscriptions: Subscription[] = [];
  pageErrors: Array<FormErrorElement | FormErrorFinding>;
  currentSelectedFindingId: string;

  constructor(
    private elem: ElementRef,
    private renderer2: Renderer2,
    private validationDataService: ValidationDataService,
    @Self() @Optional() private ngControl: NgModel,
    @Optional() private radiobuttonRef: RadioButton
  ) {}

  ngOnInit() {
    this.initPageErrorsSubscription();
    this.initFindingIdChangeSubscription();
    if (this.isPRadio() && !this.noClickPrevent) {
      this.initRadiobuttonClickPrevention();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Side action - this prevents the mandatory radiobutton to dispatch its "onClick" event when user clicks the previously selected radio
   * (by default, the primeng dispatches the "onClick" event even if the user clicks the already selected radiobutton which may cause
   * some problems with resetting nested models)
   */
  private initRadiobuttonClickPrevention(): void {
    const elRef = this.elem.nativeElement;
    this.subscriptions.push(
      fromEvent(elRef.parentNode, 'click', { capture: true }).subscribe((e: Event) => {
        if (!elRef.contains(e.target) || (e.target as Node).nodeName === 'IMG') {
          return;
        } else if (this.ngControl.value === this.radiobuttonRef.value) {
          e.stopPropagation();
        }
      })
    );
  }

  private initPageErrorsSubscription() {
    this.subscriptions.push(
      this.validationDataService.currentPageErrors.subscribe(data => {
        if (data) {
          this.pageErrors = data;
          this.setErrorMarker();
        }
      })
    );
  }

  // subscribe to current selected finding validation id
  private initFindingIdChangeSubscription() {
    const validationIdStream = this.inSecondFinding
      ? this.validationDataService.currentSecondFindingValidationId
      : this.validationDataService.currentFindingValidationId;

    const validationIdSubscription = this.createValidationIdSubscription(validationIdStream);
    this.subscriptions.push(validationIdSubscription);
  }

  private createValidationIdSubscription(stream: BehaviorSubject<string>) {
    return stream.subscribe(findingValidationId => {
      this.currentSelectedFindingId = findingValidationId;
      this.setErrorMarker();
    });
  }

  // check element position in template and if element is invalid
  private setErrorMarker() {
    let isInvalid = false;
    const isElementInFinding = this.isFindingElement();

    if (this.pageErrors) {
      if (this.ifAny && this.allFindings) {
        isInvalid = this.checkIfAnyIsInvalidForAllFindings();
      } else if (this.ifAny) {
        isInvalid = isElementInFinding ? this.checkIfAnyIsInvalidForFinding() : this.checkIfAnyIsInvalid();
      } else {
        isInvalid = isElementInFinding
          ? this.getErrorForElementInFinding() && !this.getErrorForElementInFinding().resolved
          : this.getErrorForElement() && !this.getErrorForElement().resolved;
      }
    }
    this.setOrClearInvalidClass(isInvalid);
  }

  private getErrorsInAllFindings(pageErrors: Array<FormErrorElement | FormErrorFinding>): FormErrorElement[] {
    let allErrorsInFindings: FormErrorElement[] = [];

    pageErrors.forEach(pageErr => {
      if (pageErr instanceof FormErrorFinding) {
        allErrorsInFindings = allErrorsInFindings.concat(pageErr.errors);
      }
    });
    return allErrorsInFindings;
  }

  private checkIfAnyIsInvalidForAllFindings(): boolean {
    const allErrorsInFindings: FormErrorElement[] = this.getErrorsInAllFindings(this.pageErrors);
    const elementsToCheck: string[] = getAsAnArray(this.rrValidation);
    const elementsErrors: FormErrorElement[] = elementsToCheck.map((error: string) => {
      const errorElement = allErrorsInFindings.find((item: FormErrorElement) => {
        return isEqual(getAsAnArray(item.name).sort(), getAsAnArray(error).sort()) && !item.resolved;
      });
      return errorElement;
    });

    return compact(elementsErrors).length !== 0;
  }

  private checkIfAnyIsInvalidForFinding() {
    return (
      compact(
        getAsAnArray(this.rrValidation).map(
          name => this.getErrorForElementInFinding(name) && !this.getErrorForElementInFinding(name).resolved
        )
      ).length > 0
    );
  }

  private checkIfAnyIsInvalid() {
    return (
      compact(getAsAnArray(this.rrValidation).map(name => this.getErrorForElement(name) && !this.getErrorForElement(name).resolved))
        .length > 0
    );
  }

  // set or remove appropriate class
  private setOrClearInvalidClass(isInvalid: boolean) {
    isInvalid
      ? this.renderer2.addClass(this.elem.nativeElement, this.getInvalidClass())
      : this.renderer2.removeClass(this.elem.nativeElement, this.getInvalidClass());
  }

  // set listener for radiobutton
  @HostListener('onClick') onClick() {
    if (this.isPRadio() && !this.noUpdate && !this.customEvent) {
      this.handleElementChange();
    }
  }

  // set listener for checkbox and dropdown
  @HostListener('onChange') onChange() {
    if (!this.isPRadio() && !this.noUpdate && !this.customEvent) {
      this.handleElementChange();
    }
  }

  // set listener for rr-input-number component
  @HostListener('announceModelChange', ['$event']) onAnnounceModelChange(event) {
    if (this.isRRNumberInput() && !this.noUpdate && !this.customEvent && !isNaN(event)) {
      this.handleElementChange();
    }
  }

  // set listener for localizer (extended LocalizerBase)
  @HostListener('announceSelection') onAnnounceSelection() {
    if (this.isLocalizer && !this.noUpdate && !this.customEvent) {
      this.handleElementChange();
    }
  }

  @HostListener('input') onInputChange() {
    if (this.isInput() && !this.noUpdate && !this.customEvent) {
      this.handleElementChange();
    }
  }

  // set listener to custom event
  private setCustomEventListener(event) {
    if (event && !this.noUpdate) {
      event.asObservable().subscribe(() => this.handleElementChange());
    }
  }

  // handle user interaction with element
  private handleElementChange() {
    if (!this.pageErrors) {
      return;
    }
    if (this.isFindingElement() && this.getErrorForElementInFinding()) {
      this.getErrorForElementInFinding().resolved = true;
    } else if (this.getErrorForElement()) {
      this.getErrorForElement().resolved = true;
    }
    this.validationDataService.currentPageErrors.next(this.pageErrors.length > 0 ? this.pageErrors : null);
  }

  getErrorForElement(element?): FormErrorElement {
    const elementName = element ? element : this.rrValidation;
    if (this.pageErrors) {
      return (this.pageErrors as FormErrorElement[]).find(error => {
        return isEqual(getAsAnArray(error.name).sort(), getAsAnArray(elementName).sort());
      });
    }
  }

  getCurrentSelectedFindingErrors(): FormErrorFinding {
    return (this.pageErrors as FormErrorFinding[]).find((elem: FormErrorFinding) => elem.findingId === this.currentSelectedFindingId);
  }

  getErrorForElementInFinding(element?): FormErrorElement {
    const elementName = element ? element : this.rrValidation;

    if (this.currentSelectedFindingId && this.getCurrentSelectedFindingErrors() && this.getCurrentSelectedFindingErrors().errors) {
      return this.getCurrentSelectedFindingErrors().errors.find(error => {
        return isEqual(getAsAnArray(error.name).sort(), getAsAnArray(elementName).sort());
      });
    }
  }

  private getInvalidClass(): string {
    if (this.findingHandler) {
      return 'finding-handler-empty';
    } else if (this.isLocalizer) {
      return 'invalid-localizer';
    } else {
      return 'invalid';
    }
  }

  private isRRNumberInput(): boolean {
    return this.elem.nativeElement.localName === 'rr-number-input';
  }
  private isPRadio(): boolean {
    return this.elem.nativeElement.localName === 'p-radiobutton';
  }

  private isInput(): boolean {
    return this.elem.nativeElement.localName === 'input';
  }

  private isFindingElement() {
    return !this.notInFinding && this.currentSelectedFindingId;
  }
}
