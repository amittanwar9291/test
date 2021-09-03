import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SideType } from '@enums/angiographyMRT/abdomen/common';
import { OrganSizeType } from '@enums/angiographyMRT/abdomen/renal-vein';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';

@Component({
  selector: 'rr-kidney-vein',
  templateUrl: './kidney-vein.component.html',
  styleUrls: ['./kidney-vein.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class KidneyVeinComponent {
  @Input() model: AbdomenFindingUiModel;

  sideType = SideType;
  organSizeType = OrganSizeType;
}
