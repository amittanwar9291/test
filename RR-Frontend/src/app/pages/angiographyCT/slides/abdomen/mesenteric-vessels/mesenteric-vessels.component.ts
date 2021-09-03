import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AnatomicVariantsOrPathologyTypeEnum,
  ArisesFromCeliacTrunkTypeEnum,
  CharacterizationTypeEnum,
  DirectOriginFromTheAbdominalAortaTypeEnum,
  FurtherVariantsTypeEnum,
  HepatomesentericTrunkTypeEnum,
  IncompleteHepatomesentericTrunkTypeEnum,
  MesentericVesselsDifferentialDiagnosisTypeEnum,
  MesentericVesselsLocalizationTypeEnum
} from '@enums/angiographyCT/abdomen';
import { ShapeTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/shape-type.enum';
import { SeverityTypeEnum } from '@enums/angiographyCT';
import { nameof } from 'ts-simple-nameof';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { omit } from 'lodash';

@Component({
  selector: 'rr-mesenteric-vessels',
  templateUrl: './mesenteric-vessels.component.html',
  styleUrls: ['./mesenteric-vessels.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MesentericVesselsComponent {
  @Input() model: AbdomenFindingUiModel;
  @Input() activeTabIndex: number;
  @Output() activeTabIndexUpdate = new EventEmitter<number>();

  anatomicVariantsOrPathologyType = AnatomicVariantsOrPathologyTypeEnum;
  directOriginFromTheAbdominalAortaType = DirectOriginFromTheAbdominalAortaTypeEnum;
  hepatomesentericTrunkType = HepatomesentericTrunkTypeEnum;
  incompleteHepatomesentericTrunkType = IncompleteHepatomesentericTrunkTypeEnum;
  arisesFromCeliacTrunkType = ArisesFromCeliacTrunkTypeEnum;
  furtherVariantsType = FurtherVariantsTypeEnum;
  mesentericVesselsLocalizationType = MesentericVesselsLocalizationTypeEnum;
  shapeType = ShapeTypeEnum;
  characterizationType = CharacterizationTypeEnum;
  mesentericVesselsDifferentialDiagnosisType = MesentericVesselsDifferentialDiagnosisTypeEnum;
  severityType = SeverityTypeEnum;

  constructor(private toastMessageService: ToastMessageService, private validationHelperService: ValidationHelperService) {}

  localizationIschemicValiadtion = [
    nameof<AbdomenFindingUiModel>(m => m.isDuodenum),
    nameof<AbdomenFindingUiModel>(m => m.isJejunum),
    nameof<AbdomenFindingUiModel>(m => m.isIleum),
    nameof<AbdomenFindingUiModel>(m => m.isCecum),
    nameof<AbdomenFindingUiModel>(m => m.isAscendingColon),
    nameof<AbdomenFindingUiModel>(m => m.isRightColonicFlexure),
    nameof<AbdomenFindingUiModel>(m => m.isTransverseColon),
    nameof<AbdomenFindingUiModel>(m => m.isLeftColonicFlexure),
    nameof<AbdomenFindingUiModel>(m => m.isDescendingColon),
    nameof<AbdomenFindingUiModel>(m => m.isSigmoidColon)
  ].join(' ');

  activeTabIndexChange(event: number) {
    this.activeTabIndexUpdate.emit(event);
  }
  calculate() {
    const A = this.model.diameterNormalPoststenoticSegmentInMm;
    const B = this.model.diameterStenosisInMm;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisAccordingToNASCETInPercentage = baseCalculation;
        this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
      } else {
        this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisAccordingToNASCETInPercentage = null;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    }
  }
  clearMesentricModel(): void {
    const omittedProperties = findingBaseProperties.concat([nameof<AbdomenFindingUiModel>(m => m.anatomicVariantsOrPathologyType)]);
    Object.assign(this.model, omit(new AbdomenFindingUiModel(), omittedProperties));
    this.removeValidationErrors();
  }
  removeValidationErrors(): void {
    this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.mesentericVesselsLocalizationType));
    this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.degreeOfStenosisAccordingToNASCETInPercentage));
    this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.stenosisSeverityType));
    this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.isDuodenum));
  }
}
