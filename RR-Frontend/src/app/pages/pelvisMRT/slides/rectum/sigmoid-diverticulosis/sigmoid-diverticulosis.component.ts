import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';

@Component({
  selector: 'rr-sigmoid-diverticulosis',
  templateUrl: './sigmoid-diverticulosis.component.html',
  styleUrls: ['./sigmoid-diverticulosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmoidDiverticulosisComponent {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() localizationModel: LocalizationUiModel;
}
