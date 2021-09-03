import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/pharynx';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: PharynxFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownGroupedModel[];
  @Input() restrictedDiffDiagnosisOptions: DropdownModel[];

  descriptionType = DescriptionTypeEnum;
  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;

  get isDiffDiagnosisAndDiffDiagnosis1None(): boolean {
    return (
      this.model.differentialDiagnosis === DifferentialDiagnosisTypeEnum.None &&
      this.model.differentialDiagnosis1 === DifferentialDiagnosisTypeEnum.None
    );
  }

  get isDescriptionTypeSetToIKnow(): boolean {
    return this.model.descriptionType === DescriptionTypeEnum.IKnow;
  }
}
