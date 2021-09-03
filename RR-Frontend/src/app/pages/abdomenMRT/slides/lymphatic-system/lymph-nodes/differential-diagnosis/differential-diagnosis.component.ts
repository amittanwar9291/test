import { Component, Input } from '@angular/core';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AppConfig } from 'app/app.config';
import { LymphaticSystemDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/lymphatic-system/lymph-nodes';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: LymphaticSystemFindingUiModel;
  @Input() W085: DropdownGroupedModel[];

  lymphaticSystemDifferentialDiagnosisType = LymphaticSystemDifferentialDiagnosisTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.lymphaticSystem.fileUpload;
  }
}
