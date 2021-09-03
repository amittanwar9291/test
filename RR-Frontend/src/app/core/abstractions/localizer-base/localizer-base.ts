import { EventEmitter, Input, Output } from '@angular/core';

import { NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { EnumBase } from '@abstractions/enum-base/enum-base.model';

import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

export class LocalizerBase<TModel extends EnumBase> extends NgModelAccessorBase<TModel> {
  // Function that resets the localizer model when disabled property is set to true
  @Input() set disabled(val: boolean) {
    this.isDisabled = val;
    if (val) {
      this.ngValue = new this.LocalizerModel();
      this.writeValue(this.ngValue);
    }
  }

  @Input() set isSingleChoice(val: boolean) {
    if (val) {
      this.singleChoiceMode = true;
    } else {
      this.singleChoiceMode = false;
    }
  }

  @Output() announceSelection = new EventEmitter();

  isDisabled = false;

  /*
   * decides if the localizer is single choice only (default value is false)
   */
  singleChoiceMode = false;
  /**
   * Name of the element that is hovered at the moment.
   */
  hoveredElement: string;

  /**
   *  Select callback function
   */
  private selectCallback: (name: string) => void;

  /**
   * Class constructor
   * @param LocalizerModel Localizer's model class extending the EnumBase class
   */
  constructor(private LocalizerModel: INoParamConstructor<TModel>) {
    super();
    this.ngValue = new this.LocalizerModel();
    this.hoveredElement = 'None';
  }

  /**
   * Should be used to assign select callback function to override default behavior of selecting element
   * @param callback overriding callback function, should take name of field as a param
   */
  assignSelectCallback(callback: (name: string) => void): void {
    this.selectCallback = callback;
  }

  /**
   * Should be attached to (mouseover) event in html
   * @param name name of the field in model that corresponds to hovered element name
   */
  hoverElement(name: string): void {
    this.hoveredElement = name;
  }

  /**
   * Should be attached to (mouseout) event in html to text and element
   */
  unhoverElement(): void {
    this.hoveredElement = 'None';
  }

  /**
   * Should be attached to (click) event in html to text and element
   * @param name name of the field in model that corresponds to hovered element name.
   */
  selectElement(name: string): void {
    // Because generic types can't be indexed there
    // needs to be a ngValue clone casted to EnumBase created
    const modelClone = this.ngValue as EnumBase;
    if (this.singleChoiceMode) {
      if (modelClone[name]) {
        modelClone[name] = false;
      } else {
        Object.keys(modelClone).forEach(key => {
          modelClone[key] = false;
        });

        modelClone[name] = true;
      }
    } else {
      if (this.selectCallback) {
        this.selectCallback(name);
      } else {
        modelClone[name] = !modelClone[name];
      }
    }
    this.announceSelection.emit();
    this.writeValue(this.ngValue);
  }

  /**
   * Should be used for attaching a class for hovered elements in html.
   * If has been called without name param, checks whether any element is hovered.
   * @param name name of the field in model that corresponds to hovered element name. it's optional.
   */
  isElementHovered(name?: string): boolean {
    return name ? this.hoveredElement === name : this.hoveredElement !== 'None';
  }

  /**
   * Should be used for attaching a class for selected elements in html.
   * If has been called without name param, checks whether any element is selected.
   * @param name name of the field in model that corresponds to selected element name. it's optional.
   */
  isElementSelected(name?: string): boolean {
    return name
      ? this.ngValue[name]
      : Object.keys(this.ngValue)
          .map((elementKey: string) => this.ngValue[elementKey])
          .some((elementValue: boolean) => !!elementValue);
  }

  isOtherElementSelected(element: string): boolean {
    return Object.keys(this.ngValue).some(key => key !== element && this.ngValue[key]);
  }

  /**
   * Checks whether specific element is disabled.
   * If has been called without name param, checks whether any element is selected.
   * @param name name of the field in model that corresponds to checked element name. it's optional.
   */
  isElementDisabled(name: string): boolean {
    return !this.ngValue[name] && this.isElementSelected();
  }
}
