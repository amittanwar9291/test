import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';

@Component({
  selector: 'rr-ventricle-configuration',
  templateUrl: './ventricle-configuration.component.html',
  styleUrls: ['./ventricle-configuration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VentricleConfigurationComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
}
