import { Component, Input } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';

@Component({
  selector: 'rr-endometriosis-characterization-two',
  templateUrl: './endometriosis-characterization-two.component.html',
  styleUrls: ['./endometriosis-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EndometriosisCharacterizationTwoComponent {
  @Input() model: FemaleSexFindingUiModel;

  homogenityTypeEnum = HomogenityTypeEnum;

  resetDetailsSignalBehavior(value: number): void {
    if (value === 0) {
      this.model.detailsT2wSignalHomogenityType = HomogenityTypeEnum.None;
      this.model.isShading = false;
    }
  }
}
