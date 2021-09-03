import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { FisherScaleTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/fisher-scale-type.enum';

@Component({
  selector: 'rr-subarachnoid-hemorrhage-characterization-tab',
  templateUrl: './subarachnoid-hemorrhage-characterization-tab.component.html',
  styleUrls: ['./subarachnoid-hemorrhage-characterization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubarachnoidHemorrhageCharacterizationTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  fisherScaleTypeEnum = FisherScaleTypeEnum;

  resetSecondAndThirdPlane(): void {
    if (!this.model.size) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }
}
