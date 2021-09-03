import { Component, Input, EventEmitter, Output, forwardRef, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';

import { Dropdown } from 'primeng/dropdown';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-multi-value-dropdown',
  templateUrl: './multi-value-dropdown.component.html',
  styleUrls: ['./multi-value-dropdown.component.css'],
  providers: [
    {
      provide: DynamicBaseComponent,
      useExisting: forwardRef(() => MultiValueDropdownComponent)
    }
  ]
})
export class MultiValueDropdownComponent extends DynamicBaseComponent implements AfterViewInit {
  tempValue: string;
  customLabel: string;
  isInvalid: boolean;
  @Input() dropdownValues: FindingDropdownModel[];
  @Input() index: number;
  @Input() placeholder: string;
  @Input() selectedValue: string;
  @Input() disabled: boolean;
  @Input() indexLabel: number;
  @Input() groupedOptions: boolean;

  @Input() set customLabelInput(value: string) {
    this.customLabel = value;
  }

  @Input() set isItemInvalid(value: boolean) {
    this.isInvalid = value;
  }

  @Output() componentDeleted = new EventEmitter();
  @Output() newSelection = new EventEmitter();

  @ViewChild('dropdown') dropdown: Dropdown;

  constructor(ngEl: ElementRef) {
    super(ngEl);
    this.customLabel = '';
    this.tempValue = '';
  }

  ngAfterViewInit() {
    this.tempValue = this.selectedValue;
  }

  updateElement(event: any) {
    if (event.value === 'delete') {
      this.handleDeleteEvent(event);
    } else {
      this.newSelection.emit(event.value);
      this.tempValue = event.value;
    }
  }

  deleteElement() {
    this.componentDeleted.emit(this.index);
    this.removeFromParent();
  }

  private handleDeleteEvent(event: any) {
    if (event.originalEvent instanceof MouseEvent) {
      this.deleteElement();
    } else {
      if (this.dropdown.group) {
        const tempValueGroup = (this.dropdown.options as DropdownGroupedModel[]).filter(group =>
          group.items.find(item => item.value === this.tempValue)
        )[0];
        const selectedItem = tempValueGroup.items.find(item => item.value === this.tempValue);
        this.dropdown.selectedOption = selectedItem;
      } else {
        this.dropdown.selectedOption = (this.dropdown.options as DropdownModel[]).filter(x => x.value === this.tempValue)[0];
      }
    }
  }

  setLimitedOptions() {
    this.dropdownValues
      .filter(x => x.limit > 0)
      .forEach(item => {
        const dropdownItem = this.dropdown.options.find(x => x.value === item.value);
        dropdownItem.disabled = item.isLocked;
      });
  }

  getDropdownClass(): string {
    const isGrouped = this.groupedOptions ? 'finding-group-dropdown' : '';
    const isInvalid = this.isInvalid ? 'invalid-dropdown' : '';
    return isGrouped + ' ' + isInvalid;
  }
}
