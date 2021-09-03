import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';

@Component({
  selector: 'rr-perfusion',
  templateUrl: './perfusion.component.html',
  styleUrls: ['./perfusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PerfusionComponent {
  @Input() model: VesselsFindingUiModel;
}
