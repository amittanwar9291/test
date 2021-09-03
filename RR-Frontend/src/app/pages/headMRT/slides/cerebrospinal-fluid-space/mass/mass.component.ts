import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { Component, Input, OnInit } from '@angular/core';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { CerebrospinalFluidSpacePresetHttpService } from '@services/headMRT/http/cerebrospinal-fluid-space/cerebrospinal-fluid-space-preset-http.service';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: CerebrospinalFluidSpacePresetHttpService
    }
  ]
})
export class MassComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  localizationValidationGroup =
    'isLateralVentricle isForamenOfMonro isIIIVentricle isAquaeductusMesencephaliSylvii isIVVentricle ' +
    'isForaminaOfLuschka isForamenOfMagendie isSubarachnoidCisterns';
}
