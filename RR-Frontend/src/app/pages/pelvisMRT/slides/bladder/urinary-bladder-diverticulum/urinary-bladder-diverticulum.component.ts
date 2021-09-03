import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';

@Component({
  selector: 'rr-urinary-bladder-diverticulum',
  templateUrl: './urinary-bladder-diverticulum.component.html',
  styleUrls: ['./urinary-bladder-diverticulum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UrinaryBladderDiverticulumComponent {
  @Input() model: BladderFindingUiModel;
}
