import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { DifferentialDiagnosisTypeEnum, TrachealDisplacementTypeEnum } from '@enums/neckMRT/soft-tissues/mass-inflammation';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() diffDiagnosisOptions1Options: DropdownModel[];
  @Input() diffDiagnosisOptions2Options: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;
  trachealDisplacementType: typeof TrachealDisplacementTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
    this.trachealDisplacementType = TrachealDisplacementTypeEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.softTissues.fileUpload;
  }

  resetDifferentialDiagnosis1DependentModel(): void {
    this.model.isSuspicionOf = false;
    this.resetDifferentialDiagnosis2DependentModel();
  }

  resetDifferentialDiagnosis2DependentModel(): void {
    this.model.isSubordinate = false;
  }
}
