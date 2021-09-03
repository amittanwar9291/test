import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { DensityTypeEnum, MediastinumCalcificationTypeEnum, MediastinumLimitationTypeEnum } from '@enums/thoraxCT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-main-characteristics',
  templateUrl: './main-characteristics.component.html',
  styleUrls: ['./main-characteristics.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MainCharacteristicsComponent {
  @Input() extendedDiagnosisList: DropdownModel[];
  @Input() model: MediastinumFindingUiModel;

  mediastinumLimitationTypeEnum = MediastinumLimitationTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  densityTypeEnum = DensityTypeEnum;
  mediastinumCalcificationTypeEnum = MediastinumCalcificationTypeEnum;

  clearDropdownCheckbox() {
    this.model.isSubordinated = false;
  }
}
