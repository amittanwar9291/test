import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import {
  DeformabilityCompressionTypeEnum,
  EnvironmentalReactionTypeEnum,
  MovabilityTypeEnum,
  VascularDrawingLesionTypeEnum
} from '@enums/mammaMX/ultrasound-finding';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

import { CharacterizationBaseComponent } from '../characterization-base.component';

@Component({
  selector: 'rr-characterization-two-mass',
  templateUrl: './characterization-two.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CharacterizationTwoComponent extends CharacterizationBaseComponent {
  deformabilityCompressionType = DeformabilityCompressionTypeEnum;
  movabilityType = MovabilityTypeEnum;
  vascularDrawingLesionType = VascularDrawingLesionTypeEnum;
  environmentalReactionType = EnvironmentalReactionTypeEnum;
  descriptionType = DescriptionTypeEnum;
}
