import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';

@Component({
  selector: 'rr-architectural-distorsion',
  templateUrl: './architectural-distorsion.component.html',
  styleUrls: ['./architectural-distorsion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArchitecturalDistorsionComponent {
  @Input() model: MammographyFindingFindingUiModel;
  @Input() architecturalDistorsionDiagnosis1Options: DropdownModel[];
  @Input() architecturalDistorsionDiagnosis2Options: DropdownModel[];

  resetIsSubordinated(): void {
    this.model.isSubordinate = false;
  }

  resetIsSuspicionOf(): void {
    this.model.isSuspicionOf = false;
  }
}
