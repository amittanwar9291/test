import { Component, Input } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import {
  GastricLocalizationTypeEnum,
  GastrointestinalDifferentialDiagnosisTypeEnum,
  HistologyKnownTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';

import { FluidTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/appendicitis';

@Component({
  selector: 'rr-appendicitis-characterization-one',
  templateUrl: './appendicitis-characterization-one.html',
  styleUrls: ['./appendicitis-characterization-one.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AppendicitisCharacterizationOneComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isCMReinforced: boolean;

  differentialDiagnosisOptions: DropdownModel[];
  subscriptions: Subscription[] = [];
  descriptionType = DescriptionTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  localizationType = GastricLocalizationTypeEnum;
  differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum;

  fluidType = FluidTypeEnum;

  resetInput() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    } else if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
