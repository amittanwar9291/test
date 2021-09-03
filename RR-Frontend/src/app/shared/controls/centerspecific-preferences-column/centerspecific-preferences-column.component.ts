import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Subscription } from 'rxjs';

import { PaginationControlsComponent } from 'ngx-pagination';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

import { CenterspecificPreferencesInputComponent } from '@controls/centerspecific-preferences-input/centerspecific-preferences-input.component';
import { CenterspecificPreferencesColumnConfig } from '@controls/centerspecific-preferences-column/centerspecific-preferences-column.config';

import { CenterspecificPreferencesSetUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-set-ui.model';
import { Guid } from '@models/shared/guid/guid';

import { inRange, isEmpty } from 'lodash';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';

@Component({
  selector: 'rr-centerspecific-preferences-column',
  templateUrl: './centerspecific-preferences-column.component.html',
  styleUrls: ['./centerspecific-preferences-column.component.scss']
})
export class CenterspecificPreferencesColumnComponent implements OnInit, OnDestroy {
  isDisabled: boolean;
  preferences: CenterspecificPreferencesSetUiModel[];
  config: CenterspecificPreferencesColumnConfig;
  page: number;
  subs: Subscription[] = [];
  instanceId: string;
  isEditMode = false;
  moduleTypes: typeof ModuleTypesEnum;

  @Input() handler: DynamicComponentHandler<CenterspecificPreferencesSetUiModel>;

  @Input('isDisabled') set disabled(val: boolean) {
    if (val !== this.isDisabled && val) {
      this.page = 1;
      this.isDisabled = val;
    } else if (!val && val !== undefined) {
      this.isDisabled = val;
    }
  }

  @Input() mode: ModuleTypesEnum;

  @Input('config') set setConfig(val: CenterspecificPreferencesColumnConfig) {
    if (val !== undefined) {
      this.config = val;
    }
  }

  @Output() editModeToggled = new EventEmitter<boolean>();
  @Output() activeElementChanged = new EventEmitter();
  @ViewChild('pagination') pagination: PaginationControlsComponent;
  @ViewChildren('preferencesItem') preferenceItems: QueryList<CenterspecificPreferencesInputComponent>;

  constructor(private changeDetectionService: ChangeDetectionService, private toastMessageService: ToastMessageService) {
    this.moduleTypes = ModuleTypesEnum;
    this.instanceId = Guid.create();
    this.initialize();
  }

  private initialize(): void {
    this.config = new CenterspecificPreferencesColumnConfig();
    this.isDisabled = true;
    this.preferences = [];
    this.page = 1;
  }

  ngOnInit(): void {
    this.subs.push(
      this.handler.$isReinitialized.subscribe(isReinitialized => {
        if (isReinitialized) {
          this.page = Math.ceil((this.getCollectionItemCount() + 1) / this.config.itemCount);
        }
      })
    );
  }

  setActiveElement(index: number): void {
    if (!this.isEditMode) {
      this.handler.setActiveElement(this.calculateIndex(index));
      this.activeElementChanged.emit();
    }
  }

  setPage(event: any): void {
    this.page = event;
  }

  addPreference() {
    this.handler.addElement();
    this.handler.currentItem.setName = this.setInitialPreferenceName();
    const calculatedPageNumber = Math.ceil(this.getCollectionItemCount() / this.config.itemCount);
    if (calculatedPageNumber !== this.page) {
      this.pagination.pageChange.emit(calculatedPageNumber);
    }
    this.changeDetectionService.triggerChange();
    this.activeElementChanged.emit();
  }

  removePreference(index: number): void {
    this.handler.removeElement(index);
    this.page = Math.ceil((this.handler.currentItemIndex + 1) / this.config.itemCount);
    this.changeDetectionService.triggerChange();
    this.activeElementChanged.emit();
  }

  getPreferenceName(index: number): string {
    return this.handler.collection[this.calculateIndex(index)].setName;
  }

  isButtonHidden(): boolean {
    const calculatedCollectionSize = Math.ceil(this.getCollectionItemCount() / this.config.itemCount);
    return calculatedCollectionSize > this.page;
  }

  isAddButtonDisabled(): boolean {
    return this.isEditMode;
  }

  isEditButtonDisabled(): boolean {
    const existingSets = this.handler.collection.filter(item => !item.isDeleted);
    return !this.isActiveElementOnCurrentPage() || existingSets.length === 0;
  }

  calculateIndex(i?: number): number {
    return (this.page - 1) * this.config.itemCount + i;
  }

  calculateCurrentPageItemIndex(): number {
    return this.handler.currentItemIndex - (this.page - 1) * this.config.itemCount;
  }

  getDynamicComponentRRId(index: number): string {
    return this.config.preferenceBaseRRId + '-' + (index + 1);
  }

  onNameSave(): void {
    const visibleItems = this.preferenceItems.toArray();
    const currentItem = visibleItems[this.calculateCurrentPageItemIndex()];
    currentItem.onNameChange((newName: string) => {
      if (!this.isNameAlreadyInUse(newName)) {
        this.changePreferenceName(newName);
        this.toggleEditMode(false);
        this.changeDetectionService.triggerChange();
      } else {
        this.toastMessageService.showErrorToast('centerspecificPreferences.existingNameError');
      }
    });
  }

  onNameEdit(): void {
    const visibleItems = this.preferenceItems.toArray();
    const currentItem = visibleItems[this.calculateCurrentPageItemIndex()];

    this.toggleEditMode(true);
    currentItem.setFocus();
  }

  isItemEditable(index: number, currentItemIndex: number): boolean {
    return this.isEditMode && index === currentItemIndex;
  }

  private setInitialPreferenceName(): string {
    const defaultNamePattern = new RegExp(`^${this.config.defaultPreferenceName} [0-9]*$`);
    const existingPreferencesWithDefaultNames = this.handler.collection.filter(item => {
      return !item.isDeleted && defaultNamePattern.test(item.setName);
    });
    const existingDefaultNamesNumbers: number[] = existingPreferencesWithDefaultNames.map(item => {
      return Number(item.setName.replace(/\D/g, ''));
    });
    const nextAvailableNumber = isEmpty(existingDefaultNamesNumbers) ? 1 : Math.max(...existingDefaultNamesNumbers) + 1;
    return `${this.config.defaultPreferenceName} ${nextAvailableNumber < 10 ? '0' + nextAvailableNumber : nextAvailableNumber}`;
  }

  private changePreferenceName(newName: string): void {
    this.handler.collection[this.handler.currentItemIndex].setName = newName;
  }

  private getCollectionItemCount(): number {
    return this.handler.collection.filter(items => !items.isDeleted).length;
  }

  private toggleEditMode(val: boolean): void {
    this.editModeToggled.emit(val);
    this.isEditMode = val;
  }

  private isActiveElementOnCurrentPage(): boolean {
    const maxPageItems = this.config.itemCount;
    const currentPageIndicesRange = [this.page * maxPageItems - maxPageItems, this.page * maxPageItems];
    return inRange(this.handler.currentItemIndex, currentPageIndicesRange[0], currentPageIndicesRange[1]);
  }

  /**
   * Checks if a set with the given 'newName' already exists, excluding the current item's own name and sets that are deleted
   * @param newName item's new name
   */
  private isNameAlreadyInUse(newName: string): boolean {
    const existingPreferenceNames = this.handler.collection
      .filter(item => !item.isDeleted)
      .map(item => {
        return item.setName;
      });
    existingPreferenceNames.splice(existingPreferenceNames.indexOf(this.handler.currentItem.setName), 1);
    return existingPreferenceNames.includes(newName);
  }

  ngOnDestroy(): void {
    this.subs.forEach(item => item.unsubscribe());
  }
}
