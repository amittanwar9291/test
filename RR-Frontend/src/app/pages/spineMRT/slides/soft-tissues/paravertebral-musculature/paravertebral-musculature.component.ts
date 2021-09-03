import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';

@Component({
  selector: 'rr-paravertebral-musculature',
  templateUrl: './paravertebral-musculature.component.html',
  styleUrls: ['./paravertebral-musculature.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParavertebralMusculatureComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() isC0ToC7: boolean;
  @Input() isTH1ToL5: boolean;

  constructor(private spineHelperService: SpineHelperService) {}

  getCharacterization1TabValidatedElements() {
    if (this.isC0ToC7 && !this.isTH1ToL5) {
      return [this.spineHelperService.paravertebralMusclesDynamicValidatedElements.cervicalSpine.join(' ')];
    }
    if (!this.isC0ToC7 && this.isTH1ToL5) {
      return [this.spineHelperService.paravertebralMusclesDynamicValidatedElements.thoracicLumbarSpine.join(' ')];
    }
    if (this.isC0ToC7 && this.isTH1ToL5) {
      return [this.spineHelperService.paravertebralMusclesDynamicValidatedElements.cervicalThoracicLumbarSpine.join(' ')];
    }
  }
}
