import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { PatternTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/pattern-type.enum';

@Component({
  selector: 'rr-subarachnoid-hemorrhage-localization-tab',
  templateUrl: './subarachnoid-hemorrhage-localization-tab.component.html',
  styleUrls: ['./subarachnoid-hemorrhage-localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubarachnoidHemorrhageLocalizationTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  patternTypeEnum = PatternTypeEnum;
}
