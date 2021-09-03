import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { FormType, MarginType, DensityType } from '@enums/mammaMX/mammography-finding/';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-skin-lesion',
  templateUrl: './skin-lesion.component.html',
  styleUrls: ['./skin-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SkinLesionComponent {
  @Input() model: MammographyFindingFindingUiModel;
  @Input() skinLesionDiagnosis1Options: DropdownModel[];
  @Input() skinLesionDiagnosis2Options: DropdownModel[];

  formType: typeof FormType;
  marginType: typeof MarginType;
  densityType: typeof DensityType;

  constructor() {
    this.formType = FormType;
    this.marginType = MarginType;
    this.densityType = DensityType;
  }

  resetIsSubordinated(): void {
    this.model.isSubordinate = false;
  }

  resetIsSuspicionOf(): void {
    this.model.isSuspicionOf = false;
  }
}
