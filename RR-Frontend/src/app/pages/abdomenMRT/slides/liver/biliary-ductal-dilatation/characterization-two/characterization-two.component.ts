import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { LiverHelperService } from '../../liver-helper.service';
import { LiverPathologyUiModel } from '@models/abdomenMRT/ui/shared/liver-pathology-ui-model';
@Component({
  selector: 'rr-biliary-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: LiverFindingUiModel;
  @Input() biliaryDuctalDilatationDDOptions: DropdownModel[];
  @Output() emitLocalizer2 = new EventEmitter();
  differentialDiagnosis1 = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum;

  constructor(private validationHelperService: ValidationHelperService, private liverHelperService: LiverHelperService) {}

  resetDD1Dependent(): void {
    this.model.differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }
  openLargeLocalizer2(): void {
    this.emitLocalizer2.emit();
  }
  resetLiverSegmentsLocalizer(): void {
    this.model.liverPathologyLocations2 = new LiverPathologyUiModel();
    this.validationHelperService.removeError(nameof<LiverFindingUiModel>(m => m.liverPathologyLocations2));
  }
}
