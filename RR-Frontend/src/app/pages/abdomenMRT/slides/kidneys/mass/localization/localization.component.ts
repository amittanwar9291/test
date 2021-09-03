import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  BosniakClassificationTypeEnum,
  HistologyKnownTypeEnum,
  KidneysDifferentialDiagnosisTypeEnum,
  LocalizationTypeEnum,
  SideTypeEnum,
  MarginTypeEnum,
  FormTypeEnum
} from '@enums/abdomenMRT/kidneys';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';
import { nameof } from 'ts-simple-nameof';
import { KidneysPresetHttpService } from '@services/abdomenMRT/http/kidneys/kidneys-preset-http.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['../../kidneys.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: KidneysPresetHttpService
    }
  ]
})
export class LocalizationComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownGroupedModel[];
  @Output() changes = new EventEmitter();

  @Input() isCMReinforced: boolean;

  descriptionType = DescriptionTypeEnum;
  differentialDiagnosistype = KidneysDifferentialDiagnosisTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  sideType = SideTypeEnum;
  localizationType = LocalizationTypeEnum;
  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  formType = FormTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    mainHeaderTranslationKey: 'abdomenMRT.kidneys.extension.value',
    mainHeaderRrId: 'abd_m_070429',
    size: {
      modelName: nameof<KidneysFindingUiModel>(m => m.massChar2ExtensionSizeInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.size.value',
      headerRrId: 'abd_m_070430',
      inputRrId: 'abd_m_070431',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070432',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    secondPlane: {
      modelName: nameof<KidneysFindingUiModel>(m => m.massChar2SecondPlaneInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.2ndPlane.value',
      headerRrId: 'abd_m_070433',
      inputRrId: 'abd_m_070434',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070435',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    thirdPlane: {
      modelName: nameof<KidneysFindingUiModel>(m => m.massChar2ThirdPlaneInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.3rdPlane.value',
      headerRrId: 'abd_m_070436',
      inputRrId: 'abd_m_070437',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070438',
      min: 1,
      max: 999,
      placeholder: '---'
    }
  };

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isSubordinate = false;
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.bosniakClassificationType1 = BosniakClassificationTypeEnum.None;
  }
}
