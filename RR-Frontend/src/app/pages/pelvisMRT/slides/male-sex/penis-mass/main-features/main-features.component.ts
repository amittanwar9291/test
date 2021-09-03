import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MainFeaturesLocalizationTypeEnum } from '@enums/pelvisMRT/male-sex/main-features-localization-type.enum';
import { UrethraTypeEnum } from '@enums/pelvisMRT/male-sex/urethra-type.enum';
import { DirectionTypeEnum } from '@enums/pelvisMRT/male-sex/direction-type.enum';
import { MarginTypeEnum } from '@enums/pelvisMRT/male-sex/margin-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/male-sex/form-type.enum';
import { HomogeneityTypeEnum } from '@enums/pelvisMRT/male-sex/homogeneity-type.enum';

@Component({
  selector: 'rr-pelvismrt-penis-mass-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MainFeaturesComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() penisDifferentialDiagnosisType: DropdownModel[];

  mainFeaturesLocalizationType: typeof MainFeaturesLocalizationTypeEnum;
  urethraType: typeof UrethraTypeEnum;
  directionCorpusCavernosumType: typeof DirectionTypeEnum;
  marginType: typeof MarginTypeEnum;
  FormType: typeof FormTypeEnum;
  Homogeneity01Type: typeof HomogeneityTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.mainFeaturesLocalizationType = MainFeaturesLocalizationTypeEnum;
    this.urethraType = UrethraTypeEnum;
    this.directionCorpusCavernosumType = DirectionTypeEnum;
    this.marginType = MarginTypeEnum;
    this.FormType = FormTypeEnum;
    this.Homogeneity01Type = HomogeneityTypeEnum;
  }

  // properties returned in this function are cleared and replaced with preset values if differential diagnosis is equal SquamousCellCarcinoma or Urethracarcinoma
  // otherwise they should be left intact (not cleared)
  getAdditionalOmitFields(differentialDiagnosis: string): string[] {
    if (differentialDiagnosis !== 'SquamousCellCarcinoma' && differentialDiagnosis !== 'Urethracarcinoma') {
      return ['mainFeaturesLocalizationType', 'urethraType', 'directionType', 'isAdjacentTo'];
    }
    return [];
  }
}
