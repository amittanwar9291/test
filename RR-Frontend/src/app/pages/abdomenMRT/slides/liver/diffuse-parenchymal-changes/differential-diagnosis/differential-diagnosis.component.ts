import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/liver';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-diffuse-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: LiverFindingUiModel;
  @Input() diffuseParenchymalChangesDDOptions: DropdownModel[];

  differentialDiagnosis1 = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3 = LiverDifferentialDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;

  resetDD1Dependent(): void {
    this.model.differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.liver.fileUpload;
  }
}
