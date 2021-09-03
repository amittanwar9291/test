import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';
import { ScopeTypeEnum } from '@enums/elbowMRT/musles-and-tendons/scope-type.enum';
import { PathologyTypeEnum } from '@enums/elbowMRT/musles-and-tendons/pathology-type.enum';

@Component({
  selector: 'rr-lesion-triceps-tendon',
  templateUrl: './lesion-triceps-tendon.component.html',
  styleUrls: ['./lesion-triceps-tendon.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LesionTricepsTendonComponent {
  @Input() model: TendonsAndMusclesFindingUiModel;

  pathologyType: typeof PathologyTypeEnum;
  scopeType: typeof ScopeTypeEnum;

  constructor() {
    this.pathologyType = PathologyTypeEnum;
    this.scopeType = ScopeTypeEnum;
  }
}
