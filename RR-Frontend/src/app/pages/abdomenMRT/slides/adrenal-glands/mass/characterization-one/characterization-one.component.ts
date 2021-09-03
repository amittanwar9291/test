import { Component, Input } from '@angular/core';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { nameof } from 'ts-simple-nameof';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: AdrenalGlandsFindingUiModel;
  @Input() isDWI: boolean;

  localizationType = LocationTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    mainHeaderTranslationKey: 'abdomenMRT.adrenalGlands.extension.value',
    mainHeaderRrId: 'abd_m_080302',
    size: {
      modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.sizeInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.size.value',
      headerRrId: 'abd_m_080303',
      inputRrId: 'abd_m_080304',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_080305',
      min: 1,
      max: 99,
      placeholder: '--'
    },
    secondPlane: {
      modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.secondPlaneInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.2ndPlane.value',
      headerRrId: 'abd_m_080306',
      inputRrId: 'abd_m_080307',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_080308',
      min: 1,
      max: 99,
      placeholder: '--'
    },
    thirdPlane: {
      modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.thirdPlaneInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.3rdPlane.value',
      headerRrId: 'abd_m_080309',
      inputRrId: 'abd_m_080310',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_080311',
      min: 1,
      max: 99,
      placeholder: '--'
    }
  };

  constructor() {}
}
