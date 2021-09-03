import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { KidneysDifferentialDiagnosisTypeEnum, MultipleGasInclusionsLocalizationTypeEnum } from '@enums/abdomenMRT/kidneys';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-renal-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['../../kidneys.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];

  descriptionType = DescriptionTypeEnum;
  differentialDiagnosistype = KidneysDifferentialDiagnosisTypeEnum;
  multipleGasInclusionsLocalizationType = MultipleGasInclusionsLocalizationTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    mainHeaderTranslationKey: 'abdomenMRT.kidneys.diameterOfTheKidney.value',
    mainHeaderRrId: 'abd_m_070272',
    size: {
      mandatory: false,
      modelName: nameof<KidneysFindingUiModel>(m => m.craniocaudalDiameterInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.craniocaudalDiameter.value',
      headerRrId: 'abd_m_070273',
      inputRrId: 'abd_m_070274',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070275',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    secondPlane: {
      modelName: nameof<KidneysFindingUiModel>(m => m.diameterKidneySecondPlaneInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.2ndPlane.value',
      headerRrId: 'abd_m_070433',
      inputRrId: 'abd_m_070277',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070278',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    thirdPlane: {
      modelName: nameof<KidneysFindingUiModel>(m => m.diameterKidneyThirdPlaneInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.3rdPlane.value',
      headerRrId: 'abd_m_070279',
      inputRrId: 'abd_m_070280',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070281',
      min: 1,
      max: 999,
      placeholder: '---'
    }
  };
}
