import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  localizationTabMandatoryElements = [
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.massDifferentialDiagnosisIKnow1Type),
    [
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isLateralVentricle),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenMonroi),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIIIVentricle),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isAquaeductusMesencephaliSylvii),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIVVentricle),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenLuschkae),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenMagendie),
      nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isSubarachnoidCisterns)
    ].join(' ')
  ];
}
