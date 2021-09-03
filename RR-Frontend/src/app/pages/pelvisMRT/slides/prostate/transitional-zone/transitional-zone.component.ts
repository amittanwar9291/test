import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-transitional-zone',
  templateUrl: './transitional-zone.component.html',
  styleUrls: ['./transitional-zone.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TransitionalZoneComponent {
  @Input() model: ProstateFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() w026DifferentialDiagnosisType: DropdownModel[];
  @Output() openLargeLocaliser = new EventEmitter();

  openLargeLocaliserFn() {
    this.openLargeLocaliser.emit('Transitional');
  }
}
