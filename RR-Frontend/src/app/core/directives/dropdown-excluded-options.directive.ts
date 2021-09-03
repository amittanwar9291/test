import { Directive, HostListener, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { flatten, difference, compact } from 'lodash';
import { Dropdown } from 'primeng/dropdown';

@Directive({
  selector: '[rrDropdownExcludedOptions]',
  providers: [NgModel]
})
export class DropdownExcludedOptionsDirective {
  excludedOptions: string[];

  @Input() skipOnExclusion: string[];

  @Input() set rrDropdownExcludedOptions(options: string[]) {
    this.excludedOptions = options;
  }

  constructor(private dropdown: Dropdown) {}

  @HostListener('onShow')
  onShow(): void {
    this.setDisabledOptions();
  }

  private setDisabledOptions() {
    this.getFlattenDropdownOptions().forEach(option => {
      option.disabled = this.getExcludedOptions()?.includes(option.value);
    });
  }

  private getFlattenDropdownOptions(): DropdownModel[] {
    return this.dropdown.group ? flatten(compact(this.dropdown.options.map(group => group.items))) : this.dropdown.options;
  }

  private getExcludedOptions(): string[] {
    if (this.skipOnExclusion && this.skipOnExclusion.length !== 0) {
      return difference(this.excludedOptions, this.skipOnExclusion);
    } else {
      return this.excludedOptions;
    }
  }
}
