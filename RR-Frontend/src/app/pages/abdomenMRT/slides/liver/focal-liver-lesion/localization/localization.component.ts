import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LiverSegmentsUiModel } from '@models/abdomenMRT/ui/shared/liver-segments-ui-model';
import {
  HistologyKnownTypeEnum,
  LiverDifferentialDiagnosisTypeEnum,
  FocalLocalizationTypeEnum,
  MarginTypeEnum,
  LiverHomogeneityTypeEnum,
  FormTypeEnum
} from '@enums/abdomenMRT/liver';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { LiverPresetHttpService } from '@services/abdomenMRT/http/liver/liver-preset-http.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { nameof } from 'ts-simple-nameof';
import { LiverHelperService } from '../../liver-helper.service';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: LiverPresetHttpService
    }
  ]
})
export class LocalizationComponent implements OnInit {
  @Input() model: LiverFindingUiModel;
  @Input() focalLiverLesionDDOptions1: DropdownModel[];

  differentialDiagnosis = LiverDifferentialDiagnosisTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  focalLocalizationType = FocalLocalizationTypeEnum;
  descriptionType = DescriptionTypeEnum;
  marginType = MarginTypeEnum;
  homogeneityType = LiverHomogeneityTypeEnum;
  formType = FormTypeEnum;

  constructor(private validationHelperService: ValidationHelperService, private liverHelperService: LiverHelperService) {}

  lobeValidationGroup = [
    nameof<LiverFindingUiModel>(m => m.isRightLobeOfLiver),
    nameof<LiverFindingUiModel>(m => m.isLeftLobeOfLiver),
    nameof<LiverFindingUiModel>(m => m.isLobusCaudatus),
    nameof<LiverFindingUiModel>(m => m.isLobusQuadratus)
  ].join(' ');

  ngOnInit(): void {
    this.checkIfShouldDisableReferencePicture();
  }

  openLargeLocalizer() {
    this.liverHelperService.isLocalizerOpened.next(true);
  }

  resetLiverSegmentsLocalizer(): void {
    this.model.liverSegmentsLocations = new LiverSegmentsUiModel();
    this.validationHelperService.removeError(nameof<LiverFindingUiModel>(m => m.liverSegmentsLocations));
  }

  resetDD1Dependent(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  resetExtensionInputs(): void {
    this.liverHelperService.resetExtensionInputs(this.model);
  }

  resetLiverSegmentsCheckboxes(): void {
    this.model.isRightLobeOfLiver = false;
    this.model.isLeftLobeOfLiver = false;
    this.model.isLobusCaudatus = false;
    this.model.isLobusQuadratus = false;
  }

  checkIfShouldDisableReferencePicture(): void {
    this.liverHelperService.checkIfShouldDisableReferencePicture(this.model);
  }
}
