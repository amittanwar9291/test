import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';

import {
  ClassificationRegardingJointsTypeEnum,
  PatellaClassificationTypeEnum,
  PatellaDetectionDissekatTypeEnum
} from '@enums/kneeMRT/patella/osteochondrosis-dissecans';

@Component({
  selector: 'rr-osteochondrosis-dissecans',
  templateUrl: './osteochondrosis-dissecans.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteochondrosisDissecansComponent {
  @Input() model: PatellaFindingUiModel;

  patellaClassificationType: typeof PatellaClassificationTypeEnum;
  patellaDetectionDissekatType: typeof PatellaDetectionDissekatTypeEnum;
  classificationRegardingJointsType: typeof ClassificationRegardingJointsTypeEnum;

  constructor() {
    this.patellaClassificationType = PatellaClassificationTypeEnum;
    this.patellaDetectionDissekatType = PatellaDetectionDissekatTypeEnum;
    this.classificationRegardingJointsType = ClassificationRegardingJointsTypeEnum;
  }
}
