import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

@Component({
  selector: 'rr-bowel-diverticula',
  templateUrl: './bowel-diverticula.component.html',
  styleUrls: ['./bowel-diverticula.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BowelDiverticulaComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isFemale: boolean;
}
