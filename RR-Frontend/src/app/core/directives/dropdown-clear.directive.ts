import { OnDestroy, AfterContentInit, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { remove, filter, isUndefined, clone } from 'lodash';
import { ClearOption } from '@models/shared/dropdown/dropdown-clear-option.model';
import { ClearGroupOption } from '@models/shared/dropdown/dropdown-clear-group-option.model';

@Directive({
  selector: '[rrDropdownClear]'
})
export class DropdownClearDirective implements OnInit, OnDestroy, AfterContentInit {
  /**
   * Use this to overwrite default value ("None") that will be set to ngModel when clearOption selected
   */
  @Input() clearOptionValue: string | number = 'None';
  clearOption: ClearOption;
  clearGroupOption: ClearGroupOption;

  constructor(private dropdown: Dropdown, private elem: ElementRef) {
    this.elem.nativeElement.setAttribute('scrollHeight', 'auto');
  }

  ngOnInit() {
    this.clearOption = new ClearOption(this.clearOptionValue);
    this.clearGroupOption = new ClearGroupOption(this.clearOption);
    if (this.dropdown.group) {
      this.dropdown.renderer.addClass(this.elem.nativeElement, 'group-dropdown');
    }
  }

  ngAfterContentInit() {
    this.removeClearOption();
    this.setUndefinedToNull();
    this.dropdown.options = clone(this.dropdown.options);
  }

  setUndefinedToNull() {
    if (isUndefined(this.dropdown.selectedOption)) {
      this.dropdown.writeValue(null);
    }
  }

  @HostListener('onHide')
  onHide(): void {
    this.checkAndClear();
  }

  @HostListener('onShow')
  onShow(): void {
    this.setClearOption();
  }

  @HostListener('onChange')
  onChange(): void {
    this.removeClearOption();
  }

  private checkAndClear() {
    if (this.dropdown.value === this.clearOption.value) {
      this.dropdown.writeValue(null);
    }
    this.removeClearOption();
  }

  private setClearOption() {
    const noClearOptionAdded = filter(this.dropdown.options, { label: '—' }).length === 0;
    if (this.dropdown.options && noClearOptionAdded) {
      this.dropdown.options.unshift(this.dropdown.group ? this.clearGroupOption : this.clearOption);
    }
  }

  private removeClearOption() {
    const optionToRemove = () => {
      if (this.dropdown.group || !isUndefined(this.dropdown.group)) {
        return this.clearGroupOption;
      } else {
        return this.clearOption;
      }
    };
    remove(this.dropdown.options, optionToRemove());
  }

  ngOnDestroy() {
    this.removeClearOption();
  }
}
