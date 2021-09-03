import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-appendicitis',
  templateUrl: './appendicitis.component.html',
  styleUrls: ['./appendicitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AppendicitisComponent {
  @Input() model: RectumFindingUiModel;
  @Input() differentialDiagnosisAppendictisList: DropdownModel[];
  @Input() technologyModel: TechnologyUiModel;

  constructor() {}
}
