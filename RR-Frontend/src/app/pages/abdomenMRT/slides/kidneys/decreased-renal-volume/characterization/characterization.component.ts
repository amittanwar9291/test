import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { KidneysDifferentialDiagnosisTypeEnum, ContrastEnhancementQuantitativeTypeEnum } from '@enums/abdomenMRT/kidneys';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-characterization',
  templateUrl: './characterization.component.html',
  styleUrls: ['../../kidneys.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;

  descriptionType = DescriptionTypeEnum;
  differentialDiagnosistype = KidneysDifferentialDiagnosisTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;

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
      headerRrId: 'abd_m_070276',
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

  get isContrastEnhancementQuantitativeNoORNone(): boolean {
    return (
      this.model.contrastEnhancementRenalParenchymaQuantitative === ContrastEnhancementQuantitativeTypeEnum.No ||
      this.model.contrastEnhancementRenalParenchymaQuantitative === ContrastEnhancementQuantitativeTypeEnum.None
    );
  }
}
