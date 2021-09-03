import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { nameof } from 'ts-simple-nameof';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

@Component({
  selector: 'rr-sigma-mass',
  templateUrl: './sigma-mass.component.html',
  styleUrls: ['./sigma-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmaMassComponent {
  @Input() model: RectumFindingUiModel;
  @Input() differential01Options: DropdownModel[];
  @Input() differential02Options: DropdownModel[];
  @Input() localizationModel: LocalizationUiModel;
  @Input() technologyModel: TechnologyUiModel;
}
