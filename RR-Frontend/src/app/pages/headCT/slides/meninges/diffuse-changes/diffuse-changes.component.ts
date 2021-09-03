import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';

@Component({
  selector: 'rr-diffuse-changes',
  templateUrl: './diffuse-changes.component.html',
  styleUrls: ['./diffuse-changes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseChangesComponent {
  @Input() model: MeningesFindingUiModel;
}
