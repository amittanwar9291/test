import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';

@Component({
  selector: 'rr-spleen-lymphnodes-hiatushernia',
  templateUrl: './spleen-lymphnodes-hiatushernia.component.html',
  styleUrls: ['./spleen-lymphnodes-hiatushernia.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpleenLymphnodesHiatusherniaComponent {
  @Input() model: PleuraFindingUiModel;
}
