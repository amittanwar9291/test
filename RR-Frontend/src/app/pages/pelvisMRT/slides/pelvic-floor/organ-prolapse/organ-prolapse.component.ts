import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MPLGrading } from '@interfaces/mpl-garding.interface';
import { PCLGrading } from '@interfaces/pcl-garding.interface';

@Component({
  selector: 'rr-organ-prolapse',
  templateUrl: './organ-prolapse.component.html',
  styleUrls: ['./organ-prolapse.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OrganProlapseComponent {
  @Input() model: PelvicFloorFindingUiModel;
  @Input() activeTabIndex: number;
  @Input() MPLGrading: MPLGrading;
  @Input() PCLGrading: PCLGrading;
  @Input() isDynamicOnLocalization: boolean;
  @Output() emitTabChange = new EventEmitter();

  onTabChange(event) {
    this.emitTabChange.emit(event.index);
  }
}
