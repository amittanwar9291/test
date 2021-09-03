import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { IFindingDescriptionType } from '@interfaces/controls/finding-description-type.interface';

import { IDeletable } from '@interfaces/deletable.interface';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FindingBase } from '@models/shared/finding/finding.base';

import { Guid } from '@models/shared/guid/guid';
import { DifferentialDiagnosisDropdownService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-dropdown.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { chunk, compact, isEmpty, clone } from 'lodash';

import { PaginationControlsDirective } from 'ngx-pagination';

import { Subscription } from 'rxjs';

import { FindingColumnConfig } from './finding-column-config';
import { ValidationDataService } from '@services/shared/validation/validation-data.service';

@Component({
  selector: 'rr-finding-column',
  templateUrl: './finding-column.component.html',
  styleUrls: ['./finding-column.component.scss']
})
export class FindingColumnComponent<TModel extends IDeletable> implements OnChanges, OnDestroy, OnInit {
  isDisabled: boolean;
  findings: TModel[];
  config: FindingColumnConfig;
  page: number;
  descriptionTypes: IFindingDescriptionType[];

  subs = new Subscription();
  private readonly descriptionType = 'descriptionType';

  @Input() set disabled(val: boolean) {
    if (val !== this.isDisabled && val) {
      this.page = 1;
      this.isDisabled = val;
      this.handler.deleteAllElements();
      this.allElementsDeleted.emit(this.handler.collection);
      this.updateLimitableItemsState();
      this.changeDetectionService.triggerChange();
    } else if (!val && val !== undefined) {
      this.isDisabled = val;
    }

    if (this.isDisabled) {
      this.validationHelperService.removeError(this.validationName);
    }
  }

  instanceId: string;

  @Input() customLabelCalculator: (
    index: number,
    handler: DynamicComponentHandler<TModel>,
    translationBits: any,
    findingTypes?: DropdownModel[]
  ) => string;

  @Input() set setConfig(val: FindingColumnConfig) {
    if (val !== undefined) {
      this.config = val;
    }
  }

  @Input() set setDescriptionTypes(val: (string | IFindingDescriptionType)[]) {
    if (val !== undefined) {
      this.descriptionTypes = val.map(descType => (typeof descType === 'string' ? { findingName: descType } : { ...descType }));
    }
  }

  @Input() handler: DynamicComponentHandler<TModel>;

  @Input() validationName: string;
  @Input() validationSecondFinding: boolean;
  @Input() validationParentFindingId: string;

  @Input() showIndexLabel = true;

  @Output() descriptionChanged = new EventEmitter();
  @Output() findingChange = new EventEmitter();
  @Output() findingTypeChange = new EventEmitter();
  @Output() newFindingAdded = new EventEmitter();
  @Output() findingRemoved = new EventEmitter<TModel>();
  @Output() activeFindingChanged = new EventEmitter();
  @Output() allElementsDeleted = new EventEmitter<TModel[]>();

  @ViewChild('pagination') pagination: PaginationControlsDirective;

  constructor(
    private changeDetectionService: ChangeDetectionService,
    private validationHelperService: ValidationHelperService,
    private validationDataService: ValidationDataService,
    private differentialDiagnosisDropdownService: DifferentialDiagnosisDropdownService
  ) {
    this.instanceId = Guid.create();
    this.initialize();
  }

  private initialize() {
    this.config = new FindingColumnConfig();
    this.isDisabled = true;
    this.findings = [];
    this.page = 1;
    this.descriptionTypes = [];
  }

  ngOnInit() {
    this.page = this.getCurrentItemPage();
    this.updateCurrentFindingValidationId();
    this.setAutoConfigRRIdValues();
  }

  ngOnChanges() {
    this.subs = this.handler.$isReinitialized.subscribe(isReinitialized => {
      if (isReinitialized) {
        this.page = Math.ceil((this.getCollectionItemCount() + 1) / this.config.itemCount);
        this.updateLimitableItemsState();
        this.updateCurrentFindingValidationId();
      }
    });
  }

  /**
   * Adds new finding to findings. Switches page to new one in case item limit per page has been reached.
   */
  addFinding() {
    this.handler.addElement();
    const calculatedPageNumber = Math.ceil(this.getCollectionItemCount() / this.config.itemCount);
    if (calculatedPageNumber !== this.page) {
      this.pagination.pageChange.emit(calculatedPageNumber);
    }
    this.changeDetectionService.triggerChange();
    this.updateCurrentFindingValidationId();
    this.newFindingAdded.emit();
    this.activeFindingChanged.emit();
  }

  updateFindingName(value: string, finding: FindingBase) {
    const previousItemName = this.handler.currentItem[this.config.findingType];
    if (isEmpty(this.config.subFindings)) {
      this.handler.resetCurrentItem();
    } else {
      this.handler.resetCurrentItemWithSubFindings(this.config.subFindings);
    }
    this.handler.currentItem[this.config.findingType] = value;
    this.findingTypeChange.emit({ value, finding, findingIndex: this.handler.currentItemIndex }); // TODO JBo check if the passed values are used anywhere at all
    this.calculateItemState(value);
    if (previousItemName) {
      this.calculateItemState(previousItemName);
    }
    if (this.checkIfIDescribeNameSelected()) {
      this.handler.currentItem[this.descriptionType] = DescriptionTypeEnum.IDescribe;
    }
    this.changeDetectionService.triggerChange();
    this.updateCurrentFindingValidationId();
    this.validationHelperService.removeAllErrorsInFinding((this.handler.currentItem as FindingBase)?.validationId);
    this.validationHelperService.removeEmptyFindingListError(this.validationName);
    if (this.validationParentFindingId) {
      this.validationHelperService.removeError(this.validationName, this.validationParentFindingId);
    }
  }

  disableDynamicComponentButton(): boolean {
    const lastItem = this.handler.getLastItem();
    if (lastItem !== undefined) {
      return lastItem[this.config.findingType] === 'None';
    } else {
      return true;
    }
  }

  setActiveElement(index: number): void {
    if (this.calculateIndex(index) !== this.handler.currentItemIndex) {
      this.handler.setActiveElement(this.calculateIndex(index));
      this.findingChange.emit(index);
      this.activeFindingChanged.emit();
      this.updateCurrentFindingValidationId();
      this.differentialDiagnosisDropdownService.clear();
    }
  }

  setPage(event: any): void {
    this.page = event;
  }

  removeFinding(index: number, id: string): void {
    const itemName = this.handler.collection[index][this.config.findingType];
    const findingValidationId = clone((this.handler.currentItem as FindingBase).validationId);
    this.handler.removeElement(index);
    this.calculateItemState(itemName);
    this.page = Math.ceil((this.handler.currentItemIndex + 1) / this.config.itemCount);
    this.findingRemoved.emit(this.handler.currentItem);
    this.activeFindingChanged.emit();
    this.changeDetectionService.triggerChange();
    this.validationHelperService.removeAllErrorsInFinding(findingValidationId);
    this.validationHelperService.removeEmptyFindingListError(this.validationName);
    this.updateCurrentFindingValidationId();
    if (this.validationParentFindingId) {
      this.validationHelperService.removeError(this.validationName, this.validationParentFindingId);
    }
  }

  /**
   * checks whether findings size exceeds maximal number of items per page and if so is used to hide 'add finding' button
   * value is being calculated per page => item limit is higher for each following page
   */
  isButtonHidden(): boolean {
    const calculatedCollectionSize = Math.ceil(this.getCollectionItemCount() / this.config.itemCount);
    return calculatedCollectionSize > this.page;
  }

  private getCollectionItemCount(): number {
    const count = this.handler.collection.filter(items => !items.isDeleted).length;
    return count;
  }

  getCustomLabel(index: number): string {
    if (this.customLabelCalculator === undefined) {
      return '';
    } else {
      return this.customLabelCalculator(index, this.handler, this.config.translationBits, this.config.dropdownValues);
    }
  }

  isDescribableType(findingType: string): boolean {
    return this.descriptionTypes.filter(descType => descType.findingName === findingType).length > 0;
  }

  getDescriptionType(item: TModel): IFindingDescriptionType {
    return this.descriptionTypes.find(descType => descType.findingName === item[this.config.findingType]);
  }

  descriptionTypeChanged(newDescriptionType: DescriptionTypeEnum, index: number) {
    const currentDescriptionType = this.handler.collection[index][this.descriptionType];
    const findingType = this.handler.collection[index][this.config.findingType];
    if (newDescriptionType !== currentDescriptionType) {
      this.handler.resetCurrentItem();
      this.handler.collection[index][this.descriptionType] = newDescriptionType;
      this.handler.collection[index][this.config.findingType] = findingType;
      this.descriptionChanged.emit(newDescriptionType);
      this.validationHelperService.removeAllErrorsInFinding((this.handler.currentItem as FindingBase)?.validationId);
      this.changeDetectionService.triggerChange();
    }
  }

  updateLimitableItemsState() {
    const limitableItems = this.config.dropdownValues.filter(x => x.limit > 0);
    limitableItems.forEach(item => {
      this.calculateItemState(item.value);
    });
  }

  calculateItemState(itemName: string) {
    const item = this.config.dropdownValues.find(x => x.value === itemName);
    if (item) {
      const currentItemCount = this.handler.collection.filter(x => x[this.config.findingType] === item.value && !x.isDeleted).length;
      item.isLocked = currentItemCount === item.limit;
    }
  }

  /**
   * Calculates item index inside item findings based on page number and ngFor index property (index is being set to 0
   * on each page when using ngFor with paginate directive)
   * @param i : index of item inside ngFor loop
   */
  calculateIndex(i: number): number {
    return (this.page - 1) * this.config.itemCount + i;
  }

  getDynamicComponentRRId(index: number): string {
    return this.config.findingColumnIds.findingRRId + '-' + (index + 1);
  }

  isIKnowIDescribeDisplayed(i: number, item: TModel): boolean {
    return !(this.calculateIndex(i) !== this.handler.currentItemIndex) && this.isDescribableType(item[this.config.findingType]);
  }

  checkIfIDescribeNameSelected() {
    return (
      this.descriptionTypes.length > 0 &&
      this.handler.currentItem[this.descriptionType] &&
      this.descriptionTypes.filter(descType => this.handler.currentItem[this.config.findingType] === descType.findingName).length > 0
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private updateCurrentFindingValidationId() {
    const currentFindingValidationId = (this.handler.currentItem as FindingBase)?.validationId;
    this.validationHelperService.updateCurrentFindingId(currentFindingValidationId, this.validationSecondFinding);
  }

  isElementErrored(element: FindingBase): boolean {
    if (this.handler.collection.length === 1 && (element as any)[this.config.findingType] === 'None') {
      return this.validationHelperService.isElementInvalid(this.validationName, this.validationParentFindingId);
    } else {
      return this.validationHelperService.isFindingInvalid(element);
    }
  }

  private getCurrentItemPage(): number {
    const pageNumber = Math.ceil((this.handler.currentItemIndex + 1) / this.config.itemCount);
    return pageNumber > 0 ? pageNumber : 1;
  }

  getPaginatorClass(page): string {
    if (!this.arePagesInvalid(page)) {
      return '';
    }
    if (this.page === page.value) {
      return 'current-invalid';
    } else if (page.label === '...') {
      return 'ellipsis-invalid';
    } else {
      return 'item-invalid';
    }
  }

  private arePagesInvalid(page): boolean {
    if (page.label === '...' && this.pagination) {
      const currentIndex = this.pagination.pages.indexOf(page);
      const firstHiddenPage = this.pagination.pages[currentIndex - 1].value + 1;
      const lastHiddenPage = this.pagination.pages[currentIndex + 1].value - 1;

      for (let i = firstHiddenPage; i <= lastHiddenPage; i++) {
        if (this.isPageInvalid(i)) {
          return true;
        }
      }
      return false;
    } else {
      return this.isPageInvalid(page.value);
    }
  }

  private isPageInvalid(pageNumber: number): boolean {
    const existingFindingsCollection = this.handler.collection.filter(finding => !finding.isDeleted);
    const col = existingFindingsCollection.map(elem => this.isElementErrored(elem));
    const pagedCollection = chunk(col, this.config.itemCount);
    const compactedPagedCollection = pagedCollection.map(page => compact(page));
    return compactedPagedCollection[pageNumber - 1]?.length > 0;
  }

  private setAutoConfigRRIdValues() {
    const autoConfig = this.config.autoConfigFindingRRId;
    if (autoConfig !== 'none') {
      const entryIdValue = autoConfig.split('_').pop();
      const modulePrefix = autoConfig.substring(0, autoConfig.length - entryIdValue.length);
      let increment = 0;
      for (const key of Object.keys(this.config.findingColumnIds)) {
        const splitted = entryIdValue.split('');
        let i = 0;
        while (Number(splitted.shift()) === 0) {
          i += 1;
        }
        this.config.findingColumnIds[key] = modulePrefix + (Number(entryIdValue) + increment).toString().padStart(entryIdValue.length, '0');
        if (increment === 1) {
          increment += 2;
        } else {
          increment++;
        }
      }
    }
  }
}
