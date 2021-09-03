import { Component, Input } from '@angular/core';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { OrganSizeTypeEnum } from '@enums/angiographyCT/abdomen';

@Component({
  selector: 'rr-renal-vein',
  templateUrl: './renal-vein.component.html',
  styleUrls: ['./renal-vein.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RenalVeinComponent {
  @Input() model: AbdomenFindingUiModel;
  sideType = SideTypeEnum;
  organSizeType = OrganSizeTypeEnum;
}
