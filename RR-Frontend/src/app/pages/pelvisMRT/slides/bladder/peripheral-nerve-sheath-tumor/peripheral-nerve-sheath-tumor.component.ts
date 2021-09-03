import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import {
  TumorLocalizationTypeEnum,
  IntrapelvicLocalizationTypeEnum,
  ExtrapelvicLocalizationTypeEnum,
  AffectedNerveTypeEnum
} from '@enums/pelvisMRT/bladder';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { BladderHelperService } from '../bladder-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-peripheral-nerve-sheath-tumor',
  templateUrl: './peripheral-nerve-sheath-tumor.component.html',
  styleUrls: ['./peripheral-nerve-sheath-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PeripheralNerveSheathTumorComponent implements OnInit, OnDestroy {
  @Input() model: BladderFindingUiModel;
  isCM: boolean;

  tumorLocalizationTypeEnum = TumorLocalizationTypeEnum;
  intrapelvicLocalizationTypeEnum = IntrapelvicLocalizationTypeEnum;
  extrapelvicLocalizationTypeEnum = ExtrapelvicLocalizationTypeEnum;
  affectedNerveTypeEnum = AffectedNerveTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private bladderHelperService: BladderHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.bladderHelperService.isCM.subscribe((value: boolean) => (this.isCM = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
