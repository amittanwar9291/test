import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-morphology',
  templateUrl: './morphology.component.html',
  styleUrls: ['./morphology.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MorphologyComponent {
  @Input() model: PelvicFloorFindingUiModel;
  @Input() activeTabIndex: number;
  @Output() emitTabChange = new EventEmitter();

  onTabChange(event) {
    this.emitTabChange.emit(event.index);
  }
}
