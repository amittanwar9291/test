import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';

@Component({
  selector: 'rr-localization-diffuse-changes',
  templateUrl: './localization-diffuse-changes.component.html',
  styleUrls: ['./localization-diffuse-changes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationDiffuseChangesComponent {
  @Input() model: MeningesFindingUiModel;

  constructor() {}
}
