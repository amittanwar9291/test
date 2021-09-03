import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AnamnesisIndicationTypeEnum,
  AnastomosisOrganRegionTypeEnum,
  LiverLocalizationTypeEnum,
  OrganRegionTypeEnum
} from '@enums/abdomenMRT/anamnesis';
import { DetailsTypeEnum } from '@enums/abdomenMRT/anamnesis';
import { AnamnesisIndicationUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-indication-ui.model';
import { LiverSegmentsUiModel } from '@models/abdomenMRT/ui/shared/liver-segments-ui-model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-indication-finding',
  templateUrl: './indication-finding.component.html',
  styleUrls: ['../anamnesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IndicationFindingComponent {
  @Input() model: AnamnesisIndicationUiModel;
  @Input() organRegionOptions1: DropdownModel[];
  @Input() organRegionOptions2: DropdownModel[];
  @Input() indicationFindingHeaderLabel: string;
  @Output() emitLocalizer = new EventEmitter();

  subscriptions: Subscription[] = [];

  indicationType = AnamnesisIndicationTypeEnum;
  detailsType = DetailsTypeEnum;
  organRegionType = OrganRegionTypeEnum;
  liverLocalizationType = LiverLocalizationTypeEnum;
  anastomosisOrganRegionType = AnastomosisOrganRegionTypeEnum;

  liverSegmentsValidationBlock = [
    nameof<AnamnesisIndicationUiModel>(m => m.isRightLobeOfLiver),
    nameof<AnamnesisIndicationUiModel>(m => m.isLeftLobeOfLiver),
    nameof<AnamnesisIndicationUiModel>(m => m.isCaudateLobe),
    nameof<AnamnesisIndicationUiModel>(m => m.isQuadrateLobe)
  ].join(' ');

  constructor(private validationHelperService: ValidationHelperService) {}

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }

  clearLiverSegmentsLocalizer(): void {
    this.model.liverSegmentsLocalizationType = new LiverSegmentsUiModel();
  }

  clearValidationErrors(): void {
    this.validationHelperService.removeError(
      nameof<AnamnesisIndicationUiModel>(m => m.isRightLobeOfLiver),
      this.model.validationId
    );
    this.validationHelperService.removeError(
      nameof<AnamnesisIndicationUiModel>(m => m.isLeftLobeOfLiver),
      this.model.validationId
    );
    this.validationHelperService.removeError(
      nameof<AnamnesisIndicationUiModel>(m => m.isCaudateLobe),
      this.model.validationId
    );
    this.validationHelperService.removeError(
      nameof<AnamnesisIndicationUiModel>(m => m.isQuadrateLobe),
      this.model.validationId
    );

    this.validationHelperService.removeError(
      nameof<AnamnesisIndicationUiModel>(m => m.liverSegmentsLocalizationType),
      this.model.validationId
    );
  }

  clearDropdownDependent(): void {
    this.model.liverLocalizationType = LiverLocalizationTypeEnum.None;
    this.model.isRightLobeOfLiver = false;
    this.model.isLeftLobeOfLiver = false;
    this.model.isCaudateLobe = false;
    this.model.isQuadrateLobe = false;
    this.model.isRight = false;
    this.model.isLeft = false;

    this.model.isEsophagus = false;
    this.model.isStomach = false;
    this.model.isDuodenum = false;
    this.model.isJejunum = false;
    this.model.isIleum = false;
    this.model.isColon = false;
    this.model.isSigma = false;
    this.model.isRectum = false;
    this.model.isAnus = false;

    this.clearLiverSegmentsLocalizer();
    this.clearValidationErrors();
  }

  get dropdownHeaderLabel(): string {
    return this.model.indicationType === AnamnesisIndicationTypeEnum.Concrement
      ? this.organRegionOptions2.find(item => item.value === this.model.organRegionType)?.label
      : this.organRegionOptions1.find(item => item.value === this.model.organRegionType)?.label;
  }
}
