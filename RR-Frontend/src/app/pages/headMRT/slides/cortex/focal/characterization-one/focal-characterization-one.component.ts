import { Component, Input } from '@angular/core';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';

@Component({
  selector: 'rr-focal-characterization-one',
  templateUrl: './focal-characterization-one.component.html',
  styleUrls: ['./focal-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalCharacterizationOneComponent {
  @Input() model: CortexFindingUiModel;
  @Input() isDWI: boolean;

  marginEnum = MarginTypeEnum;
  homogeneityEnum = HomogeneityTypeEnum;
  shapeEnum = ShapeTypeEnum;
  signalVoidEnum = SignalVoidTypeEnum;

  resetInput() {
    if (!this.model.size) {
      this.model.size2ndPlane = null;
      this.model.size3rdPlane = null;
    } else if (!this.model.size2ndPlane) {
      this.model.size3rdPlane = null;
    }
  }
}
