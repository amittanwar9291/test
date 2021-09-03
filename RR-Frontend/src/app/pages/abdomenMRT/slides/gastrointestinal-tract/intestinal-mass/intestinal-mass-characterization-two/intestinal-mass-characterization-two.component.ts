import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  ContrastEnhancementQuantitativeTypeEnum,
  FormTypeEnum,
  GastrointestinalHomogeneityTypeEnum,
  MarginTypeEnum,
  PerforationTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { HourTypeEnum, IntestinalMassExtensionTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/intestinal-mass';

@Component({
  selector: 'rr-intestinal-mass-characterization-two',
  templateUrl: './intestinal-mass-characterization-two.component.html',
  styleUrls: ['./intestinal-mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntestinalMassCharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: GastrointestinalTractFindingUiModel;

  subscriptions: Subscription[] = [];

  marginType = MarginTypeEnum;
  homogeneityType = GastrointestinalHomogeneityTypeEnum;
  formType = FormTypeEnum;
  cmEnhancementHomogeneityType = GastrointestinalHomogeneityTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  intestinalMassExtensionType = IntestinalMassExtensionTypeEnum;
  perforationType = PerforationTypeEnum;
  fromToTypeOptions: DropdownModel[];
  untilTypeOptions: DropdownModel[];
  hourTypeEnum = HourTypeEnum;

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.gastrointestinal.w078localisationSSL.options').subscribe((out: DropdownModel[]) => {
        this.fromToTypeOptions = Object.values(out);
      }),
      this.translateService.stream('abdomenMRT.gastrointestinal.w078localisationSSL.options').subscribe((out: DropdownModel[]) => {
        this.untilTypeOptions = Object.values(out);
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  resetUntilType() {
    if (this.model.fromToType === HourTypeEnum.None) {
      this.model.untilType = HourTypeEnum.None;
    }
  }
}
