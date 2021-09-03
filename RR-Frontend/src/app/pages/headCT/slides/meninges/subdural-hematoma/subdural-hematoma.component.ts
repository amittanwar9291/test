import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';

@Component({
  selector: 'rr-subdural-hematoma',
  templateUrl: './subdural-hematoma.component.html',
  styleUrls: ['./subdural-hematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubduralHematomaComponent {
  @Input() model: MeningesFindingUiModel;
}
