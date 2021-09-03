import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-anatomic-variants',
  templateUrl: './anatomic-variants.component.html',
  styleUrls: ['./anatomic-variants.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnatomicVariantsComponent {
  @Input() model: SupraaorticVesselsFindingUiModel;

  validationElements = [
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightP1HypoplasiaOrFTPConfiguration),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightP1Aplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightP1SplittingOrDuplication),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightA1Hypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightA1Aplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightA1SplittingOrDuplication),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomPHypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomPAplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightPICAEndingAV),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAVHypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAVAplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightTripleACA),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomAHypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomAAplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isRightAcomASplittingOrDuplication),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftP1HypoplasiaOrFTPConfiguration),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftP1Aplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftP1SplittingOrDuplication),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftA1Hypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftA1Aplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftA1SplittingOrDuplication),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomPHypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomPAplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftPICAEndingAV),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAVHypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAVAplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftTripleACA),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomAHypoplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomAAplasia),
    nameof<SupraaorticVesselsFindingUiModel>(m => m.isLeftAcomASplittingOrDuplication)
  ];
}
