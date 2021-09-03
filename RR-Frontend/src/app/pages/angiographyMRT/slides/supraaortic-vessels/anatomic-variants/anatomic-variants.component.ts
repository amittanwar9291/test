import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SupraaorticVesselsFindingUi } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-anatomic-variants',
  templateUrl: './anatomic-variants.component.html',
  styleUrls: ['./anatomic-variants.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnatomicVariantsComponent {
  @Input() model: SupraaorticVesselsFindingUi;

  validationElements = [
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightP1HypoplasiaOrFTPConfiguration),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightP1Aplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightP1FenestrationOrDuplication),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightA1Hypoplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightA1Aplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightA1FenestrationOrDuplication),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightPcomAHypoplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightPcomAAplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightPICATerminationVA),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightVAHypoplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightVAAplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightTriplicatedACA),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightAcomAAplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isRightAcomAFenestrationOrDuplication),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftP1HypoplasiaOrFTPConfiguration),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftP1Aplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftP1FenestrationOrDuplication),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftA1Hypoplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftA1Aplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftA1FenestrationOrDuplication),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPcomAHypoplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPcomAAplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftPICATerminationVA),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftVAHypoplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftVAAplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftTriplicatedACA),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftAcomAAplasia),
    nameof<SupraaorticVesselsFindingUi>(m => m.isLeftAcomAFenestrationOrDuplication)
  ];
}
