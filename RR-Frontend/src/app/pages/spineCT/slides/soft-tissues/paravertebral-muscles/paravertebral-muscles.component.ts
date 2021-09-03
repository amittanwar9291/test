import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-paravertebral-muscles',
  templateUrl: './paravertebral-muscles.component.html',
  styleUrls: ['./paravertebral-muscles.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParavertebralMusclesComponent {
  @Input() model: SoftTissuesFindingUiModel;

  mandatoryCheckboxes = [
    nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusCapitisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isLevatorScapulaeMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisColliMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisCapitisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isSpleniusCapitisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isTrapeziusMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isCervicalSpineAutochthonous),
    nameof<SoftTissuesFindingUiModel>(m => m.isThoracicOrLumbarSpineAutochthonous),
    nameof<SoftTissuesFindingUiModel>(m => m.isIliocostalisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isQuadratusLumborumMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isPsoasMajorMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isMultifidusMuscle)
  ].join(' ');

  tab1MandatoryFields = [
    this.mandatoryCheckboxes,
    nameof<SoftTissuesFindingUiModel>(m => m.longissimusCapitisMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.levatorScapulaeMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.semispinalisColliMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.semispinalisCapitisMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.spleniusCapitisMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.cervicalSpineAutochthonousSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.thoracicOrLumbarSpineAutochthonousSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.iliocostalisMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.longissimusMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.quadratusLumborumMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.psoasMajorMuscleSideType),
    nameof<SoftTissuesFindingUiModel>(m => m.multifidusMuscleSideType)
  ];
}
