import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologicallySecuredType, DepthType, FormType, MarginType, DensityType } from '@enums/mammaMX/mammography-finding/';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent {
  @Input() model: MammographyFindingFindingUiModel;
  @Input() massKnownDiagnosisOptions: DropdownModel[];
  @Input() massDifferentialDiagnosisOptions: DropdownModel[];
  @Input() calcificationInTheLesionOptions: DropdownModel[];

  histologicallySecuredType: typeof HistologicallySecuredType;
  depthType: typeof DepthType;
  formType: typeof FormType;
  marginType: typeof MarginType;
  densityType: typeof DensityType;
  descriptionType: typeof DescriptionTypeEnum;

  constructor() {
    this.histologicallySecuredType = HistologicallySecuredType;
    this.depthType = DepthType;
    this.formType = FormType;
    this.marginType = MarginType;
    this.densityType = DensityType;
    this.descriptionType = DescriptionTypeEnum;
  }

  resetIsSubordinated(): void {
    this.model.isSubordinate = false;
  }

  resetIsSuspicionOf(): void {
    this.model.isSuspicionOf = false;
  }

  resetPresetsDependentProperties(): void {
    this.model.isHistologicallyConfirmed = false;
    this.model.histologicallySecuredType = HistologicallySecuredType.None;
    this.model.depthType = DepthType.None;
    this.model.isSkinRetraction = false;
    this.model.isNippleRetraction = false;
    this.model.isSkinThickening = false;
    this.model.isTrabecularThickening = false;
    this.model.isAxillaryLymphadenopathy = false;
    this.model.isArchitecturalDistorsion = false;
    this.model.isCalcificationInTheLesion = false;
    this.model.calcificationInTheLesionType = 'None';
  }
}
