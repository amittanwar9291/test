import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';
import { Subscription } from 'rxjs';
import { BrainstemCranialNervesHelperService } from '../../brainstem-cranial-nerves-helper.service';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';

@Component({
  selector: 'rr-characterization-one-brainstem',
  templateUrl: './characterization-one-brainstem.component.html',
  styleUrls: ['./characterization-one-brainstem.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneBrainstemComponent {
  @Input() model: BrainstemCranialNervesFindingUiModel;

  isWeightingTypeDWISubscription: Subscription;
  isWeightingTypeDWI: boolean;

  constructor(private brainstemCranialNervesHelperService: BrainstemCranialNervesHelperService) {
    this.isWeightingTypeDWISubscription = this.brainstemCranialNervesHelperService.isWeightingTypeDWI.subscribe(
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
