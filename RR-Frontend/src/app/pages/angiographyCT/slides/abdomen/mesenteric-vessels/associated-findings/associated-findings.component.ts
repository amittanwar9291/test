import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-associated-findings',
  templateUrl: './associated-findings.component.html',
  styleUrls: ['./associated-findings.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AssociatedFindingsComponent {
  @Input() model: AbdomenFindingUiModel;
  @Input() localizationIschemicValiadtion;
}
