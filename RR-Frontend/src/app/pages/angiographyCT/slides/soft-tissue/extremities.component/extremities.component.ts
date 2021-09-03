import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  CompartmentTypeEnum,
  DignityTypeEnum,
  ExtremitiesTypeEnum,
  ExtremitiesFractureLocalizationTypeEnum,
  ExtremitiesMassLocalizationTypeEnum
} from '@enums/angiographyCT/soft-tissue';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-extremities',
  templateUrl: './extremities.component.html',
  styleUrls: ['extremities.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExtremitiesComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() localizationMassTypeOptions: DropdownModel[];
  @Input() dignityTypeOptions: DropdownModel[];

  findingExtremitiesType = ExtremitiesTypeEnum;
  sideType = SideTypeEnum;
  localizationExtremitiesMassType = ExtremitiesMassLocalizationTypeEnum;
  compartmentType = CompartmentTypeEnum;
  dignityType = DignityTypeEnum;
  localizationExtremitiesFractureType = ExtremitiesFractureLocalizationTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  clearSideType(): void {
    this.model.sideType = this.sideType.None;
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.sideType));
  }

  resetInput() {
    if (!this.model.maxDiameter) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    } else if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }
}
