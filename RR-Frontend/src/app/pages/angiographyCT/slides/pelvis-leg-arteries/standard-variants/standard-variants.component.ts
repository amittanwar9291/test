import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

@Component({
  selector: 'rr-standard-variants',
  templateUrl: './standard-variants.component.html',
  styleUrls: ['./standard-variants.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StandardVariantsComponent {
  @Input() model: PelvisLegArteriesFindingUiModel;

  sideTypeEnum = SideTypeEnum;
}
