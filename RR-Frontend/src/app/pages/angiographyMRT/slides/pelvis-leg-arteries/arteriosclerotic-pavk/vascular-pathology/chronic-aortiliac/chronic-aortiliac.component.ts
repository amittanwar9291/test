import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ClassificationAccordingToTASCIIDetailsTypeEnum,
  ClassificationAccordingToTASCIISubTypeEnum
} from '@enums/angiographyMRT/pelvis-leg-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

@Component({
  selector: 'rr-chronic-aortiliac',
  templateUrl: './chronic-aortiliac.component.html',
  styleUrls: ['./chronic-aortiliac.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicAortiliacComponent {
  @Input() model: PelvisLegArteriesFindingUiModel;

  sideTypeEnum = SideTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  classificationAccordingToTASCIISubTypeEnum = ClassificationAccordingToTASCIISubTypeEnum;
  classificationAccordingToTASCIIDetailsTypeEnum = ClassificationAccordingToTASCIIDetailsTypeEnum;

  isDetailsHeaderActive(): boolean {
    return (
      this.model.classificationAccordingToTASCIISubType !== this.classificationAccordingToTASCIISubTypeEnum.None &&
      this.model.classificationAccordingToTASCIISubType !== this.classificationAccordingToTASCIISubTypeEnum.LerichSyndrome
    );
  }

  clearClassificationDetails(value: ClassificationAccordingToTASCIISubTypeEnum): string {
    return this.model.classificationAccordingToTASCIISubType !== value ? 'fourth-col fifth-col' : '';
  }
}
