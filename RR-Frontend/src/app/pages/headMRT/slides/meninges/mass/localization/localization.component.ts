import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HistologyKnownTypeEnum, MeningesMassDiagnosisTypeEnum } from '@enums/headMRT/meninges';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: MeningesFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];

  descriptionType = DescriptionTypeEnum;
  meningesMassDiagnosisType = MeningesMassDiagnosisTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;

  constructor() {}

  resetDifferentialDiagnosisDependantModel1(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
  }
}
