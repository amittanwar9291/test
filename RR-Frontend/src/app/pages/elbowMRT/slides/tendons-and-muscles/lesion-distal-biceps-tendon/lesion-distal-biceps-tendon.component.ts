import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';
import { ScopeTypeEnum } from '@enums/elbowMRT/musles-and-tendons/scope-type.enum';
import { BicipitalAponeurosisTypeEnum } from '@enums/elbowMRT/musles-and-tendons/bicipital-aponeurosis-type.enum';
import { PathologyTypeEnum } from '@enums/elbowMRT/musles-and-tendons/pathology-type.enum';

@Component({
  selector: 'rr-lesion-distal-biceps-tendon',
  templateUrl: './lesion-distal-biceps-tendon.component.html',
  styleUrls: ['./lesion-distal-biceps-tendon.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LesionDistalBicepsTendonComponent {
  @Input() model: TendonsAndMusclesFindingUiModel;

  pathologyType: typeof PathologyTypeEnum;
  scopeType: typeof ScopeTypeEnum;
  bicipitalAponeurosisTypeEnum: typeof BicipitalAponeurosisTypeEnum;

  constructor() {
    this.pathologyType = PathologyTypeEnum;
    this.scopeType = ScopeTypeEnum;
    this.bicipitalAponeurosisTypeEnum = BicipitalAponeurosisTypeEnum;
  }
}
