import { Component, Input } from '@angular/core';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { LevelOfTheObstructionTypeEnum, PortalVeinThrombosisTypeEnum } from '@enums/angiographyCT/abdomen';
import { nameof } from 'ts-simple-nameof';
@Component({
  selector: 'rr-liver-veins',
  templateUrl: './liver-veins.component.html',
  styleUrls: ['./liver-veins.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LiverVeinsComponent {
  @Input() model: AbdomenFindingUiModel;

  portalVeinThrombosisType = PortalVeinThrombosisTypeEnum;
  levelOfTheObstructionType = LevelOfTheObstructionTypeEnum;

  patologyValidation = [
    nameof<AbdomenFindingUiModel>(m => m.isSignsOfPortalHypertension),
    nameof<AbdomenFindingUiModel>(m => m.isPortalVeinThrombosis),
    nameof<AbdomenFindingUiModel>(m => m.isObstructionHepatovenousOutflow),
    nameof<AbdomenFindingUiModel>(m => m.isCollaterals)
  ].join(' ');
}
