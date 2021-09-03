import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SeverityTypeEnum, SideTypeEnum } from '@enums/abdomenMRT/kidneys';

@Component({
  selector: 'rr-obstructive-nephropathy',
  templateUrl: './obstructive-nephropathy.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ObstructiveNephropathyComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() severityTypeOptions: DropdownModel[];
  @Input() associatedCausalFindingsOptions: DropdownModel[];
  @Input() ureterOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;

  sideType = SideTypeEnum;
  severityType = SeverityTypeEnum;

  onSeverityTypeChange(): void {
    this.model.isRenalPelvisDilatation = false;
    this.model.isDilatationOfTheRenalPelvisAndTheRenalCalices = false;
    this.model.isReducedRenalParenchymaThickness = false;
    this.model.isLossOfParenchymaHydronephrosis = false;
    this.model.maxDilatationInMm = null;
  }
}
