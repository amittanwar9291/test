import { Component, Input } from '@angular/core';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-shared-coronary-artery-columns',
  templateUrl: './shared-coronary-artery-columns.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SharedCoronaryArteryColumnsComponent {
  @Input() model: CoronaryArteriesFindingUiModel;
}
