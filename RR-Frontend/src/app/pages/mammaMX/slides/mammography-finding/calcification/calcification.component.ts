import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { DistributionType } from '@enums/mammaMX/mammography-finding/';

@Component({
  selector: 'rr-calcification',
  templateUrl: './calcification.component.html',
  styleUrls: ['./calcification.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CalcificationComponent {
  @Input() model: MammographyFindingFindingUiModel;
  @Input() calcificationFormOptions: DropdownModel[];
  @Input() massKnownDiagnosisOptions: DropdownModel[];

  distributionType: typeof DistributionType;

  constructor() {
    this.distributionType = DistributionType;
  }

  resetIsSuspicionOf(): void {
    this.model.isSuspicionOf = false;
  }
}
