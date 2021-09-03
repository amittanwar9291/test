import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MorphologyTypeEnum } from '@enums/angiographyCT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-lymphadenopathy',
  templateUrl: './lymphadenopathy.component.html',
  styleUrls: ['lymphadenopathy.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphadenopathyComponent {
  @Input() model: SoftTissueFindingUiModel;

  morphologyType = MorphologyTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  resetLocalisationError() {
    if (!this.model.isCervical) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isCervicalLeft));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isCervicalRight));
    }

    if (!this.model.isThoracic || !this.model.isMediastinal) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isThoracicMediastinalLeft));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isThoracicMediastinalRight));
    }

    if (!this.model.isThoracic || !this.model.isPerihilar) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isThoracicPerihilarLeft));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isThoracicPerihilarRight));
    }

    if (!this.model.isAxillary) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isAxillaryLeft));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isAxillaryRight));
    }

    if (!this.model.isIliac) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isIliacLeft));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isIliacRight));
    }

    if (!this.model.isInguinal) {
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isInguinalLeft));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isInguinalRight));
    }
  }
}
