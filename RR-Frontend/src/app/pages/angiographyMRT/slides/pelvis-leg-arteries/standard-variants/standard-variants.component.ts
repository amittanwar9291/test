import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';

@Component({
  selector: 'rr-standard-variants',
  templateUrl: './standard-variants.component.html',
  styleUrls: ['./standard-variants.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StandardVariantsComponent {
  @Input() model: PelvisLegArteriesFindingUiModel;

  locationTypeEnum = LocationTypeEnum;
}
