import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-chronic-inflammatory-bowel-disease',
  templateUrl: './chronic-inflammatory-bowel-disease.component.html',
  styleUrls: ['./chronic-inflammatory-bowel-disease.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicInflammatoryBowelDiseaseComponent {
  @Input() model: RectumFindingUiModel;
  @Input() w030differentialDiagnosisList: DropdownModel[];
  @Input() technologyModel: TechnologyUiModel;
}
