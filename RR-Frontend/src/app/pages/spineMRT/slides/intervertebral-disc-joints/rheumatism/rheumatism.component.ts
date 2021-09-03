import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { PathologyTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';

@Component({
  selector: 'rr-rheumatism',
  templateUrl: './rheumatism.component.html',
  styleUrls: ['./rheumatism.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RheumatismComponent {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  pathologyTypesEnum = PathologyTypesEnum;

  shouldBeShown(pathologyType: PathologyTypesEnum | PathologyTypesEnum[]): boolean {
    return pathologyType === this.model.pathologyType || pathologyType.includes(this.model.pathologyType);
  }
}
