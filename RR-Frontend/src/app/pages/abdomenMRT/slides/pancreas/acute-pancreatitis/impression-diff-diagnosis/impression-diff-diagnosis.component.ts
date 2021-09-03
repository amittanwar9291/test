import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AcutePancreatitisDiagnosisTypeEnum, AssessmentTypeEnum } from '@enums/abdomenMRT/pancreas/acute-pancreatitis';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-impression-diff-diagnosis',
  templateUrl: './impression-diff-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ImpressionDiffDiagnosisComponent {
  @Input() model: PancreasFindingUiModel;
  @Input() acutePancreatitisOptions: DropdownModel[];

  assessmentType = AssessmentTypeEnum;
  acutePancreatitisDiagnosisType = AcutePancreatitisDiagnosisTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.pancreas.fileUpload;
  }
}
