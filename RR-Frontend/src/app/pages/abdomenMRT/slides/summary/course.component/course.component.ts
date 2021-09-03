import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CourseTypeEnum, RemissionDetailsTypeEnum } from '@enums/abdomenMRT/summary';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { SummaryUiModel } from '@models/abdomenMRT/ui/summary/summary-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CourseComponent implements OnInit, OnDestroy {
  @Input() model: SummaryUiModel;
  @Input() gender: GenderTypeEnum;

  subscriptions: Subscription[] = [];

  periodTypeOptions: DropdownModel[];
  courseTypeEnum = CourseTypeEnum;
  remissionDetailsTypeEnum = RemissionDetailsTypeEnum;
  genderTypeEnum = GenderTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.summary.periodDropdown.options').subscribe(out => {
        this.periodTypeOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
