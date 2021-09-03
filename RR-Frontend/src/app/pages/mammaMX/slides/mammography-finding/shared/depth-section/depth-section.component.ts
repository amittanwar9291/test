import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { DepthType } from '@enums/mammaMX/mammography-finding/';

@Component({
  selector: 'rr-depth-section',
  templateUrl: './depth-section.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DepthSectionComponent {
  @Input() model: MammographyFindingFindingUiModel;
  @Input() isNumberInputInAnotherColumn: boolean;

  depthType: typeof DepthType;

  constructor() {
    this.depthType = DepthType;
  }
}
