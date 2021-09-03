import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { InfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/infiltration-type.enum';

@Component({
  selector: 'rr-rectal-carcinoma',
  templateUrl: './rectal-carcinoma.component.html',
  styleUrls: ['./rectal-carcinoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RectalCarcinomaComponent {
  @Input() model: RectumFindingUiModel;
  @Input() localizationModel: LocalizationUiModel;
  @Input() localisationDropdownOptions: DropdownModel[];
  infiltrationType = InfiltrationTypeEnum;
}
