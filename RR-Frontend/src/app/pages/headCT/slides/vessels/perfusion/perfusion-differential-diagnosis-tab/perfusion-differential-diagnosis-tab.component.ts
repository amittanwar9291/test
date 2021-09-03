import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';

@Component({
  selector: 'rr-perfusion-differential-diagnosis-tab',
  templateUrl: './perfusion-differential-diagnosis-tab.component.html',
  styleUrls: ['./perfusion-differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PerfusionDifferentialDiagnosisTabComponent {
  @Input() model: VesselsFindingUiModel;
}
