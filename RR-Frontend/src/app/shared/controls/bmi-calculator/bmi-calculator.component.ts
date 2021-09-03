import { Component, Input, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { BmiCalculatorModel } from '@models/shared/bmi-calculator/bmi-calculator.model';

import { values, round } from 'lodash';

@Component({
  selector: 'rr-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss'],
  providers: [MakeProvider(BmiCalculatorComponent)]
})
export class BmiCalculatorComponent extends NgModelAccessorBase<BmiCalculatorModel> implements OnDestroy {
  @Input() bsaModelProperty = 0;
  @Input() isBSA = false;

  currentDescription = '-';
  descriptions: string[] = [];
  descriptionSub: Subscription;

  constructor(private translate: TranslateService) {
    super();

    this.assignWriteCallback(this.initNgModel);

    this.ngValue = new BmiCalculatorModel();

    this.descriptionSub = translate.stream('shared.bmi').subscribe((out: string[]) => {
      this.descriptions = values(out);
      this.setDescription(this.ngValue.bmiResult);
    });
  }

  changeBMI() {
    this.ngValue.bmiResult = round(+(+this.ngValue.weight / +(+Math.pow(+this.ngValue.height / 100, 2))), 1);
    this.bsaModelProperty = +Math.sqrt((+this.ngValue.height * +this.ngValue.weight) / 3600).toFixed(1);

    if (isNaN(this.ngValue.bmiResult)) {
      this.ngValue.bmiResult = 0;
    }
    if (isNaN(this.bsaModelProperty)) {
      this.bsaModelProperty = 0;
    }

    if (this.ngValue.height < 120) {
      this.ngValue.bmiResult = 0;
      this.bsaModelProperty = 0;
      this.ngValue.height = 0;
    }

    this.setDescription(this.ngValue.bmiResult);
    this.onChange(this.ngValue);
  }

  initNgModel(model: BmiCalculatorModel) {
    this.setDescription(model.bmiResult);
    this.changeBMI();
  }

  setDescription(value: number) {
    if (value < 0.1) {
      this.currentDescription = this.descriptions[0];
    } else if (value >= 0.1 && value < 16) {
      this.currentDescription = this.descriptions[1];
    } else if (value >= 16 && value < 17) {
      this.currentDescription = this.descriptions[2];
    } else if (value >= 17 && value < 18.5) {
      this.currentDescription = this.descriptions[3];
    } else if (value >= 18.5 && value < 25) {
      this.currentDescription = this.descriptions[4];
    } else if (value >= 25 && value < 30) {
      this.currentDescription = this.descriptions[5];
    } else if (value >= 30 && value < 35) {
      this.currentDescription = this.descriptions[6];
    } else if (value >= 35 && value < 40) {
      this.currentDescription = this.descriptions[7];
    } else if (value >= 40) {
      this.currentDescription = this.descriptions[8];
    }
  }

  ngOnDestroy() {
    this.descriptionSub.unsubscribe();
  }
}
