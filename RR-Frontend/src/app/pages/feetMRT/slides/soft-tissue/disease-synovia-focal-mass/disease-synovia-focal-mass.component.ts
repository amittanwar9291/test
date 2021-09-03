import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-disease-synovia-focal-mass',
  templateUrl: './disease-synovia-focal-mass.component.html',
  styleUrls: ['./disease-synovia-focal-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiseaseSynoviaFocalMassComponent {
  @Input() model: SoftTissueFindingUiModel;
}
