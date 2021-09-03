import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { ConfigurationLargeLocalizerConfig } from '@models/spineCT/ui/configuration/configuration-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { EvaluationTypeEnum } from '@enums/abdomenMRT/lymphatic-system/lymph-nodes';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: LymphaticSystemFindingUiModel;
  @Input() isCM: boolean;
  @Input() isDWI: boolean;
  @Output() emitLocalizer = new EventEmitter();

  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
  evaluationType = EvaluationTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    isMainHeader: true,
    size: {
      mandatory: false,
      modelName: nameof<LymphaticSystemFindingUiModel>(m => m.sizeInMm),
      headerTranslationKey: 'abdomenMRT.lymphaticSystem.size.value',
      headerRrId: 'abd_m_110305',
      inputRrId: 'abd_m_110307',
      labelTranslationKey: 'abdomenMRT.lymphaticSystem.inMm.value',
      labelRrId: 'abd_m_110306',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    secondPlane: {
      modelName: nameof<LymphaticSystemFindingUiModel>(m => m.secondPlaneInMm),
      headerTranslationKey: 'abdomenMRT.lymphaticSystem.2ndPlane.value',
      headerRrId: 'abd_m_110308',
      inputRrId: 'abd_m_110310',
      labelTranslationKey: 'abdomenMRT.lymphaticSystem.inMm.value',
      labelRrId: 'abd_m_110309',
      min: 1,
      max: 999,
      placeholder: '---'
    },
    thirdPlane: {
      modelName: nameof<LymphaticSystemFindingUiModel>(m => m.thirdPlaneInMm),
      headerTranslationKey: 'abdomenMRT.lymphaticSystem.3rdPlane.value',
      headerRrId: 'abd_m_110311',
      inputRrId: 'abd_m_110313',
      labelTranslationKey: 'abdomenMRT.lymphaticSystem.inMm.value',
      labelRrId: 'abd_m_110312',
      min: 1,
      max: 999,
      placeholder: '---'
    }
  };

  resetLymphNodeBulk() {
    this.model.sizeInMm = null;
    this.model.secondPlaneInMm = null;
    this.model.thirdPlaneInMm = null;
  }

  resetLocalizer() {
    this.model.spineLocation = new SpineLocation();
  }

  openLargeLocalizer() {
    const localizerConfig: ConfigurationLargeLocalizerConfig = new ConfigurationLargeLocalizerConfig(
      this.model.spineLocation,
      SpineLocationLogicTypeEnum.VertebreAndDiscRange,
      SpineSelectionAccessibilityModeEnum.TH1toOsCoccygis,
      'abdomenMRT.lymphaticSystem.craniocaudalExtension.value',
      'abdomenMRT.lymphaticSystem.pleaseSelectTheExaminationArea.value'
    );
    this.emitLocalizer.emit(localizerConfig);
  }
}
