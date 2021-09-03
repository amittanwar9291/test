import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { CerebralVeinsPathologyTypeEnum } from '@enums/neckMRT/vessels';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-cerebral-veins',
  templateUrl: './cerebral-veins.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CerebralVeinsComponent {
  @Input() model: VesselsFindingUiModel;

  cerebralVeinsPathologyType = CerebralVeinsPathologyTypeEnum;

  duralSinusValidationGroup = [
    nameof<VesselsFindingUiModel>(m => m.isSuperiorSagittalSinus),
    nameof<VesselsFindingUiModel>(m => m.isInferiorSagittalSinus),
    nameof<VesselsFindingUiModel>(m => m.isVMagnaCerebri),
    nameof<VesselsFindingUiModel>(m => m.isStraightSinus),
    nameof<VesselsFindingUiModel>(m => m.isConfluensOfSinuses),
    nameof<VesselsFindingUiModel>(m => m.isRightTransverseSinus),
    nameof<VesselsFindingUiModel>(m => m.isLeftTransverseSinus),
    nameof<VesselsFindingUiModel>(m => m.isRightSigmoidSinus),
    nameof<VesselsFindingUiModel>(m => m.isLeftSigmoidSinus),
    nameof<VesselsFindingUiModel>(m => m.isRightPetrosalSinus),
    nameof<VesselsFindingUiModel>(m => m.isLeftPetrosalSinus),
    nameof<VesselsFindingUiModel>(m => m.isCavernousSinusRightPart),
    nameof<VesselsFindingUiModel>(m => m.isCavernousSinusLeftPart)
  ].join(' ');
}
