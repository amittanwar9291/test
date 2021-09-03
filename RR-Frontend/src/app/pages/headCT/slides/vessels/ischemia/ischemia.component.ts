import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-ischemia',
  templateUrl: './ischemia.component.html',
  styleUrls: ['./ischemia.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IschemiaComponent {
  @Input() model: VesselsFindingUiModel;

  localizationTabValidation: string[] = [
    nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType),
    nameof<VesselsFindingUiModel>(m => m.vascularTerritoryLocation),
    nameof<VesselsFindingUiModel>(m => m.vascularTerritoryType),
    [
      nameof<VesselsFindingUiModel>(m => m.isCorticalVeins),
      nameof<VesselsFindingUiModel>(m => m.isInternalCerebralVeins),
      nameof<VesselsFindingUiModel>(m => m.isRightVeinOfLabbe),
      nameof<VesselsFindingUiModel>(m => m.isLeftVeinOfLabbe),
      nameof<VesselsFindingUiModel>(m => m.isRightSphenoparietalSinus),
      nameof<VesselsFindingUiModel>(m => m.isLeftSphenoparietalSinus)
    ].join(' ')
  ];
}
