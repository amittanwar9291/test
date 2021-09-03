import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DetailsTypeEnum } from '@enums/headCT/examination/details-type.enum';
import { ExaminationFindingTypeEnum } from '@enums/headCT/examination/examination-finding-type.enum';
import { HeadacheCourseTypeEnum } from '@enums/headCT/examination/headache-course-type.enum';
import { HuntHessScaleTypeEnum } from '@enums/headCT/examination/hunt-hess-scale-type.enum';
import { IndicationSubTypeEnum } from '@enums/headCT/examination/indication-sub-type.enum';
import { ExaminationIndicationUiModel } from '@models/headCT/ui/examination/examination-indication-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Component({
  selector: 'rr-examination-indication',
  templateUrl: './examination-indication.component.html',
  styleUrls: ['./examination-indication.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExaminationIndicationComponent {
  @Input() model: ExaminationIndicationUiModel;
  @Input() dropdownW005: DropdownModel[];

  examinationFindingTypeEnum = ExaminationFindingTypeEnum;
  indicationSubTypeEnum = IndicationSubTypeEnum;
  detailsTypeEnum = DetailsTypeEnum;
  huntHessScaleTypeEnum = HuntHessScaleTypeEnum;
  headacheCourseTypeEnum = HeadacheCourseTypeEnum;

  isFindingType(type: ExaminationFindingTypeEnum): boolean {
    return this.model.findingType === type;
  }

  traumaDetailsDisabled(): boolean {
    return (
      this.model.indicationSubType !== IndicationSubTypeEnum.FollowupExamination &&
      this.model.indicationSubType !== IndicationSubTypeEnum.Chronic
    );
  }

  clearDate() {
    this.model.date = new MonthYearModel();
  }
}
