import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import {
  PatternTypeEnum,
  DiffusionRestrictionTypeEnum,
  DWISignalTypeEnum,
  DiffusionImagingTypeEnum,
  ADCMapTypeEnum,
  FLAIRDWIRatioTypeEnum,
  MRPerfusionTypeEnum
} from '@enums/headMRT/vessels';

@Component({
  selector: 'rr-ischemic-area-one',
  templateUrl: './ischemic-area-one.component.html',
  styleUrls: ['./ischemic-area-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IschemicAreaOneComponent {
  @Input() model: VesselsFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWIInAnySequence: boolean;

  patternTypeEnum = PatternTypeEnum;
  diffusionRestrictionTypeEnum = DiffusionRestrictionTypeEnum;
  dwiSignalTypeEnum = DWISignalTypeEnum;
  diffusionImagingTypeEnum = DiffusionImagingTypeEnum;
  adcMapTypeEnum = ADCMapTypeEnum;
  fLAIRDWIRatioTypeEnum = FLAIRDWIRatioTypeEnum;
  mRPerfusionTypeEnum = MRPerfusionTypeEnum;
}
