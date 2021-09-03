import { Directive, Self, HostListener, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

/**
 * Directive allowing the radiobutton to be unclicked
 * Following example shows a proper use of the directive.
 * @example
 * <p-radioButton rrUnClickRadio name="radioGroupName" [(ngModel)]="model.radioValue"></p-radioButton>
 * <p-radioButton rrUnClickRadio name="radioGroupName" [(ngModel)]="model.radioValue"></p-radioButton>
 */
@Directive({
  selector: '[rrUnClickRadio]'
})
export class UnClickRadioDirective implements OnInit {
  previousModelValue: string;

  currentModelValue: string;

  /*Directive listes to model value by attaching itself to ngModel property */
  @Input() ngModel: string;

  constructor(@Self() public ngControl: NgModel) {}

  ngOnInit() {
    this.previousModelValue = this.ngModel;
    this.currentModelValue = this.ngModel;
  }

  @HostListener('ngModelChange', ['$event']) onModelChange(event): void {
    this.currentModelValue = event;
    this.previousModelValue = this.ngModel;
  }

  @HostListener('onClick') onclick(): void {
    if (this.currentModelValue === this.previousModelValue) {
      this.ngControl.update.emit('None');
    } else {
      this.previousModelValue = this.ngControl.value;
    }
  }
}
