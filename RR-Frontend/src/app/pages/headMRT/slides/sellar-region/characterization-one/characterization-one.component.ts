import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';
import { ShapeTypeEnum } from '@enums/headMRT/sellar-region/shape-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: SellarRegionFindingUiModel;
  @Input() isDWIInAnySequence: boolean;

  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  signalVoidTypeEnum = SignalVoidTypeEnum;
}
