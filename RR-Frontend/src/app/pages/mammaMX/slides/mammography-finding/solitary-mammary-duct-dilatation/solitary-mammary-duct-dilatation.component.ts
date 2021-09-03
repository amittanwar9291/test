import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';

@Component({
  selector: 'rr-solitary-mammary-duct-dilatation',
  templateUrl: './solitary-mammary-duct-dilatation.component.html',
  styleUrls: ['./solitary-mammary-duct-dilatation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SolitaryMammaryDuctDilatationComponent {
  @Input() model: MammographyFindingFindingUiModel;
  @Input() solitaryMammaryDuctDilatationDiagnosis1Options: DropdownModel[];
  @Input() solitaryMammaryDuctDilatationDiagnosis2Options: DropdownModel[];

  clearDifferentialDiagnosisBlock(): void {
    this.model.isSuspicionOf = false;
    this.model.solitaryMammaryDiagnosis2Type = 'None';
    this.resetIsSubordinated();
  }

  resetIsSubordinated(): void {
    this.model.isSubordinate = false;
  }
}
