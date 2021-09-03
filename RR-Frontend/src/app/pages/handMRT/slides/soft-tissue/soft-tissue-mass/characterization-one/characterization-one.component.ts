import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { LocalizationTypeEnum } from '@enums/handMRT/soft-tissue/localization-type.enum';
import { MarginTypeEnum } from '@enums/handMRT/soft-tissue/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { FormTypeEnum } from '@enums/handMRT/soft-tissue/form-type.enum';
import { HistologyKnownTypeEnum } from '@enums/handMRT/soft-tissue/histology-known-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { SoftTissueDifferentialDiagnosisTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-differential-diagnosis-type.enum';
import { SoftTissueHelperService } from '../../soft-tissue-helper.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() localizerModel: LocationTypeEnum;
  @Input() w018: DropdownModel[];

  localizationType = LocalizationTypeEnum;
  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  formType = FormTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  descriptionType = DescriptionTypeEnum;
  softTissueDifferentialDiagnosisTypeEnum = SoftTissueDifferentialDiagnosisTypeEnum;

  constructor(private softTissueHelperService: SoftTissueHelperService) {}

  openLocalizer() {
    this.softTissueHelperService.handDetailslocalizerConfig.next({
      isSingleselection: true,
      description: 'handMRT.softTissue.descriptionAffectedBones.value'
    });
  }

  resetDependenciesDifferentialDiagnose(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSecondary = false;
  }

  resetNumberInputs(): void {
    if (this.model.size === null) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    } else if (this.model.secondPlane === null) {
      this.model.thirdPlane = null;
    }
  }
}
