import { HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { HomogeneityTypeEnum } from '@enums/spineMRT/myelon/homogeneity-type.enum';
import { SpinalCanalDifferentialDiagnosisTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-differential-diagnosis-type.enum';
import { LocalizationInTheSpinalCordTypeEnum } from '@enums/spineMRT/myelon/localization-in-the-spinal-cord-type.enum';
import { MarginTypeEnum } from '@enums/spineMRT/myelon/margin-type.enum';

@Component({
  selector: 'rr-intramedullary-characteristic-one',
  templateUrl: './intramedullary-characteristic-one.component.html',
  styleUrls: ['./intramedullary-characteristic-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntramedullaryCharacteristicOneComponent {
  @Input() model: MyelonFindingUIModel;
  @Input('diagnosisOptions') set setDiagnosisOptions(value: DropdownGroupedModel[]) {
    this.diagnosisOptions = value;
    this.differentialDiagnosis1WithoutEpendymoma = value ? this.removeEpendymomaMyxopapillaryOption(value) : null;
  }

  descriptionTypeEnum = DescriptionTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  spinalCanalDifferentialDiagnosisTypeEnum = SpinalCanalDifferentialDiagnosisTypeEnum;
  localizationInTheSpinalCordTypeEnum = LocalizationInTheSpinalCordTypeEnum;
  marginTypeEnum = MarginTypeEnum;

  diagnosisOptions: DropdownGroupedModel[];
  differentialDiagnosis1WithoutEpendymoma: DropdownGroupedModel[];

  constructor(private enumMapper: EnumMapper) {}

  clearSubordinated() {
    this.model.isSecondary = false;
  }

  getPresetParams(): HttpParams {
    return new HttpParams()
      .set('findingType', this.model.findingType)
      .set('spinalCanalLocation', this.enumMapper.mapToString(this.model.spinalCanalLocation));
  }

  getDiagnosisOptions(): DropdownGroupedModel[] {
    if (!this.isLWSSelected()) {
      return this.differentialDiagnosis1WithoutEpendymoma;
    }
    return this.diagnosisOptions;
  }

  isLWSSelected(): boolean {
    const { l1, l2, l3, l4, l5, osSacrum, osCoccygis } = this.model.spineLocation;
    return l1 || l2 || l3 || l4 || l5 || osSacrum || osCoccygis;
  }

  removeEpendymomaMyxopapillaryOption(arr: DropdownGroupedModel[]): DropdownGroupedModel[] {
    return arr.map((grouped: DropdownGroupedModel) => ({
      label: grouped.label,
      items: grouped.items.filter(
        (item: DropdownModel) => item.value !== this.spinalCanalDifferentialDiagnosisTypeEnum.EpendymomaMyxopapillaryType
      )
    }));
  }
}
