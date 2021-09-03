import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { DifferentialDiagnosisTypesEnum, PathologyTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';

@Component({
  selector: 'rr-tab-differential-diagnosis',
  templateUrl: './tab-differential-diagnosis.component.html',
  styleUrls: ['./tab-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabDifferentialDiagnosisComponent {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  differentialDiagnosisTypesEnum = DifferentialDiagnosisTypesEnum;
  pathologyTypesEnum = PathologyTypesEnum;
}
