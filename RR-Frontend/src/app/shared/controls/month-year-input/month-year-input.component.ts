import { Component, Input, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { DropdownNumberModel } from '@models/shared/dropdown/dropdown-number.model';

import { NgModelAccessorBase, MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-month-year-input',
  templateUrl: './month-year-input.component.html',
  styleUrls: ['./month-year-input.component.css'],
  providers: [MakeProvider(MonthYearInputComponent)]
})
export class MonthYearInputComponent extends NgModelAccessorBase<MonthYearModel> implements OnDestroy {
  @Input() nested = false;
  @Input() boldLabel: boolean;
  @Input() label: string;
  @Input() customLabelClass = '';

  @Input() set disabled(val: boolean) {
    this.disabledVal = val;
    if (val) {
      this.ngValue = new MonthYearModel();
      this.writeValue(this.ngValue);
    }
  }

  @Input() labelRrId: string;
  @Input() monthRrId: string;
  @Input() yearRrId: string;

  disabledVal: boolean;
  yearLabel: string;
  monthsArray: DropdownNumberModel[];
  yearsArray: DropdownNumberModel[];

  ngValue: MonthYearModel = new MonthYearModel();
  monthSub: Subscription;
  yearSub: Subscription;

  constructor(translate: TranslateService) {
    super();
    this.monthSub = translate.stream('shared.months').subscribe((out: DropdownNumberModel[]) => {
      this.monthsArray = Object.keys(out).map(e => out[e]);
    });

    this.yearSub = translate.stream('shared.before').subscribe((out: string) => {
      const year = new Date().getFullYear() - 10;
      this.yearLabel = out + ' ' + year;
      this.yearsArray = this.getYears();
    });
  }

  getYears(): DropdownNumberModel[] {
    const years = [];
    let year = new Date().getFullYear();

    for (let i = 0; i <= 10; i++) {
      years.push(new DropdownNumberModel(year.toString(), year));
      year = year - 1;
    }
    years.push(new DropdownNumberModel(this.yearLabel, -1));
    return years;
  }

  changeDate() {
    this.writeValue(this.ngValue);
  }

  ngOnDestroy() {
    if (this.ngValue.year < 1) {
      this.ngValue.month = 0;
    }
    this.monthSub.unsubscribe();
    this.yearSub.unsubscribe();
  }
}
