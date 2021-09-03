import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { Subscription } from 'rxjs';
import { CerebrospinalFluidSpaceHelperService } from '../../cerebrospinal-fluid-space-helper.service';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';

@Component({
  selector: 'rr-subarachnoid-characterization-tab',
  templateUrl: './subarachnoid-characterization-tab.component.html',
  styleUrls: ['./subarachnoid-characterization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubarachnoidCharacterizationTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  isWeightingTypeDWISubscription: Subscription;
  isWeightingTypeDWI: boolean;

  constructor(private cerebrospinalFluidSpaceHelperService: CerebrospinalFluidSpaceHelperService) {
    this.isWeightingTypeDWISubscription = this.cerebrospinalFluidSpaceHelperService.isWeightingTypeDWI.subscribe(
      value => (this.isWeightingTypeDWI = value)
    );
  }

  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  shapeType = ShapeTypeEnum;
  signalVoidType = SignalVoidTypeEnum;

  resetBothPlanes(): void {
    if (!this.model.size) {
      this.model.secondPlane = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }
}
