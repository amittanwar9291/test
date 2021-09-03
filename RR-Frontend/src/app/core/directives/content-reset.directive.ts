import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Subscription } from 'rxjs';

import { SlideFormService } from '@services/shared/slide-base/slide-form.service';
import { FormValidationService } from '@services/shared/validation/form-validation.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

/**
 * Directive resetting the contents of an indicated div and its child divs.
 * Works only on p-radiobutton and p-checkbox, other tags are not supported and ignored.
 *
 * Following example shows a proper use of the directive. Please note that the p-radioButton name
 * has to be unique - same name among controls may lead to unexpected results.
 *
 * It is possible to target multiple div blocks by providing their IDs separated by " ".
 * @example
 * <p-radioButton [rrContentReset]="'block-to-reset'" name="radio1" [(ngModel)]="model.radioValue1"></p-radioButton>
 * <div id="block-to-reset">
 *  <p-radioButton name="radio2" [(ngModel)]="model.radioValue2"></p-radioButton>
 *  <p-radioButton name="radio3" [(ngModel)]="model.radioValue2"></p-radioButton>
 *  <div>
 *    <p-radioButton name="radio5" [(ngModel)]="model.radioValue3"></p-radioButton>
 *    <p-radioButton name="radio6" [(ngModel)]="model.radioValue3"></p-radioButton>
 *  </div>
 * </div>
 */
@Directive({
  selector: '[rrContentReset]'
})
export class ContentResetDirective implements OnInit, OnDestroy {
  /**
   * A reference to currently opened page form.
   */
  form: NgForm;

  /**
   * Reference to the subscription form stream BehaviorSubject.
   */
  formStream$: Subscription;

  /**
   * Input variable used to determine the div whose content values need to be cleared.
   */
  @Input('rrContentReset') tagIds: string;
  @Input() explicitFormToReset: NgForm;

  /**
   * Number of already processed child divs.
   */
  traversalCounter: number;

  /**
   * Maximum child divs which can be processed at once.
   */
  readonly MAX_TRAVERSES: number = 20;

  // /**
  //  * Class constructor.
  //  *
  //  * @param element Reference to ElementRef.
  //  * @param slideReff
  //  * @param formValidationService
  //  *
  //  */
  constructor(private element: ElementRef, private slideReff: SlideFormService, private validationHelperService: ValidationHelperService) {
    this.formStream$ = this.slideReff.getCurrentSlideFormStream().subscribe((form: NgForm) => {
      this.form = form;
    });
  }

  /**
   * A callback for on onClick host listener for p-radiobutton.
   */
  @HostListener('onClick') onClick(): void {
    if (this.element.nativeElement.localName !== 'p-radiobutton') {
      return;
    } else {
      this.reset();
    }
  }

  /**
   * A callback for on onChange host listener for p-checkbox.
   */
  @HostListener('onChange') onChange(): void {
    if (this.element.nativeElement.localName !== 'p-checkbox') {
      return;
    } else {
      this.reset();
    }
  }

  ngOnInit() {
    if (this.explicitFormToReset) {
      this.initExplicitFormRef();
    }
  }

  private initExplicitFormRef(): void {
    this.form = this.explicitFormToReset;
  }

  /**
   * reset method.
   */
  private reset() {
    this.traversalCounter = 0;
    this.tagIds.split(' ').forEach((id: string) => {
      const containerDiv = document.getElementById(id);
      if (containerDiv && containerDiv.tagName.toLowerCase() === 'div') {
        this.resetDivChildren(containerDiv);
      }
    });
  }

  /**
   * Traverses through the div tree, calling itself on all child divs.
   * @param tag div tag
   */
  private resetDivChildren(tag: Element): void {
    const elements = tag.children;
    for (let index = 0; index < elements.length; index++) {
      const currentElement = elements.item(index);
      const nodeName = currentElement.nodeName.toLowerCase();

      if (!['div', 'p-checkbox', 'p-radiobutton', 'p-dropdown', 'input', 'rr-number-input'].includes(nodeName)) {
        continue;
      }
      if (nodeName === 'div') {
        this.traversalCounter++;
        if (this.traversalCounter > this.MAX_TRAVERSES) {
          throw new Error(`RadioResetDirective: max traversal count (${this.MAX_TRAVERSES}) exceeded`);
        }
        this.resetDivChildren(currentElement);
        continue;
      }
      this.resetControl(nodeName, this.getNgModelFromElement(elements.item(index)));
    }
  }

  /**
   * Extracts ngModel binding name from tag and returns a corresponding NgModel from the NgForm.
   * @param tag Tag to get NgModel from.
   */
  private getNgModelFromElement(tag: Element): NgModel {
    const controlName = tag.attributes.getNamedItem('name').nodeValue;

    /* tslint:disable:no-string-literal */
    return this.form['_directives'].find((element: NgModel) => {
      return element.name === controlName;
    });
  }

  /**
   * Reset control value and notify NgForm about the change.
   * @param controlName Name of the control to be reset.
   * @param ngModel Control's NgModel.
   */
  private resetControl(controlName: string, ngModel: NgModel): void {
    if (!ngModel) {
      return;
    }
    if (controlName === 'p-checkbox') {
      this.form.updateModel(ngModel, false);
    } else if (controlName === 'p-radiobutton') {
      this.form.updateModel(ngModel, 'None');
    } else if (controlName === 'input' || controlName === 'rr-number-input') {
      this.form.updateModel(ngModel, null);
    } else if (controlName === 'p-dropdown') {
      this.form.updateModel(ngModel, 'None');
    }
    this.validationHelperService.removeError(ngModel.name);
  }

  /**
   * On directive destruction, used to unsubscribe.
   */
  ngOnDestroy(): void {
    this.formStream$.unsubscribe();
  }
}
