import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/female-sex/form-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';

@Component({
  selector: 'rr-corpus-uteri-mass-characterization-two',
  templateUrl: './corpus-uteri-mass-characterization-two.component.html',
  styleUrls: ['./corpus-uteri-mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CorpusUteriMassCharacterizationTwoComponent {
  @Input() model: FemaleSexFindingUiModel;

  marginTypeEnum = MarginTypeEnum;
  formTypeEnum = FormTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;

  resetDetails(value): void {
    if (value === 0) {
      this.model.detailsT2wSignalHomogenityType = HomogenityTypeEnum.None;
    }
  }
}
