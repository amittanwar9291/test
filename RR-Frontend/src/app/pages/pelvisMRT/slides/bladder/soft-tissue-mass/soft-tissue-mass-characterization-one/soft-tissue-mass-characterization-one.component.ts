import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/bladder';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-soft-tissue-mass-characterization-one',
  templateUrl: './soft-tissue-mass-characterization-one.component.html',
  styleUrls: ['./soft-tissue-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissueMassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: BladderFindingUiModel;
  w036: DropdownGroupedModel[];
  w037: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.bladder.w036.options').subscribe((out: DropdownGroupedModel[]) => (this.w036 = out)),
      this.translate.stream('pelvisMRT.bladder.w037.options').subscribe((out: DropdownGroupedModel[]) => (this.w037 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  clearSubordinate() {
    this.model.isSubordinate = false;
  }
}
