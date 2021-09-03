import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';

@Component({
  selector: 'rr-chest-wall',
  templateUrl: './chest-wall.component.html',
  styleUrls: ['./chest-wall.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChestWallComponent {
  @Input() model: PleuraFindingUiModel;
}
