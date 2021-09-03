import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';
import { UltrasoundFindingPresetsHttpService } from '@services/mammaMX/http/ultrasound-finding/ultrasound-finding-presets-http.service';

@Component({
  selector: 'rr-mass',
  templateUrl: 'mass.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: UltrasoundFindingPresetsHttpService
    }
  ]
})
export class MassComponent {
  @Input() model: UltrasoundFindingSubfindingUiModel;
}
