import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { HomogeneityTypeEnum } from '@enums/pelvisMRT/male-sex/homogeneity-type.enum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/male-sex/margin-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/male-sex/form-type.enum';
import { ScrotumMassInternalChangeLocalizationTypeEnum } from '@enums/pelvisMRT/male-sex/scrotum-mass-internal-change-localization-type.enum';
import { DifferentialDiagnosisScrotumMassTypeEnum } from '@enums/pelvisMRT/male-sex/differential-diagnosis-scrotum-mass-type.enum';
@Component({
  selector: 'rr-main-features-scrotum',
  templateUrl: './main-features-scrotum.component.html',
  styleUrls: ['./main-features-scrotum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MainFeaturesScrotumComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() scrotumDifferentialDiagnosisType: DropdownModel[];
  homogeneityType = HomogeneityTypeEnum;
  directionType = DirectionTypeEnum;
  marginType = MarginTypeEnum;
  formType = FormTypeEnum;
  scrotumMassInternalChangeLocalizationType = ScrotumMassInternalChangeLocalizationTypeEnum;
  differentialDiagnosisScrotumMassType = DifferentialDiagnosisScrotumMassTypeEnum;

  resetDifferentialDiagnosis() {
    this.model.isSpermaticCordLipoma01 = false;
    this.model.isScrotalPearl01 = false;
    this.model.isSpermaticCordLipoma02 = false;
    this.model.isScrotalPearl02 = false;
    this.model.isSubordinate = false;
  }
}
