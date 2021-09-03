import { Component, Input } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MarginTypeEnum } from '@enums/pelvisMRT/male-sex/margin-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/pelvisMRT/male-sex/homogeneity-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/male-sex/form-type.enum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { NodularComponentsTypeEnum } from '@enums/pelvisMRT/male-sex/nodular-components-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-seminal-vesicles-mass-main-features',
  templateUrl: './seminal-vesicles-mass-main-features.component.html',
  styleUrls: ['./seminal-vesicles-mass-main-features.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SeminalVesiclesMassMainFeaturesComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() seminalVesiclesMassDifferentialDiagnosisType: DropdownModel[];

  marginType: typeof MarginTypeEnum;
  cmEnhancementType: typeof CMEnhancementTypeEnum;
  formType: typeof FormTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;
  directionType: typeof DirectionTypeEnum;
  nodularComponentsType: typeof NodularComponentsTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.marginType = MarginTypeEnum;
    this.cmEnhancementType = CMEnhancementTypeEnum;
    this.formType = FormTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
    this.directionType = DirectionTypeEnum;
    this.nodularComponentsType = NodularComponentsTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }

  resetSubordinated() {
    this.model.isSubordinate = false;
  }

  hasTechnologyDwiBeenSelected() {
    if (!this.technologyModel || !this.technologyModel.sequences.length) {
      return false;
    }

    return !this.technologyModel.sequences.some(sequence => {
      return sequence.weightingType === 'DWI';
    });
  }
}
