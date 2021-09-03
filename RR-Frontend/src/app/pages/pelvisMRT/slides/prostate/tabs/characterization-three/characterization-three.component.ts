import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { SideAsymmetryTypeEnum } from '@enums/pelvisMRT/prostate/page-asymmetry-type.enum';
import { SizeTypeEnum } from '@enums/pelvisMRT/prostate/size-type.enum';

@Component({
  selector: 'rr-characterization-three',
  templateUrl: './characterization-three.component.html',
  styleUrls: ['./characterization-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationThreeComponent {
  @Input() model: ProstateFindingUiModel;

  sideAsymmetryType: typeof SideAsymmetryTypeEnum;
  sizeType: typeof SizeTypeEnum;

  constructor() {
    this.sideAsymmetryType = SideAsymmetryTypeEnum;
    this.sizeType = SizeTypeEnum;
  }
}
