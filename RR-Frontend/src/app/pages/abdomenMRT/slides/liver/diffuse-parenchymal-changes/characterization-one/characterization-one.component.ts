import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NodularSurfaceTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';

@Component({
  selector: 'rr-diffuse-characterization-one',
  templateUrl: './characterization-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: LiverFindingUiModel;

  nodularSurfaceType = NodularSurfaceTypeEnum;
}
