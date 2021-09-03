import { Component, Input } from '@angular/core';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';

@Component({
  selector: 'rr-diffuse-characterization-one',
  templateUrl: './diffuse-characterization-one.component.html',
  styleUrls: ['./diffuse-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseCharacterizationOneComponent {
  @Input() model: CortexFindingUiModel;
  @Input() isDWI: boolean;

  marginEnum = MarginTypeEnum;
  homogeneityEnum = HomogeneityTypeEnum;
  shapeEnum = ShapeTypeEnum;
  signalVoidEnum = SignalVoidTypeEnum;
}
