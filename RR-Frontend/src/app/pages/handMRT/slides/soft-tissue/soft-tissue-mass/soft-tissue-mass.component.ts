import { Component, Input } from '@angular/core';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { HandSimple } from '@models/handMRT/ui/hand/localizers/hand-simple.model';
import { TechnologyUiModel } from '@models/handMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-soft-tissue-mass',
  templateUrl: './soft-tissue-mass.component.html',
  styleUrls: ['./soft-tissue-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissueMassComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() localizerModel: HandSimple;
  @Input() technologyModel: TechnologyUiModel;
  @Input() w018: DropdownModel[];
  @Input() w019: DropdownModel[];
}
