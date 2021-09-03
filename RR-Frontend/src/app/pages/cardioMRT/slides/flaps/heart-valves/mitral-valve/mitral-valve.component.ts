import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';
import { RegurgitationVolumeType } from '@enums/cardioMRT/flaps';

@Component({
  selector: 'rr-heart-valves-mitral-valve',
  templateUrl: './mitral-valve.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MitralValveComponent {
  @Input() model: HeartValvesFindingUiModel;

  regurgitationVolumeType: typeof RegurgitationVolumeType;

  constructor() {
    this.regurgitationVolumeType = RegurgitationVolumeType;
  }
}
