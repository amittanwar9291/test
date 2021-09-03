import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ClassificationAccordingToTASCIIDetailsTypeEnum,
  ClassificationAccordingToTASCIISubTypeEnum
} from '@enums/angiographyMRT/pelvis-leg-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';

@Component({
  selector: 'rr-chronic-cruropedal',
  templateUrl: './chronic-cruropedal.component.html',
  styleUrls: ['./chronic-cruropedal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicCruropedalComponent implements OnInit {
  @Input() model: PelvisLegArteriesFindingUiModel;

  locationTypeEnum = LocationTypeEnum;
  classificationAccordingToTASCIISubTypeEnum = ClassificationAccordingToTASCIISubTypeEnum;
  classificationAccordingToTASCIIDetailsTypeEnum = ClassificationAccordingToTASCIIDetailsTypeEnum;

  ngOnInit() {
    this.model.isSingularStenosisLessThan1Cm = true;
  }
}
