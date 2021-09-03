import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-no-mass-effect',
  templateUrl: './no-mass-effect.component.html',
  styleUrls: ['./no-mass-effect.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NoMassEffectComponent {
  @Input() model: MyelonFindingUIModel;
  @Input() diffDiagnosisNonSpaceDemandingOptions1: DropdownGroupedModel[];
  @Input() diffDiagnosisNonSpaceDemandingOptions2: DropdownGroupedModel[];
  @Input() isCMReinforcedTypeYes: boolean;
  @Input() activeTabIndex: number;

  @Output() emitLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();
  @Output() activeTabIndexUpdate = new EventEmitter<number>();

  activeTabIndexChange(event: number) {
    this.activeTabIndexUpdate.emit(event);
  }
}
