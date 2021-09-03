import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { NgModelAccessorBase, MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { IDeletable } from '@interfaces/deletable.interface';
import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

import { LoggingService } from '@services/shared/logging/logging.service';

import { DynamicComponentConfig } from './dynamic-component-config';
import { FindingBase } from '@models/shared/finding/finding.base';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-dynamic-component-wrapper',
  templateUrl: './dynamic-component-wrapper.component.html',
  styleUrls: ['./dynamic-component-wrapper.component.css'],
  providers: [MakeProvider(DynamicComponentWrapperComponent)]
})
export class DynamicComponentWrapperComponent<TModel extends IDeletable> extends NgModelAccessorBase<DynamicComponentHandler<TModel>>
  implements OnChanges {
  isDisabled: boolean;
  collection: TModel[];
  ctor: INoParamConstructor<TModel>;
  config: DynamicComponentConfig;
  page: number;
  descriptionTypes: string[];
  private readonly descriptionType = 'descriptionType';

  @Input() set disabled(val: boolean) {
    if (val !== this.isDisabled && val) {
      this.page = 1;
      this.isDisabled = val;
      this.ngValue.deleteAllElements();
      this.writeValue(this.ngValue);
    } else if (!val && val !== undefined) {
      this.isDisabled = val;
    }

    if (this.isDisabled) {
      this.validationHelperService.removeError(this.validationName);
    }
  }

  @Input() customLabelCalculator: (index: number, handler: DynamicComponentHandler<TModel>, translationBits: any) => string;

  @Input() set setConfig(val: DynamicComponentConfig) {
    if (val !== undefined) {
      this.config = val;
    }
  }

  @Input() set setDescriptionTypes(val: string[]) {
    if (val !== undefined) {
      this.descriptionTypes = val;
    }
  }

  @Input() validationName: string;
  @Input() validationSecondFinding: boolean;

  @Output() descriptionChanged = new EventEmitter();
  @Output() findingChange = new EventEmitter();
  @Output() findingTypeChange = new EventEmitter();

  constructor(logger: LoggingService, private validationHelperService: ValidationHelperService) {
    super();
    this.config = new DynamicComponentConfig();
    this.isDisabled = true;
    this.collection = [];
    this.ngValue = new DynamicComponentHandler(logger, this.collection, this.ctor);
    this.page = 1;
    this.descriptionTypes = [];
  }

  ngOnChanges() {
    if (this.ngValue.currentItem) {
      this.updateCurrentFindingValidationId();
    }
  }

  /**
   * Adds new finding to collection. Switches page to new one in case item limit per page has been reached.
   */
  addFinding() {
    this.ngValue.addElement();
    this.page = Math.ceil((this.getCollectionItemCount() + 1) / this.config.itemCount);
    this.writeValue(this.ngValue);
    this.updateCurrentFindingValidationId();
  }

  updateFindingName(value: string) {
    this.findingTypeChange.emit(value);
    this.ngValue.resetCurrentItem();
    this.ngValue.currentItem[this.config.findingType] = value;
    this.writeValue(this.ngValue);
    if (this.checkIfIDescribeNameSelected()) {
      this.ngValue.currentItem[this.descriptionType] = 'IDescribe';
    }
    this.updateCurrentFindingValidationId();
  }

  disableDynamicComponentButton(): boolean {
    const lastItem = this.ngValue.getLastItem();
    if (lastItem !== undefined) {
      return lastItem[this.config.findingType] === 'None';
    } else {
      return true;
    }
  }

  setActiveElement(index: number): void {
    this.ngValue.setActiveElement(this.calculateIndex(index));
    this.findingChange.emit(index);
    this.updateCurrentFindingValidationId();
  }

  setPage(event: any): void {
    this.page = event;
  }

  removeFinding(index: number): void {
    this.ngValue.removeElement(index);
    this.page = Math.ceil((this.ngValue.currentItemIndex + 1) / this.config.itemCount);
    this.writeValue(this.ngValue);
    this.updateCurrentFindingValidationId();
  }

  /**
   * checks whether collection size exceeds maximal number of items per page and if so is used to hide 'add finding' button
   * value is being calculated per page => item limit is higher for each following page
   */
  isButtonHidden(): boolean {
    const calculatedCollectionSize = Math.ceil(this.getCollectionItemCount() / this.config.itemCount);
    return calculatedCollectionSize > this.page;
  }

  private getCollectionItemCount(): number {
    return this.ngValue.collection.filter(items => !items.isDeleted).length;
  }

  getCustomLabel(index: number): string {
    if (this.customLabelCalculator === undefined) {
      return '';
    } else {
      return this.customLabelCalculator(index, this.ngValue, this.config.translationBits);
    }
  }

  isDescribableType(findingType: string): boolean {
    return this.descriptionTypes.filter(x => x === findingType).length > 0;
  }

  descriptionTypeChanged(newDescriptionType: any, index: number) {
    const currentDescriptionType = this.ngValue.collection[index][this.descriptionType];
    const findingType = this.ngValue.collection[index][this.config.findingType];
    if (newDescriptionType !== currentDescriptionType) {
      this.ngValue.resetCurrentItem();
      this.ngValue.collection[index][this.descriptionType] = newDescriptionType;
      this.ngValue.collection[index][this.config.findingType] = findingType;
      this.descriptionChanged.emit(newDescriptionType);
    }
  }

  /**
   * Calculates item index inside item collection based on page number and ngFor index property (index is being set to 0
   * on each page when using ngFor with paginate directive)
   * @param i : index of item inside ngFor loop
   */
  calculateIndex(i: number): number {
    return (this.page - 1) * this.config.itemCount + i;
  }

  getDynamicComponentRRId(index: number): string {
    return this.config.findingRRId + '-' + (index + 1);
  }

  isIKnowIDescribeDisplayed(i: number, item: TModel): boolean {
    return !(this.calculateIndex(i) !== this.ngValue.currentItemIndex) && this.isDescribableType(item[this.config.findingType]);
  }

  checkIfIDescribeNameSelected() {
    return (
      this.descriptionTypes.length > 0 &&
      this.ngValue.currentItem[this.descriptionType] &&
      this.descriptionTypes.includes(this.ngValue.currentItem[this.config.findingType])
    );
  }

  private updateCurrentFindingValidationId() {
    const currentFindingValidationId = (this.ngValue.currentItem as FindingBase).validationId;
    this.validationHelperService.updateCurrentFindingId(currentFindingValidationId, this.validationSecondFinding);
  }

  isElementInvalid(element: FindingBase): boolean {
    if (this.ngValue.collection.length === 1 && (element as any).findingType === 'None') {
      return this.validationHelperService.isElementInvalid(this.validationName);
    } else {
      return this.validationHelperService.isFindingInvalid(element);
    }
  }
}
