import { Component, OnDestroy, Input, EventEmitter, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NgModelAccessorBase, MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

/*
  Component usage:

  <rr-calendar-input
    name="calendar-input-name"
    [(ngModel)]="selectedValue"
    ngDefaultControl>
  </rr-calendar-input>
*/
@Component({
  selector: 'rr-calendar-input',
  templateUrl: './calendar-input.component.html',
  styleUrls: ['./calendar-input.component.scss'],
  providers: [MakeProvider(CalendarInputComponent)]
})
export class CalendarInputComponent extends NgModelAccessorBase<Date> implements OnDestroy {
  @Input() placeholderData?: string;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() dateFormat = 'dd.mm.yy';
  subscriptions: Subscription[] = [];
  announceSelection = new EventEmitter();

  @Input() set clear(v: boolean) {
    if (v) {
      this.ngValue = null;
    }
  }

  public localeData: any = {
    firstDayOfWeek: 1,
    dayNames: [],
    dayNamesShort: [],
    dayNamesMin: [],
    monthNames: [],
    monthNamesShort: [],
    today: '',
    clear: ''
  };

  constructor(public translate: TranslateService) {
    super();
    const self = this;

    this.subscriptions.push(
      translate.stream('controls.calendar.dayNames').subscribe((out: string[]) => {
        self.localeData.dayNamesMin = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      translate.stream('controls.calendar.monthNames').subscribe((out: string[]) => {
        self.localeData.monthNames = Object.keys(out).map(e => out[e]);
      })
    );

    if (!this.placeholderData) {
      this.subscriptions.push(
        translate.stream('controls.calendar.placeholder').subscribe((out: string) => {
          self.placeholderData = out;
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  changeState() {
    this.writeValue(this.ngValue);
    this.announceSelection.emit();
  }

  getCurrentYearPlus10(): number {
    return new Date().getFullYear() + 10;
  }

  get yearRange(): string {
    return `${this.minDate ? this.minDate.getFullYear() : 1900}:${this.maxDate ? this.maxDate.getFullYear() : this.getCurrentYearPlus10()}`;
  }
}
