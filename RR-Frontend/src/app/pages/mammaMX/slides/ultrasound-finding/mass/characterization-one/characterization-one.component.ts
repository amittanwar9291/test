import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  EchoContentTypeEnum,
  EchoPatternTypeEnum,
  ExitEchoDorsalSoundPatternsTypeEnum,
  FormTypeEnum,
  HistologicallySecuredTypeEnum,
  MarginEchoDelimitationTypeEnum,
  OrientationTypeEnum,
  DeformabilityCompressionTypeEnum,
  MovabilityTypeEnum
} from '@enums/mammaMX/ultrasound-finding';

import { CharacterizationBaseComponent } from '../characterization-base.component';

@Component({
  selector: 'rr-characterization-one-mass',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CharacterizationOneComponent extends CharacterizationBaseComponent {
  descriptionType = DescriptionTypeEnum;
  histologicallySecuredType = HistologicallySecuredTypeEnum;
  formType = FormTypeEnum;
  orientationType = OrientationTypeEnum;
  marginEchoDelimitationType = MarginEchoDelimitationTypeEnum;
  echoPatternType = EchoPatternTypeEnum;
  echoContentType = EchoContentTypeEnum;
  exitEchoDorsalSoundPatternsType = ExitEchoDorsalSoundPatternsTypeEnum;

  clearPresetsDependentProperties(): void {
    this.model.orientationType = OrientationTypeEnum.None;
    this.model.isIndistinct = false;
    this.model.isAngularMargins = false;
    this.model.isMicrolobulated = false;
    this.model.isSpiculated = false;
    this.model.echoPatternType = EchoPatternTypeEnum.None;
    this.model.deformabilityCompressionType = DeformabilityCompressionTypeEnum.None;
    this.model.movabilityType = MovabilityTypeEnum.None;
  }
}
