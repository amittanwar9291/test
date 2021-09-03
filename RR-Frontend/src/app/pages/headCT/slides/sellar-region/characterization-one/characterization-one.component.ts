import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';
import { ShapeTypeEnum } from '@enums/shared/head/shape-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { MarginTypeEnum } from '@enums/shared/head/margin-type.enum';
import { DensityTypeEnum } from '@enums/shared/head/density-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: SellarRegionFindingUiModel;
  shapeType = ShapeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  marginType = MarginTypeEnum;
  densityNonenhancede = DensityTypeEnum;
}
