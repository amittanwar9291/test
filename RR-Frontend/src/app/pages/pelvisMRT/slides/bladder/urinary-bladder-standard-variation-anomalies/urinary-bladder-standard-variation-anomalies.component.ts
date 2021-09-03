import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { Subscription } from 'rxjs';
import { BladderHelperService } from '../bladder-helper.service';

@Component({
  selector: 'rr-urinary-bladder-standard-variation-anomalies',
  templateUrl: './urinary-bladder-standard-variation-anomalies.component.html',
  styleUrls: ['./urinary-bladder-standard-variation-anomalies.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UrinaryBladderStandardVariationAnomaliesComponent implements OnInit, OnDestroy {
  @Input() model: BladderFindingUiModel;
  gender: GenderTypeEnum;

  genderTypeEnum = GenderTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private bladderHelperService: BladderHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.bladderHelperService.gender.subscribe((value: GenderTypeEnum) => (this.gender = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
