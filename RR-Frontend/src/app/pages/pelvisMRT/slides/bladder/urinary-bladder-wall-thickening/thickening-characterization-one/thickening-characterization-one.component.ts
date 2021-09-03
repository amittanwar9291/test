import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThickeningLocalizationTypeEnum, HeterogeneousTypeEnum } from '@enums/pelvisMRT/bladder';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { BladderHelperService } from '../../bladder-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-thickening-characterization-one',
  templateUrl: './thickening-characterization-one.component.html',
  styleUrls: ['./thickening-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThickeningCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: BladderFindingUiModel;
  isCM: boolean;

  thickeningLocalizationTypeEnum = ThickeningLocalizationTypeEnum;
  contrastEnhancementTypeEnum = CMEnhancementTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  heterogeneousTypeEnum = HeterogeneousTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private bladderHelperService: BladderHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.bladderHelperService.isCM.subscribe((value: boolean) => (this.isCM = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
