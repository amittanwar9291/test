import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { SymmetryTypeEnum } from '@enums/headMRT/facial-skull/symmetry-type.enum';

@Component({
  selector: 'rr-jaw-teeth-localization-one',
  templateUrl: './jaw-teeth-localization-one.component.html',
  styleUrls: ['./jaw-teeth-localization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class JawTeethLocalizationOneComponent {
  @Input() model: FacialSkullFindingUiModel;

  sideTypeEnum = SideTypeEnum;
  symmetryTypeEnum = SymmetryTypeEnum;
}
