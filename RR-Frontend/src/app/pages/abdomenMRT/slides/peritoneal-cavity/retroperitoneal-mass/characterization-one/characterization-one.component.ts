import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';
import { nameof } from 'ts-simple-nameof';
import { MarginTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { FormTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass';
import { ExtensionTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/ascites/extension-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-retroperitoneal-mass-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  homogenityType = HomogeneityTypeEnum;
  marginType = MarginTypeEnum;
  formType = FormTypeEnum;
  signalDropExtension = ExtensionTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    mainHeaderTranslationKey: 'abdomenMRT.adrenalGlands.extension.value',
    mainHeaderRrId: 'abd_m_100347',
    size: {
      mandatory: false,
      modelName: nameof<PeritonealCavityFindingUiModel>(m => m.extensionSizeInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.size.value',
      headerRrId: 'abd_m_100348',
      inputRrId: 'abd_m_100349',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_100350',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    secondPlane: {
      modelName: nameof<PeritonealCavityFindingUiModel>(m => m.secondPlaneInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.2ndPlane.value',
      headerRrId: 'abd_m_100351',
      inputRrId: 'abd_m_100352',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_100353',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    thirdPlane: {
      modelName: nameof<PeritonealCavityFindingUiModel>(m => m.thirdPlaneInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.3rdPlane.value',
      headerRrId: 'abd_m_100354',
      inputRrId: 'abd_m_100355',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_100356',
      min: 1,
      max: 999,
      placeholder: '---'
    }
  };
}
