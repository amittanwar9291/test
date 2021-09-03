import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LevelOfTheObstructionType, PortalVeinThrombosisType } from '@enums/angiographyMRT/abdomen/liver-veins';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';

@Component({
  selector: 'rr-portal-venous-system',
  templateUrl: './portal-venous-system.component.html',
  styleUrls: ['./portal-venous-system.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PortalVenousSystemComponent {
  @Input() model: AbdomenFindingUiModel;

  portalVeinThrombosisType = PortalVeinThrombosisType;
  levelOfTheObstructionType = LevelOfTheObstructionType;
}
