import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

@Component({
  selector: 'rr-appendicitis',
  templateUrl: './appendicitis.component.html',
  styleUrls: ['./appendicitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AppendicitisComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isCMReinforced: boolean;
}
