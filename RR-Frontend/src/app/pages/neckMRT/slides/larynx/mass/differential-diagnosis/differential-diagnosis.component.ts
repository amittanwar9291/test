import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { AppConfig } from 'app/app.config';
import { DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/larynx';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: LarynxFindingUiModel;
  @Input() diffDiagnosisFullOptions: DropdownModel[];
  @Input() diffDiagnosisRestrictedOptions: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.larynx.fileUpload;
  }
}
