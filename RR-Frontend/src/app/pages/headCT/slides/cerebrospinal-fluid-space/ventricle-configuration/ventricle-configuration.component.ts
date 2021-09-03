import { Component, Input } from '@angular/core';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-ventricle-configuration',
  templateUrl: './ventricle-configuration.component.html',
  styleUrls: ['./ventricle-configuration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VentricleConfigurationComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
}
