import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';

@Component({
  selector: 'rr-diffuse-characterization-one',
  templateUrl: './diffuse-characterization-one.component.html',
  styleUrls: ['./diffuse-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseCharacterizationOneComponent {
  @Input() model: PancreasFindingUiModel;

  homogeneityType = HomogeneityTypeEnum;
}
