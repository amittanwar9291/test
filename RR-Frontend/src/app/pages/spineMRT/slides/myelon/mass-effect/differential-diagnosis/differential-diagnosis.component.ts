import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { SpinalCanalDifferentialDiagnosisTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-differential-diagnosis-type.enum';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: MyelonFindingUIModel;
  @Input('diagnosisOptions1') set setDiagnosisOptions1(value: DropdownGroupedModel[]) {
    this.diagnosisOptions1 = value;
    this.differentialDiagnosis1WithoutEpendymoma = value ? this.removeEpendymomaMyxopapillaryOption(value) : null;
  }
  @Input('diagnosisOptions2') set setDiagnosisOptions2(value: DropdownGroupedModel[]) {
    this.diagnosisOptions2 = value;
    this.differentialDiagnosis2WithoutEpendymoma = value ? this.removeEpendymomaMyxopapillaryOption(value) : null;
  }

  descriptionTypeEnum = DescriptionTypeEnum;
  spinalCanalDifferentialDiagnosisTypeEnum = SpinalCanalDifferentialDiagnosisTypeEnum;

  diagnosisOptions1: DropdownGroupedModel[];
  diagnosisOptions2: DropdownGroupedModel[];
  differentialDiagnosis1WithoutEpendymoma: DropdownGroupedModel[];
  differentialDiagnosis2WithoutEpendymoma: DropdownGroupedModel[];

  clearSubordinated() {
    this.model.isSecondary = false;
  }

  getDiagnosisOptions(set: 1 | 2): DropdownGroupedModel[] {
    if (this.model.spinalCanalLocation.intramedullary && !this.isLWSSelected()) {
      return set === 1 ? this.differentialDiagnosis1WithoutEpendymoma : this.differentialDiagnosis2WithoutEpendymoma;
    }
    return set === 1 ? this.diagnosisOptions1 : this.diagnosisOptions2;
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
