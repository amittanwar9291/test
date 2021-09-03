import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { AsymmetryType } from '@enums/mammaMX/mammography-finding/';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-asymmetry',
  templateUrl: './asymmetry.component.html',
  styleUrls: ['./asymmetry.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AsymmetryComponent {
  @Input() model: MammographyFindingFindingUiModel;
  @Input() asymmetricDiagnosisOptions: DropdownModel[];

  asymmetryType: typeof AsymmetryType;

  constructor() {
    this.asymmetryType = AsymmetryType;
  }

  resetIsSuspicionOf(): void {
    this.model.isSuspicionOf = false;
  }

  resetIsCalcification(): void {
    this.model.isCalcification = false;
  }
}
