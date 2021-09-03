import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  CardiovascularPulmonaryDiagnosisTypeEnum,
  ChronicThromboembolicTypeEnum,
  DetailsPulmonaryHypertensionTypeEnum,
  RightHeartStrainTypeEnum
} from '@enums/thoraxCT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiagnosisComponent {
  @Input() model: MediastinumFindingUiModel;

  cardiovascularPulmonaryDiagnosisTypeEnum = CardiovascularPulmonaryDiagnosisTypeEnum;
  rightHeartStrainType = RightHeartStrainTypeEnum;
  detailsPulmonaryHypertensionType = DetailsPulmonaryHypertensionTypeEnum;
  chronicThromboembolicType = ChronicThromboembolicTypeEnum;
}
