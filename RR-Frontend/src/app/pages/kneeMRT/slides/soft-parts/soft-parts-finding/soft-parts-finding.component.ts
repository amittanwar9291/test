import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { SoftPartsFindingTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-soft-parts-finding',
  templateUrl: './soft-parts-finding.component.html',
  styleUrls: ['./soft-parts-finding.component.scss', '../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftPartsFindingComponent {
  @Input() model: SoftPartsFindingUiModel;

  softPartsFindingTypeEnum: typeof SoftPartsFindingTypeEnum;

  constructor() {
    this.softPartsFindingTypeEnum = SoftPartsFindingTypeEnum;
  }
}
