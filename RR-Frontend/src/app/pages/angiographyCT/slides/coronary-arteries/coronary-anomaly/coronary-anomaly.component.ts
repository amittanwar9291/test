import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CoronaryAnomalyTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-anomaly/coronary-anomaly-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { CourseTypeEnum } from '@enums/angiographyCT/coronary-arteries/common/course-type.enum';
import { RightToLeftShuntTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-anomaly/right-to-left-shunt-type.enum';
import { OtherDrainageTypeEnum } from '@enums/angiographyCT/coronary-arteries/coronary-anomaly/other-drainage-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-coronary-anomaly',
  templateUrl: './coronary-anomaly.component.html',
  styleUrls: ['./coronary-anomaly.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CoronaryAnomalyComponent implements OnInit, OnDestroy {
  @Input() model: CoronaryArteriesFindingUiModel;
  subscriptions: Subscription[] = [];
  w010: DropdownGroupedModel[];
  coronaryAnomalyTypeEnum = CoronaryAnomalyTypeEnum;
  courseTypeEnum = CourseTypeEnum;
  rightToLeftShuntTypeEnum = RightToLeftShuntTypeEnum;
  otherDrainageTypeEnum = OtherDrainageTypeEnum;
  noDetails = [
    CoronaryAnomalyTypeEnum.HighTakeOff,
    CoronaryAnomalyTypeEnum.AbsenceOfLcaSeparatedOstiaRivaRcx,
    CoronaryAnomalyTypeEnum.SingularCoronaryArtery,
    CoronaryAnomalyTypeEnum.RcxRivaFromNonCoronarySinus,
    CoronaryAnomalyTypeEnum.CoronaryArcades,
    CoronaryAnomalyTypeEnum.DuplicationOfTheRiva
  ];

  constructor(private translate: TranslateService, private validationHelper: ValidationHelperService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  displayNoDetails() {
    return this.noDetails.includes(this.model.coronaryAnomalyType);
  }

  clearThirdColumn() {
    this.model.isBlandWhiteGarlandSyndrome = false;
    this.model.rcaFromLeftCoronarySinusType = CourseTypeEnum.None;
    this.model.courseRcxType = CourseTypeEnum.None;
    this.model.courseRivaType = CourseTypeEnum.None;
    this.model.lcaFromRightCoronarySinusType = CourseTypeEnum.None;
    this.model.rightToLeftShuntType = RightToLeftShuntTypeEnum.None;
    this.model.otherDrainageType = OtherDrainageTypeEnum.None;
    this.model.isRca = false;
    this.model.isLca = false;
    this.model.isRiva = false;
    this.model.isRcx = false;

    this.validationHelper.removeError(nameof<CoronaryArteriesFindingUiModel>(m => m.isRca));
    this.validationHelper.removeError(nameof<CoronaryArteriesFindingUiModel>(m => m.isRcx));
    this.validationHelper.removeError(nameof<CoronaryArteriesFindingUiModel>(m => m.isLca));
    this.validationHelper.removeError(nameof<CoronaryArteriesFindingUiModel>(m => m.isRiva));
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyCT.coronaryArteries.w010.options').subscribe((out: DropdownGroupedModel[]) => (this.w010 = out))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
