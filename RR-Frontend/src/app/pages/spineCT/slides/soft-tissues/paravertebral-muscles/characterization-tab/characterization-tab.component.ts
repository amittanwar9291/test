import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { MuscularAtrophyTypeEnum } from '@enums/spineCT/soft-tissues/paravertebral-muscles/muscular-atrophy-type.enum';
import { AppConfig } from '../../../../../../app.config';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-characterization-tab',
  templateUrl: './characterization-tab.component.html',
  styleUrls: ['./characterization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTabComponent {
  @Input() model: SoftTissuesFindingUiModel;

  muscularAtrophyTypeEnum = MuscularAtrophyTypeEnum;

  localizationMandatoryCheckboxes = [
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
  ];

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineCT.softTissues.fileUpload;
  }

  isCheckboxesSingleSelect(): boolean {
    return compact(this.localizationMandatoryCheckboxes.map(item => this.model[item])).length === 1;
  }
}
