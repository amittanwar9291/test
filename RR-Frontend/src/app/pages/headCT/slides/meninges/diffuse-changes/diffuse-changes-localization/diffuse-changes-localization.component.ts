import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';

@Component({
  selector: 'rr-diffuse-changes-localization',
  templateUrl: './diffuse-changes-localization.component.html',
  styleUrls: ['./diffuse-changes-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseChangesLocalizationComponent {
  @Input() model: MeningesFindingUiModel;
}
