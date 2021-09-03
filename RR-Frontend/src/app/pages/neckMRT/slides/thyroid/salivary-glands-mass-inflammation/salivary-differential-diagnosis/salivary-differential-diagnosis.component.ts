import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/thyroid';
import { AppConfig } from 'app/app.config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-salivary-differential-diagnosis',
  templateUrl: './salivary-differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryDifferentialDiagnosisComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() salivaryGlandsDDOptions: DropdownModel[];
  @Input() salivaryGlandsDDOptions2: DropdownModel[];

  differentialDiagnosisType1 = DifferentialDiagnosisTypeEnum;
  differentialDiagnosisType2 = DifferentialDiagnosisTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.thyroid.fileUpload;
  }
}
