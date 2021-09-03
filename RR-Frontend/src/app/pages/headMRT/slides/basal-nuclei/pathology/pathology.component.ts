import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BasalNucleiPresetHttpService } from '@services/headMRT/http/basal-nuclei/basal-nuclei-preset-http.service';

@Component({
  selector: 'rr-pathology',
  templateUrl: './pathology.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BasalNucleiPresetHttpService
    }
  ]
})
export class PathologyComponent {
  @Input() model: BasalNucleiFindingUiModel;
}
