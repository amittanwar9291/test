import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { RatingUiModel } from '@models/mammaMRT/ui/rating/rating-ui.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { BiRadsLevel4TypeEnum } from '@enums/mammaMRT/rating';

@Component({
  selector: 'rr-bi-rads',
  templateUrl: './bi-rads.component.html',
  styleUrls: ['./bi-rads.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BiRadsComponent {
  @Input() model: RatingUiModel;

  simpleAnswerType: typeof SimpleAnswerEnum;
  biRadsLevel4Type: typeof BiRadsLevel4TypeEnum;

  constructor() {
    this.simpleAnswerType = SimpleAnswerEnum;
    this.biRadsLevel4Type = BiRadsLevel4TypeEnum;
  }

  clearBiRads4Level(): void {
    if (this.model.rightBiRads !== 4) {
      this.model.rightBiRadsLevel4Type = BiRadsLevel4TypeEnum.None;
    }
    if (this.model.leftBiRads !== 4) {
      this.model.leftBiRadsLevel4Type = BiRadsLevel4TypeEnum.None;
    }
  }
}
