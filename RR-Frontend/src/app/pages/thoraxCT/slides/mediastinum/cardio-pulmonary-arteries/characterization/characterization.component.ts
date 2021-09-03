import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CurvatureOfInterventricularSeptumTypeEnum, LocalizationWithinVesselTypeEnum } from '@enums/thoraxCT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';
import { LungsModel } from '@models/thoraxCT/ui/thorax/lungs.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-characterization',
  templateUrl: './characterization.component.html',
  styleUrls: ['./characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationComponent {
  @Input() model: MediastinumFindingUiModel;
  @Input() isLargeLocalizerOpened: boolean;

  @Output() emitLocalizer = new EventEmitter();

  localizationWithinVesselTypeEnum = LocalizationWithinVesselTypeEnum;
  curvatureOfInterventricularSeptumTypeEnum = CurvatureOfInterventricularSeptumTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  clearLocalizer() {
    this.model.lungsLocation = new LungsModel();
    this.validationHelperService.removeError('lungsLocation');
  }

  openLargeLocalizer(): void {
    if (!this.isLargeLocalizerOpened) {
      this.isLargeLocalizerOpened = true;
      this.emitLocalizer.emit(this.isLargeLocalizerOpened);
    }
  }
}
