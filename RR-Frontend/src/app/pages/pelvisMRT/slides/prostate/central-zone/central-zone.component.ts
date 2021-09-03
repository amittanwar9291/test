import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-central-zone',
  templateUrl: './central-zone.component.html',
  styleUrls: ['./central-zone.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CentralZoneComponent {
  @Input() model: ProstateFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Output() openLargeLocaliser = new EventEmitter();

  openLargeLocaliserFn() {
    this.openLargeLocaliser.emit('Central');
  }
}
