import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SupraaorticVesselsFindingUi } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { PathologyTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/pathology-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-cerebral-veins',
  templateUrl: './cerebral-veins.component.html',
  styleUrls: ['./cerebral-veins.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CerebralVeinsComponent {
  @Input() model: SupraaorticVesselsFindingUi;
  pathologyTypeEnum = PathologyTypeEnum;
  venousSinusesCerebralVeinsElements = [
    nameof<SupraaorticVesselsFindingUi>(m => m.isSuperiorSagittalSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isInferiorSagittalSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isGreatCerebralVein),
    nameof<SupraaorticVesselsFindingUi>(m => m.isStraightSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isConfluenceOfSinuses),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightTransverseSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftTransverseSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightSigmoidSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftSigmoidSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightPetrosalSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPetrosalSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightCavernousSinus),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftCavernousSinus)
  ];
}
