import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

@Component({
  selector: 'rr-trauma-subchondral-fracture',
  templateUrl: './trauma-subchondral-fracture.component.html',
  styleUrls: ['./../osteochondral-interface.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class TraumaSubchondralFractureComponent {
  @Input() model: OsteochondralInterfaceFindingUiModel;
}
