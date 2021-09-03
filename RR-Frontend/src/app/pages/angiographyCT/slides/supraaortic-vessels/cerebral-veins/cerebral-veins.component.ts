import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { PathologyTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/pathology-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-cerebral-veins',
  templateUrl: './cerebral-veins.component.html',
  styleUrls: ['./cerebral-veins.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CerebralVeinsComponent {
  @Input() model: SupraaorticVesselsFindingUiModel;
  pathologyTypeEnum = PathologyTypeEnum;
  venousSinusesCerebralVeinsElements = [
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isSuperiorSagittalSinus),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isInferiorSagittalSinus),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isGreatCerebralVein),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isStraightSinus),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isConfluenceOfSinuses),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isTransverseSinus),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isSigmoidSinus),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isSuperiorPetrosalSinus),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isInferiorPetrosalSinus),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isInternalJugularVein),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isCavernousSinus)
  ];
}
