import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-muscle-lesion',
  templateUrl: './muscle-lesion.component.html',
  styleUrls: ['./muscle-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MuscleLesionComponent {
  @Input() model: SoftTissueFindingUiModel;
}
