import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { PatternTypeEnum } from '@enums/pelvisMRT/prostate/pattern-type.enum';

@Component({
  selector: 'rr-residual-hemorrhage',
  templateUrl: './residual-hemorrhage.component.html',
  styleUrls: ['./residual-hemorrhage.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ResidualHemorrhageComponent {
  @Input() model: ProstateFindingUiModel;
  @Output() openLargeLocaliser = new EventEmitter();

  patternType: typeof PatternTypeEnum;

  constructor() {
    this.patternType = PatternTypeEnum;
  }

  openLargeLocaliserFn() {
    this.openLargeLocaliser.emit('All');
  }
}
