import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-cardio-pulmonary-arteries',
  templateUrl: './cardio-pulmonary-arteries.component.html',
  styleUrls: ['./cardio-pulmonary-arteries.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CardioPulmonaryArteriesComponent {
  @Input() model: MediastinumFindingUiModel;
  @Input() isLargeLocalizerOpened: boolean;

  @Output() emitLocalizer = new EventEmitter();

  openLargeLocalizer(isLocalizerOpened: boolean): void {
    this.emitLocalizer.emit(isLocalizerOpened);
  }
}
