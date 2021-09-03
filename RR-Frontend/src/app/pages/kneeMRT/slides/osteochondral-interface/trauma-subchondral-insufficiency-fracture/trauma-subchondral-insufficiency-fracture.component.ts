import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

@Component({
  selector: 'rr-trauma-subchondral-insufficiency-fracture',
  templateUrl: './trauma-subchondral-insufficiency-fracture.component.html',
  styleUrls: ['./../osteochondral-interface.component.scss', './trauma-subchondral-insufficiency-fracture.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class TraumaSubchondralInsufficiencyFractureComponent {
  @Input() model: OsteochondralInterfaceFindingUiModel;
}
