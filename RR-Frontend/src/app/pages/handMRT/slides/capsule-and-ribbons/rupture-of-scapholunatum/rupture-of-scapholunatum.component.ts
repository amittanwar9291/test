import { Component, Input } from '@angular/core';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { NgForm, ControlContainer } from '@angular/forms';
import { SlacWristTypeEnum } from '@enums/handMRT/capsule-and-ribbons/slac-wrist-type.enum';
import { LesionOfExtrinsicLigamentsTypeEnum } from '@enums/handMRT/capsule-and-ribbons/lesion-of-extrinsic-ligaments-type.enum';

@Component({
  selector: 'rr-rupture-of-scapholunatum',
  templateUrl: './rupture-of-scapholunatum.component.html',
  styleUrls: ['./rupture-of-scapholunatum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RuptureOfScapholunatumComponent {
  @Input() model: CapsuleAndRibbonsFindingUiModel;

  slacWristType: typeof SlacWristTypeEnum;
  lesionOfExtrinsicLigamentsType: typeof LesionOfExtrinsicLigamentsTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  public initializeEnums() {
    this.slacWristType = SlacWristTypeEnum;
    this.lesionOfExtrinsicLigamentsType = LesionOfExtrinsicLigamentsTypeEnum;
  }
}
