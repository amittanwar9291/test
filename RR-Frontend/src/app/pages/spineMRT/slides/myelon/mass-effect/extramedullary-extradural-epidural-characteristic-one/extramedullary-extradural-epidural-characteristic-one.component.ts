import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HttpParams } from '@angular/common/http';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { LocalizationInTheSpinalCanalTypeEnum } from '@enums/spineMRT/myelon/localizationIn-the-spinal-canal-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineMRT/myelon/homogeneity-type.enum';
import { MarginTypeEnum } from '@enums/spineMRT/myelon/margin-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-extramedullary-extradural-epidural-characteristic-one',
  templateUrl: './extramedullary-extradural-epidural-characteristic-one.component.html',
  styleUrls: ['./extramedullary-extradural-epidural-characteristic-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExtramedullaryExtraduralEpiduralCharacteristicOneComponent {
  @Input() model: MyelonFindingUIModel;
  @Input() diagnosisOptions: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  localizationInTheSpinalCanalTypeEnum = LocalizationInTheSpinalCanalTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  constructor(private enumMapper: EnumMapper) {}

  clearSubordinated() {
    this.model.isSecondary = false;
  }

  getPresetParams(): HttpParams {
    return new HttpParams().set('spinalCanalLocation', this.enumMapper.mapToString(this.model.spinalCanalLocation));
  }
}
