import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AppConfig } from 'app/app.config';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { PeritonealCavityDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity';

@Component({
  selector: 'rr-retroperitoneal-mass-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() ddW049: DropdownGroupedModel[];
  @Input() ddW050: DropdownGroupedModel[];
  peritonealCavityDifferentialDiagnosisType = PeritonealCavityDifferentialDiagnosisTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.peritonealCavity.fileUpload;
  }

  resetSuspicionOf() {
    this.model.isSuspicionOf = false;
  }

  resetSubordinate() {
    this.model.isSubordinate = false;
  }
}
