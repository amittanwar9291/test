import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-peripheral-zone',
  templateUrl: './peripheral-zone.component.html',
  styleUrls: ['./peripheral-zone.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PeripheralZoneComponent {
  @Input() model: ProstateFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() w026DifferentialDiagnosisType: DropdownModel[];
  @Output() openLargeLocaliser = new EventEmitter();

  openLargeLocaliserFn() {
    this.openLargeLocaliser.emit('Peripheral');
  }
}
