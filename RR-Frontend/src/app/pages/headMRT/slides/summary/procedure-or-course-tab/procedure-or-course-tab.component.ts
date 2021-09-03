import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CourseTypeEnum } from '@enums/headMRT/summary/course-type.enum';
import { PeriodTypeEnum } from '@enums/headMRT/summary/period-type.enum';
import { RegressiveTypeEnum } from '@enums/headMRT/summary/regressive-type.enum';
import { SummaryUiModel } from '@models/headMRT/ui/summary/summary-ui.model';

@Component({
  selector: 'rr-procedure-or-course-tab',
  templateUrl: './procedure-or-course-tab.component.html',
  styleUrls: ['./procedure-or-course-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProcedureOrCourseTabComponent {
  @Input() model: SummaryUiModel;

  periodType = PeriodTypeEnum;
  courseType = CourseTypeEnum;
  regressiveType = RegressiveTypeEnum;
}
