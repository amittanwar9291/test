import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';

@Component({
  selector: 'rr-ascites',
  templateUrl: './ascites.component.html',
  styleUrls: ['./ascites.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AscitesComponent {
  @Input() model: PleuraFindingUiModel;
}
